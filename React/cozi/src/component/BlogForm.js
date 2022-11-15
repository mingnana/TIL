import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { bool } from "prop-types";

const BlogForm = ({ editing }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [originalTitle, setOriginalTitle] = useState();
    const [body, setBody] = useState();
    const [originalBody, setOriginalBody] = useState();
    const { id } = useParams();

    useEffect(() => {
        if (editing) {
            axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
                console.log(res);
                setTitle(res.data.title);
                setOriginalTitle(res.data.title);
                setBody(res.data.body);
                setOriginalBody(res.data.body);
            });
        }
    }, [id]);

    const isEdited = () => {
        return title !== originalTitle || body !== originalBody;
    };

    const onSubmit = () => {
        if (editing) {
            axios
                .patch(`http://localhost:3001/posts/${id}`, {
                    title,
                    body,
                })
                .then((res) => {
                    console.log(res);
                });
        } else {
            axios
                .post("http://localhost:3001/posts", {
                    title,
                    body,
                    createdAt: Date.now(),
                })
                .then(() => {
                    navigate("/blogs");
                });
        }
    };
    return (
        <div>
            <h1>{editing ? "Edit" : "Create"} a blog post</h1>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                    className="form-control"
                    value={title}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Body</label>
                <textarea
                    onChange={(event) => {
                        setBody(event.target.value);
                    }}
                    className="form-control"
                    value={body}
                    rows="10"
                />
            </div>
            <button
                className="btn btn-primary"
                onClick={onSubmit}
                disabled={false}
            >
                {editing ? "Edit" : "Post"}
            </button>
        </div>
    );
};

export default BlogForm;

BlogForm.propTypes = {
    editing: bool,
};

BlogForm.defaultProps = {
    editing: false,
};
