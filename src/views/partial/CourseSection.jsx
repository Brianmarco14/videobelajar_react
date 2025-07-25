import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Tab from "../../components/Tab";
import Title from "../../components/Title";
import useCourseStore from "../../store/zustand/store";
import { generateSlug } from "../../utils/generate";
import CourseList from "./CourseList";

const CourseSection = () => {
  const {
    courses,
    categories,
    fetchCourses,
    filterCoursesByCategory,
    createCourse,
    updateCourse: updateCourseStore,
    deleteCourse: deleteCourseStore
  } = useCourseStore();

  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleTab = (item) => {
    setActiveTab(item);
    filterCoursesByCategory(item);
  };


  const handleModal = () => {
    setIsModalOpen((prevState) => !prevState);
    setIsEditMode(false);
    setEditId(null);
    setFormData({
      name: "",
      slug: "",
      description: "",
      price: "",
      image: "/assets/courses/course-1.png",
      rating: 0,
      sold: 0,
      category: "",
      mentor: {
        name: "Jenna Ortega",
        avatar: "/assets/mentor/avatar-2.png",
        profession: "Senior Accountant",
        company: "Gojek",
      },
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    price: "",
    image: "",
    rating: 0,
    sold: 0,
    category: "",
    mentor: {
      name: "Jenna Ortega",
      avatar: "/assets/mentor/avatar-2.png",
      profession: "Senior Accountant",
      company: "Gojek",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "name") {
        updated.slug = generateSlug(value);
      }
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditMode) {
      await updateCourseStore(editId, formData);
    } else {
      await createCourse(formData);
    }

    setIsModalOpen(false);
    resetForm();
  };

  const handleDelete = async (id) => {
    await deleteCourseStore(id);
  };

  const handleEdit = (course) => {
    setFormData({
      ...course,
    });
    setIsEditMode(true);
    setEditId(course.id);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="max-w-screen-xl w-full flex flex-col gap-8">
        <Title
          title={"Koleksi Video Pembelajaran Unggulan"}
          sub={"Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"}
        />
        <div className="flex items-center justify-between w-full">
          <Tab data={categories} active={activeTab} handle={handleTab} />
          <Button
            className={"bg-green-500 text-white flex gap-2 items-center"}
            onClick={handleModal}
          >
            <FaPlus />
          </Button>
        </div>
        <CourseList
          data={courses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </section>
      {isModalOpen && (
        <Modal handle={handleModal} title={"Create Data"}>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 flex-1">
                <label
                  className="text-sm text-text-secondary font-semibold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="text-text-primary border  border-border-card p-1 rounded-lg outline-none"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label
                  className="text-sm text-text-secondary font-semibold"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  className="text-text-primary border  border-border-card p-1 rounded-lg outline-none"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label
                className="text-sm text-text-secondary font-semibold"
                htmlFor="description"
              >
                description
              </label>
              <textarea
                name="description"
                id="description"
                className="text-text-primary border  border-border-card p-1 rounded-lg outline-none resize-none"
                rows={3}
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 flex-1">
                <label
                  className="text-sm text-text-secondary font-semibold"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  aria-placeholder="pilih category"
                  className="border border-border-card p-1 rounded-lg outline-none"
                  value={formData.category}
                  onChange={handleChange}
                >
                  {categories &&
                    categories.map((item, index) => (
                      <option value={item.slug} key={index}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <Button className={"bg-green-500 text-white"}>Submit</Button>
              <Button className={"bg-gray-200"} onClick={handleModal}>
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default CourseSection;
