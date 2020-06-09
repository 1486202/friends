const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
let initialState = {
    posts: [
        {id: 1, message: 'Hi, it\'s my first glass.', like: 69},
        {id: 2, message: 'How many glasses of wine can you drink?', like: 10}
    ],
    newPostText: '',
    profile: null
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText;
            return  {...state, newPostText: '', posts: [...state.posts, {id: 5,
                    message: newPost,
                    like: 1}]} ;
        case UPDATE_NEW_POST_TEXT:
            return  {...state, newPostText: action.newText };
        case SET_USERS_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;