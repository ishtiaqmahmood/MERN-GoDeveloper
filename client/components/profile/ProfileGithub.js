import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <div className="profile-github grid-area-github">
      <h2 className="text-primary my-4 text-2xl font-bold">Github Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div key={repo.id} className="flex bg-white p-4 my-4 border border-[#ccc]">
            <div className="flex-[7] basis-[70%]">
              <h4 className="text-xl font-bold">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  {repo.name}
                </a>
              </h4>
              <p className="mt-2">{repo.description}</p>
            </div>
            <div className="flex-[3] basis-[20%]">
              <ul>
                <li className="text-[0.8rem] p-[0.1rem] text-center m-[0.3rem] bg-primary text-white">
                  Stars: {repo.stargazers_count}
                </li>
                <li className="text-[0.8rem] p-[0.1rem] text-center m-[0.3rem] bg-dark text-white">
                  Watchers: {repo.watchers_count}
                </li>
                <li className="text-[0.8rem] p-[0.1rem] text-center m-[0.3rem] bg-light text-[#333] border border-[#ccc]">
                  Forks: {repo.forks_count}
                </li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
