import styles from './Gallery.module.css';

const images = [
    "/cat-han-VgyN_CWXQVM-unsplash.jpg",
    "/collov-home-design-H-1j_s0dhCw-unsplash.jpg",
    "/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg",
    "/kam-idris-_HqHX3LBN18-unsplash.jpg",
    "/spacejoy-9M66C_w_ToM-unsplash.jpg",
    "/spacejoy-PyeXkOVmG1Y-unsplash.jpg"
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
