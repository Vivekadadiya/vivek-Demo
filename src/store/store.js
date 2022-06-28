import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducer/formReducer";

export default configureStore({
    reducer: {
        products: formReducer
    }
});