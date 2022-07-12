import { useParams } from "react-router-dom";
import { STAFFS } from "../staffs";
import dateFormat from "dateformat";

const CurrentStaffComponent = function () {
    const { staffId } = useParams();
    const currentStaff = STAFFS.filter(
        (item) => item.id === parseInt(staffId, 10)
    )[0];
    if (currentStaff != null) {
        return (
            <div className="">
                <img src="./src/assets/images/daigia.jpg" alt="" />
                <div className="mx-auto">
                    <img
                        src={'../src' + currentStaff.image}
                        alt={currentStaff.name}
                    />
                </div>
                <div className="transform hover:scale-110 p-4 mt-4 border rounded-md bg-gradient-to-br from-purple-300 text-gray-900 hover:text-red-600 text-center">
                    <h1 className="text-lg font-bold">
                        Họ và tên:{" "}
                        <span className="capitalize">{currentStaff.name}</span>
                    </h1>
                    <div className="">
                        Ngày sinh: {dateFormat(currentStaff.doB, "dd/mm/yyyy")}
                    </div>
                    <div className="">
                        Ngày vào công ty:{" "}
                        {dateFormat(currentStaff.startDate, "dd/mm/yyyy")}
                    </div>
                    <div>Phòng ban: {currentStaff.department.name}</div>
                    <div>Số ngày nghỉ còn lại: {currentStaff.annualLeave}</div>
                    <div>Số ngày đã làm thêm: {currentStaff.overTime}</div>
                </div>
            </div>
        );
    }
};

export default CurrentStaffComponent;
