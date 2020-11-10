import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    buttonHandler: () => void;
    type?: "submit" | "button";
}

export const Button: React.FC<ButtonProps> = ({ children, buttonHandler, type="button"}) => {
    const handleOnClick = () => buttonHandler();

    return (
        <button type={type} onClick={handleOnClick}>
            {children}
        </button>
    );
};