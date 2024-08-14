import React from "react";
import './Resume.css';
const Resume = () =>
    {
    return (
        <div className="text-gray-900 leading-relaxed tracking-wide flex flex-col items-center ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            </div>
         
        <header className="bg-white shadow p-6 mt-6 w-full max-w-4xl rounded-lg">
            <h1 className="text-3xl font-bold mb-3 text-center">
                Kariem H. Gerges
            </h1>
            <p className="text-center">
                Westfield IN 
                || 
                (317) 438-3142 
                ||
                <a href="mailto:kariem.gerges@outlook.com" className="text-red-500 hover:text-red-700 hover:underline m-2">kariem.gerges@outlook.com</a>
                ||
                <a href="https://kariemgerges.github.io/portfolioPage" 
                    target="_blank" rel="noopener noreferrer" 
                    className="text-red-500 hover:text-red-700 hover:underline m-2"
                    >
                        My Portfolio
                    </a>
                </p>
        </header>
    
    <section className="bg-white shadow p-6 mt-6 w-full max-w-4xl rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Objective</h2>
        <p>Eager to leverage my extensive skills in systems development and programming, especially in software development with Agile methodologies, to drive impactful technology solutions. I am always keen to learn new technologies quickly to stay current. I aim to utilize my experience in leading cross-functional teams to foster innovative strategies and contribute significantly to business growth and efficiency.</p>
    </section>

    <section className="bg-white shadow p-6 mt-6 w-full max-w-4xl rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="mb-4">
            <ul className="list-disc list-inside">
                <li>Bachelor of Science in Computer and Information Technology: Web & Software Development,
                    Purdue School of Engineering and Technology, IUPUI. GPA 3.9.</li>
                <li>Associate in informatics TSAP, Ivy Tech College, IN GPA 3.85.</li>
                <li>Bachelor of Science in Business Administration, Cairo University, Egypt.</li>
                <li>Bachelor of Science in Accounting, Alexandria University, Egypt.</li>
            </ul>
        </div>
    </section>
    
    <section className="bg-white shadow p-6 mt-6 w-full max-w-4xl rounded-lg">
    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
    <div className="mb-4">
        <h3 className="text-xl font-semibold mb-4">Professional</h3>
        <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc list-inside">
                <li>Agile and Scrum</li>
                <li>Led Cross-functional Team</li>
                <li>Problem Solving</li>
                <li>Teamwork</li>
            </ul>
            <ul className="list-disc list-inside">
                <li>Advanced Decision-Making</li>
                <li>Emotional Intelligence</li>
                <li>Mentorship and Coaching</li>
                <li>Strategic Visioning</li>
            </ul>
        </div>
    </div>
    <h3 className="text-xl font-semibold mb-4">Technical</h3>
    <div className="grid grid-cols-5 gap-4">
        <ul className="list-disc list-inside">
            <li>HTML</li>
            <li>CSS</li>
            <li>LESS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
        </ul>
        <ul className="list-disc list-inside">
            <li>React</li>
            <li>Vue</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Firebase</li>
        </ul>
        <ul className="list-disc list-inside">
            <li>Mango</li>
            <li>Front-end</li>
            <li>Back-end</li>
            <li>Illustrator</li>
            <li>InDesign</li>
        </ul>
        <ul className="list-disc list-inside">
            <li>Lightroom</li>
            <li>Java</li>
            <li>Kotlin</li>
            <li>Python</li>
            <li>Figma</li>
        </ul>
        <ul className="list-disc list-inside">
            <li>Git</li>
            <li>GitHub</li>
            <li>Visual Studio</li>
            <li>Wix Studios</li>
            <li>WordPress</li>
        </ul>
    </div>
    </section>

    <section className="bg-white shadow p-6 mt-6 w-full max-w-4xl rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="mb-4">
            <h3 className="text-xl font-semibold">Meijer Service Area Leader/Store Director in Charge (2016-Present)</h3>
            <ul className="list-disc list-inside">
                <li>Drove successful software issue resolutions by synergizing with IT support teams showcasing adeptness in navigating both intricate system architectures and complex business needs.</li>
                <li>Played a key role in vendor relations and project management including the coordination of technology deployment.</li>
                <li>Led cross-functional teams for over 8 years, to improve departmental efficiency up to 96% and customer satisfaction.</li>
            </ul>
        </div>
        
        <div>
            <h3 className="text-xl font-semibold">Owner, Will Fix It 2009-Present</h3>
            <ul className="list-disc list-inside">
                <li>Owned and operated a small business that developed full-stack web applications and provided computer repair, maintenance, and troubleshooting services for personal and small business clients.</li>
                <li>Installed and configured hardware and software including operating systems and smart home devices.</li>
            </ul>
        </div>
    </section>
    
    <section className="bg-white shadow p-6 mt-6 mb-6 w-full max-w-4xl rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside">
            <li>Built full stack web application with a Node.js, Express, and Python backend, and a React.js and Bootstrap frontend.</li>
            <li>Created a database system for a small business client to manage their inventory using MySQL, MongoDB, and FireStore.</li>
            <li>Developed a web-based application for a personal project using Vue.js and Firebase.</li>
        </ul>
    </section>

</div>

    );
}; 

export default Resume;