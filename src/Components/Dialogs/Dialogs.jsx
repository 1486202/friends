import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.messages}>{props.message}</div>
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Aivaz" id="1"/>
                <DialogItem name="Mother" id="2"/>
                <DialogItem name="Julia" id="3"/>
                <DialogItem name="Lenka" id="4"/>
                <DialogItem name="Luda" id="5"/>
                <DialogItem name="Lena" id="6"/>

            </div>
            <div className={s.message}>
                <Message message="Hi,princess!"/>
                <Message message="How are you?"/>
                <Message message="I want to you."/>
            </div>

        </div>)
}


export default Dialogs;