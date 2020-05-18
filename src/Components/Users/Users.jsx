import React from "react";
import styles from './users.module.css'
let Users = (props) => {
    if (props.users.length === 0){
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://hornews.com/upload/images/blank-avatar.jpg',
            followed: false,
            fullName: 'Lexa',
            status: 'I am good lawyer',
            location: {city: 'Astrakhan', country: 'Russia'}
        },
        {
            id: 2,
            photoUrl: 'https://hornews.com/upload/images/blank-avatar.jpg',
            followed: true,
            fullName: 'Andrew',
            status: 'I have a three cats',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://hornews.com/upload/images/blank-avatar.jpg',
            followed: false,
            fullName: 'Denis',
            status: 'I am fell in love',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ])};
    return <div> {
        props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photoUrl} className={styles.userPhoto}/>
            </div>
            <div>{u.followed
                ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>:
                <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
                 <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        </span>
         </div>)
    }
    </div>
};
export default Users;