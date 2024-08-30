import React, { useState } from 'react';
import { Code, BookOpen, Briefcase, Cpu, FolderOpen, Menu } from 'lucide-react';
import PdfDownloader from '../../components/PdfDownloader/PdfDownloader';

const CodeEditorResume = () => {
    const [activeFile, setActiveFile] = useState('profile.js');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const files = {
        'profile.js': {
        icon: Code,
        content: `const profile = {
    name: "Kariem H. Gerges",
    location: "Westfield, IN",
    phone: "(317) 438-3142",
    email: "kariem.gerges@outlook.com",
    portfolio: "https://kariemgerges.github.io/portfolioPage",
    github: "https://github.com/kariemGerges",
    objective: \`Innovative full-stack developer with 3+ years of experience in web 
        application development and 8+ years in leadership roles. Seeking a challenging 
        position as a Full-Stack Developer where I can leverage my technical expertise 
        and leadership skills to drive cutting-edge software projects and inspire 
        technological advancement.\`
    };`
        },
        'education.js': {
        icon: BookOpen,
        content: `const education = [
    {
        degree: "Bachelor of Science",
        major: "Computer and Information Technology: Web & Software Development",
        school: "Purdue School of Engineering and Technology, IUPUI",
        gpa: 3.9
    },
    {
        degree: "Associate in Informatics TSAP",
        school: "Ivy Tech College, IN",
        gpa: 3.85
    },
    {
        degree: "Bachelor of Science in Business Administration",
        school: "Cairo University, Egypt"
    },
    {
        degree: "Bachelor of Science in Accounting",
        school: "Alexandria University, Egypt"
    }
    ];`
        },
        'experience.js': {
        icon: Briefcase,
        content: `const experience = [
    {
        title: "Full-Stack Developer & Owner",
        company: "Will Fix It",
        period: "2020-Present",
        responsibilities: [
        "Develop and maintain full-stack web applications for small business clients using Node.js, Express, and React.js",
        "Design and implement database systems using MySQL, MongoDB, and Firebase, improving clients' inventory management efficiency by 40%",
        "Create responsive and user-friendly interfaces using modern front-end technologies, resulting in a 30% increase in client user engagement",
        "Collaborate with clients to gather requirements and deliver customized solutions that meet their specific needs"
        ]
    },
    {
        title: "Service Area Leader/Store Director in Charge",
        company: "Meijer",
        period: "2016-Present",
        responsibilities: [
        "Drive successful software issue resolutions by synergizing with IT support teams",
        "Play key role in vendor relations and project management, including technology deployment",
        "Lead cross-functional teams for over 8 years, improving departmental efficiency up to 96% and enhancing customer satisfaction"
        ]
    }
    ];`
        },
        'skills.js': {
        icon: Cpu,
        content: `const skills = {
    technical: [
        "JavaScript", "Java", "Python", "Kotlin", "HTML", "CSS",
        "React", "Vue", "Express", "Node.js", "Bootstrap", "Tailwind CSS",
        "MongoDB", "MySQL", "Firebase",
        "Git", "Figma", "Illustrator", "InDesign", "Lightroom", "Wix Studio", "WordPress"
    ],
    professional: [
        "Agile and Scrum",
        "Cross-functional Team Leadership",
        "Problem Solving",
        "Teamwork",
        "Advanced Decision-Making",
        "Emotional Intelligence",
        "Mentorship and Coaching",
        "Strategic Visioning"
    ]
    };`
        },
        'projects.js': {
        icon: FolderOpen,
        content: `const projects = [
    {
        name: "Personal Profile and Blog",
        stack: ["React.js", "Node.js", "Express", "MongoDB"],
        description: "Developed a personal profile website showcasing my portfolio and implemented a blog focused on IT trends and emerging technologies. Utilized SEO best practices to improve visibility and engagement."
    },
    {
        name: "GuideMe - AI Travel Companion",
        stack: ["React.js", "Tailwind CSS", "Node.js", "Express", "Google Places API", "NLP libraries"],
        description: "Built a full-stack travel companion website with AI chatbot integration for personalized travel insights and dynamic itinerary planning."
    },
    {
        name: "StockMe - Stock Market Analysis Platform",
        stack: ["React.js", "Bootstrap", "Node.js", "Python", "TensorFlow", "Stock market APIs"],
        description: "Created a stock market analysis platform with advanced predictive modeling using machine learning algorithms and real-time stock data integration."
    },
    {
        name: "Inventory Management System",
        stack: ["MySQL", "MongoDB", "Firebase", "React.js", "Chart.js"],
        description: "Designed and implemented a database system for small business inventory management with data visualization tools for inventory insights and forecasting."
    }
    ];`
        }
    };

    return (
        <div className="text-gray-300 min-h-screen mt-12 font-mono">
        <div className="max-w-6xl mx-auto bg-gray-800 shadow-xl">
            <header className="bg-gray-700 p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Kariem_H_Gerges_Resume.ide</h1>
            <div className="flex items-center space-x-4">
                <div className="hidden sm:flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="sm:hidden text-white focus:outline-none"
                >
                <Menu size={24} />
                </button>
            </div>
            </header>
            <div className="flex flex-col sm:flex-row">
            <aside className={`w-full sm:w-64 bg-gray-800 p-4 ${isSidebarOpen ? 'block' : 'hidden'} sm:block`}>
                <h2 className="text-sm uppercase tracking-wide mb-4">Files</h2>
                <ul className="space-y-2">
                {Object.entries(files).map(([fileName, { icon: Icon }]) => (
                    <li 
                    key={fileName}
                    className={`cursor-pointer flex items-center space-x-2 p-2 rounded ${activeFile === fileName ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
                    onClick={() => {
                        setActiveFile(fileName);
                        setIsSidebarOpen(false);
                    }}
                    >
                    <Icon size={18} />
                    <span>{fileName}</span>
                    </li>
                ))}
                </ul>
            </aside>
            <main className="flex-1 p-4 overflow-auto">
                <pre className="text-sm whitespace-pre-wrap">
                <code>{files[activeFile].content}</code>
                </pre>
            </main>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center m-4'>
            <PdfDownloader />
        </div>
        </div>
    );
};

export default CodeEditorResume;