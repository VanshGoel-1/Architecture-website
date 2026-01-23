import styles from './Brands.module.css';

const brands = [
    "Acme Corp", "Vertigo", "PULSE", "Quantum", "Celestia", "Echo Valley"
];

export default function Brands() {
    return (
        <section className={styles.section}>
            <h3 className={styles.label}>Brand Collaborations</h3>
            <div className={styles.grid}>
                {brands.map((brand, index) => (
                    <div key={index} className={styles.brandBox}>
                        <span className={styles.brandName}>{brand}</span>
                        {/* Placeholder for actual logos, keeping text for now as per image style */}
                        <div className={styles.arrow}>↗</div>
                    </div>
                ))}
            </div>
            <p className={styles.description}>
                We partner with innovative minds, investors, and visionaries to build sustainable and impactful spaces.
            </p>
        </section>
    );
}
