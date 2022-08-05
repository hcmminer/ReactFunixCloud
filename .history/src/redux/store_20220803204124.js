import { configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsRedux";

const rootReducer = combineReducers({staffs: staffsReducer });

export default configureStore({
    reducer: {
        staffs: staffsReducer,
    },
});
