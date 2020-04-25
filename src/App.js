import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Content from "./Components/Content";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Content/>
        </div>)

};


export default App;
