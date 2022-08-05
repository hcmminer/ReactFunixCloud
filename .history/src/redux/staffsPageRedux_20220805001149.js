import { createSlice } from "@reduxjs/toolkit";
import { STAFFS } from "../staffs";

export const staffsPageSlice = createSlice({
    name: "StaffsPage",
    initialState: {
        staffs: [
            {
                id: 0,
                name: "Nguyễn Văn A",
                doB: "1999-01-01T08:59:00.000Z",
                salaryScale: 1.1,
                startDate: "2019-04-30T08:59:00.000Z",
                departmentId: "Dept01",
                annualLeave: 1,
                overTime: 1,
                image: "/assets/images/alberto.png",
                salary: 3500000,
            },
        ],
        departments: [],
    },
    reducers: {
        staffsGeted: (state, action) => {
            state.staffs = action.payload;
        },
        departmentsGeted: (state, action) => {
            state.departments = action.payload;
        },
        staffsSearched: (state, action) => {
            if (action.payload != "") {
                state.staffs = state.staffs.filter((item) =>
                    item.name.toLowerCase().includes(action.payload.toLowerCase)
                );
            }
            return state;
        },
        staffNew: (state, action) => {
            state.staffs.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { staffsGeted, departmentsGeted, staffNew, staffsSearched } =
    staffsPageSlice.actions;

export default staffsPageSlice.reducer;
