import React, { useState } from 'react';
import useUserInfoFetcher from "../../Hooks/useUserInfoFetcher";
import { Newspaper, BookOpen, Cpu, Menu, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import Animations from '../Animations/TextAnimation';

const BlogHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userInfo, isLoading } = useUserInfoFetcher();


  return (
    // bg-gradient-to-r from-red-200 to-yellow-300
    <header className="mt-12 rounded-lg p-3">

      <div className="container mx-auto flex justify-between items-center">

        {/* user info */}
        <div className="flex items-center space-x-2 p-2">
          {userInfo?.username}
        {console.log(`userInfo?.username: ${userInfo?.email } & ${userInfo?.username}` )}
        </div>

        <Link to="/blogPage">
          <div className="flex items-center space-x-2 " id="navLinks">
            <Cpu className="w-8 h-8 animate-pulse" />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold" >
                  <Animations text="Kariem's Blog"  />
              </h1>
          </div>
        </Link>
        
        <nav className="hidden md:flex space-x-6 ml-6">
          <a href="#" className="flex items-center transition-colors duration-200" id='navLinks'>
            <Newspaper className="w-5 h-5 mr-1" />
            News
          </a>
          <a href="#" className="flex items-center transition-colors duration-200" id='navLinks'>
            <BookOpen className="w-5 h-5 mr-1" />
            Guides
          </a>
          <a href="#" className="flex items-center transition-colors duration-200" id='navLinks'>
            <Cpu className="w-5 h-5 mr-1" />
            AI Insights
          </a>
          <Link to="/loginPage">
            <button className="flex items-center transition-colors duration-200" id='navLinks'>
              <LogIn className="w-5 h-5 mr-1 focus:animate-bounce" />LogIn
            </button>
          </Link>

        </nav>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

      </div>
      

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="/" className="block py-2 px-4" id='navLinks'>News</a>
          <a href="#" className="block py-2 px-4" id='navLinks'>Guides</a>
          <a href="#" className="block py-2 px-4" id='navLinks'>AI Insights</a>
          <Link to="/loginPage">
            <button className="block py-2 px-4 flex items-center" id='navLinks'>
              <LogIn className="w-5 h-5 mr-1 focus:animate-bounce" />LogIn
            </button>
          </Link>
        </div>
      )}

    </header>
  );
};

export default BlogHeader;