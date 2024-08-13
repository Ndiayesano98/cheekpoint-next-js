import Navbar from '../components/Navbar';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Contactez-moi</h1>
        <p className={styles.description}>Vous pouvez me contacter via email à : <a href="mailto:contact@monportfolio.com">contact@monportfolio.com</a></p>
      </main>
    </div>
  );
}
