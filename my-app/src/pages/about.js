import Navbar from '../components/Navbar';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>À propos de moi</h1>
        <p className={styles.description}>Je suis un développeur passionné par le web...</p>
      </main>
    </div>
  );
}
