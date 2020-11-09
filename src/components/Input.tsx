import React from "react";

interface InputProps {
    label: string;
    id: string;
    inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    validationError: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    id,
    inputHandler,
    value,
    validationError,
}) => {

    return (
        <div>
            <label htmlFor={id} id={id}>
                {label}
            </label>

            <input
                name={id.replace("_", "")}
                id={id}
                value={value}
                onChange={inputHandler}
            />

            <span>{validationError}</span>
        </div>
    );
};