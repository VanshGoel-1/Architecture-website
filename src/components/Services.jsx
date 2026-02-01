import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    id: 1,
    title: 'Urban Planning &\nLandscape',
    desc: 'Designing sustainable cities for tomorrow.',
  },
  { id: 2, title: 'Interior Design', desc: 'Creating functional and aesthetic interiors.' },
  {
    id: 3,
    title: 'Sustainable & Green\nArchitecture',
    desc: 'Eco-friendly solutions for modern living.',
  },
  {
    id: 4,
    title: 'Restoration & Heritage\nConservation',
    desc: 'Preserving heritage with modern techniques.',
  },
  {
    id: 5,
    title: 'Construction & Project\nManagement',
    desc: 'Expert advice for your architectural needs.',
  },
  { id: 6, title: '3D Printing Architecture', desc: 'Innovating with modern technology.' },
  // Note: The 6th item in reference is an image or "3D Printing".
  // I will add a 6th text item for balance, or leaving it as an image based on CSS.
  // The reference actually shows the 6th slot is PARTIALLY an image. I will make 6th card an image card in CSS.
];

/**
 * Services Component
 * 
 * Renders the list of architectural services provided.
 * 
 * Features:
 * - **Staggered Entrance**: Uses `framer-motion` to fade in cards sequentially (`delay: index * 0.1`).
 * - **Card Layout**: Simple grid displaying title, description, and numbering.
 */
export default function Services() {
  return (
    <section className={styles.section}>
      {/* Header with Title Left, Button Right */}
      <div className={styles.header}>
        <h2 className={styles.heading}>
          Unveiling Design <br />
          Excellence—See What <br />
          We Offer
        </h2>
        <button className={styles.headerBtn}>Know more</button>
      </div>

      {/* Grid Layout */}
      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={styles.card}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <div className={styles.servicesBadge}>Services</div>

              <p className={styles.cardDesc}>{service.desc}</p>

              {/* Numbering at bottom right */}
              <span className={styles.number}>({index + 1})</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
