import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { Register } from "../actions/auth";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Navbar from "../components/layout/Navbar";

function RegisterPage({ setAlert, Register, isAuthenticated }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      Register({ name, email, password });
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <section className="max-w-[1100px] mx-auto overflow-hidden px-8 mt-[6rem] mb-[3rem]">
        <h1 className="text-5xl leading-tight mb-4 text-primary font-bold">Sign Up</h1>
        <p className="text-2xl mb-4">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form className="my-4" onSubmit={(e) => onSubmit(e)}>
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
              required
            />
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
              required
            />
            <small className="block mt-[0.3rem] text-[#888]">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
              required
              minLength="6"
            />
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
              required
              minLength="6"
            />
          </div>
          <input
            type="submit"
            className="inline-block bg-primary text-white py-2 px-6 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80"
            value="Register"
          />
        </form>
        <p className="my-4">
          Already have an account?{" "}
          <Link href="/login">
            <a className="text-primary">Sign In</a>
          </Link>
        </p>
      </section>
    </React.Fragment>
  );
}

RegisterPage.propTypes = {
  setAlert: PropTypes.func.isRequired,
  Register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, Register })(RegisterPage);
