export interface PersonalDetailsProps {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
}

export interface NextOfKinProps {
    firstName: string;
    lastName: string;
    emailAddress: string;
}

export interface FormState {
    personalDetails: PersonalDetailsProps;
    nextOfKin: NextOfKinProps;
}

export type Action =
    | { type: "SAVE_PERSONAL_DETAILS", payload: PersonalDetailsProps }
    | { type: "SAVE_NEXTOFKIN_DETAILS", payload: NextOfKinProps }
