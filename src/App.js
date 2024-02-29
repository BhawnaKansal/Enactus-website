import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Footer from "./components/general/Footer.js";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Footer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
