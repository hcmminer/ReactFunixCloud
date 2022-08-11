import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { staffsGeted } from "../redux/staffsRedux";
import { publicRequest } from "../requestMethods";
import NewStaff from "./NewStaff";

const StaffListComponent = ({ screen }) => {
    const staffs = useSelector((state) => state.staffs.staffs);
    const [isNewStaffForm, setIsNewStaffForm] = useState("hidden");
    const [toEditForm, setToEditForm] = useState("Thêm Nhân Viên:");
    const [idStaffEdit, setIdStaffEdit] = useState(null);
    const [deleteStatus, setDeleteStatus] = useState(false);
    console.log(
        "🚀 => file: StaffListComponent.jsx => line 15 => StaffListComponent => deleteStatus",
        deleteStatus
    );
    const resString = `grid gap-4 grid-cols-2 sm:grid-cols-${screen.sm} md:grid-cols-${screen.md}`;
    const dispatch = useDispatch();
    useEffect(() => {
        const getStaffs = async () => {
            try {
                const res = await publicRequest.get("staffs");
                dispatch(staffsGeted(res.data));
                console.log(
                    "🚀 => file: StaffListComponent.jsx => line 22 => getStaffs => res",
                    res.data
                );
            } catch (err) {
                console.log(err);
            }
        };
        getStaffs();
    }, [deleteStatus]);
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
                            <div
                                onClick={() => setIsNewStaffForm("")}
                                className="hover:text-blue-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 cursor-pointer"
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
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="mx-6">
                    <div className={resString}>
                        {staffs.map((item, key) => (
                            <div
                                className="capitalize cursor-pointer hover:bg-green-400 shadow-lg hover:text-white transform  hover:z-40"
                                key={key}
                            >
                                <div className="relative group">
                                    <Link
                                        to={`/staffs/${item.id}`}
                                        className=""
                                    >
                                        <img
                                            className="mx-auto "
                                            src={"../src" + item.image}
                                            alt={item.name}
                                        />
                                        <div className="text-center">
                                            {item.name}
                                        </div>
                                    </Link>
                                    <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block ">
                                        <div className="flex">
                                            <div
                                                onClick={() => {
                                                    setIsNewStaffForm("");
                                                    setToEditForm(
                                                        "Chỉnh Sửa Nhân Viên:"
                                                    );
                                                    setIdStaffEdit(item.id);
                                                }}
                                                className="mr-4 p-4 hover:text-blue-600 border-2 rounded-3xl hover:bg-black"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                </svg>
                                            </div>
                                            <div
                                                onClick={() => {
                                                    setDeleteStatus(fa)
                                                    publicRequest
                                                        .delete(
                                                            `staffs/${item.id}`
                                                        )
                                                        .then((resolve) => {
                                                            resolve &&
                                                                setDeleteStatus(
                                                                    true
                                                                );
                                                        });
                                                }}
                                                className="p-4 hover:text-red-500 border-2 rounded-full hover:bg-black"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
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
                    className={`${isNewStaffForm} absolute bg-gray-400 top-0 left-1/2 transform -translate-x-1/2 z-50`}
                >
                    <NewStaff
                        setIsNewStaffForm={(a) => setIsNewStaffForm(a)}
                        toEditForm={toEditForm}
                        setToEditForm={(e) => setToEditForm(e)}
                        idStaffEdit={idStaffEdit}
                        setIdStaffEdit={(e) => setIdStaffEdit(e)}
                    />
                </div>
            </div>
        );
    }
};

export default StaffListComponent;
