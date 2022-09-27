import React, { useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { bool } from "prop-types";
import { useEffect } from "react";

const BlogForm = ({ editing }) => {
  const history = useHistory();
  const { id } = useParams;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`);
  }, []);

  const onSubmit = () => {
    axios
      .post("http://localhost:3001/posts", {
        title,
        body,
        createdAt: Date.now(),
      })
      .then(() => {
        history.push("/blogs/");
      });
  };
  return (
    <div>
      <h1>{editing ? "Edit" : "Create"} a blog post </h1>
      <div className="mb-3">
        <label className="form-label">title</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary " onClick={onSubmit}>
        {editing ? "Edit" : "Post"}
      </button>
    </div>
  );
};

BlogForm.propTypes = {
  editing: bool,
};
BlogForm.defaultProps = {
  editing: false,
};

export default BlogForm;
