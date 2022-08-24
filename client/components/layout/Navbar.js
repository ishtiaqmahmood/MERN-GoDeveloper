import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link href="/">
          <a>
            <i className="fas fa-code"></i> GoDeveloper
          </a>
        </Link>
      </h1>
      <ul>
        <li>
          <Link href="/profile">
            <a>Developers</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
