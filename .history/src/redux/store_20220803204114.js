import { configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsRedux";

const rootReducer = combineReducers({staff: staffsReducer });

export default configureStore({
    reducer: {
        staffs: staffsReducer,
    },
});
