import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
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
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteComment(postId, _id)}
          type="button"
          className="inline-block bg-danger text-white py-1 px-4 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80 sm:py-1 sm:px-2"
        >
          <i className="fas fa-times"></i>
        </button>
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
