import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
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