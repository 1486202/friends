import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";



const MyPosts = (props) => {
    let PostElements = props.posts.map(p => <Post message={p.message} like={p.like}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());

    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let newVar = updateNewPostTextActionCreator(text);
        props.dispatch(newVar);
    };

    return <div className={s.MyPosts}>

        <div className={s.MyPosts}>
            <div>
                <p>My posts</p>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} autoFocus cols="40" placeholder={'Write your text...'}
                          value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>

        <div className={s.posts}>
            {PostElements}
        </div>
    </div>
}


export default MyPosts;