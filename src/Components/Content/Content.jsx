import React from 'react';
import s from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = () => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts/>
    </div>
}
export default Content;