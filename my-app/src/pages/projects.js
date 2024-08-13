import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Mes Projets</h1>
        <div className={styles.projects}>
          <div className={styles.project}>
            <Image src="/project1.jpg" alt="Project 1" width={300} height={200} />
            <h2>Projet 1</h2>
            <p>Description du projet 1...</p>
          </div>
          {/* Ajouter plus de projets ici */}
        </div>
      </main>
    </div>
  );
}
