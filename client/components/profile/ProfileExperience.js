import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <div className="mb-4 pb-4 border-b border-[#ccc] last:border-0">
    <h3 className="text-dark text-lg font-bold">{company}</h3>
    <p className="my-2">
      <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
      {!to ? " Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
    </p>
    <p className="my-2">
      <strong>Position: </strong> {title}
    </p>
    <p className="my-2">
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
