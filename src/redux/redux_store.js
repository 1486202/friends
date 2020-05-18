import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_reducer";
import friendsNavReducer from "./friends_nav_reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    friendsNav: friendsNavReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);

export default store ;
