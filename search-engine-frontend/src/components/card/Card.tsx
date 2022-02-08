import React from "react";
import "./Card.styles.css"
import Button from "../button/Button";

interface Props {
    className: "small" | "large";
    border: string;
    borderRadius: string;
    cardPhotoUrl: string;
    altPhotoDescription: string;
    cardTitle: string;
    cardShortDescription: string;
    cardFullDescription: string;
    cardDetailRedirectUrl: string;
    isRedirectUrlActive: boolean;
}

const Card: React.FC<Props> = ({
    className,
    border,
    borderRadius,
    cardPhotoUrl,
    altPhotoDescription,
    cardTitle,
    cardShortDescription,
    cardFullDescription,
    cardDetailRedirectUrl,
    isRedirectUrlActive
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
                    <a href="https://www.google.com/">{cardTitle}</a>
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
                    onClick={() => console.log("You clicked on the pink circle!")}
                    border="none"
                    borderRadius="8px"
                    width="120px"
                    childrenText="Go back"
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