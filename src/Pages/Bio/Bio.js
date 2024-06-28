import React from "react";
import PdfDownloader from "../../components/PdfDownloader/PdfDownloader"
import './Bio.css';

const Bio = ()  => {

    return (
  
        <div className="mx-auto justify-center flex">
            
            <div className=" max-w-7xl">
            <h1 className="text-3xl font-bold  mb-4">About Me</h1>
            <p className=" mb-4">
                Hello! I'm Kariem Gerges, a passionate Software Engineer with a keen eye for detail and a passion for creating dynamic, responsive web applications. With a strong background in computer and information technology, and a Bachelor of Science degree in Web & Software Development from the Purdue School of Engineering and Technology at IUPUI, I bring both technical expertise and creative flair to my projects.
            </p>
            <p className=" mb-4">
                Over the past several years, I have honed my skills in various aspects of web development, from front-end design to back-end programming. I am proficient in HTML, CSS, JavaScript, React, Node.js, and Express, and I am always eager to learn new technologies and frameworks to stay ahead in this fast-paced industry.
            </p>
            <p className=" mb-4">
                I currently work at Meijer in retail store operations, but I am actively seeking opportunities to transition to the corporate side of the business. My goal is to leverage my technical skills and experience to contribute to innovative projects and help businesses achieve their digital transformation goals.
            </p>
            <p className=" mb-4">
                In addition to my professional pursuits, I am a dedicated father to my kids, Elijah and Iziah. In my free time, I enjoy exploring new technologies, playing basketball (Steph Curry is my favorite player!), and spending quality time with my family.
            </p>
            <p className="">
                Thank you for visiting my website. Feel free to explore my projects and reach out if you have any questions or opportunities for collaboration. Let's create something amazing together!
            </p>
            </div>
        </div>
      );
}

export default Bio;
