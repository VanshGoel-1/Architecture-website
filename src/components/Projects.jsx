import styles from './Projects.module.css';

const projects = [
    {
        id: 1,
        title: "Alpine Retreat",
        location: "8 Marina View, Singapore 018960",
        year: "2023",
        area: "250,000 sq ft.",
        category: "Residential",
        desc: "A sophisticated blend of alpine tradition and modern luxury, creating a warm yet expansive living environment.",
        image: "/WhatsApp Image 2026-01-21 at 11.35.47 PM (25).jpeg"
    },
    {
        id: 2,
        title: "Desert Villa",
        location: "Aspen, Colorado, USA",
        year: "2022",
        area: "180,000 sq ft.",
        category: "Residential",
        desc: "Designed to blend seamlessly with the arid landscape, offering cool respite and breathtaking desert views.",
        image: "/WhatsApp Image 2026-01-21 at 11.35.47 PM (3).jpeg"
    },
    {
        id: 3,
        title: "Urban Loft",
        location: "New York, USA",
        year: "2024",
        area: "120,000 sq ft.",
        category: "Commercial",
        desc: "An industrial-chic workspace that fosters creativity and collaboration in the heart of the city.",
        image: "/WhatsApp Image 2026-01-21 at 11.35.47 PM (5).jpeg"
    },
    {
        id: 4,
        title: "Seaside Haven",
        location: "Biarritz, France",
        year: "2021",
        area: "300,000 sq ft.",
        category: "Resort",
        desc: "A luxurious coastal sanctuary designed to capture the essence of ocean living with panoramic views.",
        image: "/WhatsApp Image 2026-01-21 at 11.35.47 PM (1).jpeg"
    }
];

export default function Projects() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.heading}>Explore top real estate projects<br />with key insights and visuals.</h2>
            </div>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <img src={project.image} alt={project.title} className={styles.image} />

                        {/* Single Expanding Glass Overlay */}
                        <div className={styles.infoOverlay}>
                            <div className={styles.topRow}>
                                <span className={styles.categoryPill}>{project.category}</span>
                                <span className={styles.area}>{project.area}</span>
                            </div>

                            <h3 className={styles.cardTitle}>{project.title}</h3>

                            {/* Hidden by default, expands on hover */}
                            <div className={styles.detailContent}>
                                <div className={styles.divider}></div>
                                <p className={styles.desc}>{project.desc}</p>
                                <button className={styles.viewBtn}>View Details</button>
                            </div>

                            <div className={styles.bottomRow}>
                                <div className={styles.metaItem}>
                                    <span className={styles.icon}>📅</span> {project.year}
                                </div>
                                <div className={styles.metaDivider}>|</div>
                                <div className={styles.metaItem}>
                                    <span className={styles.icon}>📍</span> {project.location}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
