import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Posts from "./Pages/Posts"
import Nav from "./Components/nav"
import Inputs from "./Pages/Inputs"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="inputs" element={<Inputs />} />
      </Routes>
    </div>
  )
}

export default App
