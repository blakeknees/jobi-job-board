import React from 'react';

const Guides = () => {
    return (
        <div>
            <section className="blogPosts">
                <div>
                    <h2>Jobis Guides</h2>
                    <a href="#">Explore More</a>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Solution</p>
                        <p>Featured <span>18 Jul 2018</span></p>
                        <h3>Print, publishing qui visual ux quis layout mockups.</h3>
                        <a href="#">Continue Reading</a>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>Design</p>
                        <p><span>18 Jul 2018</span></p>
                        <h3>Designer's Checlist for Every UX/UI Project.</h3>
                        <a href="#">Continue Reading</a>
                    </div>
                </div>
            </section>
            <section className="jobPortal">
                <div>
                    {/* add grey square in top right corner */}
                    <div>
                        <h2>Complete <span>job portal</span> for everyone.</h2>
                        <button>Looking for a job?</button>
                        <button>Post a job</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Guides;