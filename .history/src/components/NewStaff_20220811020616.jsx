import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { staffsGeted } from "../redux/staffsRedux";
import { Field, Form, withFormik } from "formik";
import * as Yup from "yup";
import { publicRequest } from "../requestMethods";
import { useEffect } from "react";
import { departmentsGeted } from "../redux/departmentsRedux";

const NewStaff = ({
    setIsNewStaffForm,
    toEditForm,
    idStaffEdit,
    setIdStaffEdit,
}) => {
    const staffs = useSelector((state) => state.staffs.staffs);
    const [postStatus, setPostStatus] = useState(false);
    const [patchStatus, setPatchStatus] = useState(false);
    const [deleteStatus, setDeleteStatus] = useState(false);
    const departments = useSelector((state) => state.departments.departments);
    const dispatch = useDispatch();
    const currentStaffEdit = staffs.find((item) => item.id === idStaffEdit);
    useEffect(() => {
        const getDepartments = async () => {
            try {
                const res = await publicRequest.get("departments/");
                dispatch(departmentsGeted(res.data));
            } catch (error) {}
        };
        const getStaffs = async () => {
            try {
                const res = await publicRequest.get("staffs");
                dispatch(staffsGeted(res.data));
            } catch (err) {
                console.log(err);
            }
        };
        getStaffs();
        getDepartments();
    }, [postStatus, patchStatus, deleteStatus]);
    const NewStaffForm = (props) => {
        const { errors, touched, isSubmitting } = props;
        return (
            <div>
                <Form>
                    <div className="grid sm:grid-cols-2 gap-2">
                        <div>
                            <div className="">
                                <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                                    Name:
                                </label>
                                {touched.name && errors.name && (
                                    <p className="text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                                <Field
                                    className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 "
                                    type="string"
                                    name="name"
                                    placeholder="name"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="">
                                <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                                    Date of birth:
                                </label>
                                {touched.doB && errors.doB && (
                                    <p className="text-red-500">{errors.doB}</p>
                                )}
                                <Field
                                    className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 "
                                    type="date"
                                    name="doB"
                                    placeholder="date of birth"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                                    Salary scale:
                                </label>
                                {touched.salaryScale && errors.salaryScale && (
                                    <p className="text-red-500">
                                        {errors.salaryScale}
                                    </p>
                                )}
                                <Field
                                    className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 "
                                    type="number"
                                    name="salaryScale"
                                    placeholder="salary scale"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                                    Start date:
                                </label>
                                {touched.doB && errors.doB && (
                                    <p className="text-red-500">{errors.doB}</p>
                                )}
                                <Field
                                    className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 "
                                    type="date"
                                    name="startDate"
                                    placeholder="date of birth"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                                Department:
                            </label>
                            {touched.department && errors.department && (
                                <p className="text-red-500">
                                    {errors.department}
                                </p>
                            )}
                            <div className="">
                                <Field
                                    component="select"
                                    name="departmentId"
                                    className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100"
                                >
                                    <option value="">Department:</option>
                                    {departments.map((item, key) => {
                                        return (
                                            <option key={key} value={item.id}>
                                                {item.name}
                                            </option>
                                        );
                                    })}
                                </Field>
                            </div>
                        </div>

                        <div>
                            <div className="">
                                <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                                    AnnuallLeave:
                                </label>
                                {touched.annualLeave && errors.annualLeave && (
                                    <p className="text-red-500">
                                        {errors.annualLeave}
                                    </p>
                                )}
                                <Field
                                    className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 "
                                    type="number"
                                    name="annualLeave"
                                    placeholder="annual leave"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="">
                                <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                                    Over Time:
                                </label>
                                {touched.overTime && errors.overTime && (
                                    <p className="text-red-500">
                                        {errors.overTime}
                                    </p>
                                )}
                                <Field
                                    className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 "
                                    type="number"
                                    name="overTime"
                                    placeholder="Over Time"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="">
                                <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                                    Image:
                                </label>
                                {touched.image && errors.image && (
                                    <p className="text-red-500">
                                        {errors.image}
                                    </p>
                                )}
                                <Field
                                    className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 "
                                    type="file"
                                    name="image"
                                    placeholder="image"
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="p-2 mt-4 border rounded-md bg-green-600"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    </div>
                </Form>
            </div>
        );
    };

    // bind fomrmik
    const FormikApp = withFormik({
        mapPropsToValues({
            name,
            doB,
            salaryScale,
            startDate,
            departmentId,
            annualLeave,
            overTime,
            image,
        }) {
            if (idStaffEdit) {
                return {
                    name: currentStaffEdit.name,
                    doB: currentStaffEdit.doB,
                    salaryScale: currentStaffEdit.salaryScale,
                    startDate: currentStaffEdit.startDate,
                    departmentId:currentStaffEdit.der
                    annualLeave: currentStaffEdit
                    overTime: currentStaffEdit
                    image: currentStaffEdit
                };
            } else {
                return {
                    name: name || "",
                    doB: doB || "",
                    salaryScale: salaryScale || "",
                    startDate: startDate || "",
                    departmentId: departmentId || "",
                    annualLeave: annualLeave || "",
                    overTime: overTime || "",
                    image: image || "",
                };
            }
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Name is required"),
            doB: Yup.date().required("DOB is required"),
            salaryScale: Yup.number().required("Salary Scale is required!"),
            startDate: Yup.date().required("Start Date is required"),
            departmentId: Yup.string().required("Department is required"),
            annualLeave: Yup.number().required("Annual Leave is required"),
            overTime: Yup.number().required("Over Time is required"),
        }),
        handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
            setTimeout(() => {
                const postStaff = async () => {
                    try {
                        const res = await publicRequest.post("staffs", {
                            ...values,
                            image: "/assets/images/alberto.png",
                        });
                        setPostStatus(true);
                        resetForm();
                        setIsNewStaffForm("hidden");
                        setIdStaffEdit(null);
                    } catch (error) {
                        throw new Error("post staff was failed");
                    }
                };
                postStaff();
                setSubmitting(false);
            }, 1000);
        },
    })(NewStaffForm);

    return (
        <div>
            <div className="border p-2 sm:p-4 md:p-6 relative">
                <span className="block mb-2 -mt-5 -ml-4 text-sm font-medium text-blue-700">
                    {toEditForm}
                </span>
                <span
                    onClick={() => {
                        setIsNewStaffForm("hidden");
                        setIdStaffEdit(null);
                    }}
                    className="absolute px-2 cursor-pointer top-0 right-0 border-2 bg-black text-white"
                >
                    X
                </span>
                <div>
                    <FormikApp />
                </div>
            </div>
        </div>
    );
};
export default NewStaff;
