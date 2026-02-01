import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const projects = [
  {
    id: 1,
    title: 'Aurora Hills',
    category: 'Residential Complex',
    image: '/rowan-heuvel-bjej8BY1JYQ-unsplash.webp',
  },
  {
    id: 2,
    title: 'Urban Oasis',
    category: 'Commercial Hub',
    image: '/joel-filipe-RFDP7_80v5A-unsplash.webp',
  },
  {
    id: 3,
    title: 'Skyline Tower',
    category: 'Skyscraper',
    image: '/pixasquare-4ojhpgKpS68-unsplash.webp',
  },
];

/**
 * Hero Component
 * 
 * Large visual carousel displayed at the top of the Home page.
 * 
 * Features:
 * - **Image Carousel**: Rotates through project images every 5s (`setInterval`).
 * - **Animations**:
 *   - Background fades with `mode="popLayout"` for smooth cross-fades.
 *   - "ELYSIAN" text uses a parallax-like entry animation.
 *   - Project text animates vertically (`y` axis) on slide change.
 * - **Controls**: Manual previous/next buttons to override auto-rotation.
 */
export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          className={styles.backgroundContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={projects[current].image}
            alt={projects[current].title}
            className={styles.image}
            fetchPriority="high"
            decoding="async"
          />
          <div className={styles.cardOverlay} />
        </motion.div>
      </AnimatePresence>

      {/* Parallax Background Text */}
      <motion.div
        className={styles.bigText}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        ELYSIAN
      </motion.div>

      <div className={styles.content}>
        <div className={styles.bottomLeft}>
          <div className={styles.projectCounter}>
            <span className={styles.dot}></span>
            Project {current + 1}/{projects.length}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={styles.textWrapper}
            >
              <h1 className={styles.projectTitle}>{projects[current].title}</h1>
              <p className={styles.projectDesc}>
                A stylish living experience with green spaces, wellness facilities, and a vibrant
                neighborhood.
              </p>
            </motion.div>
          </AnimatePresence>

          <button className={styles.ctaButton}>Learn More</button>
        </div>

        <div className={styles.controls}>
          <button onClick={prevSlide} className={styles.navButton}>
            &larr;
          </button>
          <button onClick={nextSlide} className={styles.navButton}>
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
