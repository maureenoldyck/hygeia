import React from 'react';

const Home = () => {
    return (
        
        <div className="h-screen flex flex-col">

            <div className="flex flex-row h-screen z-0">
                <section className="bg-blue-200 w-2/3" id="left-up">
                    <div id="documention-nav">
                        <nav>
                            <ul className="flex flex-row justify-around">
                                <li><a href="/">Text a</a></li>
                                <li><a href="/">Text b</a></li>
                                <li><a href="/">Text c</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div id="carrousel">
                        <p>ne carrousel da we nog moeten make euh of vinden ofzo dink.</p>
                    </div>
                </section>

                <section className="bg-green-200 w-1/3" id="right-up">
                    <div id="logo">
                        whah da ne logo
                    </div>

                    <div className="flex w-full">
                        <form className="flex flex-col ml-16 my-24">
                            <label>Name/email</label>
                            <input placeholder="Your Name ..." />

                            <label>Password</label>
                            <input type="password" placeholder="Your password ..." />

                            <a href="/" className="flex justify-end"><span>Forgot password?</span></a>

                            <div className="flex flex-row">
                                <input type="checkbox" />
                                <label>Remember me next time too!</label>
                            </div>

                            <div className="flex flex-row">
                                <button>Login</button>
                                <button>Register</button>
                            </div>
                        </form>
                    </div>

                    <div id="about-us">
                        <ul className="flex flex-row justify-around">
                            <li><a href="/">About us!</a></li>
                            <li><a href="/">Contact us!</a></li>
                        </ul>
                    </div>
                </section>
            </div>

            <footer className="bg-cover w-full h-1/4 absolute bottom-0 left-0">
                <div id="sponsors">
                    over 9000
                </div>
                <div id="copyright">
                    tis van mij
                </div>
            </footer>
        </div>
    );
}

export default Home;