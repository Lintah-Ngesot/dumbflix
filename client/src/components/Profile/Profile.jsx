import React from "react";
import "./Profile.scss";
import { images } from "../../contstans";

const Profile = () => {
  return (
    <div className="app__profile">
      <div className="app__profile-wrapper">
        <div className="app__profile-left">
          <h1 className="Profile__title">Personal Info</h1>
          <div className="profile">
            <img src={images.user} alt="user-img" />
            <p className="p-text">
              DumbFlix App
              <span>Full name</span>
            </p>
          </div>
          <div className="profile">
            <img src={images.mail} alt="mail-img" />
            <p className="p-text">
              radifgans@gmail.com
              <span>Email</span>
            </p>
          </div>
          <div className="profile">
            <img src={images.status} alt="mail-img" />
            <p className="p-text">
              Active
              <span>Status</span>
            </p>
          </div>
          <div className="profile">
            <img src={images.gender} alt="mail-img" />
            <p className="p-text">
              Male
              <span>Gender</span>
            </p>
          </div>
          <div className="profile">
            <img src={images.telp} alt="mail-img" />
            <p className="p-text">
              0812-8623-8911
              <span>Mobile phone</span>
            </p>
          </div>
          <div className="profile">
            <img src={images.loct} alt="mail-img" />
            <p className="p-text">
              Perumahan Permata Bintaro Residence C-3
              <span>Address</span>
            </p>
          </div>
        </div>
        <div className="app__profile-right">
          <img src={images.avatar2} alt="avatar" />
          <div className="profile__button">
            <button type="button">Change Photo Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
