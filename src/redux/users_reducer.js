const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
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
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
                ...state, users: action.users
            }
                ;
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
            ;
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count}
                ;
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching}
                ;
        default:
            return state;
    }
};
export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export default usersReducer;


// AC - ActionCreator