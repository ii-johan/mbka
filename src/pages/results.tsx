// mbka/src/pages/results.tsx

'use client'; // 클라이언트 사이드에서만 실행되므로 필요합니다.

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { mokaQuestions } from '../data/mokaData'; // mokaData 경로 확인
import styles from '../styles/Results.module.css'; // Results 페이지 전용 CSS 모듈 임포트

interface Answer {
  questionId: number;
  selectedOption: number;
}

export default function ResultsPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [questionIds, setQuestionIds] = useState<number[]>([]);

  useEffect(() => {
    if (router.query.answers && typeof router.query.answers === 'string') {
      try {
        setAnswers(JSON.parse(router.query.answers));
      } catch (e) {
        console.error("Failed to parse answers:", e);
      }
    }
    if (router.query.questionIds && typeof router.query.questionIds === 'string') {
      try {
        setQuestionIds(JSON.parse(router.query.questionIds));
      } catch (e) {
        console.error("Failed to parse questionIds:", e);
      }
    }
  }, [router.query]);

  const handleGoHome = () => {
    router.push('/');
  };

  const totalQuestions = questionIds.length;
  const answeredQuestions = answers.length;

  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.resultsTitle}>테스트 결과</h1>
      <p className={styles.summaryText}>총 문제 수: {totalQuestions}</p>
      <p className={styles.summaryText}>답변한 문제 수: {answeredQuestions}</p>

      <div className={styles.detailResults}>
        {answers.map((answer, index) => {
          const question = mokaQuestions.find(q => q.id === answer.questionId);
          return (
            <div key={index} className={styles.resultItem}>
              <p>문제 {index + 1}: {question?.question || '알 수 없는 문제'}</p>
              <p>선택: {question?.options.find(opt => opt.id === answer.selectedOption)?.text || '선택 없음'}</p>
            </div>
          );
        })}
      </div>

      <button onClick={handleGoHome} className={styles.homeButton}>홈으로 돌아가기</button>
    </div>
  );
}