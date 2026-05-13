import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostItem from "../components/posts/PostItem";
import PostForm from "../components/posts/PostForm";
import Spinner from "../components/layout/Spinner";
import { getPosts } from "../actions/post";
import Navbar from "../components/layout/Navbar";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Fragment>
      <Navbar />
      <section className="container">
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <h1 className="large text-primary">Posts</h1>
            <p className="lead">
              <i className="fas fa-user"></i> Welcome to the community
            </p>
            <PostForm />
            <div className="posts">
              {posts.map((post) => (
                <PostItem key={post._id} post={post} />
              ))}
            </div>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
