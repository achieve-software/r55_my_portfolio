import "./Contact.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me...</h2>
      <div className="contact-list">
        <div className="contact-item">
          <p>
            <EmailIcon /> Email
          </p>
          <div className="contact-text">a@gmail.com</div>
        </div>
        <div className="contact-item">
          <p>
            <SmartphoneIcon/> Mobile
          </p>
          <div className="contact-text">+1 (571) 360 /div>
        </div>
        <div className="contact-item">
          <p>
            <LocationOnIcon /> Address
          </p>
          <div className="contact-text">Istanbul, Turkey</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;