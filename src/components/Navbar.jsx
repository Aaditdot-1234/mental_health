import React from 'react';
import styles from '../components/Navbar.module.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <h1>Mind First</h1>
      </div>
      <div className={styles.navbarComp}>
        <a onClick={() => scrollToSection('home')}>Home</a>
        <a onClick={() => scrollToSection('news')}>News</a>
        <a onClick={() => scrollToSection('brain')}>Brain</a>
        <a onClick={() => scrollToSection('appointment')}>Contacts</a>
      </div>
      <div className={styles.appointment}>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
