import { createSlice } from "@reduxjs/toolkit";

export const departmentsPageRedux = createSlice({
    name: "StaffsPage",
    initialState: { staffs: [] },
    reducers: {
        staffsGeted: (state, action) => {
            state.staffs = action.payload;
        },
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
