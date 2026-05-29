import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import { useRouter } from "next/router";
import Navbar from "../components/layout/Navbar";

const Login = ({ login, isAuthenticated }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <React.Fragment>
      <Navbar />
      <section className="max-w-[1100px] mx-auto overflow-hidden px-8 mt-[6rem] mb-[3rem]">
        <h1 className="text-5xl leading-tight mb-4 text-primary font-bold">Sign in</h1>
        <p className="text-2xl mb-4">
          <i className="fas fa-user"></i> Sign into Your Account
        </p>
        <form className="my-4" onSubmit={(e) => onSubmit(e)}>
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
          </div>
          <div className="my-[1.2rem] w-[70%]">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={(e) => onChange(e)}
              className="block w-full p-2 text-[1.2rem] border border-[#ccc]"
              required
            />
          </div>

          <input
            type="submit"
            className="inline-block bg-primary text-white py-2 px-6 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80"
            value="Login"
          />
        </form>
        <p className="my-4">
          Create an account?{" "}
          <Link href="/register">
            <a className="text-primary">Sign Up</a>
          </Link>
        </p>
      </section>
    </React.Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
