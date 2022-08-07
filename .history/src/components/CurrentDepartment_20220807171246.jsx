import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { staffsGeted } from "../redux/staffsRedux";
import { publicRequest } from "../requestMethods";

const CurrentDepartment = () => {
    const departments = useSelector((state) => state.departments.departments);
    const staffs = useSelector((state) => state.staffs.staffs);
    const 
    useEffect(() => {
        const getStaffs = async () => {
            try {
                const res = await publicRequest.get("staffs");
                dispatch(staffsGeted(res.data));
            } catch (err) {
                console.log(err);
            }
        };
        getStaffs();
    }, []);

    const { departmentId } = useParams();
    const CurrentDepartment = departments.filter(
        (item) => item.id === departmentId
    )[0];
    const currentDepartmentStaffs = staffs.filter(
        (item) => item.departmentId === departmentId
    );
    return (
        <>
            <nav className="bg-gray-100 px-5 py-3 mx-6 text-lg">
                <ol className="flex">
                    <li>
                        <Link
                            to="/departments"
                            className="text-blue-600 hover:text-blue-700"
                        >
                            Phòng ban
                        </Link>
                    </li>
                    <li>
                        <span className="text-gray-500 mx-2">/</span>
                    </li>
                    <li className="text-gray-500">{CurrentDepartment.name}</li>
                </ol>
            </nav>
            <div className="">
                <div className="mx-6">
                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                        {currentDepartmentStaffs.map((item, key) => (
                            <div
                                className="capitalize cursor-pointer hover:bg-green-400 shadow-lg hover:text-white transform  hover:-skew-x-12 hover:z-40 hover:scale-110"
                                key={key}
                            >
                                <Link to={`${item.id}`}>
                                    <img
                                        className="mx-auto "
                                        src={"../src" + item.image}
                                        alt={item.name}
                                    />
                                </Link>
                                <div className="text-center">{item.name}</div>
                            </div>
                        ))}
                    </div>
                    <div className="pt-4 text-pink-500 italic text-lg">
                        Bấm vào tên nhân viên để xem thông tin
                    </div>
                </div>
            </div>
        </>
    );
};

export default CurrentDepartment;
