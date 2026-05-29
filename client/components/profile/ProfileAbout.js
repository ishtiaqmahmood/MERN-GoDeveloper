import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => (
  <div className="profile-about grid-area-about text-center bg-light p-8">
    {bio && (
      <Fragment>
        <h2 className="text-primary text-2xl font-bold">
          {name.split(" ")[0]}&apos;s Bio
        </h2>
        <p className="my-4">{bio}</p>
        <div className="h-[1px] bg-[#ccc] my-6"></div>
      </Fragment>
    )}
    <h2 className="text-primary text-2xl font-bold">Skill Set</h2>
    <div className="flex items-center justify-center text-center flex-wrap">
      {skills.map((skill, index) => (
        <div key={index} className="p-4">
          <i className="fas fa-check"></i> {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
