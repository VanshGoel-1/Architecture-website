import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        id: 1,
        quote: "Transformed our vision into a masterpiece",
        text: "Elysian Environments understood our ethos immediately. Their attention to detail, commitment to sustainability, and innovative designs made our project truly exceptional. The results exceeded all expectations.",
        author: "Michael Carter",
        role: "CEO, Carter Developments",
        image: "/WhatsApp Image 2026-01-21 at 11.35.47 PM.jpeg"
    },
    {
        id: 2,
        quote: "Working with EE was an absolute pleasure",
        text: "Working with the team was seamless. Their insights, creativity, and professionalism led to a stunning architectural project. The knowledge exceeded our expectations, blending elegance with functionality.",
        author: "Sophia Bennett",
        role: "Private Homeowner",
        image: "/WhatsApp Image 2026-01-21 at 11.35.47 PM (1).jpeg"
    },
    {
        id: 3,
        quote: "Delivered beyond what we imagined",
        text: "From the initial concept to the final handover, the team's ability to maximize space while maintaining strict aesthetic standards was impressive. Highly recommended!",
        author: "David Richardson",
        role: "Founder, Richardson & Co",
        image: "/WhatsApp Image 2026-01-21 at 11.35.47 PM (2).jpeg"
    }
];

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.heading}>Customer Testimonials</h2>
            </div>

            <div className={styles.scrollContainer}>
                {testimonials.map((item) => (
                    <motion.div
                        key={item.id}
                        className={styles.card}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.cardHeader}>
                            <h3 className={styles.author}>{item.author}</h3>
                            <p className={styles.role}>{item.role}</p>
                        </div>
                        <div className={styles.cardBody}>
                            <h4 className={styles.quote}>"{item.quote}"</h4>
                            <p className={styles.text}>{item.text}</p>
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src={item.image} alt={item.author} className={styles.image} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
