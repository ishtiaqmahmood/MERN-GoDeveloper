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
      <section className="max-w-[1100px] mx-auto overflow-hidden px-8 mt-[6rem] mb-[3rem]">
        {profile === null || loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Link href="/profiles">
              <a className="inline-block bg-light text-[#333] py-2 px-6 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80 mr-2">
                Back To Profiles
              </a>
            </Link>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link href="/edit-profile">
                  <a className="inline-block bg-dark text-white py-2 px-6 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80">
                    Edit Profile
                  </a>
                </Link>
              )}
            <div className="grid grid-cols-2 gap-4 my-4 sm:grid-cols-1">
              <div className="col-span-2">
                <ProfileTop profile={profile} />
              </div>
              <div className="col-span-2">
                <ProfileAbout profile={profile} />
              </div>
              <div className="bg-white p-8 border border-[#ccc]">
                <h2 className="text-primary text-2xl font-bold mb-4">Experience</h2>
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
                  <h4 className="text-xl">No experience credentials</h4>
                )}
              </div>

              <div className="bg-white p-8 border border-[#ccc]">
                <h2 className="text-primary text-2xl font-bold mb-4">Education</h2>
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
                  <h4 className="text-xl">No education credentials</h4>
                )}
              </div>

              {profile.githubusername && (
                <div className="col-span-2">
                  <ProfileGithub username={profile.githubusername} />
                </div>
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
