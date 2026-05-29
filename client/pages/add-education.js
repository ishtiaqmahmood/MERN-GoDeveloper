import React, { useState, Fragment } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../actions/profile";
import { useRouter } from "next/router";
import Navbar from "../components/layout/Navbar";

const AddEducation = ({ addEducation }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <Navbar />
      <section className="max-w-[1100px] mx-auto overflow-hidden px-8 mt-[6rem] mb-[3rem]">
        <h1 className="text-5xl leading-tight mb-4 text-primary font-bold">Add Your Education</h1>
        <p className="text-2xl mb-4">
          <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc
          that you have attended
        </p>
        <small>* = required field</small>
        <form
          className="my-4"
          onSubmit={(e) => {
            e.preventDefault();
            addEducation(formData, router);
          }}
        >
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="text"
              placeholder="* School or Bootcamp"
              name="school"
              value={school}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
              required
            />
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="text"
              placeholder="* Degree or Certificate"
              name="degree"
              value={degree}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
              required
            />
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="text"
              placeholder="Field Of Study"
              name="fieldofstudy"
              value={fieldofstudy}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
            />
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <h4 className="font-bold">From Date</h4>
            <input
              type="date"
              name="from"
              value={from}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
            />
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <p>
              <input
                type="checkbox"
                name="current"
                checked={current}
                value={current}
                onChange={() => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
              />{" "}
              Current School or Bootcamp
            </p>
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <h4 className="font-bold">To Date</h4>
            <input
              type="date"
              name="to"
              value={to}
              onChange={(e) => onChange(e)}
              disabled={toDateDisabled ? "disabled" : ""}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc] disabled:bg-[#f4f4f4]"
            />
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Program Description"
              value={description}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
            ></textarea>
          </div>
          <input
            type="submit"
            className="inline-block bg-primary text-white py-2 px-6 text-base border-none cursor-pointer mr-2 transition-opacity duration-200 ease-in outline-none hover:opacity-80 my-4"
          />
          <Link href="/dashboard">
            <a className="inline-block bg-light text-[#333] py-2 px-6 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80 my-4">
              Go Back
            </a>
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
