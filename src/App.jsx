import Home from "./pages/home";
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";
import { BrowserRouter,Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

