import React from 'react';
import {addMessageActionCreator, updateNewDialogActionCreator} from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let newMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onDialogChange = (text) => {
        props.store.dispatch(updateNewDialogActionCreator(text));
    };
    return <Dialogs updateNewDialog={onDialogChange} addMessage={newMessage} dialogsPage={state}/>
};

export default DialogsContainer;