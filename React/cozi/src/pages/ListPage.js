import React, { Children, useEffect, useState } from "react";
import axios from "axios";
import Card from "../component/Card";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../component/LoadingSpinner";
const ListPage = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosts = () => {
        axios.get("http://localhost:3001/posts").then((res) => {
            setPosts(res.data);
            setLoading(false);
        });
    };
    const deleteBlog = (e, id) => {
        e.stopPropagation();
        axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
            setPosts((prevPosts) => {
                return prevPosts.filter((post) => {
                    return post.id !== id;
                });
            });
        });
    };
    useEffect(() => {
        getPosts();
    }, []);

    const renderBlogList = () => {
        if (loading) {
            return <LoadingSpinner />;
        }
        if (posts.length === 0) {
            return <div>No blog posts found</div>;
        }
        return posts.map((post) => {
            return (
                <Card
                    key={post.id}
                    title={post.title}
                    onClick={() => navigate(`/blogs/${post.id}`)}
                >
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) => deleteBlog(e, post.id)}
                    >
                        Delete
                    </button>
                </Card>
            );
        });
    };
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>Blogs</h1>
                <div>
                    <Link to="/blogs/create" className="btn btn-success">
                        Create New
                    </Link>
                </div>
            </div>
            {renderBlogList()}
        </div>
    );
};

export default ListPage;
