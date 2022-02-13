import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../constants/Path";
import "./NotFound.styles.css"

const NotFound: React.FC<{}> = () => {
    return (
        <div className="not__found" style={{
            backgroundImage: `url(/BgImg.png)`,
            backgroundRepeat: "repeat"
        }}>
            <h2>THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST</h2>
            <p><Link to={PATH.SEARCH_ITEMS}>Go back</Link></p>
            <a href='https://www.freepik.com/vectors/background'>
                Background vector created by Sketchepedia - www.freepik.com
            </a> <br />
        </div>
    );
}

export default NotFound;