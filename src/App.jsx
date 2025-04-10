import { Route, Routes } from "react-router-dom"
import Homepage from "./views/Homepage"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"
import Layout from "./views"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>

      </Routes>
    </>
  )
}

export default App