import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import styles from './ContactUs.module.css'; // Import the CSS module

const ContactUs = () => {
  return (
    <div className={styles.contactContainer} id='contact'>
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us through any of the following platforms:</p>
      <div className={styles.contactIcons}>
        <a href="https://github.com/JamalMustafa7/" target="_blank" rel="noopener noreferrer">
          <FaGithub className={`${styles.icon} ${styles.githubIcon}`} />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-jamal-mustafa-2021cs631/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={`${styles.icon} ${styles.linkedinIcon}`} />
        </a>
        <a href="mailto:muhammedjamalmustafa@gmail.com">
          <FaEnvelope className={`${styles.icon} ${styles.emailIcon}`} />
        </a>
        <a href="https://wa.me/923095202700" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={`${styles.icon} ${styles.whatsappIcon}`} />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
