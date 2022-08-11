import HeaderComponent from "./components/HeaderComponent";
import StaffListComponent from "./components/StaffListComponent";
import {
    BrowserRouter,
    Navigate,
    Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { useState } from "react";
import CurrentStaffComponent from "./components/CurrentStaffComponent";
import DepartmentsComponent from "./components/DepartmentsComponent";
import SalariesComponent from "./components/SalariesComponent";
import "./App.css";
import CurrentDepartment from "./components/CurrentDepartment";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function App() {
    const [screen, setScreen] = useState({
        sm: 3,
        md: 5,
    });
    const location = useLocation();
    return (
        <BrowserRouter>
            <HeaderComponent
                screen={screen}
                setScreen={(a) => setScreen({ ...screen, sm: a, md: a })}
            />
            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                >
                    {/* <Router location={location}> */}
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
                            element={
                                <CurrentStaffComponent page="department" />
                            }
                        ></Route>
                        <Route
                            path="departments"
                            element={<DepartmentsComponent />}
                        ></Route>
                        <Route
                            path="departments/:departmentId"
                            element={<CurrentDepartment />}
                        ></Route>
                        <Route
                            path="salaries"
                            element={<SalariesComponent />}
                        ></Route>
                        <Route
                            path="/"
                            element={<Navigate to="/staffs" replace={true} />}
                        ></Route>
                    </Routes>
                    {/* </Router> */}
                </CSSTransition>
            </TransitionGroup>
        </BrowserRouter>
    );
}
