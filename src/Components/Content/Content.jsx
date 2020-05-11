import React from 'react';
import s from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = (props) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch} newPostText = {props.profilePage.newPostText} />
    </div>
}
export default Content;