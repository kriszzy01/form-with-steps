import React from "react";
import { render } from "react-dom";
import { formReducer, FormDataProvider } from "./context"
import App from "./App";

render(
    <FormDataProvider reducer={formReducer}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </FormDataProvider>,
    document.querySelector("#root")
);