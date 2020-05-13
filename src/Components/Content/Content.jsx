import React from 'react';
import s from './Content.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

const Content = (props) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer store={props.store} />
    </div>
}
export default Content;