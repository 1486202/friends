import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import First from "./Components/First/First";
import Fourth from "./Components/Fourth/Fourth";



const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.state.friendsNav}/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                    <Route path='/content'
                           render={() => <Content profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='/first' render={() => <First/>}/>
                    <Route path='/fourth' render={() => <Fourth/>}/>
                </div>
            </div>
        </BrowserRouter>)

};


export default App;
