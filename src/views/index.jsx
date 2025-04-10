import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <>
        <Navbar isProfile={true}/>
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout