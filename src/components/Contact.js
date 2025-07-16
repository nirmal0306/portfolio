// // import React from 'react';

// // const Contact = () => {
// //     return (
// //         <section id="contact" style={{backgroundColor:'aliceblue'}}>
// //             <h2>Contact Me</h2>
// //             <form>
// //                 <input type="text" placeholder="Your Name" required />
// //                 <input type="email" placeholder="Your Email" required />
// //                 <textarea placeholder="Your Message" required></textarea>
// //                 <button type="submit">Send</button>
// //             </form>
// //         </section>
// //     );
// // };

// // export default Contact;

// import React from 'react';
// import './Contact.css';
// import emailjs from 'emailjs-com';
// emailjs.sendForm(
//   'YOUR_SERVICE_ID',
//   'YOUR_TEMPLATE_ID',
//   form.current,
//   'YOUR_PUBLIC_KEY'
// )
// .then(result => {
//   console.log('Message Sent:', result.text);
// })
// .catch(error => {
//   console.error('Send Error:', error);
// });
// const Contact = ({ darkMode }) => {
//   return (
//     <section className={`contact-section ${darkMode ? 'dark' : 'light'}`}>
//       <h2 className="contact-title">📬 Contact Me</h2>
//       <div className="contact-container">
//         <div className="contact-info">
//           <p>📧 nirmalbarot067@gmail.com</p>
//           <p>📍 Ahmedabad, Gujarat, India</p>
// Service ID:service_ifkbaom
// Template ID:template_3rky2dq
// API KEY:glnahPLXPdrZK_OcP
//           <p>
//             Whether it's building something cool, solving a real-world problem, or just geeking out over code — I'm always up for a conversation.
//           </p>
//         </div>
//         <form className="contact-form">
//           <input type="text" className='nm' placeholder="Your Name" required />
//           <input type="email" className='em' placeholder="Your Email" required />
//           <textarea placeholder="Your Message" required></textarea>
//           <button type="submit" class="send-btn">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// Service ID:service_ifkbaom
// Template ID:template_3rky2dq
// API KEY:glnahPLXPdrZK_OcP

import React, { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = ({ darkMode }) => {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  const email = form.current.email.value;
  const name = form.current.name.value;
  const message = form.current.message.value;

  // Basic Email Format Validation (Regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If all is valid, send
  emailjs.sendForm(
      'service_39iuxf8',
      'template_3rky2dq',
      form.current,
      'glnahPLXPdrZK_OcP'
    )
    .then(result => {
      console.log('Message Sent:', result.text);
      alert('Message sent successfully!');
      form.current.reset(); // Optional: clear form
    })
    .catch(error => {
      console.error('Send Error:', error);
      alert('Failed to send message.');
    });
};

  return (
    <section className={`contact-section ${darkMode ? 'dark' : 'light'}`}>
      <h2 className="contact-title">📬 Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p>📧 nirmalbarot067@gmail.com</p>
          <p>📍 Ahmedabad, Gujarat, India</p>
          <p>
            Whether it's building something cool, solving a real-world problem, or just geeking out over code — I'm always up for a conversation.
          </p>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className='nm' placeholder="Your Name" required />
          <input type="email" name="email" className='em' placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
