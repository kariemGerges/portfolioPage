// import logo from './logo.svg';
import React, { useContext, useState, useEffect } from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { CodeXml  } from 'lucide-react';
// import Pages
import Bio from './Pages/Bio/Bio';
import Resume from './Pages/Resume/Resume';
import Work from './Pages/Work/Work';
import Contact from './Pages/Contact/Contact';
import KariemPortfolio from './Pages/KariemPortfolio/portfolioPage';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import BlogPage from './Pages/BlogPage/BlogPage';
import BlogPostDetails from './components/BlogPostDetails/BlogPostDetails';
import ErrLandingPage from './Pages/ErrLandingPage/ErrLandingPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import ComponentTester from './Pages/ComponentTester/ComponentTester';


// import Components 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ThemeContext  from './components/ThemeContext/ThemeContext';

import './App.css';
import './i18n'

function App() {
  const { theme } = useContext(ThemeContext);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 60 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 1}s`,
      }));
    };
    setStars(generateStars());
  }, []);


  return (
    <div 
        className={`relative w-full min-h-screen 
        ${theme ? 'bg-black text-white' : 'bg-orange-100 text-gray-900'} 
        overflow-hidden p-8 transition-colors duration-300`}
    >
        {theme && stars.map((star, index) => (
        <div>
          <CodeXml 
            key={index}
            className="absolute text-yellow-200 animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              animationDuration: star.animationDuration,
            }}
            size={Math.random() * 9 + 2}
          />
        </div>
        ))}
          <Router>
            <Header />
                <Routes>
                  <Route path='/ErrLandingPage' element={<ErrLandingPage />} />
                    <Route path="/" element={<KariemPortfolio />} />
                      <Route path='/portfolioPage' element={<KariemPortfolio />} />
                        <Route path="/bio" element={<Bio />} />
                          <Route path="/work" element={<Work />} />
                            <Route path='/blogPage' element={<BlogPage />} />
                              <Route path='/test' element={<ComponentTester />} />
                            <Route path='/LoginPage' element={<LoginPage />} />
                        <Route path='/BlogPostDetails' element={<BlogPostDetails />} />
                      <Route path='/ProjectDetails' element={<ProjectDetails />} />
                    <Route path="/contact" element={<Contact />} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
            < Footer />
          </Router>
    </div>
  );
}

export default App;
