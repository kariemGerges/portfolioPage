import React, { useState, useEffect } from 'react';
import { Star, Code, GraduationCap, Users, Trophy , Sun, Moon } from 'lucide-react';

const SpaceBioComponent = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [stars, setStars] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 50 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 1}s`,
      }));
    };
    setStars(generateStars());
  }, []);

  const sections = [
    {
      title: 'Software Engineer',
      icon: <Code className="w-8 h-8" />,
      content: "Passionate about creating dynamic, responsive web applications. Proficient in HTML, CSS, JavaScript, React, Node.js, and Express.",
    },
    {
      title: 'Education',
      icon: <GraduationCap className="w-8 h-8" />,
      content: "Bachelor of Science in Web & Software Development from Purdue School of Engineering and Technology at IUPUI.",
    },
    {
      title: 'Personal',
      icon: <Users className="w-8 h-8" />,
      content: "Dedicated father to Elijah and Iziah. Currently working at Meijer in retail store operations, seeking opportunities to transition to the corporate side.",
    },
    {
      title: 'Hobbies',
      icon: <Trophy  className="w-8 h-8" />,
      content: "Exploring new technologies, playing baseball  (Steph Curry fan!), and spending quality time with family.",
    },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={` p-8 transition-colors duration-300`}>
      {/* {isDarkMode && stars.map((star, index) => (
        <Star
          key={index}
          className="absolute text-yellow-200 animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            animationDuration: star.animationDuration,
          }}
          size={Math.random() * 4 + 2}
        />
      ))} */}
      
      <div className="relative z-10 max-w-4xl mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Exploring My Universe</h1>

          {/* <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-white'} transition-colors duration-300`}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button> */}

        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-gray-800 shadow-md hover:shadow-lg  rounded-lg p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 
                ${activeSection === index ? 'ring-2 ring-blue-400' : ''}`}
                onClick={() => setActiveSection(index)}
            >
              <div className={`flex items-center justify-center mb-2`}>
                {section.icon}
              </div>
              <h2 className="text-xl font-semibold text-center">{section.title}</h2>
            </div>
          ))}
        </div>
        
        <div className='bg-gray-800 shadow-md rounded-lg p-6 min-h-[200px] flex items-center justify-center transition-colors duration-300'>
          {activeSection !== null ? (
            <p className="text-lg text-center">{sections[activeSection].content}</p>
          ) : (
            <p className="text-lg text-center">Click on a planet to explore more about me!</p>
          )}
        </div>
        
        {/* <div className="mt-8 text-center">
          <p className="text-lg mb-4">
            Ready to embark on an interstellar project together?
          </p>
          <button className={`${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 transform hover:scale-105`}>
            Launch Collaboration
          </button>
        </div> */}

      </div>
    </div>
  );
};

export default SpaceBioComponent;



// import React, { useState, useContext } from 'react';
// import ThemeContext  from './../../components/ThemeContext/ThemeContext';
// import { Sun, Moon, Menu, X, Home, User, Mail, Rocket } from 'lucide-react';

// const SpaceHeader = () => {
//   const { theme } = useContext(ThemeContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', icon: Home },
//     { name: 'About', icon: User },
//     { name: 'Contact', icon: Mail },
//     { name: 'Projects', icon: Rocket },
//   ];

//   return (
//     <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${theme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center space-x-2">
//             <Rocket className={`w-8 h-8 ${theme ? 'text-blue-400' : 'text-blue-600'}`} />
//             <span className="text-2xl font-bold">Space Dev</span>
//           </div>
          
//           <nav className="hidden md:flex space-x-6">
//             {navItems.map((item) => (
//               <a 
//                 key={item.name} 
//                 href={`#${item.name.toLowerCase()}`} 
//                 className={`flex items-center space-x-1 hover:${theme ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-200`}
//               >
//                 <item.icon className="w-5 h-5" />
//                 <span>{item.name}</span>
//               </a>
//             ))}
//           </nav>
          
//           <div className="flex items-center space-x-4">
//             <button
//               // onClick={toggleTheme}
//               className={`p-2 rounded-full ${theme ? 'bg-yellow-400 text-gray-900' : 'bg-gray-200 text-gray-600'} transition-colors duration-200`}
//               aria-label="Toggle theme"
//             >
//               {theme ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
            
//             <button
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className={`md:hidden ${theme ? 'bg-gray-800' : 'bg-gray-100'}`}>
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={`#${item.name.toLowerCase()}`}
//               className={`block py-2 px-4 ${theme ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <div className="flex items-center space-x-2">
//                 <item.icon className="w-5 h-5" />
//                 <span>{item.name}</span>
//               </div>
//             </a>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// };

// export default SpaceHeader;