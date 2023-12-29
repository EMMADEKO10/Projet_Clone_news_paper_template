import Home from "./pages/home";
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";
import React from "react";
import { useState } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";

// const data = require('../api/blogsData.json');

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <BlogsProvider>
        <Routes>
  
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
        </BlogsProvider>
      </BrowserRouter>
    </div>
  );
}

export const BlogsContext = React.createContext({
  useDataBlog: [],
});

export function BlogsProvider({ children }) {
  const [useDataBlog, setUseDataBlog] = useState();

  return (
    <BlogsContext.Provider value={{ useDataBlog, setUseDataBlog}}>
      {children}
    </BlogsContext.Provider>
  );
}