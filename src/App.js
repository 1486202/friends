import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";
import {Route} from "react-router-dom";
import First from "./Components/First/First";
import Fourth from "./Components/Fourth/Fourth";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/content' render={() => <Content/>}/>
                <Route path='/first' render={() => <First/>}/>
                <Route path='/fourth' render={() => <Fourth/>}/>
            </div>
        </div>
    )

};


export default App;
