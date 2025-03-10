import { BrowserRouter as Router ,Route,Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import RegisterPage from "./components/Register/Register"

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout><p>Home page</p></Layout>}/>
      <Route path="/register" element={<Layout><RegisterPage/></Layout>}/>

      </Routes>
    </Router>
  )
}

export default App