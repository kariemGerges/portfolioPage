import React from 'react';
import './Home.css';
const Home = () => {
    
    return (
        <div className="">
            {/* <img src={logo} className ="App-logo" alt="logo The Code Designer" /> */}

            <h1 className="text-3xl  m-8 pl-8" id='hello'>Hello world...!!! My name is</h1>
            <h2 className="text-8xl font-semibold m-8 pl-8 " id='name'>Kariem Gerges</h2>
            <h3 className="text-5xl font-medium m-8 pl-8 " id='title'>And I build things for the web.</h3>
            <p className="m-8 pl-8 leading-relaxed " id='description'>
                I am a software engineer building a Better Digital World,<br />
                One Line of Code at a Time. Empowering Businesses with Innovative <br />
                Solutions and Cutting-Edge Technologies to Transform Ideas into <br />
                Reality and Elevate Digital Experiences.
            </p>
        </div>
    );
}

export default Home;