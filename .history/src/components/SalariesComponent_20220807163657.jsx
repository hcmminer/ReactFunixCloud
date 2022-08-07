import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { staffsGeted } from "../redux/staffsRedux";
import { publicRequest } from "../requestMethods";
const SalaryCard = ({ item }) => {
    const formatterVn = new Intl.NumberFormat("VN", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
    });

    const salaryVn = formatterVn.format(
        item.salaryScale * 3000000 + item.overTime * 200000
    );

    return (
        <div className="border-2 rounded-lg bg-gray-100 pb-4">
            <div className="text-lg text-black font-bold pt-1 pl-2">
                {item.name}
            </div>
            <div className="px-4 pt-2">Mã nhân viên: {item.id}</div>
            <div className="px-4 pt-2">Hệ số lương: {item.salaryScale}</div>
            <div className="px-4 pt-2">Số ngày làm thêm: {item.overTime}</div>
            <div className="mx-4 px-4 py-2 bg-gray-200 italic font-serif">
                Lương: {salaryVn}
            </div>
        </div>
    );
};
const SalariesComponent = () => {
    const staffs = useSelector((state) => state.staffs.staffs);
    const dispatch = useDispatch();
    useEffect(() => {
        const getStaffs = async () => {
            try {
                const res = await publicRequest().get("staffs");
                console.log(
                    "🚀 => file: SalariesComponent.jsx => line 38 => getStaffs => res",
                    res
                );
                dispatch(staffsGeted(res.data));
            } catch (error) {}
        };
        getStaffs();
    }, []);

    return (
        <div className="mx-6">
            <nav className="bg-gray-100 px-5 py-3 text-lg">
                <ol className="flex">
                    <li>
                        <Link
                            to="/staffs"
                            className="text-blue-600 hover:text-blue-700"
                        >
                            Nhân Viên
                        </Link>
                    </li>
                    <li>
                        <span className="text-gray-500 mx-2">/</span>
                    </li>
                    <li className="text-gray-500">Bảng Lương</li>
                </ol>
            </nav>
            <div className="grid gap-4 grid-col-1 sm:grid-cols-2 md:grid-cols-3 mt-2">
                {staffs.map((item, key) => {
                    return <SalaryCard item={item} key={key} />;
                })}
            </div>
        </div>
    );
};

export default SalariesComponent;
