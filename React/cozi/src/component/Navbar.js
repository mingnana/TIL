import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
} from "react-router-dom";

const Navbar = () => {
    return (
        <div id="navbar-example2" class="navbar navbar-dark bg-dark px-3 mb-3">
            <div className="container">
                <Link class="navbar-brand" to="/">
                    Home
                </Link>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/admin"
                            aria-current="page"
                            exact
                        >
                            Admin
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/blogs"
                            aria-current="page"
                            exact
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
