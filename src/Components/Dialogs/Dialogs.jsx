import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
};
const Message = (props) => {
    return <div className={s.messages}>{props.message}</div>
};
const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Aivaz'},
        {id: 2, name: 'Mother'},
        {id: 3, name: 'Julia'},
        {id: 4, name: 'Lenka'},
        {id: 5, name: 'Luda'},
        {id: 6, name: 'Lena'},
    ];
    let messages = [
        {id: 1, message: 'Hi,princess!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I want to you.'},
    ];
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {/*<DialogItem name="Lena" id="6"/>*/}
                {dialogsElements}

            </div>
            <div className={s.message}>
                {/*<Message message={messagesData[0].message} id={messagesData[0].id}/>*/}
                {/*<Message message="I want to you."/>*/}
                {messagesElements}
            </div>

        </div>)
}


export default Dialogs;