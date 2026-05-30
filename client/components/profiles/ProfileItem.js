import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className="grid grid-cols-[2fr_4fr_2fr] items-center gap-8 p-4 leading-[1.8] mb-4 bg-light sm:grid-cols-1 sm:text-center">
      <img src={avatar} alt="" className="rounded-full w-[250px] sm:w-[200px] sm:m-auto" />
      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-4">{location && <span>{location}</span>}</p>
        <Link href={`/profile/${_id}`}>
          <a className="inline-block bg-primary text-white py-2 px-6 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80">
            View Profile
          </a>
        </Link>
      </div>
      <ul className="sm:hidden">
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
