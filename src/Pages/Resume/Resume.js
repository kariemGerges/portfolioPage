import { useState, useEffect, useContext } from 'react';
import {
    Code,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Download,
    ExternalLink,
    Star,
    GitBranch,
    Users,
    Trophy,
    Zap,
    ArrowRight,
} from 'lucide-react';
import ThemeContext from '../../components/ThemeContext/ThemeContext';
import PdfDownloader from '../../components/PdfDownloader/PdfDownloader';

import './Resume.css';

export default function KariemResume() {
    const [activeSection, setActiveSection] = useState('about');
    const [isVisible, setIsVisible] = useState(false);
    // theme context
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        {
            name: 'JavaScript',
            level: 95,
            color: 'from-yellow-400 to-orange-600',
        },
        {
            name: 'React/Next.js',
            level: 90,
            color: 'from-blue-400 to-blue-600',
        },
        { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Python', level: 80, color: 'from-indigo-400 to-purple-600' },
        { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-700' },
        {
            name: 'Google Cloud',
            level: 75,
            color: 'from-red-400 to-fuchsia-600',
        },
        { name: 'Docker', level: 40, color: 'from-green-400 to-cyan-600' },
        { name: 'NoSQL', level: 80, color: 'from-pink-400 to-blue-600' },
    ];

    const experiences = [
        {
            title: 'Freelancer Full Stack Engineer',
            company: 'Freelance',
            period: '2022 - Present',
            description:
                'Created full E-commerce and business websites for local clients, Fundraising Web App, Online ordering web platform, and Developed mobile apps using React Native and integrated cloud services for scalability.',
            technologies: [
                'React',
                'React Native',
                'Node.js',
                'Google Cloud',
                'TypeScript',
            ],
        },
        {
            title: 'Full Stack Developer',
            company: 'Central Tech Solutions',
            period: '2020 - 2022',
            description:
                'Developed end-to-end web applications using modern JavaScript frameworks. Implemented CI/CD pipelines and automated testing.',
            technologies: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
        },
        {
            title: 'Frontend Developer',
            company: 'WebAgency',
            period: '2018 - 2020',
            description:
                'Created responsive web applications and collaborated with design teams to implement pixel-perfect UIs.',
            technologies: ['JavaScript', 'React', 'SASS', 'Webpack'],
        },
    ];

    const projects = [
        {
            name: 'E-Commerce Platform',
            description:
                'Full-stack e-commerce solution with real-time inventory and payment processing.',
            website: 'https://ecommerce-frontend-henna-two.vercel.app/',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
            stats: { users: '1K+', uptime: '99.9%' },
        },
        {
            name: 'Fundraising Web Application',
            description:
                'Dynamic web application for creating and managing fundraising campaigns',
            tech: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
            website: 'https://kariemgerges.github.io/donationPal-frontend/',
            stats: { users: '500+', uptime: '95%' },
        },
        {
            name: 'AI Chat Application',
            description:
                'Real-time chat app with AI-powered responses and sentiment analysis.',
            tech: [
                'React Native',
                'Node.js',
                'WebSocket',
                'OpenAI API',
                'Redis',
            ],
            stats: { messages: '2k+', response: '<200ms' },
        },
        {
            name: 'Online Ordering System',
            description:
                'Monitoring dashboard for controlling online order with custom metrics and alerts.',
            tech: ['NEXT.js', 'D3.js', 'Firebase', 'Firestore', 'Node.js'],
            website: 'https://ecommerce-frontend-admindashborad.vercel.app/',
            stats: { services: '50+', alerts: '24/7' },
        },
    ];

    const achievements = [
        {
            icon: Trophy,
            text: 'B.S. Computer & Information Technology: Web & Software Engineering, Purdue School of Engineering & Technology.',
            year: '3.95 GPA',
        },
        {
            icon: Star,
            text: 'Associate in Informatics TSAP – Ivy Tech College, IN',
            year: '3.85 GPA',
        },
        { icon: Users, text: 'CompTIA A+ certification', year: '2021' },
        {
            icon: GitBranch,
            text: 'AWS Certified Cloud Practitioner (CCP)',
            year: '2021',
        },
    ];

    // bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900
    return (
        <div
            className="min-h-screen 
            lg:mt-9 md:mt-9 sm:p-4 md:p-8"
        >
            <div
                className={`max-w-6xl mx-auto transition-all duration-1000 ${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                {/* Header Section */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 border border-white/20 shadow-2xl">
                    <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                        <div className="relative flex-shrink-0">
                            <div
                                className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 
                                bg-gradient-to-r from-cyan-400 to-purple-500 
                                rounded-full flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold
                                ${theme ? `text-gray-900` : `text-white`}
                                shadow-2xl`}
                            >
                                <Code className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
                            </div>
                            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full flex items-center justify-center">
                                <Zap
                                    className={`w-3 h-3 sm:w-4 sm:h-4 
                                    ${theme ? `text-gray-900` : `text-white`}
                                    `}
                                />
                            </div>
                        </div>

                        <div className="text-center lg:text-left flex-1">
                            <h1
                                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold
                            mb-2 sm:mb-4 `}
                                id="name"
                            >
                                Kariem Gerges
                            </h1>
                            <p
                                className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 md:mb-6 font-light"
                                id="title"
                            >
                                Senior Software Engineer
                            </p>
                            <p
                                className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0"
                                id="description"
                            >
                                Passionate software engineer with 5+ years of
                                experience building scalable web applications.
                                Specialized in modern JavaScript frameworks and
                                cloud architecture.
                            </p>

                            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 justify-center  mb-4 sm:mb-6">
                                <div
                                    className="flex items-center gap-2 text-xs sm:text-sm
                                px-3 sm:px-4 py-2 rounded-full"
                                >
                                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                    <span className="truncate">
                                        kariem.gerges@outlook.com
                                    </span>
                                </div>
                                <div
                                    className="flex items-center gap-2 text-xs sm:text-sm
                                sm:px-4 py-2 rounded-full"
                                >
                                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                    <span>+1 (317) 438-3142</span>
                                </div>
                                <div
                                    className="flex items-center gap-2 text-xs sm:text-sm
                                
                                px-3 sm:px-4 py-2 rounded-full"
                                >
                                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                    <span>Westfield, IN</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                                <button
                                    className={`bg-gradient-to-r
                                ${theme ? `text-white` : `text-black`}
                                from-cyan-500 to-purple-500 hover:from-cyan-600
                                hover:to-purple-600  px-4 sm:px-6 py-2 sm:py-3
                                rounded-full font-semibold flex items-center
                                justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base`}
                                >
                                    <Download className="w-3 h-3 sm:w-4 sm:h-4" />

                                    <PdfDownloader
                                        className={`${
                                            theme ? `text-white` : `text-black`
                                        }`}
                                    />
                                </button>
                                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600  px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base">
                                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <a
                                        href="https://github.com/kariemgerges"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        GitHub
                                    </a>
                                </button>
                                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base">
                                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <a
                                        href="https://www.linkedin.com/in/kariem-gerges-458294195/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        LinkedIn
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6 md:mb-8 justify-center px-2">
                    {['about', 'experience', 'projects', 'achievements'].map(
                        (section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold capitalize transition-all duration-300 text-sm sm:text-base ${
                                    activeSection === section
                                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg'
                                        : 'bg-white/10  hover:bg-white/20'
                                }`}
                            >
                                {section}
                            </button>
                        )
                    )}
                </div>

                {/* Content Sections */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl min-h-[400px] sm:min-h-[500px]">
                    {/* About Section */}
                    {activeSection === 'about' && (
                        <div className="space-y-4 sm:space-y-6 md:space-y-8">
                            <h2
                                className={`text-2xl sm:text-3xl font-bold 
                                
                                mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-3`}
                            >
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex-shrink-0"></div>
                                Technical Skills
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                {skills.map((skill, index) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span
                                                className={`text-sm sm:text-base font-semibold`}
                                            >
                                                {skill.name}
                                            </span>
                                            <span
                                                className={`text-sm sm:text-base
                                                ${
                                                    theme
                                                        ? `text-purple-200`
                                                        : `text-purple-800`
                                                } `}
                                            >
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 sm:h-3 bg-white/20 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full bg-gradient-to-r ${
                                                    skill.color
                                                } transition-all duration-1000 delay-${
                                                    index * 100
                                                }`}
                                                style={{
                                                    width: `${skill.level}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 sm:mt-10 md:mt-12">
                                <h3
                                    className={`text-xl sm:text-2xl font-bold  mb-4 sm:mb-6`}
                                >
                                    About Me
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                                    I'm a passionate software engineer who loves
                                    creating efficient, scalable solutions to
                                    complex problems. With experience across the
                                    full development stack, I enjoy working with
                                    cutting-edge technologies and contributing
                                    to open-source projects. I'm always eager to
                                    learn new technologies and take on
                                    challenging projects.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Experience Section */}
                    {activeSection === 'experience' && (
                        <div className="space-y-4 sm:space-y-6 md:space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex-shrink-0"></div>
                                Work Experience
                            </h2>

                            <div className="space-y-4 sm:space-y-6">
                                {experiences.map((exp, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                                    >
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 sm:mb-4">
                                            <div>
                                                <h3
                                                    className="text-lg sm:text-xl font-bold "
                                                    id="name"
                                                >
                                                    {exp.title}
                                                </h3>
                                                <p
                                                    className="text-sm sm:text-base font-semibold"
                                                    id="title"
                                                >
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <span className="text-xs sm:text-sm  bg-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full mt-2 lg:mt-0 self-start lg:self-auto">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <p className="text-sm sm:text-base  mb-3 sm:mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1 sm:gap-2">
                                            {exp.technologies.map(
                                                (tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-cyan-500/30"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Projects Section */}
                    {activeSection === 'projects' && (
                        <div className="space-y-4 sm:space-y-6 md:space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex-shrink-0"></div>
                                Recent Projects
                            </h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105"
                                    >
                                        <div className="flex justify-between items-start mb-3 sm:mb-4">
                                            <h3
                                                className="text-lg sm:text-xl font-bold group-hover:text-cyan-300 transition-colors"
                                                id="name"
                                            >
                                                {project.name}
                                            </h3>
                                            {project.website && (
                                                <a
                                                    href={project.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-300 transition-colors flex-shrink-0" />
                                                </a>
                                            )}
                                        </div>

                                        <p className="text-sm sm:text-base  mb-3 sm:mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                                            {project.tech.map(
                                                (tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20  px-2 py-1 rounded-lg text-xs border border-purple-500/30"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>

                                        <div className="flex justify-between text-xs sm:text-sm mb-3">
                                            {Object.entries(project.stats).map(
                                                ([key, value]) => (
                                                    <div
                                                        key={key}
                                                        className="text-center"
                                                    >
                                                        <div className="text-cyan-400 font-bold">
                                                            {value}
                                                        </div>
                                                        <div className="text-gray-400 capitalize">
                                                            {key}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>

                                        {project.website && (
                                            <a
                                                href={project.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs sm:text-sm text-cyan-400 hover:underline block mt-2"
                                            >
                                                Visit Website
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Achievements Section */}
                    {activeSection === 'achievements' && (
                        <div className="space-y-4 sm:space-y-6 md:space-y-8">
                            <h2 className="text-2xl sm:text-3xl font-bold  mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex-shrink-0"></div>
                                Achievements & Certifications
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                {achievements.map((achievement, index) => {
                                    const Icon = achievement.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                                        >
                                            <div className="flex items-center gap-3 sm:gap-4">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 " />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm sm:text-base md:text-lg  font-semibold">
                                                        {achievement.text}
                                                    </h3>
                                                    <p
                                                        className="text-xs sm:text-sm"
                                                        id="title"
                                                    >
                                                        {achievement.year}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-8 sm:mt-10 md:mt-12 text-center">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                                    Let's Connect!
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                                    I'm always interested in new opportunities
                                    and exciting projects. Feel free to reach
                                    out if you'd like to collaborate!
                                </p>
                                <button className="shine-btn bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2 relative overflow-hidden">
                                    Get In Touch
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
