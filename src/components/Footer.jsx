import styles from './Footer.module.css';

export default function Footer() {
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
                            <a href="/about" className={styles.navItem}>
                                About
                            </a>
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
                            <a href="#contact" className={styles.navItem}>
                                Contact
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className={styles.footerSection}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerBrand}>
                            <p>Elysian Environments</p>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.footerLink}
                            >
                                <p>123 Innovation Drive</p>
                                <p>Design City, ST 12345</p>
                            </a>
                        </div>

                        <div className={styles.footerContact}>
                            <a href="tel:+15551234567" className={styles.footerLink} style={{ display: 'block' }}>
                                +1 (555) 123-4567
                            </a>
                            <a
                                href="mailto:jondoe@example.com"
                                className={styles.footerLink}
                                style={{ display: 'block' }}
                            >
                                jondoe@example.com
                            </a>
                        </div>

                        <div className={styles.footerSocial}>
                            <a
                                href="https://www.instagram.com/elysian_environments"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.footerLink}
                            >
                                Instagram
                            </a>
                        </div>
                    </div>

                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} ELYSIAN Environments. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
