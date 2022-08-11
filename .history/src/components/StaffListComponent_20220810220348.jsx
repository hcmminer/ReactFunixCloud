import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NewStaff from "./NewStaff";

const StaffListComponent = ({ screen }) => {
    const staffs = useSelector((state) => state.staffs.staffs);
    const [isNewStaffForm, setIsNewStaffForm] = useState("hidden");
    const resString = `grid gap-4 grid-cols-2 sm:grid-cols-${screen.sm} md:grid-cols-${screen.md}`;
    if (staffs) {
        return (
            <div className=" bg-cyan-50 relative">
                <nav className="bg-gray-100 px-5 mb-2 py-3 mx-6 text-lg">
                    <ol className="flex justify-between">
                        <li>
                            <Link
                                to="/staffs"
                                className="text-blue-600 hover:text-blue-700"
                            >
                                Nhân viên
                            </Link>
                        </li>
                        <li className="border px-2 bg-gray-400 rounded-lg">
                            <Link
                                onClick={() => setIsNewStaffForm("")}
                                to="/staffs"
                                className="hover:text-blue-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={4}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            </Link>
                        </li>
                    </ol>
                </nav>
                <div className=" mx-6">
                    <div className={resString}>
                        {staffs.map((item, key) => (
                            <div
                                className="capitalize cursor-pointer hover:bg-green-400 shadow-lg hover:text-white transform  hover:-skew-x-12 hover:z-40 hover:scale-110"
                                key={key}
                            >
                                <div className="">
                                    <Link to={`/staffs/${item.id}`}>
                                        <img
                                            className="mx-auto "
                                            src={"../src" + item.image}
                                            alt={item.name}
                                        />
                                        <div className="text-center">
                                            {item.name}
                                        </div>
                                    </Link>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pt-4 text-pink-500 italic text-lg">
                        Bấm vào ảnh nhân viên để xem thông tin
                    </div>
                </div>
                <div
                    id="newstaff"
                    className={`${isNewStaffForm} absolute bg-gray-400 top-0 left-1/2 transform -translate-x-1/2`}
                >
                    <NewStaff setIsNewStaffForm={(a) => setIsNewStaffForm(a)} />
                </div>
            </div>
        );
    }
};

export default StaffListComponent;
