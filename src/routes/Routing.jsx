import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Body from '../components/Body.jsx'
import Home from '../components/Home.jsx'
import Layout from '../components/Layout.jsx';
import ContactUs  from '../components/ContactUs.jsx';
import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';
function Routing() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/"element={<Layout/>}>
            <Route  index path="/home" element={<Home/>}></Route>
            <Route path="/body" element={<Body/>}></Route>
            <Route path="/contact" element={<ContactUs/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default Routing