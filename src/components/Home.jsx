import "./Home.css";

function Home() {
    return (
        <main>
         
            <section className="hero" id="home">
                <div className="hero-content">
                    <p className="hero-small">CERTIFIED FITNESS TRAINER</p>

                    <h1>
                        BUILD YOUR
                        <span> BEST BODY</span>
                    </h1>

                    <p className="hero-text">
                        Transform your body, improve your strength and
                        become the best version of yourself.
                    </p>

                    <div className="hero-buttons">
                        <a href="#plans" className="btn-primary">
                            View Plans
                        </a>

                        <a href="#contact" className="btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="about-container">
                    <div className="about-image">
                        <div className="image-box">
                            FITNESS
                        </div>
                    </div>

                    <div className="about-content">
                        <p className="section-label">ABOUT ME</p>

                        <h2>
                            TRAIN HARD.
                            <br />
                            STAY STRONG.
                        </h2>

                        <p>
                            I help people build strength, improve fitness
                            and develop a healthy lifestyle through
                            personalized training.
                        </p>

                        <p>
                            Whether you are a beginner or an experienced
                            athlete, your training program will be designed
                            according to your goals.
                        </p>

                        <a href="#contact" className="btn-primary">
                            Start Training
                        </a>
                    </div>
                </div>
            </section>

            <section className="plans" id="plans">
                <div className="section-heading">
                    <p className="section-label">TRAINING PLANS</p>
                    <h2>CHOOSE YOUR PLAN</h2>
                    <p>
                        Simple and effective training plans for every fitness
                        level.
                    </p>
                </div>

                <div className="plans-container">
                    <div className="plan-card">
                        <h3>STARTER</h3>
                        <h4>₹999</h4>
                        <p>Basic fitness training</p>
                        <p>3 Days / Week</p>
                        <p>Workout Guidance</p>
                        <a href="#contact">GET STARTED</a>
                    </div>

                    <div className="plan-card featured">
                        <span className="popular">POPULAR</span>
                        <h3>PRO</h3>
                        <h4>₹1,999</h4>
                        <p>Personalized training</p>
                        <p>5 Days / Week</p>
                        <p>Diet Guidance</p>
                        <a href="#contact">GET STARTED</a>
                    </div>

                    <div className="plan-card">
                        <h3>PREMIUM</h3>
                        <h4>₹2,999</h4>
                        <p>One-to-one training</p>
                        <p>6 Days / Week</p>
                        <p>Complete Fitness Plan</p>
                        <a href="#contact">GET STARTED</a>
                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="contact-container">
                    <p className="section-label">GET IN TOUCH</p>

                    <h2>READY TO START?</h2>

                    <p>
                        Take the first step toward a stronger and healthier
                        you.
                    </p>

                    <a href="tel:+919876543210" className="btn-primary">
                        CALL NOW
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Home;