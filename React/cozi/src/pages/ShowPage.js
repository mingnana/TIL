import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../component/LoadingSpinner";
import { Link } from "react-router-dom";
const ShowPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getPost = (id) => {
        axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
            setPost(res.data);
            setLoading(false);
        });
    };

    useEffect(() => {
        getPost(id);
    }, [id]);

    const printDate = (timestamp) => {
        return new Date(timestamp).toLocaleString();
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <div className="d-flex ">
                <h1 className="flex-grow-1"> {post.title}</h1>
                <div>
                    <Link to={`/blogs/${id}/edit`} className="btn btn-primary">
                        Edit
                    </Link>
                </div>
            </div>
            <small className="text-muted">
                Created At: {printDate(post.createdAt)}
            </small>
            <hr />
            <p>{post.body}</p>
            <button onClick={() => navigate("/blogs/3")}>Click</button>
        </div>
    );
};

export default ShowPage;
