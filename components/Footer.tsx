import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1000">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo" data-aos="fade-right" data-aos-duration="1000">
          Mister Bones
        </div>

        {/* Pet Items & Services */}
        <div className="footer-links" data-aos="fade-up" data-aos-duration="1200">
          
          {/* Pet Items */}
          <div className="footer-column" data-aos="fade-up" data-aos-delay="100">
            <h3>Pet Items</h3>
            <ul>
              <li>Pet Beds</li>
              <li>Chew Toys</li>
              <li>Food Bowls</li>
              <li>Grooming Brushes</li>
              <li>Leash & Collars</li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
            <h3>Our Services</h3>
            <ul>
              <li>Happy Pets Care</li>
              <li>Pet Supplies</li>
              <li>Expert Advice</li>
              <li>Healthy Feeding Guides</li>
              <li>Pet Training Support</li>
            </ul>
          </div>

        </div>

        {/* Social Icons */}
        <div className="footer-socials" data-aos="fade-left" data-aos-duration="1000">
          <span>Connect With Us</span>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <p className="footer-copy" data-aos="fade-up" data-aos-duration="1200">
        © 2025 Mister Bones. All Rights Reserved.
      </p>
    </footer>
  );
}
