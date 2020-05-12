const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';
const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newDialogText,
            };
            state.messages.push(newMessage);
            state.newDialogText = '';
            return state;
        case UPDATE_NEW_DIALOG_TEXT:
            state.newDialogText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewDialogActionCreator = (text) => ({type: UPDATE_NEW_DIALOG_TEXT, newText: text});
export default dialogReducer;
