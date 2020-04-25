import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Content/>
        </div>)

};


export default App;
