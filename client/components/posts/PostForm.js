import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <div className="mb-4">
      <div className="bg-primary p-2 text-white">
        <h3 className="text-xl font-bold">Say Something...</h3>
      </div>
      <form
        className="my-4"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="block w-full p-2 text-[1.2rem] border border-[#ccc] mb-4"
          required
        ></textarea>
        <input
          type="submit"
          className="inline-block bg-dark text-white py-2 px-6 text-base border-none cursor-pointer transition-opacity duration-200 ease-in outline-none hover:opacity-80"
          value="Submit"
        />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
