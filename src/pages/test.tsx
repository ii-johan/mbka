// mbka/src/pages/test.tsx

'use client'; // 이 파일은 클라이언트 사이드에서만 실행되므로 필요합니다.

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // pages Router에서는 next/router 사용
import { mokaQuestions } from '../data/mokaData'; // mokaData 경로 확인
import styles from '../styles/Test.module.css'; // Test 페이지 전용 CSS 모듈 임포트

export default function TestPage() {
  const router = useRouter();
  const { ids } = router.query; // pages Router에서는 router.query로 쿼리 파라미터 접근

  const [questionIds, setQuestionIds] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ questionId: number; selectedOption: number }[]>([]);

  useEffect(() => {
    if (ids) {
      const idsParam = Array.isArray(ids) ? ids[0] : ids;
      setQuestionIds(idsParam.split(',').map(id => parseInt(id, 10)));
    }
  }, [ids]);

  const currentQuestion = questionIds.length > 0
    ? mokaQuestions.find(q => q.id === questionIds[currentQuestionIndex])
    : undefined;

  const handleOptionSelect = (optionId: number) => {
    setSelectedOption(optionId);
  };

  const handleNextQuestion = () => {
    if (currentQuestion && selectedOption !== null) {
      setAnswers([...answers, { questionId: currentQuestion.id, selectedOption: selectedOption }]);
    }
    setSelectedOption(null); // 다음 문제로 넘어가기 전에 선택 초기화

    if (currentQuestionIndex < questionIds.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 모든 문제 풀이 완료, results 페이지로 이동
      router.push({
        pathname: '/results',
        query: {
          answers: JSON.stringify(answers),
          questionIds: JSON.stringify(questionIds)
        }
      });
    }
  };

  if (questionIds.length === 0) {
    return <div className={styles.testContainer}>문제 ID를 불러오는 중이거나 문제가 없습니다.</div>;
  }

  if (!currentQuestion) {
    return <div className={styles.testContainer}>문제를 찾을 수 없습니다.</div>;
  }

  return (
    <div className={styles.testContainer}>
      <p className={styles.questionCounter}>{currentQuestionIndex + 1} / {questionIds.length}</p>
      <h2 className={styles.questionText}>{currentQuestion.question}</h2>
      <div className={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            className={`${styles.optionButton} ${selectedOption === option.id ? styles.selectedOption : ''}`}
          >
            {option.text}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextQuestion}
        disabled={selectedOption === null}
        className={styles.nextButton}
      >
        {currentQuestionIndex < questionIds.length - 1 ? '다음 문제' : '결과 보기'}
      </button>
    </div>
  );
}