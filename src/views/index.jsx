import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Layout = () => {
  return (
    <>
        <Navbar isProfile={true}/>
        <Outlet />
    </>
  )
}

export default Layout