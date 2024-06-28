// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Pages
import Home from './Pages/Home/Home';
import Bio from './Pages/Bio/Bio';
import Resume from './Pages/Resume/Resume';
import Work from './Pages/Work/Work';
import Contact from './Pages/Contact/Contact';
import KariemPortfolio from './Pages/KariemPortfolio/KariemPortfolio';
// import Components 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
      <Router>
        <Header />
          <div className=''>
            <Routes>
              <Route path="/" element={<KariemPortfolio />} />
                <Route path='/KariemPortfolio' element={<KariemPortfolio />} />
                  <Route path="/bio" element={<Bio />} />
                  <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        < Footer />
      </Router>
  );
}

export default App;
