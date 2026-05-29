import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => (
  <div className="grid grid-cols-[1fr_4fr] gap-8 items-center bg-white p-4 my-4 border border-[#ccc] sm:grid-cols-1">
    <div className="text-center">
      <Link href={`/profile/${user}`}>
        <a>
          <img className="rounded-full w-[100px] m-auto" src={avatar} alt="" />
          <h4 className="text-primary font-bold">{name}</h4>
        </a>
      </Link>
    </div>
    <div>
      <p className="my-4">{text}</p>
      <p className="text-[#aaa] text-[0.8rem] mb-2">
        Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <button
            onClick={() => addLike(_id)}
            type="button"
            className="inline-block bg-light text-[#333] py-2 px-6 text-base border-none cursor-pointer mr-2 transition-opacity duration-200 ease-in outline-none hover:opacity-80"
          >
            <i className="fas fa-thumbs-up"></i>{" "}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type="button"
            className="inline-block bg-light text-[#333] py-2 px-6 text-base border-none cursor-pointer mr-2 transition-opacity duration-200 ease-in outline-none hover:opacity-80"
          >
            <i className="fas fa-thumbs-down"></i>
          </button>
          <Link href={`/posts/${_id}`}>
            <a className="inline-block bg-primary text-white py-2 px-6 text-base border-none cursor-pointer mr-2 transition-opacity duration-200 ease-in outline-none hover:opacity-80">
              Discussion{" "}
              {comments.length > 0 && (
                <span className="bg-light text-primary py-[0.1rem] px-[0.2rem] rounded-[5px] text-[0.8rem]">
                  {comments.length}
                </span>
              )}
            </a>
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type="button"
              className="inline-block bg-danger text-white py-2 px-6 text-base border-none cursor-pointer mr-2 transition-opacity duration-200 ease-in outline-none hover:opacity-80"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
