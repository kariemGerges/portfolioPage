// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import guideMeImg from '../../assets/Guide Me.png';
// import stateQuiz from '../../assets/StatesQuiz.png';
// import stockSavvy from '../../assets/StockMe.png';
// import donationPal from '../../assets/donationPal.png';
// import eCommerce from '../../assets/e-commerce.png';
// import travia from '../../assets/travia.png';
// import adminDashboard from '../../assets/adminDashborad.png';
// import TeachMe from '../../assets/teachme1.png';

// const Work = () => {
//     const [selectedCard, setSelectedCard] = useState(null);

//     const cards = [
//         {
//             id: 1,
//             title: 'Guide Me',
//             image: guideMeImg,
//             alt: 'Guide Me',
//             webSite: 'https://kariemgerges.github.io/GuideMe/',
//             prevDescription:
//                 '<div><h1>GuideMe: Your AI Travel Companion</h1><p>GuideMe is an AI-driven travel companion app that helps users plan and enhance their journeys. Key features include personalized travel suggestions, an intuitive itinerary planner, integration with Google Places API, interactive user interface with map and card components, and valuable travel insights.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js</li><li><strong>Backend:</strong> Node.js, Google Places API</li><li><strong>AI Integration:</strong> Advanced AI algorithms</li></ul></div>',
//             description:
//                 "<div><h1>GuideMe: Your AI Travel Companion</h1><p>GuideMe is an innovative travel companion application designed to transform the way people plan and experience their journeys. By leveraging advanced AI technology, GuideMe assists travelers in organizing and enhancing their trips without the hassle of manual bookings.</p><h2>Key Features:</h2><ul><li><strong>AI Travel Assistance:</strong> GuideMe provides personalized travel suggestions based on user preferences, past trips, and popular destinations.</li><li><strong>Itinerary Planning:</strong> The intuitive Itinerary Planner allows users to effortlessly plan their trips. Users can add places of interest, which are then displayed on a dynamic map with markers for easy navigation.</li><li><strong>Integration with Google Places API:</strong> Our backend integration with the Google Places API ensures that users have access to a vast database of places, including detailed information such as names, types, phone numbers, and websites.</li><li><strong>Interactive User Interface:</strong> The user-friendly interface includes card components for each place, offering a detailed view when clicked. All places are shown on the map as well as on the cards. When a user clicks on any card, they are taken to a detail page with a 3D map location of the place, enhancing the user experience.</li><li><strong>Travel Insights:</strong> GuideMe provides valuable travel insights, such as common travel seasons and tips for various destinations, to help users make informed decisions.</li></ul><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> Developed using React.js for a responsive and interactive user experience.</li><li><strong>Backend:</strong> Built with Node.js and integrated with the Google Places API for real-time data fetching.</li><li><strong>AI Integration:</strong> Utilizes advanced AI algorithms to offer personalized travel recommendations and insights.</li></ul><p>GuideMe is more than just a travel planner; it's a smart companion that adapts to your travel needs, making every journey memorable and stress-free.</p></div>",
//             frontend: ['React.js'],
//             backend: ['Node.js', 'Google Places API'],
//             database: ['Firebase'],
//         },
//         {
//             id: 2,
//             title: 'TheStateQuiz',
//             image: stateQuiz,
//             alt: 'State Quiz',
//             webSite:
//                 'https://pages.github.iu.edu/kgerges/sp23-advanced-web-final-project/index.html',
//             prevDescription:
//                 '<div><h1>StateQuiz: Learning U.S. States</h1><p>StateQuiz is a website designed to help 3rd graders learn about U.S. states through engaging lessons and quizzes. It features interactive maps and quizzes stored in a MongoDB database, with a frontend built using HTML and advanced CSS for a fun and educational experience.</p></div>',
//             description:
//                 'A website designed to help 3rd graders learn about U.S. states through engaging lessons and quizzes. The website features interactive maps and knowledge-testing quizzes, providing a fun and educational experience for young learners. The quiz questions are stored in a MongoDB database, ensuring efficient data management and retrieval. The front end is built with simple HTML and advanced CSS, creating an intuitive and visually appealing interface that captivates and educates students effectively.',
//             frontend: ['HTML', 'CSS'],
//             backend: ['Not specified'],
//             database: ['MongoDB'],
//         },
//         {
//             id: 3,
//             title: 'StockSavvy',
//             image: stockSavvy,
//             alt: 'Stock Savvy',
//             prevDescription:
//                 '<div><h1>StockSavvy: Real-Time Stock Analysis</h1><p>StockSavvy offers real-time stock data, market analysis, and advanced predictive modeling. Built with React, Node.js, and Express for the front-end and back-end, it integrates Python for AI-driven analysis to help users make informed investment decisions.</p></div>',
//             description:
//                 'StockSavvy offers real-time stock data, comprehensive market analysis, and advanced predictive modeling to help users make informed investment decisions. Built with cutting-edge technology, the platform leverages React for the front-end, Node.js and Express for the back-end, and integrates with Python for complex AI-driven analysis.',
//             frontend: ['React'],
//             backend: ['Node.js', 'Express', 'Python'],
//             database: ['Not specified'],
//         },
//         {
//             id: 4,
//             title: 'Travia',
//             image: travia,
//             alt: 'Travia',
//             prevDescription:
//                 '<div><h1>Travia: Engaging Trivia Game</h1><p>Travia is a web app for playing trivia games with an engaging and interactive experience. It uses Google Big Data for trivia questions and MongoDB for secure authentication. The backend is built with Node.js and Express, while the frontend uses React.</p></div>',
//             description:
//                 'Webapp that allows users to play trivia question game website that provides an engaging and interactive experience for users. The backend infrastructure leverages Google Big Data to store and manage the trivia questions, ensuring scalability and performance. The authentication and login system is robust, with usernames and passwords securely stored in MongoDB to provide a seamless and secure user experience. This setup combines the power of SQL for handling large datasets with the flexibility of MongoDB for efficient user management, resulting in a highly efficient and reliable trivia game platform.',
//             frontend: ['React'],
//             backend: ['Node.js', 'Express'],
//             database: ['MongoDB', 'Google Big Data'],
//         },
//         {
//             id: 5,
//             title: 'Donation Pal',
//             image: donationPal,
//             alt: 'Donation Pal',
//             webSite: 'https://kariemgerges.github.io/donationPal-frontend/',
//             prevDescription:
//                 '<div><h1>Donation Pal: Streamlined Fundraising</h1><p>Donation Pal is a dynamic web application for creating and managing fundraising campaigns. Features include user-friendly campaign creation, secure donations, real-time tracking, and an admin dashboard. Built with Node.js and React, it uses MongoDB for data management.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js</li><li><strong>Backend:</strong> Node.js, payment processing</li><li><strong>Database:</strong> MongoDB</li></ul></div>',
//             description:
//                 '<section><header><h1>Donation Pal</h1><p>A dynamic web application designed to streamline the process of creating and managing fundraising campaigns.</p></header><article><p>The platform empowers users to launch their own campaigns, accept donations, and track progress in real-time. Additionally, it provides administrators with comprehensive oversight of all campaigns and their associated donations.</p><section><h2>Key Features</h2><ul><li><strong>User-Friendly Campaign Creation:</strong> Intuitive interface for users to create and customize fundraising campaigns.</li><li><strong>Secure Donations:</strong> Integrated payment processing ensures secure transactions.</li><li><strong>Real-Time Tracking:</strong> Users can monitor donation progress and campaign status instantly.</li><li><strong>Admin Dashboard:</strong> Administrators have access to an overview of all campaigns and detailed donation records.</li><li><strong>Authentication:</strong> Secure user authentication to protect user data and campaign integrity.</li></ul></section><section><h2>Technology Stack</h2><ul><li><strong>Backend:</strong> Node.js for robust server-side functionality, including authentication and payment processing.</li><li><strong>Frontend:</strong> React for a responsive and interactive user experience.</li><li><strong>Database:</strong> MongoDB for efficient storage and retrieval of campaign and user data.</li></ul></section><section><h2>Role and Contributions</h2><ul><li><strong>Full-Stack Development:</strong> Designed and implemented both frontend and backend components.</li><li><strong>Database Management:</strong> Set up and managed MongoDB for data storage.</li><li><strong>Security:</strong> Ensured secure user authentication and payment processing.</li><li><strong>User Interface Design:</strong> Developed a clean and intuitive interface for both users and administrators.</li></ul></section><footer><h2>Summary</h2><p>Donation Pal exemplifies my ability to build comprehensive, user-focused web applications from the ground up, showcasing my expertise in modern web development technologies.</p></footer></article></section>',
//             frontend: ['React.js'],
//             backend: ['Node.js'],
//             database: ['MongoDB'],
//         },
//         {
//             id: 6,
//             title: 'E-Commerce',
//             image: eCommerce,
//             alt: 'E-Commerce',
//             webSite: 'https://ecommerce-frontend-henna-two.vercel.app/',
//             prevDescription:
//                 '<div><h1>FreshMart: E-Commerce Platform</h1><p>The FreshMart project is a dynamic digital platform that transforms the grocery shopping experience. It combines a user‑friendly interface with robust inventory management and secure e‑commerce features to connect consumers with a curated selection of local and international grocery items, ensuring convenience and efficiency in every transaction.</p></div>',
//             description:
//                 '<section><header><h1>FreshMart: E-Commerce Platform</h1></header><p>The Gro‑Store project is an innovative online marketplace designed to modernize how groceries are bought and sold. Its key objectives and features include: User Experience: A responsive, intuitive interface optimized for both desktop and mobile devices that simplifies product discovery and purchase. E‑Commerce Integration: Secure payment gateways, streamlined checkout processes, and real‑time inventory management ensure smooth, reliable transactions. Advanced Functionality: Powerful search and filtering tools help users quickly locate products, while personalized recommendations driven by data analytics enhance the shopping journey.</p></section>',
//             frontend: ['React.js'],
//             backend: ['Node.js'],
//             database: ['MongoDB, MySQL'],
//         },
//         {
//             id: 7,
//             title: 'E-Commerce Admin Dashboard',
//             image: adminDashboard,
//             alt: 'E-Commerce Admin Dashboard',
//             webSite: 'https://ecommerce-frontend-admindashborad.vercel.app/',
//             prevDescription: '',
//             description: '',
//             frontend: ['React.js'],
//             backend: ['Node.js'],
//             database: ['MongoDB, MySQL'],
//         },
//         {
//             id: 8,
//             title: 'TeachMe App',
//             image: TeachMe,
//             alt: 'TeachMe App',
//             webSite: 'Full Mobile App',
//             prevDescription: 'A full mobile app for android and ios',
//             description:
//                 'A full mobile app for android and ios, developed using React Native and Firebase. It includes features such as authentication, user registration. An app that helps students from 1st grade to 12th grade to learn and practice their subjects. The app includes features such as video lessons, quizzes, flashcards, and progress tracking. The app is designed to be user-friendly and engaging, with a focus on helping students improve their academic performance.',
//             frontend: ['React Native'],
//             backend: ['Firebase'],
//             database: ['FireStore'],
//         },
//         {
//             id: 9,
//             title: 'ChatNCook App',
//             image: TeachMe,
//             alt: 'TeachMe App',
//             webSite: 'Full Mobile App',
//             prevDescription: 'A full mobile app for android and ios',
//             description:
//                 'A full mobile app for android and ios, developed using React Native and Firebase. It includes features such as authentication, user registration. An app that helps students from 1st grade to 12th grade to learn and practice their subjects. The app includes features such as video lessons, quizzes, flashcards, and progress tracking. The app is designed to be user-friendly and engaging, with a focus on helping students improve their academic performance.',
//             frontend: ['React Native'],
//             backend: ['Firebase'],
//             database: ['FireStore'],
//         },
//     ];

//     return (
//         <div className="lg:mt-9 md:mt-9 sm:p-2 md:p-8 min-h-screen">
//             <h1 className="mt-2 text-4xl font-bold mb-8 text-center">
//                 My Work
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {cards.map((card) => (
//                     <motion.div
//                         key={card.id}
//                         layoutId={`card-container-${card.id}`}
//                         onClick={() => setSelectedCard(card)}
//                         className="bg-yellow-100 rounded-lg shadow-lg overflow-hidden cursor-pointer"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         <motion.img
//                             layoutId={`card-image-${card.id}`}
//                             src={card.image}
//                             alt={card.title}
//                             className="w-full h-48 object-cover"
//                         />
//                         <motion.div
//                             layoutId={`card-content-${card.id}`}
//                             className="p-4"
//                         >
//                             <h2 className="text-xl font-semibold text-black">
//                                 {card.title}
//                             </h2>
//                         </motion.div>
//                     </motion.div>
//                 ))}
//             </div>

//             <AnimatePresence>
//                 {selectedCard && (
//                     <motion.div
//                         layoutId={`card-container-${selectedCard.id}`}
//                         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                     >
//                         <motion.div
//                             className="bg-white rounded-lg max-w-3xl w-full"
//                             initial={{ y: 50, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             exit={{ y: 50, opacity: 0 }}
//                         >
//                             <div className="relative">
//                                 <motion.img
//                                     layoutId={`card-image-${selectedCard.id}`}
//                                     src={selectedCard.image}
//                                     alt={selectedCard.title}
//                                     className="w-full h-64 object-cover rounded-t-lg"
//                                 />
//                                 <button
//                                     onClick={() => setSelectedCard(null)}
//                                     className="absolute top-2 right-2 bg-yellow-400 rounded-full p-1 hover:bg-gray-200 transition-colors duration-200"
//                                 >
//                                     <X className="h-6 w-6" />
//                                 </button>
//                             </div>
//                             <motion.div
//                                 layoutId={`card-content-${selectedCard.id}`}
//                                 className="p-6"
//                             >
//                                 <h2 className="text-2xl font-semibold mb-4">
//                                     {selectedCard.title}
//                                 </h2>
//                                 <div
//                                     className="text-gray-700"
//                                     dangerouslySetInnerHTML={{
//                                         __html: selectedCard.prevDescription,
//                                     }}
//                                 />
//                                 <Link
//                                     to="/ProjectDetails"
//                                     state={{ selectedCard }}
//                                 >
//                                     <button className="mt-2 inline-flex rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-blue-950 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//                                         More Details
//                                     </button>
//                                 </Link>
//                             </motion.div>
//                             <button className="mt-2 inline-flex rounded-md bg-yellow-900 px-3 py-2 text-sm font-semibold text-blue-950 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//                                 <a
//                                     href={selectedCard.webSite}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     {selectedCard.webSite
//                                         ? selectedCard.webSite
//                                         : ' coming soon '}
//                                 </a>
//                             </button>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default Work;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    ExternalLink,
    Code,
    Database,
    Layers,
    Sparkles,
    ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import guideMeImg from '../../assets/Guide Me.png';
import stateQuiz from '../../assets/StatesQuiz.png';
import stockSavvy from '../../assets/StockMe.png';
import donationPal from '../../assets/donationPal.png';
import eCommerce from '../../assets/e-commerce.png';
import travia from '../../assets/travia.png';
import adminDashboard from '../../assets/adminDashborad.png';
import TeachMe from '../../assets/teachme1.png';

const WorkRView = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const cards = [
        {
            id: 1,
            title: 'Donation Pal',
            image: donationPal,
            alt: 'Donation Pal',
            webSite: 'https://kariemgerges.github.io/donationPal-frontend/',
            category: 'Social Impact',
            gradient: 'from-emerald-500 via-cyan-500 to-blue-500',
            prevDescription:
                '<div><h1>Donation Pal: Streamlined Fundraising</h1><p>Donation Pal is a dynamic web application for creating and managing fundraising campaigns. Features include user-friendly campaign creation, secure donations, real-time tracking, and an admin dashboard. Built with Node.js and React, it uses MongoDB for data management.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js</li><li><strong>Backend:</strong> Node.js, payment processing</li><li><strong>Database:</strong> MongoDB</li></ul></div>',
            frontend: ['React.js'],
            backend: ['Node.js'],
            database: ['MongoDB'],
        },
        {
            id: 2,
            title: 'E-Commerce',
            image: eCommerce,
            alt: 'E-Commerce',
            webSite: 'https://ecommerce-frontend-henna-two.vercel.app/',
            category: 'E-Commerce',
            gradient: 'from-rose-500 via-pink-500 to-purple-500',
            prevDescription:
                '<div><h1>FreshMart: E-Commerce Platform</h1><p>The FreshMart project is a dynamic digital platform that transforms the grocery shopping experience. It combines a user‑friendly interface with robust inventory management and secure e‑commerce features to connect consumers with a curated selection of local and international grocery items, ensuring convenience and efficiency in every transaction.</p></div>',
            frontend: ['React.js'],
            backend: ['Node.js'],
            database: ['MongoDB, MySQL'],
        },
        {
            id: 3,
            title: 'Admin Dashboard',
            image: adminDashboard,
            alt: 'E-Commerce Admin Dashboard',
            webSite: 'https://ecommerce-frontend-admindashborad.vercel.app/',
            category: 'Dashboard',
            gradient: 'from-slate-600 via-gray-600 to-zinc-600',
            prevDescription:
                '<div><h1>Admin Dashboard</h1><p>Comprehensive admin dashboard for e-commerce management with real-time analytics and control panels.</p></div>',
            frontend: ['React.js'],
            backend: ['Node.js'],
            database: ['MongoDB, MySQL'],
        },
        {
            id: 4,
            title: 'Travia',
            image: travia,
            alt: 'Travia',
            category: 'Gaming',
            gradient: 'from-indigo-500 via-purple-500 to-pink-500',
            prevDescription:
                '<div><h1>Travia: Engaging Trivia Game</h1><p>Travia is a web app for playing trivia games with an engaging and interactive experience. It uses Google Big Data for trivia questions and MongoDB for secure authentication. The backend is built with Node.js and Express, while the frontend uses React.</p></div>',
            frontend: ['React'],
            backend: ['Node.js', 'Express'],
            database: ['MongoDB', 'Google Big Data'],
        },
        {
            id: 5,
            title: 'Guide Me',
            image: guideMeImg,
            alt: 'Guide Me',
            webSite: 'https://kariemgerges.github.io/GuideMe/',
            category: 'AI Travel',
            gradient: 'from-purple-600 via-pink-600 to-blue-600',
            prevDescription:
                '<div><h1>GuideMe: Your AI Travel Companion</h1><p>GuideMe is an AI-driven travel companion app that helps users plan and enhance their journeys. Key features include personalized travel suggestions, an intuitive itinerary planner, integration with Google Places API, interactive user interface with map and card components, and valuable travel insights.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js</li><li><strong>Backend:</strong> Node.js, Google Places API</li><li><strong>AI Integration:</strong> Advanced AI algorithms</li></ul></div>',
            frontend: ['React.js'],
            backend: ['Node.js', 'Google Places API'],
            database: ['Firebase'],
        },
        {
            id: 6,
            title: 'TheStateQuiz',
            image: stateQuiz,
            alt: 'State Quiz',
            webSite:
                'https://pages.github.iu.edu/kgerges/sp23-advanced-web-final-project/index.html',
            category: 'Education',
            gradient: 'from-green-500 via-teal-500 to-blue-500',
            prevDescription:
                '<div><h1>StateQuiz: Learning U.S. States</h1><p>StateQuiz is a website designed to help 3rd graders learn about U.S. states through engaging lessons and quizzes. It features interactive maps and quizzes stored in a MongoDB database, with a frontend built using HTML and advanced CSS for a fun and educational experience.</p></div>',
            frontend: ['HTML', 'CSS'],
            backend: ['Not specified'],
            database: ['MongoDB'],
        },
        {
            id: 7,
            title: 'StockSavvy',
            image: stockSavvy,
            alt: 'Stock Savvy',
            category: 'FinTech',
            gradient: 'from-yellow-500 via-orange-500 to-red-500',
            prevDescription:
                '<div><h1>StockSavvy: Real-Time Stock Analysis</h1><p>StockSavvy offers real-time stock data, market analysis, and advanced predictive modeling. Built with React, Node.js, and Express for the front-end and back-end, it integrates Python for AI-driven analysis to help users make informed investment decisions.</p></div>',
            frontend: ['React'],
            backend: ['Node.js', 'Express', 'Python'],
            database: ['Not specified'],
        },
        {
            id: 8,
            title: 'TeachMe App',
            image: TeachMe,
            alt: 'TeachMe App',
            webSite: 'Full Mobile App',
            category: 'Mobile Education',
            gradient: 'from-violet-500 via-blue-500 to-cyan-500',
            prevDescription:
                '<div><h1>TeachMe App</h1><p>A full mobile app for android and ios, helping students from 1st grade to 12th grade learn and practice their subjects with video lessons, quizzes, and progress tracking.</p></div>',
            frontend: ['React Native'],
            backend: ['Firebase'],
            database: ['FireStore'],
        },
        {
            id: 9,
            title: 'ChatNCook App',
            image: TeachMe,
            alt: 'ChatNCook App',
            webSite: 'Full Mobile App',
            category: 'Mobile Lifestyle',
            gradient: 'from-orange-500 via-amber-500 to-yellow-500',
            prevDescription:
                '<div><h1>ChatNCook App</h1><p>A full mobile app for android and ios, combining social features with cooking guidance and recipe sharing capabilities.</p></div>',
            frontend: ['React Native'],
            backend: ['Firebase'],
            database: ['FireStore'],
        },
    ];

    const TechStack = ({ frontend, backend, database }) => (
        <div className="flex flex-wrap gap-1 mt-3">
            {frontend?.map((tech, i) => (
                <span
                    key={i}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs flex items-center gap-1"
                >
                    <Layers className="w-3 h-3" />
                    {tech}
                </span>
            ))}
            {backend?.map((tech, i) => (
                <span
                    key={i}
                    className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs flex items-center gap-1"
                >
                    <Code className="w-3 h-3" />
                    {tech}
                </span>
            ))}
            {database?.map((tech, i) => (
                <span
                    key={i}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs flex items-center gap-1"
                >
                    <Database className="w-3 h-3" />
                    {tech}
                </span>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br lg:mt-9 md:mt-9 sm:p-2 md:p-8">
            {/* Animated background particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/10 rounded-full"
                        animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${100 + Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 relative z-10"
            >
                <div className="flex items-center justify-center gap-2 text-gray-400">
                    <p className="text-xl">
                        Crafting digital experiences that matter
                    </p>
                </div>
                <Link
                    className="text-xl hover:decoration-pink-500 hover:text-red-600"
                    to="/work"
                >
                    Switch to Galaxy view🌌
                </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        layoutId={`card-container-${card.id}`}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        onHoverStart={() => setHoveredCard(card.id)}
                        onHoverEnd={() => setHoveredCard(null)}
                        onClick={() => setSelectedCard(card)}
                        className="group relative cursor-pointer"
                    >
                        <div
                            className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10"
                            style={{
                                backgroundImage: `linear-gradient(135deg, ${card.gradient
                                    .split(' ')
                                    .join(', ')})`,
                            }}
                        />

                        <motion.div
                            className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden h-[400px]"
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                rotateX: 5,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            {/* Category badge */}
                            <div className="absolute top-4 left-4 z-20">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${card.gradient} text-white shadow-lg`}
                                >
                                    {card.category}
                                </span>
                            </div>

                            {/* Image container with overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <motion.img
                                    layoutId={`card-image-${card.id}`}
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                                />

                                {/* Floating elements on hover */}
                                <motion.div
                                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ExternalLink className="w-6 h-6 text-white" />
                                </motion.div>
                            </div>

                            {/* Content */}
                            <motion.div
                                layoutId={`card-content-${card.id}`}
                                className="p-6 h-52 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900 opacity-80"
                            >
                                <div>
                                    <h3
                                        className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
                                        style={{
                                            backgroundImage:
                                                hoveredCard === card.id
                                                    ? `linear-gradient(135deg, ${card.gradient
                                                          .split(' ')
                                                          .join(', ')})`
                                                    : '',
                                        }}
                                    >
                                        {card.title}
                                    </h3>

                                    <TechStack
                                        frontend={card.frontend}
                                        backend={card.backend}
                                        database={card.database}
                                    />
                                </div>

                                {/* Action buttons */}
                                <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <motion.button
                                        className={`flex-1 px-4 py-2 bg-gradient-to-r ${card.gradient} text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span>Explore</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Animated border */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(135deg, ${card.gradient
                                        .split(' ')
                                        .join(', ')})`,
                                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    maskComposite: 'exclude',
                                    padding: '2px',
                                }}
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Enhanced Modal */}
            <AnimatePresence>
                {selectedCard && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCard(null)}
                    >
                        <motion.div
                            layoutId={`card-container-${selectedCard.id}`}
                            className="bg-slate-800/90 backdrop-blur-lg border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 25,
                            }}
                        >
                            <div className="relative">
                                <motion.img
                                    layoutId={`card-image-${selectedCard.id}`}
                                    src={selectedCard.image}
                                    alt={selectedCard.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t ${selectedCard.gradient} opacity-60`}
                                />

                                <button
                                    onClick={() => setSelectedCard(null)}
                                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors duration-200"
                                >
                                    <X className="h-6 w-6" />
                                </button>

                                <div className="absolute bottom-4 left-6">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${selectedCard.gradient} text-white`}
                                    >
                                        {selectedCard.category}
                                    </span>
                                </div>
                            </div>

                            <motion.div
                                layoutId={`card-content-${selectedCard.id}`}
                                className="p-8 max-h-96 overflow-y-auto"
                            >
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    {selectedCard.title}
                                </h2>

                                <div
                                    className="text-gray-350 prose prose-invert max-w-none mb-6"
                                    dangerouslySetInnerHTML={{
                                        __html: selectedCard.prevDescription,
                                    }}
                                />

                                <TechStack
                                    frontend={selectedCard.frontend}
                                    backend={selectedCard.backend}
                                    database={selectedCard.database}
                                />

                                <div className="flex gap-4 mt-8">
                                    <Link
                                        to="/ProjectDetails"
                                        state={{ selectedCard }}
                                    >
                                        <button
                                            className={`px-6 py-3 bg-gradient-to-r ${selectedCard.gradient} text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                                        >
                                            <span>More Details</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </Link>

                                    {selectedCard.webSite && (
                                        <a
                                            href={selectedCard.webSite}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 border border-white/20"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span>View Live</span>
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WorkRView;
