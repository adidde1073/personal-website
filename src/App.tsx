import { Routes, Route } from "react-router"
import './App.css'

/**
 * Import Pages Block
 */
import About from "./pages/AboutPage/AboutPage"
import HomePage from "./pages/HomePage/HomePage"
import PhotographyPage from "./pages/PhotographyPage/PhotographyPage"

/**
 * Import Components Block
 */
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/photography" element={<PhotographyPage />}/>
      </Routes>
    </div>
  );
}

export default App
