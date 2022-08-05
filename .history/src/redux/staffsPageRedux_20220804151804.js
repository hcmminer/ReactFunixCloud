import { createSlice } from "@reduxjs/toolkit";

export const staffsPageSlice = createSlice({
    name: "StaffsPage",
    initialState: { staffs: [], departments: [] },
    reducers: {
        staffsGeted: (state, action) => {
            state.staffs = action.payload;
        },
        departmentsGeted
        staffNew: (state, action) => {
            state.staffs.push(action.payload);
        },
        staffsSearched: (state, action) => {
            if (action.payload == "") {
                state.staffs = STAFFS;
            } else {
                const newState = state.staffs.filter((item) =>
                    item.name
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                );
                state.staffs = newState;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { staffsGeted, staffNew, staffsSearched } =
    staffsPageSlice.actions;

export default staffsPageSlice.reducer;
