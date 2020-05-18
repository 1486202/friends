const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    posts: [
        {id: 1, message: 'Hi, it\'s my first glass.', like: 69},
        {id: 2, message: 'How many glasses of wine can you drink?', like: 10}
    ],
    newPostText: ''
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
        default:
            return state;
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;