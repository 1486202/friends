import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div className={s.contentimg}>
            <img src='https://ic.pics.livejournal.com/krugom_eda/81684038/22701/22701_original.jpg'/>
            <img src='https://ic.pics.livejournal.com/krugom_eda/81684038/22701/22701_original.jpg'/>
        </div>
        <div className={s.ava}>
            ava
        </div>
    </div>
}
export default ProfileInfo;