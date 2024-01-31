import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container} style={{ backgroundImage: `url('/images/background.jpg')` }}>
      <header className={styles.header}>
        <img src="/images/header.png" alt="Header" />
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="/usdz/usdz_1.usdz" rel="ar" className={styles.card}>
            <img src="/images/preview_1.png" alt="USDZ 1" />
          </a>
          <a href="/usdz/usdz_2.usdz" rel="ar" className={styles.card}>
            <img src="/images/preview_2.png" alt="USDZ 1" />
          </a>
          <a href="/usdz/usdz_3.usdz" rel="ar" className={styles.card}>
            <img src="/images/preview_3.png" alt="USDZ 1" />
          </a>
          <a href="/usdz/usdz_4.usdz" rel="ar" className={styles.card}>
            <img src="/images/preview_4.png" alt="USDZ 1" />
          </a>
        </div>
      </main>
    </div>
  );
}
