import React, { useState } from "react";
import { Input } from "../Input";
import { PersonalDetailsProps } from "../../types";
//import { validationError } from "../../utils";

export const PersonalDetails: React.FC = () => {
    const initialState: PersonalDetailsProps = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: ""
    };

    const [personalDetails, setPersonalDetails] = useState(initialState);

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setPersonalDetails({
        ...personalDetails,
        [event.target.name]: event.target.value
    });

    return (
        <div>
            <Input
                label="First Name:"
                id="first_Name"
                value={personalDetails.firstName}
                validationError="error"
                inputHandler={inputHandler}
            />

            <Input
                label="Last Name:"
                id="last_Name"
                value={personalDetails.lastName}
                validationError="error"
                inputHandler={inputHandler}
            />

            <Input
                label="Phone Number:"
                id="phone_Number"
                value={personalDetails.phoneNumber}
                validationError="error"
                inputHandler={inputHandler}
            />

            <Input
                label="Email:"
                id="email_Address"
                value={personalDetails.emailAddress}
                validationError="error"
                inputHandler={inputHandler}
            />
        </div>
    );
};