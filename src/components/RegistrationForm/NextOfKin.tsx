import React, { useState } from "react";
import { NextOfKinProps } from "../../types";
import { Input } from "../Input";

export const NextOfKin: React.FC = () => {
    const initialState: NextOfKinProps = {
        firstName: "",
        lastName: "",
        emailAddress: ""
    };

    const [nextOfKinDetails, setNextOfKinDetails] = useState(initialState);

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setNextOfKinDetails({
        ...nextOfKinDetails,
        [event.target.name]: event.target.value
    });

    return (
        <div>
            <Input
                label="First Name:"
                id="first_Name"
                value={nextOfKinDetails.firstName}
                validationError="error"
                inputHandler={inputHandler}
            />

            <Input
                label="Last Name:"
                id="last_Name"
                value={nextOfKinDetails.lastName}
                validationError="error"
                inputHandler={inputHandler}
            />

            <Input
                label="Email:"
                id="email_Address"
                value={nextOfKinDetails.emailAddress}
                validationError="error"
                inputHandler={inputHandler}
            />
        </div>
    );
};