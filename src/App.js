// import React from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import './styles.css';

// const App = () => {
//     return (
//         <div className="App">
//             <Header />
//             <About />
//             <Projects />
//             <Contact />
//         </div>
//     );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                {/* Navigation Bar */}
                <nav>
                    <ul className="navbar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact" style={{marginRight:'900px'}}>Contact</Link></li>
                    </ul>
                </nav>

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
