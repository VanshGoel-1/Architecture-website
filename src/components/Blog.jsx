import styles from './Blog.module.css';

const articles = [
    {
        id: 1,
        tag: "Design",
        title: "10 Principles of Sustainable Architecture",
        image: "/WhatsApp Image 2026-01-21 at 11.50.39 PM (8).jpeg"
    },
    {
        id: 2,
        tag: "Innovation",
        title: "The Future of Urban Living Spaces",
        image: "/WhatsApp Image 2026-01-21 at 11.50.49 PM.jpeg"
    },
    {
        id: 3,
        tag: "History",
        title: "Restoring Heritage Buildings: A Guide",
        image: "/WhatsApp Image 2026-01-21 at 11.50.49 PM (1).jpeg"
    }
];

export default function Blog() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Inspiring architecture and design insights.</h2>
            <div className={styles.grid}>
                {articles.map((article) => (
                    <div key={article.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={article.image} alt={article.title} className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.tag}>{article.tag}</span>
                            <h3 className={styles.title}>{article.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
