import React, { Children, useEffect, useState } from "react";
import axios from "axios";
import Card from "../component/Card";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../component/LoadingSpinner";
import Pagination from "./Pagination";

const BlogList = ({ isAdmin }) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const getPosts = (page = 1) => {
        setCurrentPage(page);
        let params = {
            _page: page,
            _limit: 5,
            _sort: "id",
            _order: "desc",
        };

        if (!isAdmin) {
            params = { ...params, publish: false };
        }
        axios
            .get(`http://localhost:3001/posts?`, {
                params: params,
            })
            .then((res) => {
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
    if (loading) {
        return <LoadingSpinner />;
    }
    if (posts.length === 0) {
        return <div>No blog posts found</div>;
    }
    const renderBlogList = () => {
        return posts.map((post) => {
            return (
                <Card
                    key={post.id}
                    title={post.title}
                    onClick={() => navigate(`/blogs/${post.id}`)}
                >
                    {isAdmin ? (
                        <div>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={(e) => deleteBlog(e, post.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ) : null}
                </Card>
            );
        });
    };

    return (
        <div>
            {renderBlogList()}
            <Pagination
                currentPage={currentPage}
                numberOfPages={3}
                onClick={getPosts}
            />
        </div>
    );
};

export default BlogList;
