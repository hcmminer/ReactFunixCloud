import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchBarComponent from "./SearchBarComponent";
import { useDispatch, useSelector } from "react-redux";
import { staffsSortByChanged, staffsSorted } from "../redux/staffsRedux";
import { useEffect } from "react";

// NOTE: state thay đổi thì chỉ 1 phần DOM render lại; trong hàm xử lý event thì mọi đối số ref tới state đều là st
const HeaderComponent = ({ setScreen }) => {
    const sortBy = useSelector((state) => state.staffs.sortBy);
    const dispatch = useDispatch();
    const [currentSearchInput, setCurrentSearchInput] = useState("");
    const location = useLocation();
    const activeLink = location.pathname;
    useEffect(() => {
        dispatch(staffsSorted(sortBy));
    }, [sortBy]);
    let rightMenu;
    // set screen component
    if (activeLink == "/staffs") {
        rightMenu = (
            <div className="hidden col-span-2 p-1 text-black sm:flex items-center justify-end">
                <label
                    className="cursor-pointer flex flex-row items-center "
                    htmlFor="setcol"
                >
                    <span className="text-xl animate-spin -mr-2 mt-4">
                        &#9881;
                    </span>
                </label>
                <input
                    onChange={(e) =>
                        e.target.value != "" && setScreen(e.target.value)
                    }
                    type="number"
                    id="setcol"
                    placeholder="1...12"
                    className="bg-gray-900 animate-bounce text-center border-2 border-black rounded-full focus:text-white w-20"
                />
                <label
                    className="cursor-pointer flex flex-row items-center"
                    htmlFor="setcol"
                >
                    <span className="text-xl animate-spin -ml-2 mt-4">
                        &#9881;
                    </span>
                </label>
            </div>
        );
        //sort salaries component
    } else if (activeLink === "/salaries") {
        rightMenu = (
            <div className="sm:col-span-2 hidden md:flex items-center justify-end">
                <select
                    onChange={(e) => {
                        dispatch(staffsSortByChanged(e.target.value));
                    }}
                    value={sortBy}
                    className="px-2 py-2 mr-2 rounded-md bg-black border-transparent focus:border-gray-500 text-white focus:ring-0 text-sm"
                >
                    <option value="default">Sắp xếp</option>
                    <option value="idDec">ID giảm dần</option>
                    <option value="salaryDec">Lương giảm dần</option>
                </select>
                <button
                    onClick={() => {
                        dispatch(staffsSortByChanged("default")); //
                    }}
                    className="px-2 py-2 bg-black text-white text-sm font-medium rounded-md"
                >
                    Reset
                </button>
            </div>
        );
    }
    let rightHeader;
    if (activeLink == "/staffs") {
        rightHeader = (
            <SearchBarComponent
                currentSearchInput={currentSearchInput}
                setCurrentSearchInput={(e) => setCurrentSearchInput(e)}
            />
        );
    } else {
        rightHeader = null;
    }

    return (
        <div>
            <div className=" bg-gradient-to-tr from-green-700 to-lime-400 p-4 px-4  hover:bg-red-600">
                <div className="flex justify-between items-center mx-4">
                    <h1 className="mx-auto md:mx-0 bg-gray-900 rounded-md border-2 text-white p-2 transform -skew-x-12 text-center text-xl">
                        Ứng dụng quản lý nhân sự v1.0
                    </h1>
                    {rightHeader}
                </div>
                <hr className="m-4 border-t-2"></hr>
                <div className="m-1 mx-4 ">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="hidden sm:block sm:col-span-2">
                            <img
                                className="w-16 h-16 animate-spin"
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-8 flex items-center justify-center text-xl text-pink-600 hover:text-green-600">
                            <div className="pr-4 hover:text-white">
                                <Link
                                    className={
                                        activeLink.includes("/staffs")
                                            ? "text-white"
                                            : "text-red-500"
                                    }
                                    to="staffs"
                                >
                                    Nhân viên
                                </Link>
                            </div>
                            <div className="pr-4 hover:text-white ">
                                <Link
                                    className={
                                        activeLink.includes("/departments")
                                            ? "text-white"
                                            : "text-red-500"
                                    }
                                    to="departments"
                                >
                                    Phòng Ban
                                </Link>
                            </div>
                            <div className="pr-4 hover:text-white ">
                                <Link
                                    className={
                                        activeLink.includes("/salaries")
                                            ? "text-white"
                                            : "text-red-500"
                                    }
                                    to="salaries"
                                >
                                    Bảng Lương
                                </Link>
                            </div>
                        </div>
                        {rightMenu}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
