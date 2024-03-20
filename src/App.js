import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Footer from "./components/general/footer.js";

import React, { Suspense, lazy } from "react";
import JoinUs from "./components/JoinUs/JoinUs.js";
import Projectark from "./components/Project/ark.js";

const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/Home/index.js")), 400);
  });
});
 
// const Projects = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./components/Project/ark.js")), 400);
//   });
// });
// const AboutUs = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./components/AboutUs/index.js")), 400);
//   });
// });
// const CaseStudy = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./components/CaseStudy/index.js")), 400);
//   });
// });
// const Sponsornav= lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./components/Sponsorsnav/index.js")), 400);
//   });
// });

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/joinUs" element={<JoinUs />} />
      <Route path="/projects" element={<Projectark/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;