import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';
import styles from './Gallery.module.css';

const images = [
    '/cat-han-VgyN_CWXQVM-unsplash.webp',
    '/collov-home-design-H-1j_s0dhCw-unsplash.webp',
    '/frames-for-your-heart-2d4lAQAlbDA-unsplash.webp',
    '/kam-idris-_HqHX3LBN18-unsplash.webp',
    '/spacejoy-9M66C_w_ToM-unsplash.webp',
    '/spacejoy-PyeXkOVmG1Y-unsplash.webp',
    // Duplicates to fill columns
    '/cat-han-VgyN_CWXQVM-unsplash.webp',
    '/collov-home-design-H-1j_s0dhCw-unsplash.webp',
    '/frames-for-your-heart-2d4lAQAlbDA-unsplash.webp',
    '/kam-idris-_HqHX3LBN18-unsplash.webp',
    '/spacejoy-9M66C_w_ToM-unsplash.webp',
    '/spacejoy-PyeXkOVmG1Y-unsplash.webp',
];

// Create a massive pool of images for "infinite" feel
const pool = [...images, ...images, ...images, ...images];

// Split images into 4 columns
const column1 = pool.filter((_, i) => i % 4 === 0);
const column2 = pool.filter((_, i) => i % 4 === 1);
const column3 = pool.filter((_, i) => i % 4 === 2);
const column4 = pool.filter((_, i) => i % 4 === 3);

export default function Gallery() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Add physics smoothing to the scroll value
    // stiffness: Higher (200) = follows scroll faster (less lag).
    // damping: 20 = provides a subtle settling bounce without being "mushy".
    // mass: 0.8 = lighter feeling.
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform logic (linked to smoothProgress instead of raw scrollYProgress):
    // Col 1 & 3: Move UP (negative y) faster (approx 1.5x speed relative to scroll)
    // Col 2 & 4: Move DOWN (positive y) slower (approx 0.5x speed opposite to scroll)
    const y1 = useTransform(smoothProgress, [0, 1], [0, -600]);
    const y2 = useTransform(smoothProgress, [0, 1], [0, 200]);
    const y3 = useTransform(smoothProgress, [0, 1], [0, -750]);
    const y4 = useTransform(smoothProgress, [0, 1], [0, 150]);

    // Squash and Stretch Logic based on Velocity
    const velocity = useVelocity(smoothProgress);
    const scrollVelocity = useSpring(velocity, {
        stiffness: 100,
        damping: 30,
    });

    // Map velocity to scaling (squash/stretch)
    // When moving fast (high velocity), stretch vertically (scaleY > 1) and squash horizontally (scaleX < 1)
    const stretch = useTransform(scrollVelocity, [-0.5, 0, 0.5], [1.1, 1, 1.1]);
    const squash = useTransform(scrollVelocity, [-0.5, 0, 0.5], [0.95, 1, 0.95]);

    return (
        <section className={styles.section} ref={containerRef}>
            <div className={styles.backgroundText}>GALLERY</div>

            <div className={styles.galleryWrapper}>
                <motion.div style={{ y: y1 }} className={styles.column}>
                    {column1.map((src, i) => (
                        <div key={i} className={styles.imageContainer}>
                            <motion.img
                                src={src}
                                alt="Gallery"
                                className={styles.image}
                                loading="lazy"
                                decoding="async"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                style={{
                                    scaleY: stretch,
                                    scaleX: squash,
                                }}
                            />
                        </div>
                    ))}
                </motion.div>

                <motion.div style={{ y: y2 }} className={styles.column}>
                    {column2.map((src, i) => (
                        <div key={i} className={styles.imageContainer}>
                            <motion.img
                                src={src}
                                alt="Gallery"
                                className={styles.image}
                                loading="lazy"
                                decoding="async"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                style={{
                                    scaleY: stretch,
                                    scaleX: squash,
                                }}
                            />
                        </div>
                    ))}
                </motion.div>

                <motion.div style={{ y: y3 }} className={styles.column}>
                    {column3.map((src, i) => (
                        <div key={i} className={styles.imageContainer}>
                            <motion.img
                                src={src}
                                alt="Gallery"
                                className={styles.image}
                                loading="lazy"
                                decoding="async"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                style={{
                                    scaleY: stretch,
                                    scaleX: squash,
                                }}
                            />
                        </div>
                    ))}
                </motion.div>

                <motion.div style={{ y: y4 }} className={styles.column}>
                    {column4.map((src, i) => (
                        <div key={i} className={styles.imageContainer}>
                            <motion.img
                                src={src}
                                alt="Gallery"
                                className={styles.image}
                                loading="lazy"
                                decoding="async"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                style={{
                                    scaleY: stretch,
                                    scaleX: squash,
                                }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
