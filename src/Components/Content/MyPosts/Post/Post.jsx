import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return <div className={s.posts}>
        <div className={s.item}>
            <img src ='https://sun9-63.userapi.com/c629215/v629215417/32249/XJC2AUxnH1s.jpg?ava=1'/>
            Post 1
            <div>
            <span>like</span>
            </div>
        </div>
        <div className={s.item}>
            <img src ='https://sun9-63.userapi.com/c629215/v629215417/32249/XJC2AUxnH1s.jpg?ava=1'/>
            Post 2
            <div>
                <span>like</span>
            </div>
        </div>
        <div className={s.item}>
            <img src ='https://sun9-63.userapi.com/c629215/v629215417/32249/XJC2AUxnH1s.jpg?ava=1'/>
            Post 3
            <div>
                <span>like</span>
            </div>
        </div>
        <div className={s.item}>
            <img src ='https://sun9-63.userapi.com/c629215/v629215417/32249/XJC2AUxnH1s.jpg?ava=1'/>
            Post 4
            <div>
                <span>like</span>
            </div>
        </div>
    </div>
}
export default Post;
