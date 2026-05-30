import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="profile-top grid-area-top flex flex-col items-center justify-center text-center bg-primary p-8 text-white">
      <img className="rounded-full my-4 w-[250px]" src={avatar} alt="" />
      <h1 className="text-5xl leading-tight mb-4 font-bold">{name}</h1>
      <p className="text-2xl mb-4">
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className="flex my-4">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1 hover:text-dark"
          >
            <i className="fas fa-globe fa-2x"></i>
          </a>
        )}
        {social && social.twitter && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1 hover:text-dark"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        )}
        {social && social.facebook && (
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1 hover:text-dark"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        )}
        {social && social.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1 hover:text-dark"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        )}
        {social && social.youtube && (
          <a
            href={social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1 hover:text-dark"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        )}
        {social && social.instagram && (
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1 hover:text-dark"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
