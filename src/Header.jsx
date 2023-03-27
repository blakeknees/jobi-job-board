import React from 'react'

const Header = () => {
    return (
        <div>
            <section className="navbar">
                <nav>
                    <div className="navLinks">
                        <div className="logo">
                            <img src="" alt="jobi logo" />
                        </div>
                        <ul>
                            <li className="navLink">Home</li>
                            <li className="navLink">Job</li>
                            <li className="navLink">Explore</li>
                            <li className="navLink">Category</li>
                            <li className="navLink">Pages</li>
                        </ul>
                    </div>

                    <div className="loginRegister">
                        <ul>
                            <li className="authentication">Login</li>
                            <li className="authentication">Register</li>
                        </ul>
                    </div>
                </nav>
            </section>

            <section className="jobSearch">

                <div>
                    <h1>Find your job without any hassle.</h1>
                    <p>With the largest profesional creative community online, simply search through from our website</p>
                </div>

                <div>
                    <input type="text" />
                    <button>Search</button>
                </div>

                <div>
                    <div>
                        <img src="" alt="ppl pic" />
                        <img src="" alt="ppl pic" />
                        <img src="" alt="ppl pic" />
                    </div>

                    <div>
                        <h3>18k+</h3>
                        <p>Individual Freelancer</p>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Header;
