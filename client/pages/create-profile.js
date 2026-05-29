import React, { useState, Fragment } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../actions/profile";
import { useRouter } from "next/router";
import Navbar from "../components/layout/Navbar";

const CreateProfile = ({ createProfile }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, router);
  };

  return (
    <Fragment>
      <Navbar />
      <section className="max-w-[1100px] mx-auto overflow-hidden px-8 mt-[6rem] mb-[3rem]">
        <h1 className="text-5xl leading-tight mb-4 text-primary font-bold">Create Your Profile</h1>
        <p className="text-2xl mb-4">
          <i className="fas fa-user"></i> Let&apos;s get some information to make your
          profile stand out
        </p>
        <small>* = required field</small>
        <form className="my-4" onSubmit={(e) => onSubmit(e)}>
          <div className="my-[1.2rem] w-[70%]">
            <select
              name="status"
              value={status}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
            >
              <option value="0">* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <small className="block mt-[0.3rem] text-[#888]">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={company}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
            />
            <small className="block mt-[0.3rem] text-[#888]">
              Could be your own company or one you work for
            </small>
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={website}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
            />
            <small className="block mt-[0.3rem] text-[#888]">
              Could be your own or a company website
            </small>
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
            />
            <small className="block mt-[0.3rem] text-[#888]">
              City & state suggested (eg. Boston, MA)
            </small>
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="text"
              placeholder="* Skills"
              name="skills"
              value={skills}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
            />
            <small className="block mt-[0.3rem] text-[#888]">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="text"
              placeholder="Github Username"
              name="githubusername"
              value={githubusername}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
            />
            <small className="block mt-[0.3rem] text-[#888]">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              value={bio}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
            ></textarea>
            <small className="block mt-[0.3rem] text-[#888]">
              Tell us a little about yourself
            </small>
          </div>

          <div className="my-8">
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type="button"
              className="inline-block bg-light text-[#333] py-2 px-6 text-base border-none cursor-pointer mr-2 transition-opacity duration-200 ease-in outline-none hover:opacity-80"
            >
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>

          {displaySocialInputs && (
            <Fragment>
              <div className="my-[1.2rem] w-[70%] flex">
                <i className="fab fa-twitter fa-2x p-2 w-16 text-[#38a1f3]"></i>
                <input
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  value={twitter}
                  onChange={(e) => onChange(e)}
                  className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
                />
              </div>

              <div className="my-[1.2rem] w-[70%] flex">
                <i className="fab fa-facebook fa-2x p-2 w-16 text-[#3b5998]"></i>
                <input
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  value={facebook}
                  onChange={(e) => onChange(e)}
                  className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
                />
              </div>

              <div className="my-[1.2rem] w-[70%] flex">
                <i className="fab fa-youtube fa-2x p-2 w-16 text-[#c4302b]"></i>
                <input
                  type="text"
                  placeholder="YouTube URL"
                  name="youtube"
                  value={youtube}
                  onChange={(e) => onChange(e)}
                  className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
                />
              </div>

              <div className="my-[1.2rem] w-[70%] flex">
                <i className="fab fa-linkedin fa-2x p-2 w-16 text-[#0077b5]"></i>
                <input
                  type="text"
                  placeholder="Linkedin URL"
                  name="linkedin"
                  value={linkedin}
                  onChange={(e) => onChange(e)}
                  className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
                />
              </div>

              <div className="my-[1.2rem] w-[70%] flex">
                <i className="fab fa-instagram fa-2x p-2 w-16 text-[#3f729b]"></i>
                <input
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  value={instagram}
                  onChange={(e) => onChange(e)}
                  className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
                />
              </div>
            </Fragment>
          )}

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

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(CreateProfile);
