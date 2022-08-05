import { Link, useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CurrentStaffComponent = function () {
    const staffs = useSelector((state) => state.staffs);
    const departments = useSelector((state) => state.departments);
    const { staffId } = useParams();
    useEffect(() => {
        const 
        const getStaffs = async () => {
            try {
                const res = await publicRequest.get("staffs");
                dispatch(staffsGeted(res.data));
            } catch (err) {}
        };
        getStaffs();
    });
    const currentStaff = staffs.filter(
        (item) => item.id === parseInt(staffId, 10)
    )[0];
    if (currentStaff != null) {
        return (
            <>
                <nav className="bg-gray-100 px-5 py-3 mx-6 text-lg">
                    <ol className="flex">
                        <li>
                            <Link
                                to="/staffs"
                                className="text-blue-600 hover:text-blue-700"
                            >
                                Nhân viên
                            </Link>
                        </li>
                        <li>
                            <span className="text-gray-500 mx-2">/</span>
                        </li>
                        <li className="text-gray-500">{currentStaff.name}</li>
                    </ol>
                </nav>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 bg-gradient-to-br from-purple-300 mx-6 ">
                    <div className="mx-auto sm:mx-0">
                        <img
                            className="h-full object-cover"
                            src={"../src" + currentStaff.image}
                            alt={currentStaff.name}
                        />
                    </div>
                    <div className="mx-auto  text-gray-900 hover:text-red-600 p-4 text-xl">
                        <h1 className="font-bold mb-2 italic">
                            <span className="text-black">Họ và tên: </span>
                            <span className="capitalize">
                                {currentStaff.name}
                            </span>
                        </h1>
                        <div className="mb-2 italic">
                            <span className="text-black">Ngày sinh: </span>{" "}
                            {dateFormat(currentStaff.doB, "dd/mm/yyyy")}
                        </div>
                        <div className="mb-2 italic">
                            <span className="text-black">
                                {" "}
                                Ngày vào công ty:{" "}
                            </span>
                            {dateFormat(currentStaff.startDate, "dd/mm/yyyy")}
                        </div>
                        <div className="mb-2 italic">
                            <span className="text-black">Phòng ban: </span>
                            {currentStaff.departmentId}
                        </div>
                        <div className="mb-2 italic">
                            <span className="text-black">
                                Số ngày nghỉ còn lại:{" "}
                            </span>
                            {currentStaff.annualLeave}
                        </div>
                        <div className="mb-2 italic">
                            <span className="text-black">
                                {" "}
                                Số ngày đã làm thêm:{" "}
                            </span>
                            {currentStaff.overTime}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default CurrentStaffComponent;
