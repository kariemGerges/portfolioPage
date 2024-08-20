// import logo from './logo.svg';
import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
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
import './App.css';
import './i18n'

function App() {
  return (
      <Router>
        <Header />
        {/* <ComponentTester /> */}
          <div className=''>
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
          </div>
        < Footer />
      </Router>
  );
}

export default App;