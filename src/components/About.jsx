import { motion } from 'framer-motion';
import styles from './About.module.css';



export default function About() {
    return (
        <section className={styles.page}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    We craft spaces that<br />inspire, endure, and elevate.
                </motion.h1>
                <motion.div
                    className={styles.heroImageWrapper}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    <img
                        src="/WhatsApp Image 2026-01-21 at 11.50.38 PM.jpeg"
                        alt="Architectural Detail"
                        className={styles.heroImage}
                    />
                </motion.div>
            </div>
        </section>

    );
}
