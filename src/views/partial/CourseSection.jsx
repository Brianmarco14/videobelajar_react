import { useState } from "react"
import Tab from "../../components/Tab"
import Title from "../../components/Title"
import { categories, courses } from "../../utils/dummy"
import CourseList from "./CourseList"

const CourseSection = () => {
    const data = courses
    const category = categories
    const [activeTab, setActiveTab] = useState("all")

    const handleTab = (item) => {
        setActiveTab(item)
    }

  return (
    <section className="max-w-screen-xl w-full flex flex-col gap-8">
        <Title
          title={"Koleksi Video Pembelajaran Unggulan"}
          sub={"Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"}
        />
        <Tab data={category} active={activeTab} handle={handleTab}/>
        <CourseList data={data}/>
    </section>
  )
}

export default CourseSection