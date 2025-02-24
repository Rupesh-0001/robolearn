import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // import default styling
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Screens
import Landing from "./screens/Landing.jsx";
import Explore from './screens/Explore';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Helmet>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
            </Helmet>
            <Landing />
            <ToastContainer 
              position="top-right" 
              autoClose={3000} 
              hideProgressBar={false} 
              newestOnTop={false} 
              closeOnClick 
              rtl={false} 
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </>
        } />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

