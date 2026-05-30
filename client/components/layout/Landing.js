import React from "react";
import Link from "next/link";

const Landing = () => {
  return (
    <section className="relative bg-[url('../styles/img/showcase.jpg')] bg-no-repeat bg-center bg-cover h-screen">
      <div className="bg-black/70 absolute top-0 left-0 w-full h-full">
        <div className="text-white h-full w-[80%] m-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold leading-[1.2] mb-4 sm:text-5xl">
            Developer Connector
          </h1>
          <p className="text-2xl mb-4 sm:text-base">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="flex gap-2">
            <Link href="/register">
              <a className="inline-block bg-primary text-white py-2 px-6 text-base border-none cursor-pointer mr-2 transition-opacity duration-200 ease-in outline-none hover:opacity-80">
                Sign Up
              </a>
            </Link>
            <Link href="/login">
              <a className="inline-block bg-light text-[#333] py-2 px-6 text-base border-none cursor-pointer mr-2 transition-opacity duration-200 ease-in outline-none hover:opacity-80">
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
