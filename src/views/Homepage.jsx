import CtaSection from "../components/Cta"
import Hero from "../components/Hero"
import CourseSection from "./partial/CourseSection"

const Homepage = () => {

 
  
  return (
    <div className="pt-24 md:pt-36 pb-16 px-6 md:px-0 flex flex-col items-center gap-16">
      <Hero />
      <CourseSection />
      <CtaSection />
    </div>
  )
}

export default Homepage