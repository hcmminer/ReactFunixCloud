import { createSlice } from "@reduxjs/toolkit";
const calSalary = (item) => {
    let total = item.salaryScale * 3000000 + item.overTime * 200000;
    return total;
};

export const salariesPageSlice = createSlice({
    name: "SalariesPage",
    initialState: { staffs: [] },
    reducers: {
       
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
export const { staffsSorted } = salariesPageSlice.actions;

export default salariesPageSlice.reducer;
