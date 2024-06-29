import React from 'react';
import './Newsletter.css'
const Newsletter = () => {
    return (
        <section className="newsletter section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <SubscribeText />
                    </div>
                    <div className="col-lg-6 col-12">
                        <SubscribeForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SubscribeText = () => {
    return (
        <div className="subscribe-text">
            <h6>Sign up for newsletter</h6>
            <p>Stay updated with the latest health tips, wellness news, and <br /> exclusive offers from PreventiWell Healthcare LLP.</p>
        </div>
    );
};

const SubscribeForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., submit to backend, etc.)
    };

    return (
        <div className="subscribe-form">
            <form onSubmit={handleSubmit} className="newsletter-inner">
                <input
                    name="EMAIL"
                    placeholder="Your email address"
                    className="common-input"
                    required
                    type="email"
                />
                <button type="submit" className="btn">Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;
