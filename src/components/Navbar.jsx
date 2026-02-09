import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuOverlay from './MenuOverlay'; // Import the overlay
import styles from './Navbar.module.css';
import LogoAsset from '../assets/ee_logo.svg';

/**
 * Navbar Component
 * 
 * Responsive navigation bar with theme awareness.
 * 
 * Features:
 * - **Dynamic Theming**: Changes style (light/dark) based on the current route (e.g., light on '/about').
 * - **Scroll-away**: Hides on scroll down, shows on scroll up (via `framer-motion` variant, though simplistic here).
 * - **Mobile Menu**: Toggles full-screen `MenuOverlay`.
 */
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Identify light-themed pages where logo needs to be dark
    const isLightPage = ['/about', '/projects', '/team'].includes(location.pathname);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogoClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                className={`${styles.navbar} ${isLightPage ? styles.lightMode : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className={styles.logoContainer} onClick={handleLogoClick}>
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
