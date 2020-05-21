const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://hornews.com/upload/images/blank-avatar.jpg',
        //     followed: false,
        //     fullName: 'Lexa',
        //     status: 'I am good lawyer',
        //     location: {city: 'Astrakhan', country: 'Russia'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://hornews.com/upload/images/blank-avatar.jpg',
        //     followed: true,
        //     fullName: 'Andrew',
        //     status: 'I have a three cats',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://hornews.com/upload/images/blank-avatar.jpg',
        //     followed: false,
        //     fullName: 'Denis',
        //     status: 'I am fell in love',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
    ],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state
                , users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state
                , users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
                ;
        default:
            return state;
    }
};
export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export default usersReducer;


// AC - ActionCreator