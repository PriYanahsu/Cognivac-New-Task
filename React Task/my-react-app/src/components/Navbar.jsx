import './Navbar.css';
import Logo from '../assets/Navbar/logo.png';
import DarkLogo from '../assets/Navbar/logoDark.png'
import Icon from '../assets/Navbar/Icon.png';
import Button from '../elements/button.jsx';

const Navbar = ({ isDarkMode }) => {
  return (
    <div className="navbar">
      <div className="innerNav">
        <div className="innerNavLeft">
          <img src={isDarkMode ? DarkLogo : Logo} alt="Logo" />
          <div className="writtenRight">
            <div className="writtenRightBox">
              <p>Features</p>
              <img src={Icon} alt="" />
            </div>
            <div className="writtenRightBox">
              <p>Case Studies</p>
              <img src={Icon} alt="" />
            </div>
            <div className="writtenRightBox">
              <p>English</p>
            </div>
            <div className="writtenRightBox">
              <p>Support</p>
            </div>
          </div>
        </div>
        <div className="innerNavRight">
          <Button label="Get a Demo" />
          <Button label="Start your Free Trial" variant="outlinex" />
        </div>
      </div>
    </div>
  );
};


export default Navbar;
