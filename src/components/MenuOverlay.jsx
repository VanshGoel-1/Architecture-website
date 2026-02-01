import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MenuOverlay.module.css';

const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/#services', count: '08' },
    { label: 'Projects', path: '/projects', count: '06' },
    { label: 'Team', path: '/team', count: '08' },
    { label: 'Blogs', path: '/blogs', count: '05' },
    { label: 'Contact', path: '/#contact' },
];

/**
 * MenuOverlay Component
 * 
 * Full-screen navigation overlay for mobile/tablet or triggered menu interactions.
 * 
 * Features:
 * - **Animations**: Uses `AnimatePresence` for smooth entry/exit transitions.
 * - **Two-Column Layout**: Left side for branding/imagery, right side for navigation links.
 * - **Direct & Hash Navigation**: Handles standard routes and hash anchors (e.g., /#services) with scroll-into-view logic.
 * 
 * Props:
 * @param {boolean} isOpen - Controls visibility.
 * @param {function} onClose - Callback to close the overlay.
 */
export default function MenuOverlay({ isOpen, onClose }) {
    const navigate = useNavigate();

    const handleNav = (path) => {
        onClose();
        if (path.startsWith('/#')) {
            const hash = path.substring(2);
            navigate('/');
            setTimeout(() => {
                const el = document.getElementById(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            navigate(path);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlayWrapper}
                    initial={{ y: '-100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* LEFT PANEL */}
                    <div className={styles.leftPanel}>
                        <div className={styles.leftContent}>
                            <div className={styles.branding}>
                                ELYSIAN <br /> ENVIRONMENTS
                            </div>

                            <div className={styles.imageContainer}>
                                <img
                                    src="/Kyoto.webp"
                                    alt="Feature"
                                    className={styles.featureImage}
                                />
                            </div>

                            <div className={styles.leftFooter}>
                                <h2 className={styles.tagline}>
                                    Designing <br /> Future Living.
                                </h2>
                                <p className={styles.leftCopyright}>
                                    &copy; {new Date().getFullYear()} Elysian. <br /> All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className={styles.rightPanel}>
                        <button onClick={onClose} className={styles.closeBtn} aria-label="Close menu">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className={styles.navContainer}>
                            <ul className={`${styles.navList} ${styles.navRow}`}>
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={item.label}
                                        className={styles.navItem}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + (index * 0.1) }}
                                        onClick={() => handleNav(item.path)}
                                    >
                                        {item.label}
                                        {item.count && <span className={styles.count}>({item.count})</span>}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.rightFooter}>
                            <div>
                                <div className={styles.footerLabel}>Socials</div>
                                <div><a href="#" className={styles.footerLink}>Instagram</a></div>
                                <div><a href="#" className={styles.footerLink}>LinkedIn</a></div>
                            </div>
                            <div>
                                <div className={styles.footerLabel}>Enquiries</div>
                                <div><a href="mailto:info@elysian.com" className={styles.footerLink}>info@elysian.com</a></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

MenuOverlay.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
