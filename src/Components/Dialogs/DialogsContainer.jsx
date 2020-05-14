import React from 'react';
import {addMessageActionCreator, updateNewDialogActionCreator} from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().dialogsPage;
                let newMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };
                let onDialogChange = (text) => {
                    store.dispatch(updateNewDialogActionCreator(text));
                };
                return <Dialogs updateNewDialog={onDialogChange} addMessage={newMessage} dialogsPage={state}/>
            }
        }
        </StoreContext.Consumer>)
};
export default DialogsContainer;