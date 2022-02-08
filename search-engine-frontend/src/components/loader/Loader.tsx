import React from "react";
import "./Loader.styles.css"

const Loader: React.FC<{}> = () => {
    return (
        <div id="loader__spinner" className="spinner">
            <div className="spinner__icon"></div>
        </div>
    );
}

export default Loader;