import React from 'react';
import s from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Content = () => {
    return <div>
        <div className={s.contentimg}>
            <img src='https://ic.pics.livejournal.com/krugom_eda/81684038/22701/22701_original.jpg'/>
        </div>
        <div className={s.ava}>
            ava
        </div>
        <MyPosts/>
    </div>
}
export default Content;