// import React from 'react';
// import './Home.css';

// const Header = () => {
//     return (
//         <header>
//         <div className="home-container">
//             <h1>Barot Nirmal</h1>
//             <p>Welcome to my portfolio!</p>
//             <p>I am a Full-Stack Developer specializing in building modern and dynamic web applications using the MERN stack. Passionate about coding, I love crafting unique digital experiences that are user-friendly, scalable, and visually appealing.</p>
            
//             {/* Optionally, add a brief highlight of your skills */}
//             <div className="skills-highlight">
//                 <h2>Skills & Expertise</h2>
//                 <ul>
//                     <li>React, Angular, Node.js, MongoDB, Express</li>
//                     <li>JavaScript, HTML, CSS</li>
//                     <li>RESTful APIs, JWT Authentication</li>
//                     <li>Git, Agile Development</li>
//                 </ul>
//             </div>
//         </div>
//         </header>
//     );
// };

// export default Header;
import React from 'react';
import './Home.css';

const Header = () => {
    return (
        <header className="home-container">
            <h1>Hi, I'm <span className="highlight">Nirmal Barot</span></h1>
            <h2 className="subtitle">🚀 Passionate Full-Stack Developer | MERN Enthusiast</h2>

            <p className="intro">
                I'm a results-driven developer with a strong foundation in full-stack development and hands-on experience
                using modern web tools, frameworks, and best practices to build scalable apps.
            </p>

            <a className="btn-primary" href="/projects">🚀 View Projects</a>

            <div className="social-icons">
                <a href="https://github.com/nirmal0306" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/nirmal-barot-0b4356254/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:nirmal@example.com">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </header>
    );
};

export default Header;
