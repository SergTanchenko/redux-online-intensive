import { socket } from "../../init/socket";
import { uiActions } from "../ui/actions";
import { postActions } from "../posts/actions";

export const socketActions = {
    listenConnection: () => (dispatch) => {
        socket.on("connect", () => {
            dispatch(uiActions.setOnlineState());
        });
        socket.on("disconnect", () => {
            dispatch(uiActions.setOfflineState());
        });
    },
    listenPosts: () => (dispatch, getState) => {
        socket.on("create", (event) => {
            const { data: post } = JSON.parse(event);

            dispatch(postActions.createPost(post));
        });
        socket.on("like", (event) => {
            const {
                data: { userId, postId },
                meta,
            } = JSON.parse(event);

            if (meta.action === "like") {
                const liker = getState()
                    .users.find((user) => user.get("id") === userId)
                    .delete("avatar");

                dispatch(postActions.likePost(liker, postId));
            } else {
                dispatch(postActions.unlikePost(postId));
            }
        });
    },
};
