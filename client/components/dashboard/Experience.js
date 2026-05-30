import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profile";

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id} className="border-b border-[#ccc]">
      <td className="p-4 text-left">{exp.company}</td>
      <td className="p-4 text-left hidden sm:table-cell">{exp.title}</td>
      <td className="p-4 text-left">
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </td>
      <td className="p-4 text-left">
        <button
          onClick={() => deleteExperience(exp._id)}
          className="inline-block bg-danger text-white py-2 px-6 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-8 text-2xl font-bold">Experience Credentials</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-light">
            <th className="p-4 text-left">Company</th>
            <th className="p-4 text-left hidden sm:table-cell">Title</th>
            <th className="p-4 text-left hidden sm:table-cell">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
