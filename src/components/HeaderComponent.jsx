import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchBarComponent from "./SearchBarComponent";

const HeaderComponent = ({ setScreen, setStaffs, setSortStaffs }) => {
    const location = useLocation();
    const activeLink = location.pathname;
    let rightMenu;
    if (activeLink == "/staffs") {
        rightMenu = (
            <div className="col-span-2 p-1 text-black flex items-center justify-end">
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
    } else if (activeLink === "/salaries") {
        rightMenu = (
            <div className=" col-span-2 hidden md:flex items-center justify-end">
                <select
                    onChange={(e) => setSortStaffs(e.target.value)}
                    className="px-2 py-2 mr-2 rounded-md bg-black border-transparent focus:border-gray-500 text-white focus:ring-0 text-sm"
                >
                    <option value="sort">Sắp xếp</option>
                    <option value="id-inc">ID giảm dần</option>
                    <option value="salary-dec">Lương giảm dần</option>
                </select>
                <button className="px-2 py-2 bg-black text-white text-sm font-medium rounded-md">
                    Reset
                </button>
            </div>
        );
    }
    return (
        <div>
            <div className=" bg-gradient-to-tr from-green-700 to-lime-400 p-4 px-4  hover:bg-red-600">
                <div className="flex justify-between items-center mx-4">
                    <h1 className="bg-gray-900 rounded-md border-2 text-white p-2 transform -skew-x-12 text-center text-xl">
                        Ứng dụng quản lý nhân sự v1.0
                    </h1>
                    <SearchBarComponent setStaffs={(e) => setStaffs(e)} />
                </div>
                <hr className="m-4 border-t-2"></hr>
                <div className="m-1 mx-4 ">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-2">
                            <img
                                className="w-16 h-16 animate-spin"
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <div className="col-span-8 flex items-center justify-center text-xl text-pink-600 hover:text-green-600">
                            <div className="pr-4 hover:text-white">
                                <Link
                                    className={
                                        activeLink.includes("/staffs")
                                            ? "text-white"
                                            : null
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
                                            : null
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
                                            : null
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
