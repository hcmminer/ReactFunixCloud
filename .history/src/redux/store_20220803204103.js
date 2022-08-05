import { configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsRedux";

const rootReducer = combineReducers({ });

export default configureStore({
    reducer: {
        staffs: staffsReducer,
    },
});
