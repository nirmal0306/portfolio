import React from 'react';
import './Home.css';

const Header = () => {
    return (
        <header>
        <div className="home-container">
            <h1>Barot Nirmal</h1>
            <p>Welcome to my portfolio!</p>
            <p>I am a Full-Stack Developer specializing in building modern and dynamic web applications using the MERN stack. Passionate about coding, I love crafting unique digital experiences that are user-friendly, scalable, and visually appealing.</p>
            
            {/* Optionally, add a brief highlight of your skills */}
            <div className="skills-highlight">
                <h2>Skills & Expertise</h2>
                <ul>
                    <li>React, Angular, Node.js, MongoDB, Express</li>
                    <li>JavaScript, HTML, CSS</li>
                    <li>RESTful APIs, JWT Authentication</li>
                    <li>Git, Agile Development</li>
                </ul>
            </div>
        </div>
        </header>
    );
};

export default Header;

{/* <h1 style={{color:'white'}}>Barot Nirmal</h1>
            <p>Welcome to my portfolio!</p> */}