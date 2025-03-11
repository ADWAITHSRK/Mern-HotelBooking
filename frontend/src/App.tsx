import { BrowserRouter as Router ,Route,Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import RegisterPage from "./Pages/Register/Register"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage.tsx/LoginPage";

const App = () => {
  return (
    <Router>
       <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
      <Route path="/" element={<Layout><p>Home page</p></Layout>}/>
      <Route path="/register" element={<Layout><RegisterPage/></Layout>}/>
      <Route path="/login" element={<Layout><LoginPage/></Layout>}/>


      </Routes>
    </Router>
  )
}

export default App