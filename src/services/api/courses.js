import axiosInstance from "../../lib/axiosInstance";

export const getAllCourses = async () => {
    const data = await axiosInstance.get("/courses");
    return data;
  };

export const insertCourse = async(data) => {
    const result = await axiosInstance.post('/courses', data)
    return result
}

export const updateCourse = async(id, data) => {
  const result = await axiosInstance.put(`/courses/${id}`, data)
  return result
}

export const deleteCourse = async(id) => {
  const result = await axiosInstance.delete(`/courses/${id}`)
  return result
}

