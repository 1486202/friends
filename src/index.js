import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewDialogText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage}
                 updateNewDialogText={updateNewDialogText}/>
        </BrowserRouter>,
        document.getElementById('root'))
};


rerenderEntireTree(state);
subscribe(rerenderEntireTree);