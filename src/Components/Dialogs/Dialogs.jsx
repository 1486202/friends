import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'activeClassName={s.active}>Aivaz</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'activeClassName={s.active}>Mother</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'activeClassName={s.active}>Julia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'activeClassName={s.active}>Lenka</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'activeClassName={s.active}>Luda</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'activeClassName={s.active}>Lena</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi,princess!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I want to you.</div>
            </div>
        </div>)
}


export default Dialogs;