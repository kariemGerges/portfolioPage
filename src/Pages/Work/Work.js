import React, { useState } from "react";
import './Work.css';
// importing the images
import guideMeImg from '../../assets/Guide Me.png';
import stateQuiz from '../../assets/StatesQuiz.png';
import stockSavvy from '../../assets/StockMe.png';
import donationPal from '../../assets/donationPal.png';
import travia from '../../assets/travia.png';
import PdfDownloader from "../../components/PdfDownloader/PdfDownloader";

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
          description: "A website That AI-Driven that helps people find their next adventure."
        },
        {
          title: "TheStateQuiz",
          image: stateQuiz,
          alt: "State Quiz",
          description: "A website designed to help 3rd graders learn about U.S. states through engaging lessons and quizzes. The website features interactive maps and knowledge-testing quizzes, providing a fun and educational experience for young learners. The quiz questions are stored in a MongoDB database, ensuring efficient data management and retrieval. The front end is built with simple HTML and advanced CSS, creating an intuitive and visually appealing interface that captivates and educates students effectively."
        },
        {
          title: "StockSavvy",
          image: stockSavvy,
          alt: "Stock Savvy",
          description: "StockSavvy offers real-time stock data, comprehensive market analysis, and advanced predictive modeling to help users make informed investment decisions. Built with cutting-edge technology, the platform leverages React for the front-end, Node.js and Express for the back-end, and integrates with Python for complex AI-driven analysis."
        },
        {
          title: "Travia",
          image: travia,
          alt: "Travia",
          description: "Webapp that allows users to play trivia question game website that provides an engaging and interactive experience for users. The backend infrastructure leverages Google Big Data to store and manage the trivia questions, ensuring scalability and performance. The authentication and login system is robust, with usernames and passwords securely stored in MongoDB to provide a seamless and secure user experience. This setup combines the power of SQL for handling large datasets with the flexibility of MongoDB for efficient user management, resulting in a highly efficient and reliable trivia game platform."
        },
        {
          title: "Donation Pal",
          image: donationPal,
          alt: "Donation Pal",
          description: "Donation Pal offers real-time stock data, comprehensive market analysis, and advanced predictive modeling to help users make informed investment decisions. Built with cutting-edge technology, the platform leverages React for the front-end, Node.js and Express for the back-end, and integrates with Python for complex AI-driven analysis."
        }
    ];

    return (
        <div className=" p-10  w-full  mx-auto flex justify-between items-center">
            
            <div className="grid grid-cols-3 gap-4 m-12">
            
                {cards.map((card, index) => (
                    <div key={index} className="rounded overflow-hidden shadow-lg bg-yellow-100">
                        <div className="font-bold text-xl mb-2 text-center p-2">{card.title}</div>
                        <img className="card-img" src={card.image} alt={card.alt} />
                        <div className="px-4 py-3">
                            <p className="text-gray-700 text-base">
                                {expandedCards[card.title] ? card.description : `${card.description.substring(0, 100)}...`}
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
                    </div>
                ))}
            </div>
            
        </div>

    );

}

export default Work;


// <div>
// <div className="container mx-auto flex justify-between items-center ">

//     <div className="grid grid-cols-3 grid-rows-3 gap-4 m-12">

//         <div className=" rounded overflow-hidden shadow-lg bg-yellow-100">
//             <div className="font-bold text-xl mb-2 text-center p-2">Guide Me</div>

//             <img className="w-full" src={guideMeImg} alt="Card 1" />
//                 <div className="px-4 py-3">
//                     <p className="text-gray-700 text-base">
//                         A website That AI-Driven that helps people find their next adventure.
//                     </p>
//                 </div>
//         <div className="px-6 pt-4 pb-2">
            
//         </div>
//         </div>

//         <div className=" rounded overflow-hidden shadow-lg bg-yellow-100">
//             <div className="font-bold text-xl mb-2 text-center p-2">TheStateQuiz</div>

//             <img className="w-full" src={stateQuiz} alt="Card 2 - State Quiz website" />
//                 <div className="px-4 py-3">
//                     <p className="text-gray-700 text-base">
//                         A website designed to help 3rd graders learn about U.S. states through engaging lessons and quizzes. The website features interactive maps and knowledge-testing quizzes, providing a fun and educational experience for young learners. The quiz questions are stored in a MongoDB database, ensuring efficient data management and retrieval. The front end is built with simple HTML and advanced CSS, creating an intuitive and visually appealing interface that captivates and educates students effectively.
//                     </p>
//                 </div>
//         <div className="px-6 pt-4 pb-2">
//         </div>
//         </div>

//         <div className=" rounded overflow-hidden shadow-lg bg-yellow-100">
//             <div className="font-bold text-xl mb-2 text-center p-2">StockSavvy</div>

//             <img className="w-full" src={stockSavvy} alt="Card 2" />
//                 <div className="px-4 py-3">
//                     <p className="text-gray-700 text-base">
//                     StockSavvy offers real-time stock data, comprehensive market analysis, and advanced predictive modeling to help users make informed investment decisions. Built with cutting-edge technology, the platform leverages React for the front-end, Node.js and Express for the back-end, and integrates with Python for complex AI-driven analysis.
//                     </p>
//                 </div>
//         <div className="px-6 pt-4 pb-2">
            
//         </div>
//         </div>

//         <div className=" rounded overflow-hidden shadow-lg bg-yellow-100">
//             <div className="font-bold text-xl mb-2 text-center p-2">Travia </div>

//             <img className="w-full" src={travia} alt="Card 2" />
//                 <div className="px-4 py-3">
//                     <p className="text-gray-700 text-base">
//                     Webapp that allows users to play trivia question game website that provides an engaging and interactive experience for users. The backend infrastructure leverages Google Big Data to store and manage the trivia questions, ensuring scalability and performance. The authentication and login system is robust, with usernames and passwords securely stored in MongoDB to provide a seamless and secure user experience. This setup combines the power of SQL for handling large datasets with the flexibility of MongoDB for efficient user management, resulting in a highly efficient and reliable trivia game platform.
//                     </p>
//                 </div>
//         <div className="px-6 pt-4 pb-2">
            
//         </div>
//         </div>

//         <div className=" rounded overflow-hidden shadow-lg bg-yellow-100">
//             <div className="font-bold text-xl mb-2 text-center p-2">Donation Pal</div>

//             <img className="w-full" src={donationPal} alt="Card 2" />
//                 <div className="px-4 py-3">
//                     <p className="text-gray-700 text-base">
//                     StockSavvy offers real-time stock data, comprehensive market analysis, and advanced predictive modeling to help users make informed investment decisions. Built with cutting-edge technology, the platform leverages React for the front-end, Node.js and Express for the back-end, and integrates with Python for complex AI-driven analysis.
//                     </p>
//                 </div>
//         <div className="px-6 pt-4 pb-2">
            
//         </div>
//         </div>

//     </div>

// </div>
// </div>