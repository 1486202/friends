import React from 'react';
import s from './Nav.module.css';
const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a href="/content">Profile</a>
        </div>
        <div className={s.item}>
            <a href="/dialogs">Dialogs</a>
        </div>
        <div className={s.item}>
            <a href="/first">First glass</a>
        </div>
        <div className={s.item}>
            <a href="/fourth">Fourth and more</a>
        </div>
    </nav>
}
export default Nav;