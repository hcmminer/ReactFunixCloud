import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const HeaderComponent = ({ setScreen }) => {
    return (
        <div>
            <div className=" bg-gradient-to-tr from-green-700 to-lime-400 p-4 px-4  hover:bg-red-600">
                <h1 className="text-yellow-50 text-center text-xl">
                    Ứng dụng quản lý nhân sự v1.0
                </h1>
                <hr className="m-4 border-t-2"></hr>
                <div className="m-1 mx-4">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="">
                            <img className="w-16 h-16 animate-spin" src={logo} alt="" />
                        </div>
                        <div className="col-span-10 flex items-center justify-center text-xl text-pink-600 hover:text-green-600">
                            <div className="pr-4 hover:text-white hover:text-3xl">
                                <Link to="staffs">Nhân viên</Link>
                            </div>
                            <div className="pr-4 hover:text-white hover:text-3xl">
                                <Link to="departments">Phòng Ban</Link>
                            </div>
                            <div className="pr-4 hover:text-white hover:text-3xl">
                                <Link to="salaries">Bảng Lương</Link>
                            </div>
                        </div>
                        <div className="">
                            <div className="p-1 text-rose-700 justify-center flex flex-row items-center">
                                <label
                                    className="cursor-pointer flex flex-row items-center text-pink-400"
                                    htmlFor="setcol"
                                >
                                    <span className="text-xl animate-spin -mr-2 mt-4">
                                        &#9881;
                                    </span>
                                </label>
                                <input
                                    onChange={(e) =>
                                        e.target.value != "" &&
                                        setScreen(e.target.value)
                                    }
                                    type="number"
                                    id="setcol"
                                    placeholder="1...12"
                                    className=" animate-bounce text-center border-2 border-red-500 rounded-full text-red-600  w-20 placeholder-gray-600"
                                />
                                <label
                                    className="cursor-pointer flex flex-row items-center text-pink-400"
                                    htmlFor="setcol"
                                >
                                    <span className="text-xl animate-spin -ml-2 mt-4">
                                        &#9881;
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
