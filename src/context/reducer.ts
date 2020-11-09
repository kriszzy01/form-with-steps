import {
    FormState,
    Action
} from "../types";

export const initialFormState: FormState = {
    personalDetails: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: ""
    },

    nextOfKin: {
        firstName: "",
        lastName: "",
        emailAddress: ""
    }
};

export const formReducer: React.Reducer<FormState, Action> = (state, action) => {
    switch (action.type) {
        case "SAVE_PERSONAL_DETAILS":
            return {
                ...state,
                personalDetails: action.payload
            }
        case "SAVE_NEXTOFKIN_DETAILS":
            return {
                ...state,
                nextOfKin: action.payload
            }
        default:
            return state
    }
};