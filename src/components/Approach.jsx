import styles from './Approach.module.css';

const steps = [
    {
        id: 1,
        title: "Strategy & Research",
        desc: "We begin by understanding your vision, analyzing the site, and conducting in-depth research to ensure a solid foundation.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Design & Planning",
        desc: "Our architects draft detailed plans, balancing aesthetics with functionality to create spaces that are both beautiful and practical.",
        image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Development & Execution",
        desc: "We oversee the construction process with rigour, ensuring that every detail aligns with the original design vision.",
        image: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=2000&auto=format&fit=crop"
    }
];

export default function Approach() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {steps.map((step) => (
                    <div key={step.id} className={styles.step}>
                        <div className={styles.stickyColumn}>
                            <div className={styles.number}>{`0${step.id}`}</div>
                        </div>
                        <div className={styles.contentColumn}>
                            <div className={styles.label}>(Our Approach)</div>
                            <h3 className={styles.title}>{step.title}</h3>
                            <p className={styles.desc}>{step.desc}</p>
                            <div className={styles.imageContainer}>
                                <img src={step.image} alt={step.title} className={styles.image} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
