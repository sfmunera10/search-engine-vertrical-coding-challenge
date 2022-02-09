import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../constants/Path";
import "./NotFound.styles.css"

const NotFound: React.FC<{}> = () => {
    return (
        <div className="not__found" style={{
            backgroundImage: `url(/NotFoundImg.png)`,
            backgroundSize: "contain"
        }}>
            <h2>THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST</h2>
            <p><Link to={PATH.SEARCH_ITEMS}>Go back</Link></p>
            <a href='https://www.freepik.es/vectores/azul'>
                Vector de Azul creado por vectorjuice - www.freepik.es
            </a>
        </div>
    );
}

export default NotFound;