import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

  const linkStyle = {
    textDecoration: 'none' 
    
  };
 
  return (
    <div className={styles.centerContainer}>
      <footer className={styles.footerContainer}>
        <div className={styles.container}>
          <div className={styles.about}>
            <div className={styles.title}>About</div>
            <div className={styles.aboutContent}>
              Since 2023 we have been delivering excellence in product
              development, support & updates for frictionless shopping
              experiences.
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.title}>Service Center</div>
            <ul className={styles.content}>
              
              <Link to='/policy'><li>Privacy policy</li></Link>
              <Link to='/terms'><li>Terms of service</li></Link>
            </ul>
          </div>

          <div className={styles.info}>
            <div className={styles.title}>Company Info</div>
            <ul className={styles.content} style={linkStyle}>
              <Link to='/about'><li>About Us</li></Link>
              <Link to='/contact'><li>Contact Us</li></Link>
              <Link to='/faq'><li>FAQ</li></Link>
            </ul>
          </div>
          <div className={styles.info}>
            <div className={styles.title}>Social</div>
            <ul className={styles.content} style={linkStyle}>
              <Link to='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1'><li><InstagramIcon/></li></Link>
              <Link to='https://www.facebook.com/login/'><li><FacebookIcon/></li></Link>
              <Link to='https://www.linkedin.com/in/nandha-undefined-20841824b/'><li><LinkedInIcon/></li></Link>
              <Link to='https://github.com/Nandha465'><li><GitHubIcon/></li></Link>
            </ul>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.copyRight}>
            © 2023 Meow • Nandhagopal 
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
