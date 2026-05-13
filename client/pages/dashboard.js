import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import DashboardComponent from "../components/dashboard/Dashboard";
import Navbar from "../components/layout/Navbar";

const DashboardPage = ({ auth: { isAuthenticated, loading } }) => {
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) return null; // Or a spinner

  return (
    <React.Fragment>
      <Navbar />
      <section className="container">
        <DashboardComponent />
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(DashboardPage);
