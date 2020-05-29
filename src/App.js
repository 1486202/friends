import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import {Route} from "react-router-dom";
import First from "./Components/First/First";
import Fourth from "./Components/Fourth/Fourth";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavContainer from "./Components/Nav/NavContainer";
import UsersContainer from "./Components/Users/UsersContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavContainer/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/content' render={() => <Content/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/first' render={() => <First/>}/>
                <Route path='/fourth' render={() => <Fourth/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>

            </div>
        </div>
    )

};


export default App;
