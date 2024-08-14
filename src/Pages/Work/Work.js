import React, { useState } from "react";
import './Work.css';
import {  Typography, Modal, Box } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
// importing the images
import guideMeImg from '../../assets/Guide Me.png';
import stateQuiz from '../../assets/StatesQuiz.png';
import stockSavvy from '../../assets/StockMe.png';
import donationPal from '../../assets/donationPal.png';
import travia from '../../assets/travia.png';

const Work = () =>{
    const [expandedCards, setExpandedCards] = useState(false);

//   Creating a show and hide function for the cards so it can hide details and show them for better viewing
    const toggleExpansion = (card) => {
        setExpandedCards( prevSate => ({
            ...prevSate,
            [card]: !prevSate[card]
        }))
    }

        // Creating an array of objects for the cards
    const cards = [
        {
        title: "Guide Me",
          image: guideMeImg,
          alt: "Guide Me",
          prevDescription: "<div><h1>GuideMe: Your AI Travel Companion</h1><p>GuideMe is an AI-driven travel companion app that helps users plan and enhance their journeys. Key features include personalized travel suggestions, an intuitive itinerary planner, integration with Google Places API, interactive user interface with map and card components, and valuable travel insights.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js</li><li><strong>Backend:</strong> Node.js, Google Places API</li><li><strong>AI Integration:</strong> Advanced AI algorithms</li></ul></div>",
          description: "<div><h1>GuideMe: Your AI Travel Companion</h1><p>GuideMe is an innovative travel companion application designed to transform the way people plan and experience their journeys. By leveraging advanced AI technology, GuideMe assists travelers in organizing and enhancing their trips without the hassle of manual bookings.</p><h2>Key Features:</h2><ul><li><strong>AI Travel Assistance:</strong> GuideMe provides personalized travel suggestions based on user preferences, past trips, and popular destinations.</li><li><strong>Itinerary Planning:</strong> The intuitive Itinerary Planner allows users to effortlessly plan their trips. Users can add places of interest, which are then displayed on a dynamic map with markers for easy navigation.</li><li><strong>Integration with Google Places API:</strong> Our backend integration with the Google Places API ensures that users have access to a vast database of places, including detailed information such as names, types, phone numbers, and websites.</li><li><strong>Interactive User Interface:</strong> The user-friendly interface includes card components for each place, offering a detailed view when clicked. All places are shown on the map as well as on the cards. When a user clicks on any card, they are taken to a detail page with a 3D map location of the place, enhancing the user experience.</li><li><strong>Travel Insights:</strong> GuideMe provides valuable travel insights, such as common travel seasons and tips for various destinations, to help users make informed decisions.</li></ul><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> Developed using React.js for a responsive and interactive user experience.</li><li><strong>Backend:</strong> Built with Node.js and integrated with the Google Places API for real-time data fetching.</li><li><strong>AI Integration:</strong> Utilizes advanced AI algorithms to offer personalized travel recommendations and insights.</li></ul><p>GuideMe is more than just a travel planner; it’s a smart companion that adapts to your travel needs, making every journey memorable and stress-free.</p></div>",
        },
        {
          title: "TheStateQuiz",
          image: stateQuiz,
          alt: "State Quiz",
          prevDescription: "<div><h1>StateQuiz: Learning U.S. States</h1><p>StateQuiz is a website designed to help 3rd graders learn about U.S. states through engaging lessons and quizzes. It features interactive maps and quizzes stored in a MongoDB database, with a frontend built using HTML and advanced CSS for a fun and educational experience.</p></div>",
          description: "A website designed to help 3rd graders learn about U.S. states through engaging lessons and quizzes. The website features interactive maps and knowledge-testing quizzes, providing a fun and educational experience for young learners. The quiz questions are stored in a MongoDB database, ensuring efficient data management and retrieval. The front end is built with simple HTML and advanced CSS, creating an intuitive and visually appealing interface that captivates and educates students effectively."
        },
        {
          title: "StockSavvy",
          image: stockSavvy,
          alt: "Stock Savvy",
          prevDescription: "<div><h1>StockSavvy: Real-Time Stock Analysis</h1><p>StockSavvy offers real-time stock data, market analysis, and advanced predictive modeling. Built with React, Node.js, and Express for the front-end and back-end, it integrates Python for AI-driven analysis to help users make informed investment decisions.</p></div>",
          description: "StockSavvy offers real-time stock data, comprehensive market analysis, and advanced predictive modeling to help users make informed investment decisions. Built with cutting-edge technology, the platform leverages React for the front-end, Node.js and Express for the back-end, and integrates with Python for complex AI-driven analysis."
        },
        {
          title: "Travia",
          image: travia,
          alt: "Travia",
          prevDescription: "<div><h1>Travia: Engaging Trivia Game</h1><p>Travia is a web app for playing trivia games with an engaging and interactive experience. It uses Google Big Data for trivia questions and MongoDB for secure authentication. The backend is built with Node.js and Express, while the frontend uses React.</p></div>",
          description: "Webapp that allows users to play trivia question game website that provides an engaging and interactive experience for users. The backend infrastructure leverages Google Big Data to store and manage the trivia questions, ensuring scalability and performance. The authentication and login system is robust, with usernames and passwords securely stored in MongoDB to provide a seamless and secure user experience. This setup combines the power of SQL for handling large datasets with the flexibility of MongoDB for efficient user management, resulting in a highly efficient and reliable trivia game platform."
        },
        {
          title: "Donation Pal",
          image: donationPal,
          alt: "Donation Pal",
          prevDescription: "<div><h1>Donation Pal: Streamlined Fundraising</h1><p>Donation Pal is a dynamic web application for creating and managing fundraising campaigns. Features include user-friendly campaign creation, secure donations, real-time tracking, and an admin dashboard. Built with Node.js and React, it uses MongoDB for data management.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js</li><li><strong>Backend:</strong> Node.js, payment processing</li><li><strong>Database:</strong> MongoDB</li></ul></div>",
          description: "<section><header><h1>Donation Pal</h1><p>A dynamic web application designed to streamline the process of creating and managing fundraising campaigns.</p></header><article><p>The platform empowers users to launch their own campaigns, accept donations, and track progress in real-time. Additionally, it provides administrators with comprehensive oversight of all campaigns and their associated donations.</p><section><h2>Key Features</h2><ul><li><strong>User-Friendly Campaign Creation:</strong> Intuitive interface for users to create and customize fundraising campaigns.</li><li><strong>Secure Donations:</strong> Integrated payment processing ensures secure transactions.</li><li><strong>Real-Time Tracking:</strong> Users can monitor donation progress and campaign status instantly.</li><li><strong>Admin Dashboard:</strong> Administrators have access to an overview of all campaigns and detailed donation records.</li><li><strong>Authentication:</strong> Secure user authentication to protect user data and campaign integrity.</li></ul></section><section><h2>Technology Stack</h2><ul><li><strong>Backend:</strong> Node.js for robust server-side functionality, including authentication and payment processing.</li><li><strong>Frontend:</strong> React for a responsive and interactive user experience.</li><li><strong>Database:</strong> MongoDB for efficient storage and retrieval of campaign and user data.</li></ul></section><section><h2>Role and Contributions</h2><ul><li><strong>Full-Stack Development:</strong> Designed and implemented both frontend and backend components.</li><li><strong>Database Management:</strong> Set up and managed MongoDB for data storage.</li><li><strong>Security:</strong> Ensured secure user authentication and payment processing.</li><li><strong>User Interface Design:</strong> Developed a clean and intuitive interface for both users and administrators.</li></ul></section><footer><h2>Summary</h2><p>Donation Pal exemplifies my ability to build comprehensive, user-focused web applications from the ground up, showcasing my expertise in modern web development technologies.</p></footer></article></section>"
        }
    ];
    
    return (
        <div className=" p-10  w-full  mx-auto flex justify-between items-center">
            
            <div className="grid grid-cols-3 gap-4 m-12">
            
                {cards.map((card, index) => (
                    
                    <div key={index} className="rounded overflow-hidden shadow-lg bg-yellow-100">
                        <div className="font-bold text-xl mb-2 text-center p-2 text-black">{card.title}</div>
                        <img 
                            className="card-img" 
                            src={card.image} 
                            alt={card.alt} 
                            id="card-img"
                            />
                        <div className="px-4 py-3">
                            <p className="text-gray-700 text-base">
                                {/* {`${card.description.substring(0, 100)}...`} */}
                                < div dangerouslySetInnerHTML={ { __html: card.description.substring(0, 200) } } />
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <button
                                className="mt-2 text-blue-500 hover:underline"
                                onClick={() => toggleExpansion(card.title)}
                            >
                                <span className="text-sm font-bold mr-2 text-center p-2 hover:underline ">{expandedCards[card.title] ? "Hide Details " : "Show Details"}</span>
                            </button>
                        </div>

                            < Modal 
                                open={expandedCards[card.title]} 
                                onClose={() => toggleExpansion(card.title)}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 1, maxWidth: 400, mx: 'auto', mt: 4 }}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: 'text.primary'}}>
                                        {card.title}
                                    </Typography>
                                    
                                    <Typography id="modal-modal-description" sx={{ mt: 2, overflow: 'auto', color: 'text.primary' }}>
                                        <div dangerouslySetInnerHTML={ { __html: card.prevDescription } } />
                                    </Typography>

                                    <RouterLink to='/ProjectDetails' state={ {card} }>
                                        <button className = "mt-2 inline-flex rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-blue-950 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            More Details
                                        </button>
                                    </RouterLink>
                                </Box>
                            </Modal>

                    </div>
                ))}
            </div>
            
        </div>

    );

}

export default Work;