import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <div className="mb-4 pb-4 border-b border-[#ccc] last:border-0">
    <h3 className="text-dark text-lg font-bold">{school}</h3>
    <p className="my-2">
      <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
      {!to ? " Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
    </p>
    <p className="my-2">
      <strong>Degree: </strong> {degree}
    </p>
    <p className="my-2">
      <strong>Field Of Study: </strong> {fieldofstudy}
    </p>
    <p className="my-2">
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
