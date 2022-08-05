import { configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsRedux";

const rootReducer = combineReducers({staff: staf });

export default configureStore({
    reducer: {
        staffs: staffsReducer,
    },
});
