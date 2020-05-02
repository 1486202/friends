import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import First from "../First/First";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);


    let newMessageElement = React.createRef();
    let newMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
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
                <div>
                    <textarea ref={newMessageElement} autoFocus cols="40" placeholder={'Add your message...'}/>
                    <div>
                        <button onClick={newMessage}>Add message</button>
                    </div>
                </div>
            </div>

        </div>)
}


export default Dialogs;