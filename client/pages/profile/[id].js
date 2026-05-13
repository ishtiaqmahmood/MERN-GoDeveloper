import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { connect } from "react-redux";
import Spinner from "../../components/layout/Spinner";
import ProfileTop from "../../components/profile/ProfileTop";
import ProfileAbout from "../../components/profile/ProfileAbout";
import ProfileExperience from "../../components/profile/ProfileExperience";
import ProfileEducation from "../../components/profile/ProfileEducation";
import ProfileGithub from "../../components/profile/ProfileGithub";
import { getProfileById } from "../../actions/profile";
import { useRouter } from "next/router";
import Navbar from "../../components/layout/Navbar";

const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getProfileById(id);
    }
  }, [getProfileById, id]);

  return (
    <Fragment>
      <Navbar />
      <section className="container">
        {profile === null || loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Link href="/profiles">
              <a className="btn btn-light">Back To Profiles</a>
            </Link>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link href="/edit-profile">
                  <a className="btn btn-dark">Edit Profile</a>
                </Link>
              )}
            <div className="profile-grid my-1">
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />
              <div className="profile-exp bg-white p-2">
                <h2 className="text-primary">Experience</h2>
                {profile.experience.length > 0 ? (
                  <Fragment>
                    {profile.experience.map((experience) => (
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                      />
                    ))}
                  </Fragment>
                ) : (
                  <h4>No experience credentials</h4>
                )}
              </div>

              <div className="profile-edu bg-white p-2">
                <h2 className="text-primary">Education</h2>
                {profile.education.length > 0 ? (
                  <Fragment>
                    {profile.education.map((education) => (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                      />
                    ))}
                  </Fragment>
                ) : (
                  <h4>No education credentials</h4>
                )}
              </div>

              {profile.githubusername && (
                <ProfileGithub username={profile.githubusername} />
              )}
            </div>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
