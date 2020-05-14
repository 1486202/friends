import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import StoreContext from "../../StoreContext";

// const Friends = (props) => {
//     return <div className={s.friends}>{props.name}
//         <img src={props.img}/></div>
// };
const Nav = () => {
    // return (
    //     <StoreContext.Consumer>
    //         {(store) => {
    //             let friendsElements = store.getState().friends.map(f => <Friends name={f.name} id={f.id}
    //                                                                              img={f.img}/>);
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/content" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/first" activeClassName={s.active}>First glass</NavLink>
            </div>
            <div className={s.item2}>
                <NavLink to="/fourth" activeClassName={s.active}>Fourth...</NavLink>
            </div>
            <div className={s.friends2}>
                Friends
            </div>
            {/*{friendsElements}*/}
        </nav>)
}
// }
// </StoreContext.Consumer>)
// }
export default Nav;