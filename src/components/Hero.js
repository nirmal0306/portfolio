// // import React from 'react';
// // import './Hero.css';

// // const Hero = () => {
// //   return (
// //     <section className="hero">
// //       <h1 className="glitch" data-text="Hi, I'm Nirmal">Hi, I'm Nirmal</h1>
// //       <h2><span className="typing">Futuristic Developer & Innovator</span></h2>
// //       <p>🚀 Pushing code that powers tomorrow. Designing with intent. Scaling ideas that matter.</p>
// //       <button className="glass-btn">🔭 View Projects</button>
// //     </section>
// //   );
// // };

// // export default Hero;
// // src/components/Hero.jsx
// import React from 'react';
// import './Hero.css';

// const Hero = ({ darkMode }) => {
//   return (
//     <section className={`hero ${darkMode ? 'dark' : 'light'}`}>
//       <h1 className="glitch" data-text="Hi, I'm Nirmal">Hi, I'm Nirmal</h1>
//       <h2><span className="typing">Futuristic Developer & Innovator</span></h2>
//       <p>🚀 Pushing code that powers tomorrow. Designing with intent. Scaling ideas that matter.</p>
//       <button className="glass-btn">🔭 View Projects</button>
//     </section>
//   );
// };

// export default Hero;

// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import { Link } from 'react-router-dom';
// import './Hero.css';


// const Hero = ({ darkMode })  => {
//   return (
//     <section className={`hero ${darkMode ? 'dark' : 'light'}`}>
//       <h1 className="glitch" data-text="Hi, I'm Nirmal">Hi, I'm Nirmal</h1>
//       <h2>
//         <span className="typing">
//           <Typewriter
//             words={['Futuristic Developer', 'Creative Innovator', 'Tech Explorer']}
//             loop={0} // infinite
//             cursor
//             cursorStyle="_"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1500}
//           />
//         </span>
//       </h2>
//       <p>🚀 Pushing code that powers tomorrow. Designing with intent. Scaling ideas that matter.</p>
//       <Link to="/projects"><button className="glass-btn">🔭 View Projects</button></Link>
//       <div className="skills">
//         <span className="skill-tag">React</span>
//         <span className="skill-tag">Angular</span>
//         <span className="skill-tag">Node.js</span>
//         <span className="skill-tag">MongoDB</span>
//         <span className="skill-tag">Python</span>
//         <span className="skill-tag">Tailwind CSS</span>
//         <span className="skill-tag">Firebase</span>
//     </div>

//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ darkMode }) => {
  const handleEmailClick = () => {
    navigator.clipboard.writeText('nirmalbarot067@gmail.com');
    alert('📧 Email copied to clipboard!');
  };

  return (
    <section className={`hero ${darkMode ? 'dark' : 'light'}`}>
      <h1 className="glitch" data-text="Hi, I'm Nirmal">Hi, I'm Nirmal</h1>

      <h2>
        <span className="typing">
          <Typewriter
            words={['Futuristic Developer', 'Creative Innovator', 'Tech Explorer']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>

      <p>🚀 Pushing code that powers tomorrow. Designing with intent. Scaling ideas that matter.</p>
      <br /><br />
      <Link to="/projects">
        <button className="glass-btn">🔭 View Projects</button>
      </Link>
      <br /><br />
      <p className='p1'>Skills : </p>
      <div className="skills">
        <span className="skill-tag">React</span>
        <span className="skill-tag">Angular</span>
        <span className="skill-tag">Node.js</span>
        <span className="skill-tag">MongoDB</span>
        <span className="skill-tag">Python</span>
        <span className="skill-tag">Tailwind CSS</span>
        <span className="skill-tag">Firebase</span>
      </div>
      <br /><br />
      {/* <h3>Social icons</h3> */}
      <p className='p1'>Social Platform : </p>
      <div className="hero-icons">
        <a href="https://github.com/nirmal0306" target="_blank" rel="noopener noreferrer">

          <FaGithub className="icon" title="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/nirmal-barot-0b4356254/" target="_blank" rel="noopener noreferrer">
          {/* <FaLinkedin className="icon" title="LinkedIn" /> */}
          <svg className='icon1' title="LinkedIn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
          </svg>
        </a>
        <span onClick={handleEmailClick}>
          {/* <FaEnvelope className="icon email-icon" title="Click to copy email" /> */}
          <svg className="icon1 email-icon" title="Click to copy email" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Hero;
