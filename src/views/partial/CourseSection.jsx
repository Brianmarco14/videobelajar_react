import { useState } from "react"
import Tab from "../../components/Tab"
import Title from "../../components/Title"
import { categories, courses } from "../../utils/dummy"
import CourseList from "./CourseList"
import Button from "../../components/Button"
import { FaPlus } from "react-icons/fa"
import Modal from "../../components/Modal"
import { generateUUID } from "../../utils/generate"

const CourseSection = () => {
  const category = categories
  const [dataCourses, setDataCourses] = useState(courses)
  const [activeTab, setActiveTab] = useState("all")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleTab = (item) => {
    setActiveTab(item)
    if (item === "all") {
      setDataCourses(courses)
    } else {
      const filtered = courses.filter((course) => course.category === item)
      setDataCourses(filtered)
    }
  }

  const handleModal = () => {
    setIsModalOpen(prevState => !prevState)
  }

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
    image: '',
    rating: 0,
    sold: 0,
    category: '',
    mentor: {
      name: "Jenna Ortega",
      avatar: "/assets/mentor/avatar-2.png",
      profession: "Senior Accountant",
      company: "Gojek"
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCourse = {
      ...formData,
      id: generateUUID()
    }
    onSubmit(newCourse)
    setFormData({
      name: '',
      slug: '',
      description: '',
      price: '',
      image: '',
      rating: 0,
      sold: 0,
      category: '',
      mentor: {
        name: "Jenna Ortega",
        avatar: "/assets/mentor/avatar-2.png",
        profession: "Senior Accountant",
        company: "Gojek"
      }
    })
  }

  return (
    <>
      <section className="max-w-screen-xl w-full flex flex-col gap-8">
        <Title
          title={"Koleksi Video Pembelajaran Unggulan"}
          sub={"Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"}
        />
        <div className="flex items-center justify-between w-full">
          <Tab data={category} active={activeTab} handle={handleTab} />
          <Button className={'bg-green-500 text-white flex gap-2 items-center'} onClick={handleModal}><FaPlus /></Button>
        </div>
        <CourseList data={dataCourses} />
      </section>
      {
        isModalOpen && (
          <Modal handle={handleModal} title={"Create Data"}>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="flex gap-5">
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-sm text-text-secondary font-semibold" htmlFor="name">Name</label>
                  <input type="text" name="name" className="text-text-primary border  border-border-card p-1 rounded-lg outline-none" value={formData.name} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-sm text-text-secondary font-semibold" htmlFor="price">Price</label>
                  <input type="text" name="price" className="text-text-primary border  border-border-card p-1 rounded-lg outline-none" value={formData.price} onChange={handleChange}/>
                </div>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-sm text-text-secondary font-semibold" htmlFor="description">description</label>
                <textarea name="description" id="description" className="text-text-primary border  border-border-card p-1 rounded-lg outline-none resize-none" rows={3} value={formData.description} onChange={handleChange}></textarea>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-sm text-text-secondary font-semibold" htmlFor="name">Image</label>
                  <input type="file" name="name" className="text-text-primary border  border-border-card p-1 rounded-lg outline-none" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-sm text-text-secondary font-semibold" htmlFor="category">Category</label>
                  <select name="category" id="category" aria-placeholder="pilih category" className="border border-border-card p-1 rounded-lg outline-none" value={formData.category} onChange={handleChange}>
                    
                    {
                      categories && categories.map((item, index) => (
                        <option value={item.slug} key={index}>{item.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <Button className={"bg-green-500 text-white"}>Create</Button>
                <Button className={"bg-gray-200 "}>Cancel</Button>
              </div>
            </form>
          </Modal>
        )
      }
    </>
  )
}

export default CourseSection