import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageElement = state.newDialogText;
    let newMessage = () => {
        props.addMessage();
    }
    let onDialogChange = (e) => {
        let text = e.target.value;
        props.updateNewDialog(text);
    };
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div>
            <div className={s.message}>
                {messagesElements}

            </div>
            </div>
            <div>
                <textarea onChange={onDialogChange} autoFocus cols="40"
                          placeholder={'Add your message...'} value={newMessageElement}/>
                    <button onClick={newMessage}>Add message</button>
            </div>
            </div>

        </div>
    )
}


export default Dialogs;