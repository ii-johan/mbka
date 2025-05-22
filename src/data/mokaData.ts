// mbka/src/data/mokaData.ts
// 이전에 제공된 mokaQuestions 데이터 배열
// 실제 MOKA 테스트 질문들을 여기에 추가하세요 (최소 160개)
export const mokaQuestions = [
  { id: 1, question: "MBKA Test 질문 1번입니다. 당신의 MBTI는 무엇인가요?", options: [{ id: 1, text: "외향형 (E)" }, { id: 2, text: "내향형 (I)" }] },
  { id: 2, question: "MBKA Test 질문 2번입니다. 어떤 것을 선호하시나요?", options: [{ id: 1, text: "직관 (N)" }, { id: 2, text: "감각 (S)" }] },
  { id: 3, question: "MBKA Test 질문 3번입니다. 의사결정 시 어떤 것을 선호하시나요?", options: [{ id: 1, text: "사고 (T)" }, { id: 2, text: "감정 (F)" }] },
  { id: 4, question: "MBKA Test 질문 4번입니다. 삶의 방식은 어떤가요?", options: [{ id: 1, text: "판단 (J)" }, { id: 2, text: "인식 (P)" }] },
  { id: 5, question: "MBKA Test 질문 5번입니다. 당신의 이상적인 휴가는?", options: [{ id: 1, text: "활동적인 모험" }, { id: 2, text: "조용하고 편안한 휴식" }] },
  { id: 6, question: "MBKA Test 질문 6번입니다. 새로운 사람을 만날 때 어떤 편인가요?", options: [{ id: 1, text: "쉽게 다가간다" }, { id: 2, text: "관찰하고 기다린다" }] },
];
for (let i = 7; i <= 160; i++) {
  mokaQuestions.push({ id: i, question: `MBKA Test 질문 ${i}번입니다.`, options: [{ id: 1, text: "선택지 1" }, { id: 2, text: "선택지 2" }] });
}