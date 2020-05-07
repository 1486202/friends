import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);


    let newMessageElement = React.createRef();
    let newMessage = () => {
        props.addMessage();
    }
    let onDialogChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewDialogText(text);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onDialogChange} ref={newMessageElement} autoFocus cols="40"
                          placeholder={'Add your message...'} value={props.state.newDialogText}/>
                <div>
                    <button onClick={newMessage}>Add message</button>
                </div>
            </div>
        </div>)
}


export default Dialogs;