import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import guideMeImg from "../../assets/Guide Me.png";
import stateQuiz from "../../assets/StatesQuiz.png";
import stockSavvy from "../../assets/StockMe.png";
import donationPal from "../../assets/donationPal.png";
import eCommerce from "../../assets/e-commerce.png";
import travia from "../../assets/travia.png";
import adminDashboard from "../../assets/adminDashborad.png"
import TeachMe from "../../assets/teachme1.png";

const Work = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Guide Me",
      image: guideMeImg,
      alt: "Guide Me",
      webSite: "https://kariemgerges.github.io/GuideMe/",
      prevDescription:
        "<div><h1>GuideMe: Your AI Travel Companion</h1><p>GuideMe is an AI-driven travel companion app that helps users plan and enhance their journeys. Key features include personalized travel suggestions, an intuitive itinerary planner, integration with Google Places API, interactive user interface with map and card components, and valuable travel insights.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js</li><li><strong>Backend:</strong> Node.js, Google Places API</li><li><strong>AI Integration:</strong> Advanced AI algorithms</li></ul></div>",
      description:
        "<div><h1>GuideMe: Your AI Travel Companion</h1><p>GuideMe is an innovative travel companion application designed to transform the way people plan and experience their journeys. By leveraging advanced AI technology, GuideMe assists travelers in organizing and enhancing their trips without the hassle of manual bookings.</p><h2>Key Features:</h2><ul><li><strong>AI Travel Assistance:</strong> GuideMe provides personalized travel suggestions based on user preferences, past trips, and popular destinations.</li><li><strong>Itinerary Planning:</strong> The intuitive Itinerary Planner allows users to effortlessly plan their trips. Users can add places of interest, which are then displayed on a dynamic map with markers for easy navigation.</li><li><strong>Integration with Google Places API:</strong> Our backend integration with the Google Places API ensures that users have access to a vast database of places, including detailed information such as names, types, phone numbers, and websites.</li><li><strong>Interactive User Interface:</strong> The user-friendly interface includes card components for each place, offering a detailed view when clicked. All places are shown on the map as well as on the cards. When a user clicks on any card, they are taken to a detail page with a 3D map location of the place, enhancing the user experience.</li><li><strong>Travel Insights:</strong> GuideMe provides valuable travel insights, such as common travel seasons and tips for various destinations, to help users make informed decisions.</li></ul><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> Developed using React.js for a responsive and interactive user experience.</li><li><strong>Backend:</strong> Built with Node.js and integrated with the Google Places API for real-time data fetching.</li><li><strong>AI Integration:</strong> Utilizes advanced AI algorithms to offer personalized travel recommendations and insights.</li></ul><p>GuideMe is more than just a travel planner; it's a smart companion that adapts to your travel needs, making every journey memorable and stress-free.</p></div>",
      frontend: ["React.js"],
      backend: ["Node.js", "Google Places API"],
      database: ["Firebase"],
    },
    {
      id: 2,
      title: "TheStateQuiz",
      image: stateQuiz,
      alt: "State Quiz",
      webSite:
        "https://pages.github.iu.edu/kgerges/sp23-advanced-web-final-project/index.html",
      prevDescription:
        "<div><h1>StateQuiz: Learning U.S. States</h1><p>StateQuiz is a website designed to help 3rd graders learn about U.S. states through engaging lessons and quizzes. It features interactive maps and quizzes stored in a MongoDB database, with a frontend built using HTML and advanced CSS for a fun and educational experience.</p></div>",
      description:
        "A website designed to help 3rd graders learn about U.S. states through engaging lessons and quizzes. The website features interactive maps and knowledge-testing quizzes, providing a fun and educational experience for young learners. The quiz questions are stored in a MongoDB database, ensuring efficient data management and retrieval. The front end is built with simple HTML and advanced CSS, creating an intuitive and visually appealing interface that captivates and educates students effectively.",
      frontend: ["HTML", "CSS"],
      backend: ["Not specified"],
      database: ["MongoDB"],
    },
    {
      id: 3,
      title: "StockSavvy",
      image: stockSavvy,
      alt: "Stock Savvy",
      prevDescription:
        "<div><h1>StockSavvy: Real-Time Stock Analysis</h1><p>StockSavvy offers real-time stock data, market analysis, and advanced predictive modeling. Built with React, Node.js, and Express for the front-end and back-end, it integrates Python for AI-driven analysis to help users make informed investment decisions.</p></div>",
      description:
        "StockSavvy offers real-time stock data, comprehensive market analysis, and advanced predictive modeling to help users make informed investment decisions. Built with cutting-edge technology, the platform leverages React for the front-end, Node.js and Express for the back-end, and integrates with Python for complex AI-driven analysis.",
      frontend: ["React"],
      backend: ["Node.js", "Express", "Python"],
      database: ["Not specified"],
    },
    {
      id: 4,
      title: "Travia",
      image: travia,
      alt: "Travia",
      prevDescription:
        "<div><h1>Travia: Engaging Trivia Game</h1><p>Travia is a web app for playing trivia games with an engaging and interactive experience. It uses Google Big Data for trivia questions and MongoDB for secure authentication. The backend is built with Node.js and Express, while the frontend uses React.</p></div>",
      description:
        "Webapp that allows users to play trivia question game website that provides an engaging and interactive experience for users. The backend infrastructure leverages Google Big Data to store and manage the trivia questions, ensuring scalability and performance. The authentication and login system is robust, with usernames and passwords securely stored in MongoDB to provide a seamless and secure user experience. This setup combines the power of SQL for handling large datasets with the flexibility of MongoDB for efficient user management, resulting in a highly efficient and reliable trivia game platform.",
      frontend: ["React"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB", "Google Big Data"],
    },
    {
      id: 5,
      title: "Donation Pal",
      image: donationPal,
      alt: "Donation Pal",
      webSite: "https://kariemgerges.github.io/donationPal-frontend/",
      prevDescription:
        "<div><h1>Donation Pal: Streamlined Fundraising</h1><p>Donation Pal is a dynamic web application for creating and managing fundraising campaigns. Features include user-friendly campaign creation, secure donations, real-time tracking, and an admin dashboard. Built with Node.js and React, it uses MongoDB for data management.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js</li><li><strong>Backend:</strong> Node.js, payment processing</li><li><strong>Database:</strong> MongoDB</li></ul></div>",
      description:
        "<section><header><h1>Donation Pal</h1><p>A dynamic web application designed to streamline the process of creating and managing fundraising campaigns.</p></header><article><p>The platform empowers users to launch their own campaigns, accept donations, and track progress in real-time. Additionally, it provides administrators with comprehensive oversight of all campaigns and their associated donations.</p><section><h2>Key Features</h2><ul><li><strong>User-Friendly Campaign Creation:</strong> Intuitive interface for users to create and customize fundraising campaigns.</li><li><strong>Secure Donations:</strong> Integrated payment processing ensures secure transactions.</li><li><strong>Real-Time Tracking:</strong> Users can monitor donation progress and campaign status instantly.</li><li><strong>Admin Dashboard:</strong> Administrators have access to an overview of all campaigns and detailed donation records.</li><li><strong>Authentication:</strong> Secure user authentication to protect user data and campaign integrity.</li></ul></section><section><h2>Technology Stack</h2><ul><li><strong>Backend:</strong> Node.js for robust server-side functionality, including authentication and payment processing.</li><li><strong>Frontend:</strong> React for a responsive and interactive user experience.</li><li><strong>Database:</strong> MongoDB for efficient storage and retrieval of campaign and user data.</li></ul></section><section><h2>Role and Contributions</h2><ul><li><strong>Full-Stack Development:</strong> Designed and implemented both frontend and backend components.</li><li><strong>Database Management:</strong> Set up and managed MongoDB for data storage.</li><li><strong>Security:</strong> Ensured secure user authentication and payment processing.</li><li><strong>User Interface Design:</strong> Developed a clean and intuitive interface for both users and administrators.</li></ul></section><footer><h2>Summary</h2><p>Donation Pal exemplifies my ability to build comprehensive, user-focused web applications from the ground up, showcasing my expertise in modern web development technologies.</p></footer></article></section>",
      frontend: ["React.js"],
      backend: ["Node.js"],
      database: ["MongoDB"],
    },
    {
      id: 6,
      title: "E-Commerce",
      image: eCommerce,
      alt: "E-Commerce",
      webSite: "https://ecommerce-frontend-henna-two.vercel.app/",
      prevDescription:
        "<div><h1>FreshMart: E-Commerce Platform</h1><p>The FreshMart project is a dynamic digital platform that transforms the grocery shopping experience. It combines a user‑friendly interface with robust inventory management and secure e‑commerce features to connect consumers with a curated selection of local and international grocery items, ensuring convenience and efficiency in every transaction.</p></div>",
      description:
        "<section><header><h1>FreshMart: E-Commerce Platform</h1></header><p>The Gro‑Store project is an innovative online marketplace designed to modernize how groceries are bought and sold. Its key objectives and features include: User Experience: A responsive, intuitive interface optimized for both desktop and mobile devices that simplifies product discovery and purchase. E‑Commerce Integration: Secure payment gateways, streamlined checkout processes, and real‑time inventory management ensure smooth, reliable transactions. Advanced Functionality: Powerful search and filtering tools help users quickly locate products, while personalized recommendations driven by data analytics enhance the shopping journey.</p></section>",
      frontend: ["React.js"],
      backend: ["Node.js"],
      database: ["MongoDB, MySQL"],
    },
    {
      id: 7,
      title: "E-Commerce Admin Dashboard",
      image: adminDashboard,
      alt: "E-Commerce Admin Dashboard",
      webSite: "https://ecommerce-frontend-admindashborad.vercel.app/",
      prevDescription: "",
      description: "",
      frontend: ["React.js"],
      backend: ["Node.js"],
      database: ["MongoDB, MySQL"],
    },
    {
      id: 8,
      title: "TeachMe App",
      image: TeachMe,
      alt: "TeachMe App",
      webSite: "Full Mobile App",
      prevDescription: "A full mobile app for android and ios",
      description:
        "A full mobile app for android and ios, developed using React Native and Firebase. It includes features such as authentication, user registration. An app that helps students from 1st grade to 12th grade to learn and practice their subjects. The app includes features such as video lessons, quizzes, flashcards, and progress tracking. The app is designed to be user-friendly and engaging, with a focus on helping students improve their academic performance.",
      frontend: ["React Native"],
      backend: ["Firebase"],
      database: ["FireStore"],
    },
  ];

  return (
    <div className="p-10 min-h-screen">
      <h1 className="m-12 text-4xl font-bold mb-8 text-center">My Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-container-${card.id}`}
            onClick={() => setSelectedCard(card)}
            className="bg-yellow-100 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              layoutId={`card-image-${card.id}`}
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <motion.div layoutId={`card-content-${card.id}`} className="p-4">
              <h2 className="text-xl font-semibold text-black">{card.title}</h2>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            layoutId={`card-container-${selectedCard.id}`}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-3xl w-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <div className="relative">
                <motion.img
                  layoutId={`card-image-${selectedCard.id}`}
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-2 right-2 bg-yellow-400 rounded-full p-1 hover:bg-gray-200 transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <motion.div
                layoutId={`card-content-${selectedCard.id}`}
                className="p-6"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  {selectedCard.title}
                </h2>
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: selectedCard.prevDescription,
                  }}
                />
                <Link to="/ProjectDetails" state={{ selectedCard }}>
                  <button className="mt-2 inline-flex rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-blue-950 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    More Details
                  </button>
                </Link>
              </motion.div>
              <button className="mt-2 inline-flex rounded-md bg-yellow-900 px-3 py-2 text-sm font-semibold text-blue-950 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <a
                  href={selectedCard.webSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedCard.webSite
                    ? selectedCard.webSite
                    : " coming soon "}
                </a>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
