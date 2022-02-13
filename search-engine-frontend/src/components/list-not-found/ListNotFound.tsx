import React from "react";
import "./ListNotFound.styles.css"

const ListNotFound: React.FC<{}> = () => {
    return (
        <h2 className="list__not__found">No results found. Try again with another title</h2>
    );
}

export default ListNotFound;