import React from 'react';
import s from './Nav.module.css';
const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>First glass</a>
        </div>
        <div className={s.item}>
            <a>Second glass</a>
        </div>
        <div className={s.item}>
            <a>Third glass</a>
        </div>
        <div className={s.item}>
            <a>Fourth and more</a>
        </div>
    </nav>
}
export default Nav;