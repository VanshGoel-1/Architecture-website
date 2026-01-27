import styles from './Approach.module.css';
import { motion } from 'framer-motion';

const steps = [
    {
        id: '01',
        title: 'Discovery & Strategy',
        desc: 'We begin by immersing ourselves in your world. Understanding your goals, Analyzing site conditions, and defining the strategic direction that will guide the entire architectural journey.',
        image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop',
    },
    {
        id: '02',
        title: 'Conceptual Design',
        desc: 'Where vision takes form. We explore spatial possibilities through sketches, 3D modeling, and material studies, ensuring every concept resonates with the core purpose of the project.',
        image:
            'https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2000&auto=format&fit=crop',
    },
    {
        id: '03',
        title: 'Technical Resolution',
        desc: 'Translating artistry into buildable reality. We develop precise technical drawings and coordinate with specialists to ensure structural integrity and seamless execution of complex details.',
        image:
            'https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=2000&auto=format&fit=crop',
    },
    {
        id: '04',
        title: 'Construction Oversight',
        desc: 'Our commitment extends to the construction site. We provide rigorous oversight and direct collaboration with builders to ensure the final transition from plan to physical space is flawless.',
        image:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    },
];

export default function Approach() {
    return (
        <section className={styles.section}>
            {steps.map((step, index) => (
                <div key={step.id} className={styles.stepWrapper} style={{ zIndex: index + 1 }}>
                    <div className={styles.stepContent}>
                        <div className={styles.topLine}></div>
                        <div className={styles.grid}>
                            <div className={styles.numCol}>
                                <motion.span
                                    className={styles.number}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 0.1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    {step.id}
                                </motion.span>
                            </div>
                            <div className={styles.contentCol}>
                                <div className={styles.header}>
                                    <span className={styles.tag}>[ ABOUT OUR APPROACH ]</span>
                                    <h2 className={styles.title}>{step.title}</h2>
                                    <p className={styles.subtext}>Crafting spaces that resonate with human experience and sustainable values.</p>
                                </div>
                                <div className={styles.body}>
                                    <div className={styles.imageFrame}>
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className={styles.image}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className={styles.info}>
                                        <p className={styles.description} style={{ maxWidth: '65ch' }}>{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
