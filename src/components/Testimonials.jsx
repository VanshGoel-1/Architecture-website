import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Director',
    company: 'Urban Living',
    quote: 'A masterpiece of design.',
    text: 'Their attention to detail and ability to blend modern aesthetics with functionality is unmatched. Every corner of our new office speaks volumes about their craftsmanship.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'Skyline Dev',
    quote: 'Seamless execution.',
    text: 'Working with Elysian was a seamless experience. They truly understood our vision and translated it into a reality that exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'EcoHabitats',
    quote: 'Sustainable luxury.',
    text: 'We wanted a home that was both luxurious and eco-friendly. Elysian delivered a design that perfectly balances both, creating a sanctuary we love.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    name: 'David Wright',
    role: 'Principal',
    company: 'Wright Architects',
    quote: 'Visionary partners.',
    text: 'As fellow architects, we have high standards. Elysian not only met them but challenged us to think bigger. A truly collaborative and inspiring partnership.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  }
];

/**
 * Testimonials Component
 * 
 * Horizontal scrolling list of client reviews.
 * 
 * Features:
 * - **Scroll Container**: Uses CSS overflow for horizontal scrolling.
 * - **Card Layout**: Displays quote, author info, and client image.
 */
export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>What our clients say</h2>
      </div>

      <div className={styles.scrollContainer}>
        {testimonials.map((t) => (
          <div key={t.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.quote}>{t.quote}</h3>
              <div className={styles.author}>
                {t.name}
              </div>
              <div className={styles.role}>
                {t.role}, {t.company}
              </div>
            </div>

            <p className={styles.text}>{t.text}</p>

            <div className={styles.imageWrapper}>
              <img
                src={t.image}
                alt={t.name}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
