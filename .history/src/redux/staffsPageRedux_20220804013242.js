import { createSlice } from "@reduxjs/toolkit";


export const staffsPageSlice = createSlice({
    name: "staffsPage",
    initialState: { staffs: [] },
    reducers: {
        staffNew: (state, action) => {
            state.value.push(action.payload);
        },
        staffsSearched: (state, action) => {
            if (action.payload == "") {
                state.value = STAFFS;
            } else {
                const newState = state.value.filter((item) =>
                    item.name
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                );
                state.value = newState;
            }
        },
        staffsSorted: (state, action) => {
            if (action.payload == "idDec") {
                state.value.sort((a, b) => b.id - a.id);
            } else if (action.payload == "salaryDec") {
                state.value.sort((a, b) => calSalary(b) - calSalary(a));
            } else if (action.payload == "default") {
                state.value.sort((a, b) => -b.id + a.id);
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { staffNew, staffsSearched, staffsSorted } = staffsSlice.actions;

export default staffsPageSlice.reducer;
