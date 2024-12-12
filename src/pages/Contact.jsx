import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

import '../css/style.css';

function Contact(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };

return (
    <div>
      <div style={{ position: 'relative', zIndex: '1' }}>
        <Nav />
        <main className='mb-5 contact p-5'>
            
            <div className="row mt-3">
                <div className="col-12 col-md-6  py-5 px-4">
                    <h1 className='text-start'>Contact</h1>
                    <p>
                        Feel free to send me any message. We can discuss your ideas or plans over a cup of coffee.
                        Whether you have a question about my artwork, want to collaborate on a project, or just want to say hello, 
                        I'm always happy to hear from you. Please fill out the form below and I'll get back to you as soon as possible.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <div className="signin-form-container">
                        <form onSubmit={handleSubmit} className="signin-form">
                            <h2 className="form-heading text-start">Contact</h2>

                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-input"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    type="text"
                                    id="message"
                                    className="form-input"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="form-button">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default Contact ;