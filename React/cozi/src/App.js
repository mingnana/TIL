import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./routes";
import Navbar from "./component/Navbar";
function App() {
    return (
        <>
            <div>
                <Navbar />
                <div className="container mt-3">
                    <Routes>
                        {routes.map((route) => {
                            return (
                                <Route
                                    key={route.key}
                                    path={route.path}
                                    element={route.component}
                                    exact
                                />
                            );
                        })}
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
