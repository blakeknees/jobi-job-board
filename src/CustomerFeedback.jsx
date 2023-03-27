import React from 'react';

const CustomerFeedback = () => {
    return (
        <div>
            <section>
                <h2>Our Customer Feedback</h2>
                {/* This area would benefit from a dataset that can be MAPPED over, rather than hardcoded. */}
                <div className='feedback'>
                    <div>
                        {/* Need quotation image, little square, and arrow icons */}
                        <h3>"The best service I've ever received from Jobi, and highly recommended."</h3>
                        <p>Zubayer Al Hasan,<span>Dhaka</span></p>
                    </div>
                </div>
                <div className="customer">
                    <img src="" alt="Zubayer Al Hasan" />
                    <img src="" alt="Rebecca Black" />
                </div>
            </section>
            <section>
                <p>Trusted by <span>500+</span> companies</p>
                <ul>
                    <li>Google</li>
                    <li>Discord</li>
                    <li>Dribble</li>
                    <li>Walmart</li>
                    <li>Vine</li>
                    <li>Airbnb</li>
                </ul>
            </section>
        </div>
    )
}

export default CustomerFeedback;