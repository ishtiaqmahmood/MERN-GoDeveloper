import React, { useEffect } from "react";
import Landing from "../components/layout/Landing";
import Navbar from "../components/layout/Navbar";
import { connect } from "react-redux";
import { useRouter } from "next/router";

function Home({ isAuthenticated }) {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  return (
    <React.Fragment>
      <Navbar />
      <Landing />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
