import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile_reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {let newVar = updateNewPostTextActionCreator(text);
            dispatch(newVar)},
        addPost: () => {dispatch(addPostActionCreator())}
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;