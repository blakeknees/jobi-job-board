import React from 'react'

const TalentExperts = () => {
    return (
        <div>
            <section className="topTalents">
                <div>
                    <img src="" alt="talent UI" />
                </div>

                <div>
                    <h3>Find top talents from jobi.</h3>
                    
                    <div>
                        <h5>Seamless Search</h5>

                    {/* This content appears/disappears based on user click */}
                        <p>It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to refelct your brand.</p>
                    </div>

                    <div>
                        <h5>Hire top talents</h5>

                    {/* This content appears/disappears based on user click */}
                        <p>It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to refelct your brand.</p>
                    </div>

                    <div>
                        <h5>Secure Payments</h5>

                    {/* This content appears/disappears based on user click */}
                        <p>It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to refelct your brand.</p>
                    </div>
                </div>
                <button>Learn More</button>
            </section>
            
            {/* Hard code this section for now, but it needs to be updated so that it's a function that maps over an image, name, and position. Also needs to have more content when each carousel button is clicked. */}
            <section className="topExperts">
                <div>
                    <h2>Top Experts</h2>
                    <a href="#">Explore all</a>
                </div>
                <div>
                    <div>
                        <img src="" alt="Rashed Kabir" />
                        <p>Rashed Kabir</p>
                        <p>UI Designer</p>
                    </div>
                    <div>
                        <img src="" alt="Rashed Kabir" />
                        <p>Rashed Kabir</p>
                        <p>UI Designer</p>
                    </div>
                    <div>
                        <img src="" alt="Rashed Kabir" />
                        <p>Rashed Kabir</p>
                        <p>UI Designer</p>
                    </div>
                    <div>
                        <img src="" alt="Rashed Kabir" />
                        <p>Rashed Kabir</p>
                        <p>UI Designer</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TalentExperts;