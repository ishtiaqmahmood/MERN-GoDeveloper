import React, { Fragment } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="flex">
      <li>
        <Link href="/profiles">
          <a className="text-white p-[0.45rem] mx-[0.25rem] hover:text-primary">
            Developers
          </a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a className="text-white p-[0.45rem] mx-[0.25rem] hover:text-primary">
            Posts
          </a>
        </Link>
      </li>
      <li>
        <Link href="/dashboard">
          <a className="text-white p-[0.45rem] mx-[0.25rem] hover:text-primary">
            <i className="fas fa-user"></i>{" "}
            <span className="hidden sm:inline">Dashboard</span>
          </a>
        </Link>
      </li>
      <li>
        <a
          onClick={logout}
          href="#!"
          className="text-white p-[0.45rem] mx-[0.25rem] hover:text-primary"
        >
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hidden sm:inline">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="flex">
      <li>
        <Link href="/profiles">
          <a className="text-white p-[0.45rem] mx-[0.25rem] hover:text-primary">
            Developers
          </a>
        </Link>
      </li>
      <li>
        <Link href="/register">
          <a className="text-white p-[0.45rem] mx-[0.25rem] hover:text-primary">
            Register
          </a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a className="text-white p-[0.45rem] mx-[0.25rem] hover:text-primary">
            Login
          </a>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="flex justify-between items-center py-3 px-8 fixed z-[1] w-full top-0 border-b border-primary opacity-90 bg-dark">
      <h1 className="text-2xl font-bold">
        <Link href="/">
          <a className="text-white hover:text-primary">
            <i className="fas fa-code"></i> GoDeveloper
          </a>
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
