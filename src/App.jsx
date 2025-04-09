import { Route, Routes } from "react-router-dom"
import Homepage from "./views/Homepage"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>

      </Routes>
    </>
  )
}

export default App