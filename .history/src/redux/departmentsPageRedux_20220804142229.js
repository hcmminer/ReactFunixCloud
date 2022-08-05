import { createSlice } from "@reduxjs/toolkit";

export const departmentsPageSlice = createSlice({
    name: "DepartmentsPage",
    initialState: { c: [] },
    reducers: {
        departmentsGeted: (state, action) => {
            state.departments = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { departmentsGeted } = departmentsPageSlice.actions;

export default departmentsPageSlice.reducer;
