import { configureStore } from "@reduxjs/toolkit";
import staffsReducer from "../features/staffsSlice";

export default configureStore({
    reducer: {
        staffs: staffsReducer,
    },
});
