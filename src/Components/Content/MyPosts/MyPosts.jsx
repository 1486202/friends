import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let PostElements = props.posts.map(p => <Post message={p.message} like={p.like}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';

    };

    return <div className={s.MyPosts}>

        <div className={s.MyPosts}>
            <div>
                <p>My posts</p>
            </div>
            <div>
                <textarea ref={newPostElement} autoFocus cols="40" placeholder={'Write your text...'}/>
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