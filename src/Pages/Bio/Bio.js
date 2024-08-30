import React, { useState } from "react";
import './Bio.css';
import { useTranslation } from "react-i18next";
import { Code, GraduationCap, Users, Trophy } from 'lucide-react';
import AnimatedCard from '../../components/Animations/CardAnimation/CardAnimation';



const Bio = ()  => {
    const [activeSection, setActiveSection] = useState(null);

    const { t } = useTranslation ();

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
          content: "Exploring new technologies, playing baseball (Steph Curry fan!), and spending quality time with family.",
        },
        ];

    return (
        <div className="p-8 transition-colors duration-300 ">

            <div className="flex justify-between mb-8">
                <h1 className="text-4xl font-bold text-center">Explore My Universe</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                
            {sections.map((section, index) => (
                < AnimatedCard delay={0.1 * index}> 
                    <div
                        key={index}
                        className={` rounded-lg p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 
                        ${activeSection === index ? 'ring-2 ring-blue-400' : ''}`}
                        onClick={() => setActiveSection(index)}
                    >
                    <div className={`flex items-center justify-center mb-2`}>
                        {section.icon}
                    </div>
                        <h2 className="text-xl font-semibold text-center">{section.title}</h2>
                    </div>
                </AnimatedCard>
            ))}
            
            </div>

            <AnimatedCard delay={0.01 * sections.length}>
                <div className='rounded-lg p-6 min-h-[200px] flex items-center justify-center transition-colors duration-300'>
                    {activeSection !== null ? (
                        <p className="text-lg text-center">{sections[activeSection].content}</p>
                            ) : (
                        <p className="text-lg text-center">Click on a planet to explore more about me!</p>
                    )}
                </div>
            </AnimatedCard>

        </div>
    );
}

export default Bio;






{/* <div className="mx-auto h-screen justify-center flex">
<div className="pl-8 ml-8 pr-8 mr-8">
    <h1 className="text-3xl font-bold mb-4">{t('bio.about_me')}</h1>
        <p className=" mb-4">{t('bio.paragraph1')}</p>
            <p className=" mb-4">{t('bio.paragraph2')}</p>
                <p className=" mb-4">{t('bio.paragraph3')}</p>
        <p className=" mb-4">{t('bio.paragraph4')}</p>
    <p className="">{t('bio.paragraph5')}</p>
</div>
</div> */}