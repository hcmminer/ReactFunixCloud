import HeaderComponent from "./components/HeaderComponent";
import StaffListComponent from "./components/StaffListComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CurrentStaffComponent from "./components/CurrentStaffComponent";

export default function App() {
    const [screen, setScreen] = useState({
        sm: 3,
        md: 6,
    });

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
            </Routes>
        </BrowserRouter>
    );
}
