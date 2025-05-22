import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MBKA Test</title>
        <meta name="description" content="MBKA Test Main Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* 맨 위에 MBKA Test */}
        <h1 className={styles.title}>MBKA Test</h1>

        {/* 예쁜 달모양 이미지 */}
        {/* public 폴더에 moon.png 이미지를 넣어주세요. */}
        <div className={styles.moonImageWrapper}>
          <Image
            src="/moon.png" // public 폴더에 moon.png 파일을 넣어주세요.
            alt="Beautiful Moon"
            width={200} // 이미지의 너비를 조절합니다.
            height={200} // 이미지의 높이를 조절합니다.
            className={styles.moonImage}
          />
        </div>

        {/* 3줄의 긴 타원형 버튼 */}
        <div className={styles.buttonContainer}>
          <button className={`${styles.testButton} ${styles.gradientButton}`}>
            Fast Test
          </button>
          <button className={`${styles.testButton} ${styles.gradientButton}`}>
            Slow Test
          </button>
          <button className={`${styles.testButton} ${styles.gradientButton}`}>
            Full Test
          </button>
        </div>
      </main>
    </div>
  );
}