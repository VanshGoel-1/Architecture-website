import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const allProjects = [
  {
    id: 1,
    title: 'Urban Oasis',
    year: '2023',
    category: 'Commercial',
    location: 'Singapore',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Aurora Hills',
    year: '2024',
    category: 'Residential',
    location: 'Vancouver, Canada',
    image: 'skyline_apartment.webp',
  },
  {
    id: 3,
    title: 'Azure Bay',
    year: '2023',
    category: 'Resort',
    location: 'Kyoto, Japan',
    image: 'Kyoto.webp',
  },
  {
    id: 4,
    title: 'The Metropolis',
    year: '2022',
    category: 'Mixed Use',
    location: 'New York, USA',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Skyline Tower',
    year: '2024',
    category: 'Commercial',
    location: 'London, UK',
    image:
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Serenity Homes',
    year: '2021',
    category: 'Residential',
    location: 'Melbourne, Australia',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting Landmarks, One Project
            <br />
            at a Time
          </motion.h1>
          <div className={styles.scrollIndicator}>
            <div className={styles.dot}></div> Explore Collection
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.content}>
        <div className={styles.intro}>
          <h2 className={styles.introHeading}>
            Explore top real estate
            <br />
            projects with key
            <br />
            insights and visuals.
          </h2>
        </div>

        <div className={styles.grid}>
          {allProjects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.cardImage} />
                <div className={styles.cardOverlay}>
                  <div className={styles.cardTags}>
                    <span className={styles.tag}>{project.category}</span>
                    <span className={styles.tag}>{project.year}</span>
                  </div>
                  <div className={styles.cardDetails}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardLocation}>{project.location}</p>
                  </div>
                  <button className={styles.viewBtn}>View Work</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
