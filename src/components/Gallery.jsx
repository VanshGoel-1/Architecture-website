import styles from './Gallery.module.css';

const images = [
    "/WhatsApp Image 2026-01-21 at 11.50.39 PM (2).jpeg",
    "/WhatsApp Image 2026-01-21 at 11.50.39 PM (3).jpeg",
    "/WhatsApp Image 2026-01-21 at 11.50.39 PM (4).jpeg",
    "/WhatsApp Image 2026-01-21 at 11.50.39 PM (5).jpeg",
    "/WhatsApp Image 2026-01-21 at 11.50.39 PM (6).jpeg",
    "/WhatsApp Image 2026-01-21 at 11.50.39 PM (7).jpeg"
];

export default function Gallery() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>GALLERY</h2>
            <div className={styles.grid}>
                {images.map((src, index) => (
                    <div key={index} className={styles.item}>
                        <img src={src} alt={`Gallery ${index + 1}`} className={styles.image} />
                    </div>
                ))}
            </div>
        </section>
    );
}
