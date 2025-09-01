import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    ExternalLink,
    Code,
    Globe,
    Database,
    Smartphone,
} from 'lucide-react';
import ThemeContext from '../../components/ThemeContext/ThemeContext';
import { Link } from 'react-router-dom';

const WorkConstellation = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(null);
    const containerRef = useRef(null);
    // theme context
    const { theme } = useContext(ThemeContext);

    const projects = [
        {
            id: 1,
            title: 'Guide Me',
            subtitle: 'AI Travel Companion',
            type: 'Web App',
            constellation: { x: 15, y: 20, size: 'large' },
            color: 'from-blue-400 to-purple-600',
            glowColor: 'shadow-blue-500/50',
            description:
                'An AI-driven travel companion that transforms journey planning with personalized suggestions, intuitive itinerary planning, and Google Places API integration.',
            technologies: {
                frontend: ['React.js'],
                backend: ['Node.js', 'Google Places API'],
                database: ['Firebase'],
            },
            features: [
                'AI-powered travel recommendations',
                'Interactive map with 3D locations',
                'Real-time itinerary planning',
                'Google Places integration',
            ],
            website: 'https://kariemgerges.github.io/GuideMe/',
            icon: <Globe className="w-6 h-6" />,
        },
        {
            id: 2,
            title: 'StateQuiz',
            subtitle: 'Educational Platform',
            type: 'Learning App',
            constellation: { x: 70, y: 15, size: 'medium' },
            color: 'from-green-400 to-emerald-600',
            glowColor: 'shadow-green-500/50',
            description:
                'Interactive learning platform helping 3rd graders master U.S. geography through engaging quizzes and visual maps.',
            technologies: {
                frontend: ['HTML', 'CSS'],
                backend: ['Custom Backend'],
                database: ['MongoDB'],
            },
            features: [
                'Interactive U.S. maps',
                'Age-appropriate quizzes',
                'Progress tracking',
                'Educational content management',
            ],
            website:
                'https://pages.github.iu.edu/kgerges/sp23-advanced-web-final-project/index.html',
            icon: <Code className="w-6 h-6" />,
        },
        {
            id: 3,
            title: 'StockSavvy',
            subtitle: 'Financial Analytics',
            type: 'Trading Platform',
            constellation: { x: 25, y: 70, size: 'large' },
            color: 'from-yellow-400 to-orange-600',
            glowColor: 'shadow-yellow-500/50',
            description:
                'Real-time stock analysis platform with AI-driven predictive modeling and comprehensive market insights for informed investment decisions.',
            technologies: {
                frontend: ['React'],
                backend: ['Node.js', 'Express', 'Python'],
                database: ['Custom Analytics DB'],
            },
            features: [
                'Real-time stock data',
                'AI predictive modeling',
                'Market analysis tools',
                'Investment insights',
            ],
            website: null,
            icon: <Database className="w-6 h-6" />,
        },
        {
            id: 4,
            title: 'Travia',
            subtitle: 'Trivia Gaming',
            type: 'Entertainment',
            constellation: { x: 80, y: 60, size: 'medium' },
            color: 'from-pink-400 to-rose-600',
            glowColor: 'shadow-pink-500/50',
            description:
                'Engaging trivia platform leveraging Google Big Data for questions with secure authentication and competitive gameplay.',
            technologies: {
                frontend: ['React'],
                backend: ['Node.js', 'Express'],
                database: ['MongoDB', 'Google Big Data'],
            },
            features: [
                'Dynamic trivia questions',
                'Secure user authentication',
                'Competitive scoring',
                'Big data integration',
            ],
            website: null,
            icon: <Code className="w-6 h-6" />,
        },
        {
            id: 5,
            title: 'Donation Pal',
            subtitle: 'Fundraising Platform',
            type: 'Social Impact',
            constellation: { x: 55, y: 25, size: 'large' },
            color: 'from-indigo-400 to-blue-600',
            glowColor: 'shadow-indigo-500/50',
            description:
                'Comprehensive fundraising platform enabling campaign creation, secure donations, and administrative oversight for social causes.',
            technologies: {
                frontend: ['React.js'],
                backend: ['Node.js'],
                database: ['MongoDB'],
            },
            features: [
                'Campaign management',
                'Secure payment processing',
                'Real-time tracking',
                'Admin dashboard',
            ],
            website: 'https://kariemgerges.github.io/donationPal-frontend/',
            icon: <Globe className="w-6 h-6" />,
        },
        {
            id: 6,
            title: 'FreshMart',
            subtitle: 'E-Commerce Solution',
            type: 'Retail Platform',
            constellation: { x: 35, y: 45, size: 'large' },
            color: 'from-emerald-400 to-teal-600',
            glowColor: 'shadow-emerald-500/50',
            description:
                'Modern e-commerce platform transforming grocery shopping with intuitive interfaces and robust inventory management.',
            technologies: {
                frontend: ['React.js'],
                backend: ['Node.js'],
                database: ['MongoDB', 'MySQL'],
            },
            features: [
                'Responsive design',
                'Inventory management',
                'Advanced search & filtering',
                'Personalized recommendations',
            ],
            website: 'https://ecommerce-frontend-henna-two.vercel.app/',
            icon: <Globe className="w-6 h-6" />,
        },
        {
            id: 7,
            title: 'TeachMe',
            subtitle: 'Mobile Learning',
            type: 'Education App',
            constellation: { x: 65, y: 80, size: 'medium' },
            color: 'from-purple-400 to-violet-600',
            glowColor: 'shadow-purple-500/50',
            description:
                'Comprehensive mobile learning platform for K-12 students featuring video lessons, interactive quizzes, and progress tracking.',
            technologies: {
                frontend: ['React Native'],
                backend: ['Firebase'],
                database: ['Firestore'],
            },
            features: [
                'Video lessons',
                'Interactive quizzes',
                'Progress tracking',
                'Cross-platform mobile',
            ],
            website: null,
            icon: <Smartphone className="w-6 h-6" />,
        },
    ];

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            return () =>
                container.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const getTechIcon = (tech) => {
        if (tech.includes('React Native'))
            return <Smartphone className="w-4 h-4" />;
        if (tech.includes('React') || tech.includes('HTML'))
            return <Code className="w-4 h-4" />;
        if (tech.includes('Node') || tech.includes('Firebase'))
            return <Database className="w-4 h-4" />;
        return <Globe className="w-4 h-4" />;
    };

    return (
        <div className="min-h-screen lg:mt-4 md:mt-9 sm:p-4 md:p-8 overflow-hidden">
            
            {/* Animated background stars */}
            <div className="absolute inset-0">
                {Array.from({ length: 50 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-1 h-1 ${
                            theme ? 'bg-white' : 'bg-purple-800'
                        } rounded-full opacity-40`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Parallax mouse-following nebula */}
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
                }}
                animate={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
                }}
                transition={{ type: 'spring', stiffness: 50, damping: 30 }}
            />

            <div
                ref={containerRef}
                className="relative h-screen lg:mt-2 md:mt-9 sm:p-2 md:p-8 min-h-screen"
            >
                {/* Page title */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1
                        className="lg:text-6xl 
                    font-bold
                    bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                    bg-clip-text text-transparent mb-4"
                    >
                        Code Constellation
                    </h1>
                    <p className="lg:text-xl mb-2 text-gray-300">
                        Navigate through my digital universe
                    </p>

                    <Link
                        className="text-xl hover:decoration-pink-500 hover:text-red-600"
                        to="/workRView"
                    >
                        Switch to card view 🎴
                    </Link>
                </motion.div>

                {/* Project constellation */}
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="absolute cursor-pointer group"
                        style={{
                            left: `${project.constellation.x}%`,
                            top: `${project.constellation.y}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: index * 0.2,
                            duration: 0.8,
                            type: 'spring',
                        }}
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={() => setIsHovering(project.id)}
                        onHoverEnd={() => setIsHovering(null)}
                        onClick={() => setSelectedProject(project)}
                    >
                        {/* Project orb */}
                        <motion.div
                            className={`
                relative w-20 h-20 rounded-full bg-gradient-to-br ${
                    project.color
                } 
                ${project.glowColor} shadow-2xl
                ${project.constellation.size === 'large' ? 'w-24 h-24' : ''}
                ${project.constellation.size === 'medium' ? 'w-20 h-20' : ''}
              `}
                            animate={{
                                boxShadow:
                                    isHovering === project.id
                                        ? `0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)`
                                        : `0 0 15px rgba(139, 92, 246, 0.4)`,
                            }}
                        >
                            {/* Pulsing ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-white/30"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 0, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />

                            {/* Project icon */}
                            <div className="absolute inset-0 flex items-center justify-center text-white">
                                {project.icon}
                            </div>
                        </motion.div>

                        {/* Project label */}
                        <motion.div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: isHovering === project.id ? 1 : 0.7,
                            }}
                        >
                            <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 border border-purple-500/30">
                                <p className="text-white text-sm font-semibold">
                                    {project.title}
                                </p>
                                <p className="text-purple-300 text-xs">
                                    {project.subtitle}
                                </p>
                            </div>
                        </motion.div>

                        {/* Connecting lines to other projects */}
                        {project.id === 1 && (
                            <svg
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    width: '100vw',
                                    height: '100vh',
                                    left: '-50vw',
                                    top: '-50vh',
                                }}
                            >
                                <motion.line
                                    x1={`${project.constellation.x}%`}
                                    y1={`${project.constellation.y}%`}
                                    x2="70%"
                                    y2="15%"
                                    stroke="rgba(139, 92, 246, 0.3)"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 1, duration: 2 }}
                                />
                            </svg>
                        )}
                    </motion.div>
                ))}

                {/* Floating tech badges
                <div className="absolute top-20 right-8 space-y-4">
                    {[
                        'React',
                        'Node.js',
                        'MongoDB',
                        'Firebase',
                        'React Native',
                    ].map((tech, index) => (
                        <motion.div
                            key={tech}
                            className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm border border-white/20"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 0.8, x: 0 }}
                            transition={{ delay: 2 + index * 0.1 }}
                            whileHover={{ scale: 1.1, opacity: 1 }}
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div> */}
            </div>

            {/* Project details modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-purple-500/30 shadow-2xl"
                            initial={{ scale: 0.8, rotateY: -15 }}
                            animate={{ scale: 1, rotateY: 0 }}
                            exit={{ scale: 0.8, rotateY: 15 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div
                                className={`relative p-6 bg-gradient-to-r ${selectedProject.color}`}
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/20 rounded-full p-3">
                                        {selectedProject.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white">
                                            {selectedProject.title}
                                        </h2>
                                        <p className="text-white/80 text-lg">
                                            {selectedProject.subtitle}
                                        </p>
                                        <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm text-white mt-2">
                                            {selectedProject.type}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-white overflow-y-auto max-h-96">
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-3 text-purple-300">
                                        Key Features
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {selectedProject.features.map(
                                            (feature, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-white/5 rounded-lg p-3 border border-white/10"
                                                    initial={{
                                                        opacity: 0,
                                                        x: -20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        delay: index * 0.1,
                                                    }}
                                                >
                                                    <span className="text-gray-300">
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Tech stack */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-3 text-purple-300">
                                        Technology Stack
                                    </h3>
                                    <div className="space-y-3">
                                        {Object.entries(
                                            selectedProject.technologies
                                        ).map(([category, techs]) => (
                                            <div
                                                key={category}
                                                className="flex items-center space-x-3"
                                            >
                                                <span className="text-gray-400 capitalize min-w-20">
                                                    {category}:
                                                </span>
                                                <div className="flex flex-wrap gap-2">
                                                    {techs.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-3 py-1 text-sm flex items-center space-x-1"
                                                        >
                                                            {getTechIcon(tech)}
                                                            <span>{tech}</span>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action buttons */}
                                <div className="flex space-x-4">
                                    {selectedProject.website && (
                                        <motion.a
                                            href={selectedProject.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg px-6 py-3 text-white font-semibold transition-all transform hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span>View Live Demo</span>
                                        </motion.a>
                                    )}
                                    <motion.button
                                        className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-6 py-3 text-white font-semibold transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Code className="w-4 h-4" />
                                        <span>
                                            <a href={'https://github.com/kariemgerges'} target="_blank" rel="noopener noreferrer" >
                                                View Code
                                            </a>
                                        </span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation hint */}
            {/* <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
            >
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white text-sm border border-white/20">
                    Click on any star to explore the project
                </div>
            </motion.div> */}
        </div>
    );
};

export default WorkConstellation;
