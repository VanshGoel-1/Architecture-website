import styles from './Team.module.css';

const team = [
    {
        id: 1,
        name: "Katie Harper",
        role: "Founder",
        quote: "Architecture is about creating memories.",
        image: "/WhatsApp Image 2026-01-21 at 11.35.47 PM (22).jpeg"
    },
    {
        id: 2,
        name: "Ethan Wei Jie",
        role: "Creative Director",
        quote: "Every line drawn has a purpose.",
        image: "/WhatsApp Image 2026-01-21 at 11.35.47 PM (23).jpeg"
    },
    {
        id: 3,
        name: "James Lee",
        role: "Lead Architect",
        quote: "Sustainability is at the heart of design.",
        image: "/WhatsApp Image 2026-01-21 at 11.35.47 PM (24).jpeg"
    }
];

export default function Team() {
    return (
        <section className={styles.section}>
            <div className={styles.intro}>
                <h2 className={styles.heading}>Meet architects & designers who bring innovation & creativity.</h2>
                <button className={styles.button}>Meet our team</button>
            </div>

            <div className={styles.grid}>
                {team.map((member) => (
                    <div key={member.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={member.image} alt={member.name} className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.quote}>"{member.quote}"</div>
                            <div>
                                <h3 className={styles.name}>{member.name}</h3>
                                <p className={styles.role}>{member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
