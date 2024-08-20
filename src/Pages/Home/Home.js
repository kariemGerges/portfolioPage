import React from 'react';
import './Home.css';
import { useTranslation } from 'react-i18next';
import { Code, Database, Server, Smartphone } from 'lucide-react';
// 
import TextAnimation from '../../components/Animations/TextAnimation';
import AnimatedCard from '../../components/Animations/CardAnimation/CardAnimation';
import AnimatedIcon from '../../components/Animations/IconAnimation/IconAnimation';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen lg:flex-row">
            <div className='w-full lg:w-1/2 p-8 sm:p-8 lg:p-12 flex flex-col justify-center'>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4" id='hello'>{t('home.hello')}</h1>
                <h2 className="text-4xl sm:text-6xl lg:text-8xl font-semibold mb-4" id='name'><TextAnimation text={t('home.name')} /></h2>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4" id='title'>{t('home.title')}</h3>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed" id='description'>
                    {t('home.description')}<br />
                    {t('home.description1')}<br />
                    {t('home.description2')}<br />
                    {t('home.description3')}
                </p>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-8">
                    <AnimatedCard delay={0.1}>
                        <h3 className="text-2xl font-semibold mb-4">Front-end Expertise</h3>
                        <p className="mb-4">Crafting beautiful and responsive user interfaces with React, Vue, and Angular.</p>
                        <AnimatedIcon icon={Smartphone} delay={0.2} />
                    </AnimatedCard>

                    <AnimatedCard delay={0.2}>
                        <h3 className="text-2xl font-semibold mb-4">Back-end Mastery</h3>
                        <p className="mb-4">Building robust server-side applications with Node.js, Python, and Java.</p>
                        <AnimatedIcon icon={Server} delay={0.4} />
                    </AnimatedCard>

                    <AnimatedCard delay={0.3}>
                        <h3 className="text-2xl font-semibold mb-4">Database Wizardry</h3>
                        <p className="mb-4">Managing and optimizing data with SQL and NoSQL databases.</p>
                        <AnimatedIcon icon={Database} delay={0.6} />
                    </AnimatedCard>

                    <AnimatedCard delay={0.4}>
                        <h3 className="text-2xl font-semibold mb-4">Code Quality Enthusiast</h3>
                        <p className="mb-4">Ensuring clean, maintainable, and efficient code through best practices and testing.</p>
                        <AnimatedIcon icon={Code} delay={0.8} />
                    </AnimatedCard>
                </div>
            </div>
        </div>
    );
}

export default Home;