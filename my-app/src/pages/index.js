import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenue sur mon Portefeuille</h1>
        <p className={styles.description}>Découvrez mes projets et compétences ci-dessous.</p>
        <Image src="https://i.pinimg.com/564x/73/91/c1/7391c199face8bac316ee3301aba1766.jpg" alt="Profile" width={300} height={300} className={styles.profileImage} />
      </main>
    </div>
  );
}
