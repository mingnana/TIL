import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { bool } from "prop-types";
import Pagination from "./Pagination";

const BlogForm = ({ editing }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [originalTitle, setOriginalTitle] = useState();
    const [body, setBody] = useState();
    const [originalBody, setOriginalBody] = useState();
    const [publish, setPublish] = useState(false);
    const [originalPublish, setOriginalPublish] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        if (editing) {
            axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
                console.log(res);
                setTitle(res.data.title);
                setOriginalTitle(res.data.title);
                setBody(res.data.body);
                setOriginalBody(res.data.body);
                setPublish(res.data.publish);
                setOriginalPublish(res.data.publish);
            });
        }
    }, [id, editing]);

    const isEdited = () => {
        return (
            title !== originalTitle ||
            body !== originalBody ||
            publish !== originalPublish
        );
    };

    const goBack = () => {
        if (editing) {
            navigate(`/blogs/${id}`);
        } else {
            navigate("/blogs/");
        }
    };

    const onSubmit = () => {
        if (editing) {
            axios
                .patch(`http://localhost:3001/posts/${id}`, {
                    title,
                    body,
                    publish,
                })
                .then((res) => {
                    navigate(`/blogs/${id}`);
                });
        } else {
            axios
                .post("http://localhost:3001/posts", {
                    title,
                    body,
                    publish,
                    createdAt: Date.now(),
                })
                .then(() => {
                    navigate("/blogs");
                });
        }
    };

    const onChangePublish = (e) => {
        console.log(e.target.checked);
        setPublish(e.target.checked);
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
            <div className="form-check mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={publish}
                    onChange={onChangePublish}
                />
                <label className="form-check-label">Public</label>
            </div>
            <button
                className="btn btn-primary"
                onClick={onSubmit}
                disabled={editing && !isEdited(false)}
            >
                {editing ? "Edit" : "Post"}
            </button>
            <button className="btn btn-danger ms-2" onClick={goBack}>
                Cancel
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
