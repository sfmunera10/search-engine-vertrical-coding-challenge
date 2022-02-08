import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../constants/Path";
import "./NotFound.styles.css"

const NotFound: React.FC<{}> = () => {
    return (
        <div className="not__found">
            <img src="/NotFoundImg.png" alt="Not Found 404" />
            <h2>THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST</h2>
            <p><Link to={PATH.SEARCH_ITEMS}>Go back</Link></p>
        </div>
    );
}

export default NotFound;