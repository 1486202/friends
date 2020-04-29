import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: 'Hi, it\'s my first glass.', like: 69},
    {id: 2, message: 'How many glasses of wine can you drink?', like: 10}
];
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
ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);



