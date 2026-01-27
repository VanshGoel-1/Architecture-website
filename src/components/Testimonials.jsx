import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'Urban Living',
    text: 'Their attention to detail and ability to blend modern aesthetics with functionality is unmatched.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Skyline Dev',
    text: 'Working with Elysian was a seamless experience. They truly understood our vision.',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What our clients say</h2>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.author}>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.company}>{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
