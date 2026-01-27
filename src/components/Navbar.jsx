import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import MenuOverlay from './MenuOverlay'; // Import the overlay
import styles from './Navbar.module.css';
import LogoAsset from '../assets/ee_logo1.svg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Identify light-themed pages where logo needs to be dark
  const isLightPage = ['/about', '/projects'].includes(location.pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${isLightPage ? styles.lightMode : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className={styles.logoContainer}>
          <div className={styles.logoImg}>
            <img src={LogoAsset} alt="Logo" />
          </div>
          <span className={styles.logoText}>ELYSIAN ENVIRONMENTS</span>
        </div>

        <div className={styles.actions}>
          {/* Contact button removed as requested */}
          <button
            className={`${styles.menuBtn} ${isMenuOpen ? styles.active : ''} ${isLightPage ? styles.darkBtn : ''}`}
            onClick={toggleMenu}
          >
            <span className={styles.menuText}>{isMenuOpen ? 'Close' : 'Menu'}</span>
            <div className={styles.burger}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </div>
          </button>
        </div>
      </motion.nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
