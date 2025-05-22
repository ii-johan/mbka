// mbka/src/pages/index.tsx

import { useState } from 'react';
import { useRouter } from 'next/router'; // pages Router에서는 next/router 사용
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // Home.module.css 임포트
import { mokaQuestions } from '../data/mokaData'; // 데이터 임포트

export default function Home() {
  const router = useRouter();
  const [selectedTestType, setSelectedTestType] = useState<'fast' | 'slow' | 'full' | null>(null);

  const goToTestPage = (testType: 'fast' | 'slow' | 'full') => {
    let idsToPass: number[] = [];

    if (testType === 'fast') {
      const allQuestionIds = mokaQuestions.map(q => q.id);
      const shuffled = allQuestionIds.sort(() => 0.5 - Math.random());
      idsToPass = shuffled.slice(0, 10); // Fast Test: 10문제
    } else if (testType === 'slow') {
      const allQuestionIds = mokaQuestions.map(q => q.id);
      const shuffled = allQuestionIds.sort(() => 0.5 - Math.random());
      idsToPass = shuffled.slice(0, 30); // Slow Test: 30문제
    } else if (testType === 'full') {
      idsToPass = mokaQuestions.map(q => q.id); // Full Test: 전체 문제
    }

    if (idsToPass.length > 0) {
      router.push(`/test?ids=${idsToPass.join(',')}`);
    } else {
      console.error("테스트 문제를 불러올 수 없습니다. mokaQuestions 데이터가 비어있거나 올바르지 않습니다.");
      alert("테스트 문제를 불러오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* 텍스트 'MBKA Test'로 수정됨 */}
        <h1 className={styles.title}>MBKA Test</h1> 

        <div className={styles.moonImageWrapper}>
          <Image
            src="/moon.png" // public 폴더의 moon.png 파일을 직접 참조
            alt="Glowing moon image"
            width={150}
            height={150}
            className={styles.moonImage}
            priority={true}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button
            onClick={() => { setSelectedTestType('fast'); goToTestPage('fast'); }}
            className={`${styles.testButton} ${styles.gradientButton}`}
            style={{ boxShadow: selectedTestType === 'fast' ? '0px 0px 20px rgb(255, 255, 139)' : '' }}
          >
            Fast Test (빠른 테스트)
          </button>

          <button
            onClick={() => { setSelectedTestType('slow'); goToTestPage('slow'); }}
            className={`${styles.testButton} ${styles.gradientButton}`}
            style={{ boxShadow: selectedTestType === 'slow' ? '0px 0px 20px rgb(255, 255, 139)' : '' }}
          >
            Slow Test (심층 테스트)
          </button>

          <button
            onClick={() => { setSelectedTestType('full'); goToTestPage('full'); }}
            className={`${styles.testButton} ${styles.gradientButton}`}
            style={{ boxShadow: selectedTestType === 'full' ? '0px 0px 20px rgb(255, 255, 139)' : '' }}
          >
            Full Test (전체 테스트)
          </button>
        </div>
      </main>
    </div>
  );
}