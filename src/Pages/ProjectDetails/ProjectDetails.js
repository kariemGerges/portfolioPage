// import React from "react";
// import { useLocation } from 'react-router-dom';

// const ProjectDetails = () => {

//     const location = useLocation();
//     const { selectedCard } = location.state || {};

//     return (
//         <div className=" p-10 w-full mx-auto flex justify-between items-center">
//             <div className="grid grid-cols-1 m-12">
//                 <div 
//                     className="rounded overflow-hidden shadow-lg">
//                         <div className="font-bold text-xl mb-2 text-center p-2">
//                             {selectedCard.title}
//                         </div>
//                         <div className="px-6 pt-4 pb-2">
//                             <div dangerouslySetInnerHTML={{ __html: selectedCard.description }} />
//                         </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default ProjectDetails;

import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, Server, Database, Globe, Menu } from 'lucide-react';

const ProjectDetails = () => {
    const location = useLocation();
    const { selectedCard } = location.state || {};
    const [activeTab, setActiveTab] = useState('overview');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    if (!selectedCard) {
        return <div>No project selected</div>;
    }

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Globe },
        { id: 'frontend', label: 'Frontend', icon: Code },
        { id: 'backend', label: 'Backend', icon: Server },
        { id: 'database', label: 'Database', icon: Database },
    ];

    const tabContent = {
        overview: selectedCard.prevDescription,
        frontend: `<h2>Frontend Technologies</h2><ul><li>${selectedCard.frontend}</li></ul>`,
        backend: `<h2>Backend Technologies</h2><ul><li>${selectedCard.backend === 'Not specified' ? selectedCard.backend : 'N/A'}</ul>`,
        database: `<h2>Database</h2><ul><li>${selectedCard.database}</li></ul>`,
    };

    return (
        <div className="bg-gray-900 text-gray-300 min-h-screen p-4 font-mono">
            <div className="max-w-4xl mx-auto">

                <Link to="/work" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
                    <ArrowLeft className="mr-2" />
                    <button className="text-blue-400 hover:text-blue-300">Back to Projects</button>
                </Link>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
                >
                    <img 
                        src={selectedCard.image} 
                        alt={selectedCard.title} 
                        className="w-full h-48 sm:h-64 object-cover"
                    />
                    <div className="p-4 sm:p-6">
                        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{selectedCard.title}</h1>
                        
                        <div className="mb-6 border-b border-gray-700">
                            <div className="sm:hidden">
                                <button 
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="flex items-center justify-between w-full py-2 px-4 text-left"
                                >
                                    <span>{tabs.find(tab => tab.id === activeTab).label}</span>
                                    <Menu size={20} />
                                </button>
                                {isMenuOpen && (
                                    <div className="mt-2">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab.id}
                                                className={`flex items-center w-full px-4 py-2 ${
                                                    activeTab === tab.id ? 'bg-gray-700 text-blue-500' : 'text-gray-400'
                                                }`}
                                                onClick={() => {
                                                    setActiveTab(tab.id);
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                <tab.icon className="mr-2" size={18} />
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="hidden sm:flex">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        className={`flex items-center px-4 py-2 focus:outline-none ${
                                            activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400 hover:text-gray-200'
                                        }`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <tab.icon className="mr-2" size={18} />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="prose prose-invert max-w-none text-sm sm:text-base"
                            dangerouslySetInnerHTML={{ __html: tabContent[activeTab] }}
                        />
                    </div>
                </motion.div>
                
                <div className="mt-8 bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Project Highlights</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                        <div dangerouslySetInnerHTML={{ __html: selectedCard.description }} />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;