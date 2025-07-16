// import React from 'react';
// import './About.css'; // Optional: create a separate CSS file for styling

// const About = () => {
//     return (
//         <div className="about-container">
//             <h1>About Me</h1>
//             <p>
//                 Hello! I'm Nirmal, a passionate and dedicated web developer with a love for creating intuitive, 
//                 dynamic, and visually appealing user experiences. With a strong foundation in the MERN stack 
//                 (MongoDB, Express, React, Node.js), I enjoy building full-stack applications that solve real-world 
//                 problems.
//             </p>
//             <p>
//                 Over the years, I have honed my skills in both front-end and back-end development, learning how to 
//                 create scalable, efficient, and secure web applications. I'm also keen on exploring new technologies 
//                 and constantly improving my coding skills.
//             </p>
//             <p>
//                 When I'm not coding, I enjoy learning about emerging technologies, contributing to open-source 
//                 projects, and collaborating with others in the tech community. I believe that technology can make a 
//                 positive impact, and I'm excited to be part of this ever-evolving industry.
//             </p>
//             <p>
//                 Thank you for visiting my portfolio! Feel free to explore my projects and get in touch if you'd like 
//                 to collaborate on something exciting.
//             </p>
//             <p>
//                 My Github : <a href='https://github.com/nirmal0306'>https://github.com/nirmal0306</a>
//             </p>

//             <p>
//                 My LinkedIn : <a href='https://www.linkedin.com/in/nirmal-barot-0b4356254/'>https://www.linkedin.com/in/nirmal-barot-0b4356254</a>
//             </p>

//         </div>
//     );
// };

// export default About;
// src/components/About.jsx
import React from 'react';
import './About.css';

const About = ({ darkMode }) => {
  return (
    <section className={`about-section ${darkMode ? 'dark' : 'light'}`}>
      <h1 className="about-title">👨‍🚀 About Me</h1>
      <div className="about-content">
        <p>
          Hello! I'm <strong>Nirmal</strong>, a futuristic full-stack developer blending cutting-edge technologies with elegant design.
        </p>
        <p>
          Currently doing MScIT in Lok Jagruti Kendra University in Ahmedabad.
        </p>
        <p>
          I specialize in building scalable, visually immersive, and futuristic applications using the MERN stack, MEAN stack, Firebase, and TailwindCSS.
        </p>
        <p>
          When I'm not coding interstellar interfaces, I explore the latest trends in AI, contribute to open source, and share knowledge with tech communities.
        </p>
        <p>
          My mission? To create digital experiences that feel like the future.
        </p>
      </div>
    </section>
  );
};

export default About;