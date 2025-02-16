import { Routes, Route } from "react-router"
import './App.css'
import Profile from './pages/profile/profile'
import About from "./pages/about/about"
import Navbar from './components/navbar'
// import Counter from './features/counter/counter'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App
