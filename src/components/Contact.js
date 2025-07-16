// import React from 'react';

// const Contact = () => {
//     return (
//         <section id="contact" style={{backgroundColor:'aliceblue'}}>
//             <h2>Contact Me</h2>
//             <form>
//                 <input type="text" placeholder="Your Name" required />
//                 <input type="email" placeholder="Your Email" required />
//                 <textarea placeholder="Your Message" required></textarea>
//                 <button type="submit">Send</button>
//             </form>
//         </section>
//     );
// };

// export default Contact;

import React from 'react';
import './Contact.css';

const Contact = ({ darkMode }) => {
  return (
    <section className={`contact-section ${darkMode ? 'dark' : 'light'}`}>
      <h2 className="contact-title">📬 Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p>📧 nirmalbarot067@gmail.com</p>
          <p>📍 Ahmedabad, Gujarat, India</p>
          service_ifkbaom
          <p>
            Whether it's building something cool, solving a real-world problem, or just geeking out over code — I'm always up for a conversation.
          </p>
        </div>
        <form className="contact-form">
          <input type="text" className='nm' placeholder="Your Name" required />
          <input type="email" className='em' placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" class="send-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
