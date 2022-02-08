import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC<{}> = () => {
    return (
        <div>
            <div>Header goes here</div>
            <Outlet />
            <div>Footer goes here</div>
        </div>
    );
}

export default Layout;