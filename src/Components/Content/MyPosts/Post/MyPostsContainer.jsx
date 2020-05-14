import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile_reducer";
import StoreContext from "../../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                let onPostChange = (text) => {
                    let newVar = updateNewPostTextActionCreator(text);
                    store.dispatch(newVar);
                };
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>

            }
            }
        </StoreContext.Consumer>)

};

export default MyPostsContainer;