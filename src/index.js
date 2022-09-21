import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';
import SinglePage from './pages/SinglePage';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoContainer />} />          
          <Route path="about" element={<About />}>
            <Route path=":slug" element={<SinglePage />} />
          </Route>        
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>    
    </BrowserRouter>    
  </React.StrictMode>
);

function Layout() {
  return (
    <div className="container">
      <div className="inner">
        <Navbar />
        <Outlet />
      </div>    
    </div>  
  )
}
