import React from 'react';
import'./App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import First from "./Components/First/First";
import Fourth from "./Components/Fourth/Fourth";


const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' component={Dialogs} />
                <Route path='/content' component={Content} />
                <Route path='/first' component={First} />
                <Route path='/fourth' component={Fourth} />
            </div>
        </div>
        </BrowserRouter>)

};


export default App;
