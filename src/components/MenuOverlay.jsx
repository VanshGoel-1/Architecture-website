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
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <div className={styles.branding}>ELYSIAN</div>
                            <button onClick={onClose} className={styles.closeBtn} aria-label="Close menu">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M18 6L6 18M6 6l12 12"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <nav className={styles.nav}>
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    className={styles.navItem}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index + 0.4 }}
                                    onClick={() => handleNav(item.path)}
                                >
                                    <span className={styles.navLabel}>{item.label}</span>
                                    {item.count && <span className={styles.navCount}>({item.count})</span>}
                                </motion.div>
                            ))}
                        </nav>

                        <div className={styles.footer}>
                            <div className={styles.footerGrid}>
                                <div className={styles.footerCol}>
                                    <p className={styles.footerTag}>Office</p>
                                    <p>123 Innovation Drive, Design City, ST 12345</p>
                                </div>
                                <div className={styles.footerCol}>
                                    <p className={styles.footerTag}>Contact</p>
                                    <a href="mailto:hello@elysian.com">hello@elysian.com</a>
                                    <br />
                                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                                </div>
                                <div className={styles.footerCol}>
                                    <p className={styles.footerTag}>Social</p>
                                    <a href="https://instagram.com/elysian" target="_blank" rel="noreferrer">
                                        Instagram
                                    </a>
                                </div>
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
