import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from "./components/Register";
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
     
        <Footer/>
      </Router>
    </div>
  )
}

export default App