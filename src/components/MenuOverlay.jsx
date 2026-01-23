import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./MenuOverlay.module.css";
// You might need an image import here if you have a local asset, 
// for now using a placeholder or a reliable URL if available, 
// or simply a div placeholder.
// Assuming we have an asset or will use a colored block/placeholder.

export default function MenuOverlay({ isOpen, onClose }) {
    const navigate = useNavigate();

    const handleNav = (path) => {
        onClose();
        if (path.startsWith("/#")) {
            const hash = path.substring(2);
            navigate("/");
            setTimeout(() => {
                const el = document.getElementById(hash);
                if (el) el.scrollIntoView({ behavior: "smooth" });
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* LEFT PANEL - Dark Brown with Image */}
                    <motion.div
                        className={styles.leftPanel}
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <div className={styles.leftContent}>
                            <div className={styles.branding}>
                                ELYSIAN <br /> ENVIRONMENTS
                            </div>

                            <div className={styles.imageContainer}>
                                {/* Placeholder for the person/architecture image */}
                                <img
                                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Interior Design"
                                    className={styles.featureImage}
                                />
                            </div>

                            <div className={styles.leftFooter}>
                                <h2 className={styles.tagline}>Designing spaces <br /> that inspire</h2>
                                <p className={styles.leftCopyright}>©2025 ELYSIAN Environments. All right reserved.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT PANEL - Cream with Links */}
                    <motion.div
                        className={styles.rightPanel}
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <button onClick={onClose} className={styles.closeBtn}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#5d4a3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="#5d4a3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className={styles.navContainer}>
                            <ul className={styles.navList}>
                                <li onClick={() => handleNav("/about")}>About</li>
                                <li onClick={() => handleNav("/#services")}>Services <span className={styles.count}>(08)</span></li>
                                <li onClick={() => handleNav("/projects")}>Projects <span className={styles.count}>(06)</span></li>
                                <li onClick={() => handleNav("/team")}>Team <span className={styles.count}>(08)</span></li>
                                <li onClick={() => handleNav("/blogs")}>Blogs <span className={styles.count}>(05)</span></li>
                                <li onClick={() => handleNav("/#contact")}>Contact</li>
                            </ul>

                            <div className={styles.rightFooter}>
                                <div className={styles.addressBlock}>
                                    <p className={styles.footerLabel}>Elysian Environments</p>
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.footerLink}
                                    >
                                        Mota Singh Nagar<br />Jalandhar, Punjab
                                    </a>
                                </div>

                                <div className={styles.contactBlock}>
                                    <a href="tel:+916280863197" className={styles.footerLink} style={{ display: 'block' }}>+91 6280863197</a>
                                    <a href="mailto:elysianenvironemts@gmail.com" className={styles.footerLink} style={{ display: 'block' }}>info@elysian.com</a>
                                </div>

                                <div className={styles.socialBlock}>
                                    <a href="#" className={styles.footerLink}>Instagram</a>
                                    <br />
                                    <a href="#" className={styles.footerLink}>Twitter</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
