const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';
let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, it\'s my first glass.', like: 69},
                {id: 2, message: 'How many glasses of wine can you drink?', like: 10}
            ],
            newPostText: ''
        },
        dialogsPage:
            {
                messages: [
                    {id: 1, message: 'Hi,princess!'},
                    {id: 2, message: 'How are you?'},
                    {id: 3, message: 'I want to you.'},
                ],
                newDialogText: '',
                dialogs: [
                    {id: 1, name: 'Aivaz', img: 'https://2.allegroimg.com/s1440/03c3f8/2983b9964b22a4f19d9fc9389502'},
                    {
                        id: 2,
                        name: 'Mother',
                        img: 'https://c7.hotpng.com/preview/576/940/917/letter-m-alphabet-logo-m.jpg'
                    },
                    {
                        id: 3,
                        name: 'Julia',
                        img: 'https://2berega.spb.ru/content/media/pic/std/5000000/4439000/4438280-a02ad6c1bdc3551e.png'
                    },
                    {
                        id: 4,
                        name: 'Lenka',
                        img: 'https://2berega.spb.ru/content/media/pic/std/5000000/4439000/4438228-2720261b13f79a36.png'
                    },
                    {
                        id: 5,
                        name: 'Luda',
                        img: 'https://static3.depositphotos.com/1000819/113/i/450/depositphotos_1135872-stock-photo-fire-font-letter-l-from.jpg'
                    },
                    {id: 6, name: 'Lena', img: 'https://image.freepik.com/free-photo/l_23-2148185100.jpg'},
                ]
            },
        friendsNav: {
            friends: [
                {id: 1, name: 'Aivaz', img: 'https://2.allegroimg.com/s1440/03c3f8/2983b9964b22a4f19d9fc9389502'},
                {
                    id: 2,
                    name: 'Mother',
                    img: 'https://c7.hotpng.com/preview/576/940/917/letter-m-alphabet-logo-m.jpg'
                },

                {
                    id: 3,
                    name: 'Lenka',
                    img: 'https://2berega.spb.ru/content/media/pic/std/5000000/4439000/4438228-2720261b13f79a36.png'
                }

            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 1
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newDialogText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newDialogText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-DIALOG-TEXT') {
            this._state.dialogsPage.newDialogText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewDialogActionCreator = (text) => ({type: UPDATE_NEW_DIALOG_TEXT, newText: text});

export default store;



