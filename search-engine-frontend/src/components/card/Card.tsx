import React from "react";
import "./Card.styles.css"
import Button from "../button/Button";
import { Link } from "react-router-dom";

interface Props {
    className: "small" | "large";
    border: string;
    borderRadius: string;
    cardId: number;
    cardPhotoUrl: string;
    altPhotoDescription: string;
    cardTitle: string;
    cardShortDescription: string;
    cardFullDescription: string;
    cardDetailRedirectUrl: string;
}

const Card: React.FC<Props> = ({
    className,
    border,
    borderRadius,
    cardId,
    cardPhotoUrl,
    altPhotoDescription,
    cardTitle,
    cardShortDescription,
    cardFullDescription,
    cardDetailRedirectUrl,
}) => {
    return className === "small" ? (
        <div
            className={`card__${className}`}
            style={{
                border,
                borderRadius,
            }}
        >
            <div
                className="card__small__image__container"
                style={{
                    border,
                    borderRadius,
                    backgroundImage: `url(${cardPhotoUrl})`,
                    backgroundSize: "cover"
                }}
            >
            </div>
            <div className="card__small__body">
                <h2>
                    <Link to={cardDetailRedirectUrl}>{cardTitle}</Link>
                </h2>
                <p>{cardShortDescription}</p>
            </div>
        </div>
    ) :
        <div
            className={`card__${className}`}
            style={{
                border,
                borderRadius,
            }}
        >
            <div className="btn__wrapper">
                <Button
                    className="secondary"
                    type="button"
                    height="50px"
                    border="none"
                    borderRadius="8px"
                    width="120px"
                    childrenText={<Link to={cardDetailRedirectUrl}>Go back</Link>}
                />
            </div>
            <div
                className="card__large__image__container"
                style={{
                    border,
                    borderRadius
                }}
            > <img src={cardPhotoUrl}
                alt={altPhotoDescription}
                style={{
                    border,
                    borderRadius
                }}
                />
            </div>
            <div className="card__large__body">
                <h2>{cardTitle}</h2>
                <p>{cardFullDescription}</p>
            </div>
        </div>;
}

export default Card;