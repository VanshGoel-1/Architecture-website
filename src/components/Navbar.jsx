import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuOverlay from './MenuOverlay'; // Import the overlay
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <motion.nav
                className={styles.navbar}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className={styles.logo}>
                    ELYSIAN ENVIRONMENTS
                </div>

                <div className={styles.actions}>
                    {/* Contact button removed as requested */}
                    <button
                        className={`${styles.menuBtn} ${isMenuOpen ? styles.active : ''}`}
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
