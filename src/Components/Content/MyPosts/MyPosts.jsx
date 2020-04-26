import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.MyPosts}>
        <div className={s.MyPosts}>
            My posts
            <div>
                <textarea autoFocus cols="40" placeholder={'Write your text...'}/>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
        <div className={s.posts}>
            <Post message="Hi, it's my first glass" like=" 69"/>
            <Post message='How many glasses of wine can you drink?' like=" 169"/>
        </div>
    </div>
}


export default MyPosts;