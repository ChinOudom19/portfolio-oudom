import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./app/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Projects from "./app/Projects";
import About from "./app/About";
import Contact from "./app/Contact";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" index element={<Projects/>}/>
        <Route path="/contact" index element={<Contact/>}/>
      </Routes>
      <div className="flex">
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;