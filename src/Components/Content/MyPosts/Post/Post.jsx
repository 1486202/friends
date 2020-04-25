import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return <div className={s.posts}>
        <div className={s.item}>
            <img src='https://sun9-63.userapi.com/c629215/v629215417/32249/XJC2AUxnH1s.jpg?ava=1'/>
            { props.message }
            <div>
                <span>like</span>
                { props.like }
            </div>
        </div>

    </div>

}
export default Post;
