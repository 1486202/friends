import React from 'react';
import StoreContext from "../../StoreContext";
import Nav from "./Nav";


const NavContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().friendsNav;
                return <Nav friendsNav={state}/>
            }
            }
        </StoreContext.Consumer>)
};


export default NavContainer;