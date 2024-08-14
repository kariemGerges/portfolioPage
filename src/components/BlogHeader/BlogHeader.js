import React, { useState, useEffect } from 'react';
import { Newspaper, BookOpen, Cpu, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedText = ({ text }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{currentText}</span>;
};

const BlogHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // bg-gradient-to-r from-red-200 to-yellow-300
    <header className="mt-12 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
      <Link to="/blogPage">
        <div className="flex items-center space-x-2">
          <Cpu className="w-8 h-8 animate-pulse" />
          <h1 className="text-2xl font-bold">
              <AnimatedText text="Kariem's Blog" />
          </h1>
        </div>
      </Link>
        
        <nav className="hidden md:flex space-x-6 ml-6">
          <a href="#" className="flex items-center hover:text-yellow-300 transition-colors duration-200">
            <Newspaper className="w-5 h-5 mr-1" />
            News
          </a>
          <a href="#" className="flex items-center hover:text-yellow-300 transition-colors duration-200">
            <BookOpen className="w-5 h-5 mr-1" />
            Guides
          </a>
          <a href="#" className="flex items-center hover:text-yellow-300 transition-colors duration-200">
            <Cpu className="w-5 h-5 mr-1" />
            AI Insights
          </a>
        </nav>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#" className="block py-2 px-4 hover:bg-indigo-600">News</a>
          <a href="#" className="block py-2 px-4 hover:bg-indigo-600">Guides</a>
          <a href="#" className="block py-2 px-4 hover:bg-indigo-600">AI Insights</a>
        </div>
      )}
    </header>
  );
};

export default BlogHeader;