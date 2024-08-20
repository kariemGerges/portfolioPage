import React, { useState, useEffect } from 'react';
import { Code, User, Briefcase, Mail, Star, Cpu, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';

const EyeCatchingDevSidebar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { id: 'about', icon: User, label: 'About Me', color: 'text-yellow-400' },
    { id: 'projects', icon: Briefcase, label: 'Projects', color: 'text-green-400' },
    { id: 'skills', icon: Code, label: 'Skills', color: 'text-blue-400' },
    { id: 'contact', icon: Mail, label: 'Contact', color: 'text-purple-400' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed inset-y-0 left-0 transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="h-full bg-gray-900 text-white overflow-hidden relative">
        <div 
          className="absolute inset-0 opacity-10 transition-opacity duration-300"
          style={{
            opacity: isOpen ? 0.1 : 0,
            backgroundImage: `radial-gradient(
              circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(255,255,255,0.3) 0%,
              rgba(255,255,255,0) 50%
            )`
          }}
        />

        <div className="h-full flex flex-col justify-between p-6">
          <div>
            <h1 className={`text-3xl font-bold mb-8 text-center transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 mb-0'}`}>
              <span className="text-blue-400">&lt;</span>
              Web Dev
              <span className="text-blue-400">/&gt;</span>
            </h1>

            <nav>
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group flex items-center p-3 mb-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.id ? 'bg-gray-800' : 'hover:bg-gray-800'
                  } ${isOpen ? '' : 'justify-center'}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <item.icon size={24} className={`${item.color} ${isOpen ? 'mr-3' : ''}`} />
                  <span className={`relative transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>
                    {item.label}
                    <span className={`absolute left-0 -bottom-1 w-0 h-0.5 ${item.color} transition-all duration-300 group-hover:w-full`}></span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className={`mt-auto transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex justify-center space-x-4 mb-4">
              <Star className="text-yellow-400 animate-spin-slow" size={20} />
              <Cpu className="text-green-400 animate-pulse" size={20} />
              <Coffee className="text-red-400 animate-bounce" size={20} />
            </div>
            <p className="text-sm text-center text-gray-400">Crafting digital experiences with passion and precision</p>
          </div>
        </div>

        <button
          onClick={toggleSidebar}
          className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-1 shadow-lg hover:bg-gray-700 transition-colors duration-200"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
    </div>
  );
};

export default EyeCatchingDevSidebar;