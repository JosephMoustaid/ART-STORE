import React, { useState } from 'react';

function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="signin-form-container">
            <form onSubmit={handleSubmit} className="signin-form">
                <h2 className="form-heading text-start">Sign In</h2>
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
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="form-button">Sign In</button>

                <p className="form-text">
                    Don't have an account? <a href="/sign-up">Sign Up</a> <br />
                    Go back to <a href="/" className='link-underline-secondary'> Home </a>
                </p>
            </form>
        </div>
    );
}

export default SignInForm;