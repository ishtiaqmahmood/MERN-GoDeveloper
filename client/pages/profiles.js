import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../components/layout/Spinner";
import ProfileItem from "../components/profiles/ProfileItem";
import { getProfiles } from "../actions/profile";
import Navbar from "../components/layout/Navbar";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      <Navbar />
      <section className="max-w-[1100px] mx-auto overflow-hidden px-8 mt-[6rem] mb-[3rem]">
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <h1 className="text-5xl leading-tight mb-4 text-primary font-bold">Developers</h1>
            <p className="text-2xl mb-4">
              <i className="fab fa-connectdevelop"></i> Browse and connect with
              developers
            </p>
            <div>
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4 className="text-xl">No profiles found...</h4>
              )}
            </div>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
