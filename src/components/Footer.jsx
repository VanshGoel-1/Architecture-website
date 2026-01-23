import styles from './Footer.module.css';

export default function Footer() {
    // Scroll to top or specific sections if needed, but standard hrefs work well for footers
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.container}>
                {/* HEADLINE */}
                <div className={styles.heroSection}>
                    <h1 className={styles.mainTitle}>ELYSIAN ENVIRONMENTS</h1>
                </div>

                {/* NAVIGATION GRID */}
                <div className={styles.navSection}>
                    <div className={styles.navRow}>
                        {/* Column 1 */}
                        <div className={styles.navCol}>
                            <a href="/about" className={styles.navItem}>About</a>
                            <a href="/team" className={styles.navItem}>
                                Team <span className={styles.sup}>(08)</span>
                            </a>
                        </div>

                        {/* Column 2 */}
                        <div className={styles.navCol}>
                            <a href="/projects" className={styles.navItem}>
                                Projects <span className={styles.sup}>(06)</span>
                            </a>
                            <a href="/blogs" className={styles.navItem}>
                                Blogs <span className={styles.sup}>(05)</span>
                            </a>
                        </div>

                        {/* Column 3 */}
                        <div className={styles.navCol}>
                            <a href="/#services" className={styles.navItem}>
                                Services <span className={styles.sup}>(08)</span>
                            </a>
                            <a href="#contact" className={styles.navItem}>Contact</a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className={styles.footerSection}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerBrand}>
                            <p>Elysian Environments</p>
                            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className={styles.footerLink}>
                                <p>Mota Singh Nagar</p>
                                <p>Jalandhar, Punjab</p>
                            </a>
                        </div>

                        <div className={styles.footerContact}>
                            <a href="tel:+916280863197" className={styles.footerLink} style={{ display: 'block' }}>+91 6280863197</a>
                            <a href="mailto:elysianenvironemts@gmail.com" className={styles.footerLink} style={{ display: 'block' }}>elysianenvironemts@gmail.com</a>
                        </div>

                        <div className={styles.footerSocial}>
                            <a href="#" className={styles.footerLink}>Instagram</a>
                        </div>
                    </div>

                    <div className={styles.copyright}>
                        &copy; 2025 ELYSIAN Environments. All right reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
