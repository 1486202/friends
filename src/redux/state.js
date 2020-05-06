import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, it\'s my first glass.', like: 69},
            {id: 2, message: 'How many glasses of wine can you drink?', like: 10}
        ],
        newPostText: ''

    }
    ,

    dialogsPage:
        {
            messages: [
                {id: 1, message: 'Hi,princess!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'I want to you.'},
            ],
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
}
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 1
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;