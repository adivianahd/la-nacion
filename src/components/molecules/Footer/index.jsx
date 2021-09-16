import "./styles.scss";
import {
  LargeLogo,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  WifiIcon,
  ApplePlayIcon,
  GooglePlayIcon,
} from "../../atoms/Icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-sign">
        <LargeLogo />
      </div>
      <div className="footer-media-icons footer-w-h">
        <WifiIcon />
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
      <div className="footer-media-icons footer-w-h">
        <ApplePlayIcon />
        <GooglePlayIcon />
      </div>
    </div>
  );
};

export default Footer;
