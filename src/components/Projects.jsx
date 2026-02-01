import styles from './Projects.module.css';

const projects = [
    {
        id: 1,
        title: 'Alpine Retreat',
        location: 'Marina Bay District, Singapore',
        year: '2023',
        area: '250,000 sq ft.',
        category: 'Residential',
        desc: 'A sophisticated blend of alpine tradition and modern luxury, creating a warm yet expansive living environment.',
        image: '/stephan-bechert-yFV39g6AZ5o-unsplash.webp',
    },
    {
        id: 2,
        title: 'Desert Villa',
        location: 'Aspen, Colorado, USA',
        year: '2022',
        area: '180,000 sq ft.',
        category: 'Residential',
        desc: 'Designed to blend seamlessly with the arid landscape, offering cool respite and breathtaking desert views.',
        image: '/ionut-vlad-idXQEOxhmvU-unsplash.webp',
    },
    {
        id: 3,
        title: 'Urban Loft',
        location: 'New York, USA',
        year: '2024',
        area: '120,000 sq ft.',
        category: 'Commercial',
        desc: 'An industrial-chic workspace that fosters creativity and collaboration in the heart of the city.',
        image: '/im3rd-media-CbZ4EDP__VQ-unsplash.webp',
    },
    {
        id: 4,
        title: 'Seaside Haven',
        location: 'Biarritz, France',
        year: '2021',
        area: '300,000 sq ft.',
        category: 'Resort',
        desc: 'A luxurious coastal sanctuary designed to capture the essence of ocean living with panoramic views.',
        image: '/iltun-huseynli-OH7GkUqiuZk-unsplash.webp',
    },
];

/**
 * Projects Component
 * 
 * Displays a grid of featured real estate projects with interactive hover effects.
 * 
 * Features:
 * - **Responsive Grid**: Flex/Grid layout adapted for various screen sizes.
 * - **Hover Interaction**:
 *   - Cards display a "glass" overlay on hover.
 *   - Details (Description, View Details button) expand from hidden state.
 *   - Uses pure CSS modules for hover states (efficient performance).
 */
export default function Projects() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.heading}>
                    Explore top real estate projects
                    <br />
                    with key insights and visuals.
                </h2>
            </div>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className={styles.image}
                            loading="lazy"
                            decoding="async"
                        />

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
