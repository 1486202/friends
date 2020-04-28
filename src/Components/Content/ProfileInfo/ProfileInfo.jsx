import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div className={s.contentimg}>
            <img src='https://www.iphones.ru/wp-content/uploads/2018/07/8b6507b32fa55ae82ba5315510bc0f93-1240x630.jpg'/>
            {/*<img src='https://ic.pics.livejournal.com/krugom_eda/81684038/22701/22701_original.jpg'/>*/}
            {/*<img src='https://www.sok.by/upload/img/Articles/2010/interesnoe/09/Bokaly/bokalo.jpg'/>*/}

        </div>
        <div className={s.ava}>
            ava
        </div>
    </div>
}
export default ProfileInfo;