import React from 'react';
import s from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Content = () => {
    return <div className={s.content}>
        <div>
            <img src='https://ic.pics.livejournal.com/krugom_eda/81684038/22701/22701_original.jpg'/>
        </div>
        <div className={s.ava}>
            ava
        </div>
        <MyPosts/>
    </div>
}
export default Content;