import React from 'react';
import github from "../image/github-mark.png";
import profile from "../image/profile.png";
import mail from "../image/e-mail.png";

const SNS = () => {
  return (
    <div className="profile-container">
      <img src={profile} alt="Profile Picture" className="profile-icon" />

      <div className="sns-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="profile-item" />
        </a>
        <a href="mailto:s1148322@s.eduhk.hk" target="_blank" rel="noopener noreferrer">
          <img src={mail} alt="Email" className="profile-item" />
        </a>
      </div>

      <div className="description">Hello, I'm whitelist, the programmer of full stack</div>
    </div>
  );
};

export default SNS;
