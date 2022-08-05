import { createSlice } from "@reduxjs/toolkit";

export const departmentsPageSlice = createSlice({
    name: "DepartmentsPage",
    initialState: { departments: [] },
    reducers: {
        departmentsGeted: (state, action) => {
            state.staffs = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { de } =
    departmentsPageSlice.actions;

export default departmentsPageSlice.reducer;
