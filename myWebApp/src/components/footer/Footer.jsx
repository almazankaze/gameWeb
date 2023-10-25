import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

import "./footer.scss";

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <div className="footer-info-container">
              <SportsEsportsIcon className="footer-logo" />
              <h2 className="footer-title">1UP Games</h2>
            </div>
            <div className="footer-info-container">
              <EmailIcon />
              <h4 className="footer-info-text">MyWeb@example.com</h4>
            </div>
            <div className="footer-info-container">
              <PhoneIcon />
              <h4 className="footer-info-text">(555) 555-0101</h4>
            </div>
            <div className="footer-info-container">
              <LocationOnIcon />
              <h4 className="footer-info-text">123 fake st, Nowhere</h4>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Useful Links</h4>
            <div className="footer-links">
              <div className="footer-link">
                <p>Terms & Conditions</p>
              </div>
              <div className="footer-link">
                <p>New Products</p>
              </div>
              <div className="footer-link">
                <p>Best sales</p>
              </div>
              <div className="footer-link">
                <p>Secure payment</p>
              </div>
              <div className="footer-link">
                <p>Services</p>
              </div>
              <div className="footer-link">
                <p>Delivery</p>
              </div>
              <div className="footer-link">
                <p>Legal Notice</p>
              </div>
              <div className="footer-link">
                <p>About us</p>
              </div>
              <div className="footer-link">
                <p>Careers</p>
              </div>
              <div className="footer-link">
                <p>Contact us</p>
              </div>
              <div className="footer-link">
                <p>Stores</p>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Be the first to know it</h4>
            <form className="footer-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="footer-input"
                autoComplete="off"
                placeholder="Your email address"
                name="emailText"
                noValidate
                required
              />
              <SendIcon className="footer-form-icon" />
            </form>
            <div className="footer-social-icons">
              <div className="social-icon icon-inst">
                <InstagramIcon />
              </div>
              <div className="social-icon icon-face">
                <FacebookOutlinedIcon />
              </div>
              <div className="social-icon icon-twit">
                <TwitterIcon />
              </div>
              <div className="social-icon icon-you">
                <YouTubeIcon />
              </div>
            </div>
          </div>
        </div>
        <h5 className="footer-copyright">
          © 2023 Example. All rights reserved
        </h5>
      </div>
    </div>
  );
}

export default Footer;
