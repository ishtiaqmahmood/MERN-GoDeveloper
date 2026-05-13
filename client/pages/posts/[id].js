import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { connect } from "react-redux";
import Spinner from "../../components/layout/Spinner";
import PostItem from "../../components/posts/PostItem";
import CommentForm from "../../components/post/CommentForm";
import CommentItem from "../../components/post/CommentItem";
import { getPost } from "../../actions/post";
import { useRouter } from "next/router";
import Navbar from "../../components/layout/Navbar";

const Post = ({ getPost, post: { post, loading } }) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getPost(id);
    }
  }, [getPost, id]);

  return (
    <Fragment>
      <Navbar />
      <section className="container">
        {loading || post === null ? (
          <Spinner />
        ) : (
          <Fragment>
            <Link href="/posts">
              <a className="btn">Back To Posts</a>
            </Link>
            <PostItem post={post} showActions={false} />
            <CommentForm postId={post._id} />
            <div className="comments">
              {post.comments.map((comment) => (
                <CommentItem
                  key={comment._id}
                  comment={comment}
                  postId={post._id}
                />
              ))}
            </div>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
