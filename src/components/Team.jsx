import styles from './Team.module.css';

const team = [
    {
        id: 1,
        name: "Katie Harper",
        role: "Founder",
        quote: "Architecture is about creating memories.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Ethan Wei Jie",
        role: "Creative Director",
        quote: "Every line drawn has a purpose.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "James Lee",
        role: "Lead Architect",
        quote: "Sustainability is at the heart of design.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
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
