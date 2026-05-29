import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profile";

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id} className="border-b border-[#ccc]">
      <td className="p-4 text-left">{edu.school}</td>
      <td className="p-4 text-left hidden sm:table-cell">{edu.degree}</td>
      <td className="p-4 text-left">
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
        {edu.to === null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        )}
      </td>
      <td className="p-4 text-left">
        <button
          onClick={() => deleteEducation(edu._id)}
          className="inline-block bg-danger text-white py-2 px-6 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-8 text-2xl font-bold">Education Credentials</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-light">
            <th className="p-4 text-left">School</th>
            <th className="p-4 text-left hidden sm:table-cell">Degree</th>
            <th className="p-4 text-left hidden sm:table-cell">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
