import React from "react";
import Link from "next/link";

const DashboardActions = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <Link href="/edit-profile">
        <a className="inline-block bg-light text-[#333] py-2 px-6 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80 sm:w-full">
          <i className="fas fa-user-circle text-primary"></i> Edit Profile
        </a>
      </Link>
      <Link href="/add-experience">
        <a className="inline-block bg-light text-[#333] py-2 px-6 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80 sm:w-full">
          <i className="fab fa-black-tie text-primary"></i> Add Experience
        </a>
      </Link>
      <Link href="/add-education">
        <a className="inline-block bg-light text-[#333] py-2 px-6 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80 sm:w-full">
          <i className="fas fa-graduation-cap text-primary"></i> Add Education
        </a>
      </Link>
    </div>
  );
};

export default DashboardActions;
