import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.styles.css"

const Layout: React.FC<{}> = () => {
    return (
        <div className="layout__container">
            <h2 className="header">Search Engine Coding Challenge</h2>
            <Outlet />
            <p className="footer">Made with ❤️ by Santiago Múnera.</p>
        </div>
    );
}

export default Layout;