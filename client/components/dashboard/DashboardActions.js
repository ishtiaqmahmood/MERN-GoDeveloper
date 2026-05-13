import React from "react";
import Link from "next/link";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link href="/edit-profile">
        <a className="btn btn-light">
          <i className="fas fa-user-circle text-primary"></i> Edit Profile
        </a>
      </Link>
      <Link href="/add-experience">
        <a className="btn btn-light">
          <i className="fab fa-black-tie text-primary"></i> Add Experience
        </a>
      </Link>
      <Link href="/add-education">
        <a className="btn btn-light">
          <i className="fas fa-graduation-cap text-primary"></i> Add Education
        </a>
      </Link>
    </div>
  );
};

export default DashboardActions;
