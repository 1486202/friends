import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {
    return <div className={s.MyPosts}>
        <div className={s.MyPosts}>
            My posts
            <div className={s.newposts}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>
        <Post/>
    </div>

        }


export default MyPosts;