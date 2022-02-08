import React from "react";
import "./Button.styles.css"

interface Props {
    className: "primary" | "secondary";
    border: string;
    borderRadius: string;
    childrenText?: React.ReactNode;
    height: string;
    width: string;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
}

const Button: React.FC<Props> = ({
    className,
    border,
    borderRadius,
    childrenText,
    height,
    width,
    type,
    onClick
}) => {
    return (
        <button
            className={`btn__${className}`}
            onClick={onClick}
            type={type}
            style={{
                border,
                borderRadius,
                height,
                width
            }}
        >
            {childrenText}
        </button>
    );
}

export default Button;