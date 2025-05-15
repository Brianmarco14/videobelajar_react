import axiosInstance from "../../lib/axiosInstance";

export const getAllCourses = async () => {
    const data = await axiosInstance.get("/courses");
    return data;
  };

export const insertCourse = async(data) => {
    const result = await axiosInstance.post('/courses', data)
    return result
}