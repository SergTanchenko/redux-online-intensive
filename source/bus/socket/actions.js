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
    listenPosts: () => (dispatch) => {
        socket.on("create", (event) => {
            const { data: post } = JSON.parse(event);

            dispatch(postActions.createPost(post));
        });
    },
};
