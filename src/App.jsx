import HeaderComponent from "./components/HeaderComponent";
import StaffListComponent from "./components/StaffListComponent";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CurrentStaffComponent from "./components/CurrentStaffComponent";
import DepartmentsComponent from "./components/DepartmentsComponent";
import SalariesComponent from "./components/SalariesComponent";
import "./App.css";
import { STAFFS } from "./staffs";
export default function App() {
    const [screen, setScreen] = useState({
        sm: 3,
        md: 6,
    });

    const [staffs, setStaffs] = useState(STAFFS);

    const changeScreen = (a) => {
        setScreen({
            ...screen,
            sm: a,
            md: a,
        });
    };

    return (
        <BrowserRouter>
            <HeaderComponent
                screen={screen}
                setScreen={(a) => changeScreen(a)}
            />
            <Routes>
                <Route
                    path="staffs"
                    element={<StaffListComponent screen={screen} />}
                ></Route>
                <Route
                    path="staffs/:staffId"
                    element={<CurrentStaffComponent />}
                ></Route>
                <Route
                    path="departments"
                    element={<DepartmentsComponent />}
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
