// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// // import Header from './components/Header';
// // import About from './components/About';
// // import Projects from './components/Projects';
// // import Contact from './components/Contact';
// // import './styles.css';

// // const App = () => {
// //     return (
// //         <Router>
// //             <div className="App">
// //                 {/* Navigation Bar */}
// //                 <nav>
// //                     <ul className="navbar">
// //                         <li><Link to="/">Home</Link></li>
// //                         <li><Link to="/about">About</Link></li>
// //                         <li><Link to="/projects">Projects</Link></li>
// //                         <li><Link to="/contact">Contact</Link></li>
// //                     </ul>
// //                 </nav>

// //                 {/* Define Routes */}
// //                 <Routes>
// //                     <Route path="/" element={<Header />} />
// //                     <Route path="/about" element={<About />} />
// //                     <Route path="/projects" element={<Projects />} />
// //                     <Route path="/contact" element={<Contact />} />
// //                 </Routes>
// //             </div>
// //         </Router>
// //     );
// // };

// // export default App;

// import React, { useState } from 'react';
// import Hero from './components/Hero';
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// // import Header from './components/Header';
// // import About from './components/About';
// // import Projects from './components/Projects';
// // import Contact from './components/Contact';
// import './styles.css';
// import './App.css';

// const App = () => {
//   const [darkMode, setDarkMode] = useState(true);

//   return (
//     <div className={darkMode ? 'app dark' : 'app light'}>
//       <nav className="navbar">
//         <h1 className="logo">Nirmal 2030</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>
//         <div className="toggle-switch" onClick={() => setDarkMode(!darkMode)}>
//           <span className="slider"></span>
//         </div>
//       </nav>

//       {/* <Hero /> */}
    //   <Hero darkMode={darkMode} />
      

//     </div>
    
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles.css';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={darkMode ? 'app dark' : 'app light'}>
        <nav className="navbar">
          <h1 className="logo">Nirmal Barot</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="toggle-switch" onClick={() => setDarkMode(!darkMode)}>
            <span className="slider"></span>
          </div>
        </nav>
      {/* <Hero darkMode={darkMode} /> */}
        <Routes>
          <Route path="/" element={<Hero darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
    
  );
};

export default App;
