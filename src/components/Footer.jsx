
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

               
                <div className="footer-brand">
                    <h2>ROY PRATT</h2>
                    <p>Certified Fitness Trainer</p>
                    <p>
                        Build strength, improve fitness and become the
                        best version of yourself.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#plans">Plans</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>

                    <p>📍 BATHINDA, Punjab</p>
                    <p>📞 +91 98765 43210</p>
                    <p>✉️ info@yourfitness.com</p>
                </div>

            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>© 2026 Roy Pratt Fitness. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

