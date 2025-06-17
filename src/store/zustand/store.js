import { create } from "zustand";
import {
  deleteCourse,
  getAllCourses,
  insertCourse,
  updateCourse,
} from "../../services/api/courses";
import { getAllCategories } from "../../services/api/categories";

const useCourseStore = create((set, get) => ({
  courses: [],
  allCourses: [],
  categories: [],
  isLoading: false,

  fetchCourses: async () => {
    try {
      set({ isLoading: true });
      const [courses, categories] = await Promise.all([
        getAllCourses(),
        getAllCategories(),
      ]);      

      set({ allCourses: courses, courses, categories, isLoading: false });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  filterCoursesByCategory: (categorySlug) => {
    const { allCourses } = get();
    if (categorySlug === "all") {
      set({ courses: allCourses });
    } else {
      const filtered = allCourses.filter(
        (course) => course.category === categorySlug
      );
      set({ courses: filtered });
    }
  },

  createCourse: async (newData) => {
    try {
      await insertCourse(newData);
      await get().fetchCourses();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  updateCourse: async (id, updatedData) => {
    try {
      await updateCourse(id, updatedData);
      await get().fetchCourses();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteCourse: async (id) => {
    try {
      await deleteCourse(id);
      await get().fetchCourses();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
}));

export default useCourseStore;
