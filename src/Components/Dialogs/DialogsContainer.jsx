import React from 'react';
import {addMessageActionCreator, updateNewDialogActionCreator} from "../../redux/dialog_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
return {
    updateNewDialog: (text) => {dispatch(updateNewDialogActionCreator(text))},
    addMessage: () => {dispatch(addMessageActionCreator())}
};
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;