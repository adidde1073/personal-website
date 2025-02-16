import { Routes, Route } from "react-router"
import './App.css'
import About from "./pages/AboutPage/AboutPage"
import HomePage from "./pages/HomePage/HomePage"
import Navbar from './components/navbar'
// import Counter from './features/counter/counter'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App
