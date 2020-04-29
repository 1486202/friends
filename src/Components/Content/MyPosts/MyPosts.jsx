import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let PostElements = props.posts.map(p => <Post message={p.message} like={p.like}/>);

    return <div className={s.MyPosts}>

        <div className={s.MyPosts}>
            <div>
                <p>My posts</p>
            </div>
            <div>
                <textarea autoFocus cols="40" placeholder={'Write your text...'}/>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>

        <div className={s.posts}>
            {PostElements}
        </div>
    </div>
}


export default MyPosts;