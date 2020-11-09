import React, {
    useContext,
    createContext,
    useReducer
} from "react";

import { initialFormState, formReducer} from "./reducer";
import { FormState, Action} from "../types"

const formDataContext = createContext<[FormState, React.Dispatch<Action>]>([
    initialFormState,
    () => initialFormState
]);

interface FormDataProviderProps {
    children: React.ReactNode;
    reducer: React.Reducer<FormState, Action>
}

export const FormDataProvider: React.FC<FormDataProviderProps> = ({
    children, 
    reducer
}) => {
    const [state, dispatch] = useReducer(formReducer, initialFormState);

    return (
        <formDataContext.Provider value={[state, dispatch]}>
            {children}
        </formDataContext.Provider>
    );
};

export const useFormContext = () => useContext(formDataContext);