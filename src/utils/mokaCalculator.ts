// src/utils/mokaCalculator.ts 또는 src/utils/mokaCalculator.js 파일로 저장
// 이 파일은 MokaQuestion 타입 정의와 함께 사용될 수 있습니다.

// MokaQuestion 타입 정의 (필요하다면 별도의 types.ts 파일에 정의할 수 있습니다)
export interface MokaQuestion {
  id: number;
  text_ko: string;
  text_en: string;
  scoring: {
    dichotomy: string; // 예: 'OU', 'KR', 'AY' 등
    pole: string; // 예: 'O', 'U', 'K', 'R' 등
    polarity: 'positive' | 'negative';
    weight?: number; // 가중치, 기본값은 1
  }[];
}

// 사용자 답변 타입 정의
export interface UserAnswer {
  questionId: number;
  answer: number; // 1부터 7까지의 점수라고 가정
}

/**
 * 사용자 답변과 문항 데이터를 바탕으로 MOKA 유형별 점수를 계산하는 함수.
 * @param userAnswers 사용자의 답변 배열 ({ questionId: number, answer: number }[])
 * @param questions MOKA 질문 데이터 배열 (MokaQuestion[])
 * @returns 각 MOKA 극(pole)의 총점을 담은 객체 ({ [pole: string]: number })
 */
export const calculateMokaScores = (
  userAnswers: UserAnswer[],
  questions: MokaQuestion[]
): { [pole: string]: number } => {
  // 모든 MOKA 극을 초기화합니다.
  const scores: { [pole: string]: number } = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
    M: 0, B: 0, O: 0, U: 0, K: 0, R: 0, A: 0, Y: 0,
  };

  userAnswers.forEach(userAnswer => {
    const question = questions.find(q => q.id === userAnswer.questionId);

    if (question && question.scoring) {
      question.scoring.forEach(scoreInfo => {
        const { pole, polarity, weight = 1 } = scoreInfo;
        const answerValue = userAnswer.answer;
        let scoreContribution = 0;

        // 'positive' 극성일 경우, 답변 점수 그대로 반영
        if (polarity === 'positive') {
          scoreContribution = answerValue;
        }
        // 'negative' 극성일 경우, 답변 점수를 반대로 반영 (예: 1점 -> 7점, 7점 -> 1점)
        // 1~7점 척도에서 negative polarity일 때 (7 - answerValue) + 1 로 계산
        else if (polarity === 'negative') {
          scoreContribution = (7 - answerValue) + 1;
        }

        // 해당 극의 점수에 기여도를 더합니다.
        if (scores[pole] !== undefined) {
          scores[pole] += scoreContribution * weight;
        } else {
          // 정의되지 않은 극에 대한 경고 (만약 오타나 잘못된 데이터가 있다면)
          console.warn(`[calculateMokaScores] Unknown pole encountered: ${pole}`);
        }
      });
    } else {
      console.warn(`[calculateMokaScores] Scoring info missing for question ID: ${userAnswer.questionId}`);
    }
  });

  // TODO: 여기서는 각 극의 총점만 반환합니다.
  // 나중에 EI, SN 등의 '차원'별 최종 점수를 계산하려면 이 scores 객체를 바탕으로
  // scores['E'] - scores['I'] 와 같은 연산을 추가해야 합니다.
  // 예를 들어, 최종 결과가 { EI: 10, SN: -5, ... } 형태가 되도록 만들 수 있습니다.

  return scores;
};