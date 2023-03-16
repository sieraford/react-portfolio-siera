import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import validator from 'validator';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

function App() {
  return (
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              <Routes>
                <Route 
                  path="/" 
                  element={<Navigate replace to="/about-me" />} 
                />
                <Route 
                  path="/about-me" 
                  element={<AboutMe />} 
                />
                <Route 
                  path="/portfolio" 
                  element={<Portfolio />} 
                />
                <Route 
                  path="/contact" 
                  element={<Contact />} 
                />
                <Route 
                  path="/resume" 
                  element={<Resume />} 
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
  );
}

export default App;
