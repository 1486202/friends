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
    let dialogsData = [
        {id: 1, name: 'Aivaz'},
        {id: 2, name: 'Mother'},
        {id: 3, name: 'Julia'},
        {id: 4, name: 'Lenka'},
        {id: 5, name: 'Luda'},
        {id: 6, name: 'Lena'},
    ]
    let messagesData = [
        {id: 1, message: 'Hi,princess!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I want to you.'},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                {/*<DialogItem name="Mother" id="2"/>*/}
                {/*<DialogItem name="Julia" id="3"/>*/}
                {/*<DialogItem name="Lenka" id="4"/>*/}
                {/*<DialogItem name="Luda" id="5"/>*/}
                {/*<DialogItem name="Lena" id="6"/>*/}

            </div>
            <div className={s.message}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                {/*<Message message="How are you?"/>*/}
                {/*<Message message="I want to you."/>*/}
            </div>

        </div>)
}


export default Dialogs;