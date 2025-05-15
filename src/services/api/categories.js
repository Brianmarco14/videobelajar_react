import axiosInstance from "../../lib/axiosInstance";

export const getAllCategories = async () => {
  const data = await axiosInstance.get("/categories");
  return data;
};