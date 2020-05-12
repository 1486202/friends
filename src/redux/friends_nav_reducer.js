let initialState = {
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
const friendsNavReducer = (state = initialState , action) => {
    return state;
};
export default friendsNavReducer;
