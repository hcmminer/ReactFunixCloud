import React from "react";
import { useState } from "react";
import { DEPARTMENTS } from "../staffs";

const NewStaff = ({ setIsNewStaffForm, setStaffs, staffs }) => {
    const [newStaff, setNewStaff] = useState({
        id: "",
        name: "",
        doB: "",
        salaryScale: "",
        startDate: "",
        department: "",
        annualLeave: "",
        overTime: "",
        image: "/assets/images/alberto.png",
    });
    const [validate, setValidate] = useState({
        id: "this field is required",
        name: "this field is required",
        doB: "this field is required",
        salaryScale: "this field is required",
        startDate: "this field is required",
        department: "this field is required",
        annualLeave: "this field is required",
        overTime: "this field is required",
        image: "the default image is using",
    });

    const [errors, setErrors] = useState(true)

    return (
        <div className="border p-2 sm:p-4 md:p-6 relative">
            <span className="block mb-2 -mt-5 -ml-4 text-sm font-medium text-blue-700">
                Thêm mới nhân viên:
            </span>
            <span
                onClick={() => setIsNewStaffForm("hidden")}
                className="absolute px-2 cursor-pointer top-0 right-0 border-2 bg-black text-white"
            >
                X
            </span>
            <div className="grid sm:grid-cols-2 gap-2">
                <div className="">
                    <label
                        htmlFor="username-success"
                        className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                    >
                        ID
                    </label>
                    <input
                        type="number"
                        id=""
                        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 "
                        placeholder="ID"
                        onChange={(e) => {
                            let checkUniquie = staffs.find(
                                (item) => item.id == e.target.value
                            );
                            if (Boolean(checkUniquie)) {
                                setValidate({
                                    ...validate,
                                    id: "id must be uniquie",
                                });
                            } else {
                                setValidate({ ...validate, id: null });
                            }
                            setErrors(false)
                            setNewStaff({ ...newStaff, id: Number(e.target.value) });
                        }}
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-green-500">
                        {validate.id}
                    </p>
                </div>

                <div>
                    <label
                        htmlFor="username-success"
                        className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                    >
                        Họ và tên:
                    </label>
                    <input
                        type="text"
                        id=""
                        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                        placeholder="Họ và tên"
                        onChange={(e) => {
                            e.target.value == ""
                                ? setValidate({
                                    ...validate,
                                    name: "this field is required",
                                })
                                : setValidate({ ...validate, name: null });

                            setErrors(false)
                            setNewStaff({ ...newStaff, name: e.target.value });
                        }}
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-green-500">
                        {validate.name}
                    </p>
                </div>
                <div>
                    <label
                        htmlFor="username-success"
                        className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                    >
                        Ngày sinh:
                    </label>
                    <input
                        onChange={(e) => {
                            e.target.value == ""
                                ? setValidate({
                                    ...validate,
                                    doB: "this field is required",
                                })
                                : setValidate({ ...validate, doB: null });
                            setErrors(false)
                            setNewStaff({ ...newStaff, doB: e.target.value });
                        }}
                        type="date"
                        id="username-success"
                        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-green-500">
                        {validate.doB}
                    </p>
                </div>
                <div>
                    <label
                        htmlFor="username-success"
                        className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                    >
                        Bậc lương:
                    </label>
                    <input
                        onChange={(e) => {
                            if (e.target.value == "") {
                                setValidate({
                                    ...validate,
                                    salaryScale: "salary scale is required",
                                });
                            } else {
                                setValidate({ ...validate, salaryScale: null });
                            }
                            setErrors(false)
                            setNewStaff({
                                ...newStaff,
                                salaryScale: e.target.value,
                            });
                        }}
                        type="number"
                        id="username-success"
                        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-green-500">
                        {validate.salaryScale}
                    </p>
                </div>

                <div>
                    <label
                        htmlFor="username-success"
                        className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                    >
                        Ngày vào công ty:
                    </label>
                    <input
                        onChange={(e) => {
                            if (e.target.value == "") {
                                setValidate({
                                    ...validate,
                                    startDate: "start date is required",
                                });
                            } else {
                                setValidate({ ...validate, startDate: null });
                            }
                            setErrors(false)
                            setNewStaff({
                                ...newStaff,
                                startDate: e.target.value,
                            });
                        }}
                        type="date"
                        id="username-success"
                        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-green-500">
                        {validate.startDate}
                    </p>
                </div>
                <div>
                    <label
                        htmlFor="username-success"
                        className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                    >
                        Phòng ban:
                    </label>
                    <select
                        onChange={(e) => {
                            if (e.target.value == "") {
                                setValidate({
                                    ...validate,
                                    department: "department  is required",
                                });
                            } else {
                                setValidate({ ...validate, department: null });
                            }
                            setErrors(false)
                            setNewStaff({
                                ...newStaff,
                                department: e.target.value,
                            });
                        }}
                        className="px-2 py-2 mr-2 rounded-md bg-black border-transparent focus:border-gray-500 text-white focus:ring-0 text-sm"
                    >
                        <option value=''>
                            Phòng ban
                        </option>
                        {DEPARTMENTS.map((item, key) => (
                            <option key={key} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <p className="mt-2 text-sm text-red-600 dark:text-green-500">
                        {validate.department}
                    </p>
                </div>
                <div>
                    <label
                        htmlFor="username-success"
                        className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                    >
                        Số ngày nghỉ phép còn lại:
                    </label>
                    <input
                        onChange={(e) => {
                            if (e.target.value == "") {
                                setValidate({
                                    ...validate,
                                    annualLeave: "annual leave  is required",
                                });
                            } else {
                                setValidate({ ...validate, annualLeave: null });
                            }
                            setErrors(false)
                            setNewStaff({
                                ...newStaff,
                                annualLeave: e.target.value,
                            });
                        }}
                        type="number"
                        id="username-success"
                        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-green-500">
                        {validate.annualLeave}
                    </p>
                </div>
                <div>
                    <label
                        htmlFor="username-success"
                        className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                    >
                        Số ngày tăng ca:
                    </label>
                    <input
                        onChange={(e) => {
                            if (e.target.value == "") {
                                setValidate({
                                    ...validate,
                                    overTime: "over time  is required",
                                });
                            } else {
                                setValidate({ ...validate, overTime: null });
                            }
                            setErrors(false)
                            setNewStaff({
                                ...newStaff,
                                overTime: e.target.value,
                            });
                        }}
                        type="number"
                        id="username-success"
                        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-green-500">
                        {validate.overTime}
                    </p>
                </div>
                <div>
                    <label
                        htmlFor="username-success"
                        className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                    >
                        Ảnh đại diện:
                    </label>
                    <input
                        onChange={(e) => {
                            if (e.target.value == "") {
                                setValidate({
                                    ...validate,
                                    image: "image is required",
                                });
                            } else {
                                setValidate({ ...validate, image: null });
                            }
                            setNewStaff({
                                ...newStaff,
                                image: e.target.value,
                            });
                        }}
                        type="file"
                        id="username-success"
                        className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-green-500">
                        {validate.image}
                    </p>
                </div>
            </div>
            <div>
                <button
                    onClick={() => {
                        if (errors == false) {
                            setStaffs(newStaff);
                            setIsNewStaffForm("hidden");
                        }
                    }}
                    className="p-2 mt-4 border rounded-md bg-green-600"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};
export default NewStaff;
