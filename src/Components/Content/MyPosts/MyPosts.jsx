import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi, it\'s my first glass', like: 69},
        {id: 2, message: 'How many glasses of wine can you drink?', like: 169},

    ]
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
            <Post message={postsData[0].message} id={postsData[0].id} like={postsData[0].like}/>
            <Post message={postsData[1].message} id={postsData[1].id} like={postsData[1].like}/>
        </div>
    </div>
}


export default MyPosts;