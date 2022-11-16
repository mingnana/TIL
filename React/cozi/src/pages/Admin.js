import React, { Children, useEffect, useState } from "react";
import axios from "axios";
import Card from "../component/Card";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../component/LoadingSpinner";
import BlogList from "../component/BlogList";

const Admin = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>Admin</h1>
                <div>
                    <Link to="/blogs/create" className="btn btn-success">
                        Create New
                    </Link>
                </div>
            </div>
            <BlogList />
        </div>
    );
};

export default Admin;
