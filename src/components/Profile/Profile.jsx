import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={style.profileWrap}>
      <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateUserStatus={props.updateUserStatus}
                   isFetching={props.isFetching}
                   isOwner={props.isOwner}
                   savePhoto={props.savePhoto}/>
      <MyPostsContainer/>
    </div>
  );
}

export default Profile;
