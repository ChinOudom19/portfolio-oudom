import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Nav from "./components/Nav";
import Home from "./app/Home";
import About from "./app/About";
import Skill from "./app/Skill";
import Projects from "./app/Projects";
import Contact from "./app/Contact";
import Footer from "./components/Footer";

if (process.env.NODE_ENV === 'development') {
  console.warn = (message) => {
    if (!message.includes('Relative route resolution within Splat routes')) {
      console.warn(message);  // Only log other warnings
    }
  };
}

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Nav containerStyles='hidden xl:flex' listStyles='flex gap-6' linkStyles='text-primary font-primary text-lg  tracking-[1.4px] transition-all duration-300'/>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/projects" index element={<Projects />} />
        <Route path="/contact" index element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
