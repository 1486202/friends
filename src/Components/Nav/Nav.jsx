import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/content" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/first" activeClassName={s.active}>First glass</NavLink>
        </div>
        <div className={s.item2}>
            <NavLink to="/fourth" activeClassName={s.active}>Fourth...</NavLink>
        </div>
    </nav>)
}
export default Nav;