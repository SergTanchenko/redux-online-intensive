// Core
import React, { Component } from "react";
import FlipMove from "react-flip-move";

// Instruments
import Styles from "./styles.m.css";
import { mockedProfile } from "../../instruments/mockedData";

// Components
import { Composer, Catcher, Post } from "../../components";
import { connect } from "react-redux";

import { fetchPostsAsync, createPostAsync } from "../../bus/posts/actions";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            { fetchPostsAsync, createPostAsync },
            dispatch
        ),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class Posts extends Component {
    static defaultProps = {
        profile: mockedProfile,

        // Actions
        actions: {
            // Users
            fetchUsersAsync: () => {},

            // Posts
            fetchPostsAsync: () => {},
            removePostAsync: () => {},
            createPostAsync: () => {},
            likePostAsync:   () => {},
            unlikePostAsync: () => {},
        },
    };

    componentDidMount () {
        const { actions } = this.props;

        actions.fetchPostsAsync();
    }

    render () {
        const { actions, posts, profile } = this.props;

        const postsJSX = posts.map((post) => {
            return (
                <Catcher key = { post.get("id") }>
                    <Post
                        actions = { actions }
                        author = { post.get("author") }
                        comment = { post.get("comment") }
                        created = { post.get("created") }
                        id = { post.get("id") }
                        likes = { post.get("likes") }
                        profile = { profile }
                    />
                </Catcher>
            );
        });

        return (
            <section className = { Styles.posts }>
                <Composer actions = { actions } profile = { profile } />
                <FlipMove>{postsJSX}</FlipMove>
            </section>
        );
    }
}
