// Core
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import cx from "classnames";

// Instruments
import Styles from "./styles.m.css";
import { book } from "../../navigation/book";
import { mockedProfile } from "../../instruments/mockedData";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get("isAuthenticated"),
    };
};

@connect(mapStateToProps)
export default class Nav extends Component {
    static defaultProps = {
        // State
        profile:  mockedProfile,
        isOnline: false,

        // Actions
        logoutAsync: () => {},
    };

    _getNav = () => {
        const { isAuthenticated, profile } = this.props;

        return isAuthenticated ? (
            <>
                <div>
                    <NavLink activeClassName = { Styles.active } to = { book.profile }>
                        <img src = { profile.get("avatar") } />
                        {profile.get("firstName")}
                    </NavLink>
                    <NavLink activeClassName = { Styles.active } to = { book.feed }>
                        Wall
                    </NavLink>
                </div>
                <button onClick = { this._logout }>Sign out</button>
            </>
        ) : (
            <>
                <div>
                    <NavLink activeClassName = { Styles.active } to = { book.login }>
                        Sign in
                    </NavLink>
                    <NavLink activeClassName = { Styles.active } to = { book.signUp }>
                        Create account
                    </NavLink>
                </div>
                <button className = { Styles.hidden }>Sign out</button>
            </>
        );
    };

    _logout = () => {
        this.props.logoutAsync();
    };

    render () {
        const { isOnline } = this.props;

        const navigation = this._getNav();
        const statusStyle = cx(Styles.status, {
            [Styles.online]:  isOnline,
            [Styles.offline]: !isOnline,
        });

        return (
            <section className = { Styles.navigation }>
                <div className = { statusStyle }>
                    <div>{isOnline ? "Онлайн" : "Офлайн"}</div>
                    <span />
                </div>
                {navigation}
            </section>
        );
    }
}
