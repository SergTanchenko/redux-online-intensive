// Core
import React, { Component } from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import { withRouter } from "react-router-dom";

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from "../pages";
import { book } from "./book";
import Private from "./Private";
import Public from "./Public";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get("isAuthenticated"),
    };
};

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
    render () {
        const { isAuthenticated } = this.props;

        return isAuthenticated ? <Private /> : <Public />;
    }
}
