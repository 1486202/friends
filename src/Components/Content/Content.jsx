import React from 'react';
import s from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Content = () => {
    return <div className={s.content}>
        <div>
            <img
                src='https://lh3.googleusercontent.com/proxy/eOdOiIU1AE6NuzAcEBg925lzZJd51FQiS6SOtfPkg3zJ5O_IYJjhSdEKQzHIAtJF8v3UYLd_CtCSzFIQaYy9P2yv66ojveqOeLf5ijGhQul9i3w3tDM2tf2VcUaBSRXZRArkbRtf3kxc77BU1um8eNxJZocBUvMQCg'/>
            <img
                src='https://lh3.googleusercontent.com/proxy/eOdOiIU1AE6NuzAcEBg925lzZJd51FQiS6SOtfPkg3zJ5O_IYJjhSdEKQzHIAtJF8v3UYLd_CtCSzFIQaYy9P2yv66ojveqOeLf5ijGhQul9i3w3tDM2tf2VcUaBSRXZRArkbRtf3kxc77BU1um8eNxJZocBUvMQCg'/>
        </div>
        <div className={s.ava}>
            ava
        </div>
        <MyPosts/>
    </div>
}
export default Content;