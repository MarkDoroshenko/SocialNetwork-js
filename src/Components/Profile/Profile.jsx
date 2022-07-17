import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={ classes.content }>
            <div>
                <img className={classes.profileImg} src="https://oir.mobi/uploads/posts/2021-03/1616534602_60-p-fon-art-61.jpg" alt="#"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;