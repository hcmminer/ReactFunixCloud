import HeaderComponent from "./components/HeaderComponent";
import StaffListComponent from "./components/StaffListComponent";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import CurrentStaffComponent from "./components/CurrentStaffComponent";
import DepartmentsComponent from "./components/DepartmentsComponent";
import SalariesComponent from "./components/SalariesComponent";
import "./App.css";
import { useDispatch } from "react-redux";
import { publicRequest } from "./requestMethods";
import { staffsGeted } from "./redux/staffsRedux";
import CurrentDepartment from "./components/CurrentDepartment";

export default function App() {
    const [screen, setScreen] = useState({
        sm: 3,
        md: 6,
    });
    const dispatch = useDispatch();
    useEffect(() => {
        const getStaffs = async () => {
            try {
                const res = await publicRequest.get("staffs");
                dispatch(staffsGeted(res.data));
            } catch (err) {}
        };
        getStaffs();
    }, []);
    return (
        <BrowserRouter>
            <HeaderComponent
                screen={screen}
                setScreen={(a) => setScreen({ ...screen, sm: a, md: a })}
            />
            <Routes>
                <Route
                    path="staffs"
                    element={<StaffListComponent screen={screen} />}
                ></Route>
                <Route
                    path="staffs/:staffId"
                    element={<CurrentStaffComponent page="staffs" />}
                ></Route>
                <Route
                    path="departments/:departmentId/:staffId"
                    element={<CurrentStaffComponent page="depar" />}
                ></Route>
                <Route
                    path="departments"
                    element={<DepartmentsComponent />}
                ></Route>
                <Route
                    path="departments/:departmentId"
                    element={<CurrentDepartment />}
                ></Route>
                <Route path="salaries" element={<SalariesComponent />}></Route>
                <Route
                    path="/"
                    element={<Navigate to="/staffs" replace={true} />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}
