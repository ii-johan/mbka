// src/data/mokaData.ts

// MBTI 및 MOKA 테스트의 8가지 차원과 각 차원의 두 극을 정의합니다.
// 'HM' 차원을 'MB'로, 'H' 극을 'M'으로, 'M' 극을 'B'로 변경했습니다.
export type Dichotomy = 'EI' | 'SN' | 'TF' | 'JP' | 'MB' | 'OU' | 'KR' | 'AY'; // 'HM' -> 'MB' 변경됨
export type Pole = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P' | 'M' | 'B' | 'O' | 'U' | 'K' | 'R' | 'A' | 'Y'; // 'H' 제거, 'M' 극 대신 'B' 극 추가됨

// 문항의 답변이 특정 유형(차원과 극)에 어떻게 점수를 부여하는지 정의하는 구조입니다.
export interface MokaScoring {
  dichotomy: Dichotomy; // 이 문항이 영향을 주는 차원 (예: 'EI', 'MB')
  pole: Pole;           // 이 문항이 영향을 주는 차원의 극 (예: 'E', 'B')
  polarity: 'positive' | 'negative'; // 답변 점수(1-7)를 해당 극의 점수에 더할 때 긍정적으로 반영할지(positive) 부정적으로 반영할지(negative)
  // 'positive': 답변 점수 1-7을 그대로 해당 극의 점수에 더합니다. (값이 클수록 해당 극 성향 강함)
  // 'negative': 답변 점수를 반전하여 더합니다. (예: 1 -> 7, 7 -> 1 로 변환하여 더함)
  weight?: number; // (선택 사항) 이 문항의 점수 반영 가중치 (기본값 1)
}

// MOKA 테스트 문항 하나의 구조를 정의합니다.
export interface MokaQuestion {
  id: number; // 문항 고유 번호
  text_ko: string; // 질문 내용 (한국어)
  text_en: string; // 질문 내용 (영어)
  scoring: MokaScoring[]; // 이 문항에 대한 하나 이상의 채점 규칙 배열
}

// MOKA 테스트의 모든 문항 데이터를 담을 배열
export const mokaQuestions: MokaQuestion[] = [
  // --- 1번부터 101번 문항 (새로 제공해주신 내용) ---
  // 예시 문항 1 (E/I 차원)
  {
    id: 1,
    text_ko: "여러 사람과 어울릴 때 에너지가 생긴다.",
    text_en: "I gain energy when I am with many people.",
    scoring: [{ dichotomy: 'EI', pole: 'E', polarity: 'positive' }] // 답변 점수가 높을수록 E 성향 점수 증가
  },
  // 예시 문항 2 (S/N 차원)
  {
    id: 2,
    text_ko: "구체적이고 명확한 설명을 원한다.",
    text_en: "I prefer clear and specific explanations.",
    scoring: [{ dichotomy: 'SN', pole: 'S', polarity: 'positive' }] // 답변 점수가 높을수록 S 성향 점수 증가
  },
  // 예시 문항 3 (T/F 차원)
  {
    id: 3,
    text_ko: "판단은 논리적 근거에 따라 이루어져야 한다.",
    text_en: "Judgments should be based on logical reasoning.",
    scoring: [{ dichotomy: 'TF', pole: 'T', polarity: 'positive' }] // 답변 점수가 높을수록 T 성향 점수 증가
  },
  // 예시 문항 4 (J/P 차원)
  {
    id: 4,
    text_ko: "계획이 있어야 안정된다.",
    text_en: "I feel secure when I have a plan.",
    scoring: [{ dichotomy: 'JP', pole: 'J', polarity: 'positive' }] // 답변 점수가 높을수록 J 성향 점수 증가
  },
  // 예시 문항 5 (M/B 차원) - 수정됨: 'HM' -> 'MB', 'H' -> 'M'
  {
    id: 5,
    text_ko: "모임에서 방향을 정하는 역할을 자주 맡는다.",
    text_en: "I often take on the role of setting direction in gatherings.",
    scoring: [{ dichotomy: 'MB', pole: 'M', polarity: 'positive' }] // 답변 점수가 높을수록 M 성향 점수 증가 (이전 H)
  },
  // 예시 문항 6 (O/U 차원)
  {
    id: 6,
    text_ko: "나에 대한 농담도 유쾌하게 받아들일 수 있다.",
    text_en: "I can take jokes about myself in a good spirit.",
    scoring: [{ dichotomy: 'OU', pole: 'O', polarity: 'positive' }] // 답변 점수가 높을수록 O 성향 점수 증가
  },
  // 예시 문항 7 (K/R 차원)
  {
    id: 7,
    text_ko: "속마음을 드러내는 데 거리낌이 많다.",
    text_en: "I hesitate to reveal my true feelings.",
    scoring: [{ dichotomy: 'KR', pole: 'R', polarity: 'positive' }] // 답변 점수가 높을수록 R 성향 점수 증가
  },
  // 예시 문항 8 (A/Y 차원)
  {
    id: 8,
    text_ko: "촌스럽다는 평가가 혹시 나에게 있을까 불안하다.",
    text_en: "I worry that I might be perceived as unsophisticated.",
    scoring: [{ dichotomy: 'AY', pole: 'Y', polarity: 'positive' }] // 답변 점수가 높을수록 Y 성향 점수 증가
  },
  // 예시 문항 9 (E/I 차원)
  {
    id: 9,
    text_ko: "생각이 정리된 후에 대화를 시작하는 편이다.",
    text_en: "I prefer to start conversations after organizing my thoughts.",
    scoring: [{ dichotomy: 'EI', pole: 'I', polarity: 'positive' }] // 답변 점수가 높을수록 I 성향 점수 증가
  },
  // 예시 문항 10 (S/N 차원)
  {
    id: 10,
    text_ko: "요약적이고 상징적인 설명이 잘 이해된다.",
    text_en: "I understand summaries and symbolic explanations well.",
    scoring: [{ dichotomy: 'SN', pole: 'N', polarity: 'positive' }] // 답변 점수가 높을수록 N 성향 점수 증가
  },
  // 예시 문항 11 (T/F 차원)
  {
    id: 11,
    text_ko: "사실 여부보다 상대의 입장이 더 중요할 수 있다.",
    text_en: "The other person's position can be more important than the facts.",
    scoring: [{ dichotomy: 'TF', pole: 'F', polarity: 'positive' }] // 답변 점수가 높을수록 F 성향 점수 증가
  },
  // 예시 문항 12 (J/P 차원)
  {
    id: 12,
    text_ko: "약속 시간에 종종 늦는 편이다.",
    text_en: "I often arrive late for appointments.",
    scoring: [{ dichotomy: 'JP', pole: 'P', polarity: 'positive' }] // 답변 점수가 높을수록 P 성향 점수 증가
  },
  // 예시 문항 13 (M/B 차원) - 수정됨: 'HM' -> 'MB', 'H' -> 'M'
  {
    id: 13,
    text_ko: "다른 사람의 제안보다 내 아이디어가 우선시는게 자연스럽다.",
    text_en: "I naturally prioritize my ideas over others' suggestions.",
    scoring: [{ dichotomy: 'MB', pole: 'M', polarity: 'positive' }] // 답변 점수가 높을수록 M성향 점수 증가 (이전 H)
  },
  // 예시 문항 14 (O/U 차원)
  {
    id: 14,
    text_ko: "농담하는 사람이 진지하지 않다고 느껴져 불편할 때가 있다.",
    text_en: "I sometimes feel uncomfortable when someone joking seems not serious.",
    scoring: [{ dichotomy: 'OU', pole: 'U', polarity: 'positive' }] // 답변 점수가 높을수록 U 성향 점수 증가
  },
  // 예시 문항 15 (K/R 차원)
  {
    id: 15,
    text_ko: "기쁘거나 슬플 때 그 마음을 바로 말로 표현한다.",
    text_en: "I express my feelings immediately when I am happy or sad.",
    scoring: [{ dichotomy: 'KR', pole: 'K', polarity: 'positive' }] // 답변 점수가 높을수록 K 성향 점수 증가
  },
  // 예시 문항 16 (A/Y 차원)
  {
    id: 16,
    text_ko: "누군가가 나를 부러워하거나 동경하는 시선을 느낀다.",
    text_en: "I feel that someone envies or admires me.",
    scoring: [{ dichotomy: 'AY', pole: 'A', polarity: 'positive' }] // 답변 점수가 높을수록 A 성향 점수 증가
  },
  // 예시 문항 17 (E/I 차원)
  {
    id: 17,
    text_ko: "활동보다는 내적인 집중을 선호한다.",
    text_en: "I prefer inner focus over activity.",
    scoring: [{ dichotomy: 'EI', pole: 'I', polarity: 'positive' }] // 답변 점수가 높을수록 I 성향 점수 증가
  },
  // 예시 문항 18 (S/N 차원)
  {
    id: 18,
    text_ko: "실용성보다 의미와 가능성이 더 중요하다.",
    text_en: "Meaning and possibility are more important than practicality.",
    scoring: [{ dichotomy: 'SN', pole: 'N', polarity: 'positive' }] // 답변 점수가 높을수록 N 성향 점수 증가
  },
  // 예시 문항 19 (T/F 차원)
  {
    id: 19,
    text_ko: "결정은 최대한 이성적으로 이루어져야 한다.",
    text_en: "Decisions should be made as rationally as possible.",
    scoring: [{ dichotomy: 'TF', pole: 'T', polarity: 'positive' }] // 답변 점수가 높을수록 T 성향 점수 증가
  },
  // 예시 문항 20 (J/P 차원)
  {
    id: 20,
    text_ko: "마감 기한 전에 미리 끝내는 편이다.",
    text_en: "I prefer to finish tasks before the deadline.",
    scoring: [{ dichotomy: 'JP', pole: 'J', polarity: 'positive' }] // 답변 점수가 높을수록 J 성향 점수 증가
  },
  // 예시 문항 21 (M/B 차원) - 수정됨: 'HM' -> 'MB', 'H' -> 'M'
  {
    id: 21,
    text_ko: "갈등이 생기면 피하기보다 조정하거나 주도하려한다.",
    text_en: "I prefer to adjust or lead rather than avoid conflicts.",
    scoring: [{ dichotomy: 'MB', pole: 'M', polarity: 'positive' }] // 답변 점수가 높을수록 M 성향 점수 증가 (이전 H)
  },
  // 예시 문항 22 (O/U 차원)
  {
    id: 22,
    text_ko: "진지한 분위기를 풀기 위해 일부러 장난을 치기도 한다.",
    text_en: "I sometimes joke to lighten a serious atmosphere.",
    scoring: [{ dichotomy: 'OU', pole: 'O', polarity: 'positive' }] // 답변 점수가 높을수록 O 성향 점수 증가
  },
  // 예시 문항 23 (K/R 차원)
  {
    id: 23,
    text_ko: "누군가 내 감정을 물으면 대답이 망설여진다.",
    text_en: "When someone asks about my feelings, I hesitate to answer.",
    scoring: [{ dichotomy: 'KR', pole: 'R', polarity: 'positive' }] // 답변 점수가 높을수록 R 성향 점수 증가
  },
  // 예시 문항 24 (A/Y 차원)
  {
    id: 24,
    text_ko: "모임에서 내가 없어도 전혀 티 나지 않을 것 같다.",
    text_en: "I feel that it wouldn't matter at all if I were absent from the gathering.",
    scoring: [{ dichotomy: 'AY', pole: 'Y', polarity: 'positive' }] // 답변 점수가 높을수록 Y 성향 점수 증가
  },
  // 예시 문항 25 (E/I 차원)
  {
    id: 25,
    text_ko: "낯선 상황에서 먼저 말을 거는 편이다.",
    text_en: "I tend to initiate conversations in unfamiliar situations.",
    scoring: [{ dichotomy: 'EI', pole: 'E', polarity: 'positive' }] // 답변 점수가 높을수록 E 성향 점수 증가
  },
  // 예시 문항 26 (S/N 차원)
  {
    id: 26,
    text_ko: "나는 반복해서 하는 작업에 능숙하다.",
    text_en: "I am skilled at repetitive tasks.",
    scoring: [{ dichotomy: 'SN', pole: 'S', polarity: 'positive' }] // 답변 점수가 높을수록 S 성향 점수 증가
  },
  // 예시 문항 27 (T/F 차원)
  {
    id: 27,
    text_ko: "관계나 상황의 맥락도 고려해야 한다.",
    text_en: "It is important to consider the other person's feelings.",
    scoring: [{ dichotomy: 'TF', pole: 'F', polarity: 'positive' }] // 답변 점수가 높을수록 F 성향 점수 증가
  },
  // 예시 문항 28 (J/P 차원)
  {
    id: 28,
    text_ko: "정리정돈이 잘 되어 있어야 집중된다.",
    text_en: "I can concentrate better when things are organized.",
    scoring: [{ dichotomy: 'JP', pole: 'J', polarity: 'positive' }] // 답변 점수가 높을수록 J 성향 점수 증가
  },
  // 예시 문항 29 (M/B 차원) - 수정됨: 'HM' -> 'MB', 'H' -> 'M'
  {
    id: 29,
    text_ko: "사람들 앞에서 말하는 것을 두려워하지 않는다.",
    text_en: "I am not afraid to speak in front of people.",
    scoring: [{ dichotomy: 'MB', pole: 'M', polarity: 'positive' }] // 답변 점수가 높을수록 M 성향 점수 증가 (이전 H)
  },
  // 예시 문항 30 (O/U 차원)
  {
    id: 30,
    text_ko: "남들이 내 실수를 지적하면 민감하게 반응한다.",
    text_en: "I react sensitively when others point out my mistakes.",
    scoring: [{ dichotomy: 'OU', pole: 'U', polarity: 'positive' }] // 답변 점수가 높을수록 U 성향 점수 증가
  },
  // 예시 문항 31 (K/R 차원)
  {
    id: 31,
    text_ko: "내가 말을 하면 상대도 잘 받아주는 편이다.",
    text_en: "When I speak, the other person tends to respond well.",
    scoring: [{ dichotomy: 'KR', pole: 'K', polarity: 'positive' }] // 답변 점수가 높을수록 K 성향 점수 증가
  },
  // 예시 문항 32 (A/Y 차원)
  {
    id: 32,
    text_ko: "나는 유행에 뒤쳐지지 않는 편이다",
    text_en: "I tend not to fall behind trends.",
    scoring: [{ dichotomy: 'AY', pole: 'A', polarity: 'positive' }] // 답변 점수가 높을수록 A 성향 점수 증가
  },
  // 예시 문항 33 (E/I 차원)
  {
    id: 33,
    text_ko: "낯선 환경에서는 조용히 관찰하는 편이다.",
    text_en: "I prefer to quietly observe in unfamiliar environments.",
    scoring: [{ dichotomy: 'EI', pole: 'I', polarity: 'positive' }] // 답변 점수가 높을수록 I 성향 점수 증가
  },
  // 예시 문항 34 (S/N 차원)
  {
    id: 34,
    text_ko: "세부사항보다 전체 흐름을 우선적으로 본다.",
    text_en: "I prioritize the overall flow over details.",
    scoring: [{ dichotomy: 'SN', pole: 'S', polarity: 'positive' }] // 답변 점수가 높을수록 S 성향 점수 증가
  },
  // 예시 문항 35 (T/F 차원)
  {
    id: 35,
    text_ko: "비판은 조심스럽고 배려 있게 해야 한다.",
    text_en: "Criticism should be careful and considerate.",
    scoring: [{ dichotomy: 'TF', pole: 'F', polarity: 'positive' }] // 답변 점수가 높을수록 F 성향 점수 증가
  },
  // 예시 문항 36 (J/P 차원)
  {
    id: 36,
    text_ko: "여행일정이 갑자기 바뀌어도 그 변화가 즐겁다.",
    text_en: "I enjoy changes in travel plans.",
    scoring: [{ dichotomy: 'JP', pole: 'P', polarity: 'positive' }] // 답변 점수가 높을수록 P 성향 점수 증가
  },
  // 예시 문항 37 (M/B 차원) - 수정됨: 'HM' -> 'MB'
  {
    id: 37,
    text_ko: "분위기를 망칠까 봐 내 의견을 말하지 않는 경우가 종종 있다.",
    text_en: "I often refrain from expressing my opinion for fear of ruining the atmosphere.",
    scoring: [{ dichotomy: 'MB', pole: 'B', polarity: 'positive' }] // 답변 점수가 높을수록 B 성향 점수 증가
  },
  // 예시 문항 38 (O/U 차원)
  {
    id: 38,
    text_ko: "사소한 잘못헤도 스스로에게 실망하는 편이다.",
    text_en: "I tend to be disappointed in myself for minor mistakes.",
    scoring: [{ dichotomy: 'OU', pole: 'U', polarity: 'positive' }] // 답변 점수가 높을수록 U 성향 점수 증가
  },
  // 예시 문항 39 (K/R 차원)
  {
    id: 39,
    text_ko: "대화 중 말을 잘 이어가지 못해 끊기는 경우가 있다.",
    text_en: "I sometimes struggle to keep the conversation going.",
    scoring: [{ dichotomy: 'KR', pole: 'R', polarity: 'positive' }] // 답변 점수가 높을수록 R 성향 점수 증가
  },
  // 예시 문항 40 (A/Y 차원)
  {
    id: 40,
    text_ko: "거울 속 내 모습이 종종 시대에 안 맞아 보인다.",
    text_en: "I sometimes feel that my reflection in the mirror doesn't match the times.",
    scoring: [{ dichotomy: 'AY', pole: 'Y', polarity: 'positive' }] // 답변 점수가 높을수록 Y 성향 점수 증가
  },
  // 예시 문항 41 (E/I 차원)
  {
    id: 41,
    text_ko: "즉흥적인 만남이 즐겁다.",
    text_en: "I enjoy spontaneous meetings.",
    scoring: [{ dichotomy: 'EI', pole: 'E', polarity: 'positive' }] // 답변 점수가 높을수록 E 성향 점수 증가
  },
  // 예시 문항 42 (S/N 차원)
  {
    id: 42,
    text_ko: "이미 입증된 방식이 안정감을 준다.",
    text_en: "Proven methods give me a sense of security.",
    scoring: [{ dichotomy: 'SN', pole: 'S', polarity: 'positive' }] // 답변 점수가 높을수록 S 성향 점수 증가
  },
  // 예시 문항 43 (T/F 차원)
  {
    id: 43,
    text_ko: "일의 옳고 그름보다 그로 인해 누가 상처받을지 고려한다.",
    text_en: "I consider who might be hurt rather than the right or wrong of the work.",
    scoring: [{ dichotomy: 'TF', pole: 'F', polarity: 'positive' }] // 답변 점수가 높을수록 F 성향 점수 증가
  },
  // 예시 문항 44 (J/P 차원)
  {
    id: 44,
    text_ko: "음식점에서 메뉴를 고를 때마다 빨리 결정을 못한다.",
    text_en: "I often struggle to make quick decisions when choosing a menu at a restaurant.",
    scoring: [{ dichotomy: 'JP', pole: 'P', polarity: 'positive' }] // 답변 점수가 높을수록 P 성향 점수 증가
  },
  // 예시 문항 45 (M/B 차원) - 수정됨: 'HM' -> 'MB', 'H' -> 'M'
  {
    id: 45,
    text_ko: "팀 분위기를 해치지 않기 위해 내 생각을 바꾼적이 있다.",
    text_en: "I have changed my opinion to avoid disrupting the team atmosphere.",
    scoring: [{ dichotomy: 'MB', pole: 'B', polarity: 'positive' }] // 답변 점수가 높을수록 B 성향 점수 증가 (이전 H)
  },
  // 예시 문항 46 (O/U 차원)
  {
    id: 46,
    text_ko: "내 의견이 틀렸다는 걸 인정하는 데 큰 어려움은 없다.",
    text_en: "I have no difficulty admitting when my opinion is wrong.",
    scoring: [{ dichotomy: 'OU', pole: 'O', polarity: 'positive' }] // 답변 점수가 높을수록 O 성향 점수 증가
  },
  // 예시 문항 47 (K/R 차원)
  {
    id: 47,
    text_ko: "말이 끊길까 봐 대화가 긴장될 때가 있다.",
    text_en: "I feel tense when the conversation might be interrupted.",
    scoring: [{ dichotomy: 'KR', pole: 'R', polarity: 'positive' }] // 답변 점수가 높을수록 R 성향 점수 증가
  },
  // 예시 문항 48 (A/Y 차원)
  {
    id: 48,
    text_ko: "나는 트렌드에 맞추기보다 그냥 있는 옷을 입는다.",
    text_en: "I wear the clothes I have rather than following trends.",
    scoring: [{ dichotomy: 'AY', pole: 'Y', polarity: 'positive' }] // 답변 점수가 높을수록 Y 성향 점수 증가
  },
  // 예시 문항 49 (E/I 차원)
  {
    id: 49,
    text_ko: "공공장소에서 목소리 크기를 조심스럽게 조절해서 말한다.",
    text_en: "I carefully adjust my voice volume in public places.",
    scoring: [{ dichotomy: 'EI', pole: 'I', polarity: 'positive' }] // 답변 점수가 높을수록 I 성향 점수 증가
  },
  // 예시 문항 50 (S/N 차원)
  {
    id: 50,
    text_ko: "데이터와 현실 기반의 정보가 설득력 있다.",
    text_en: "Data and reality-based information are persuasive.",
    scoring: [{ dichotomy: 'SN', pole: 'S', polarity: 'positive' }] // 답변 점수가 높을수록 S 성향 점수 증가
  },
  // 예시 문항 51 (T/F 차원)
  {
    id: 51,
    text_ko: "원칙과 기준에 따라 행동한다.",
    text_en: "I act according to principles and standards.",
    scoring: [{ dichotomy: 'TF', pole: 'T', polarity: 'positive' }] // 답변 점수가 높을수록 T 성향 점수 증가
  },
  // 예시 문항 52 (J/P 차원)
  {
    id: 52,
    text_ko: "결정을 내리고 빠르게 실행한다.",
    text_en: "I make decisions and execute quickly",
    scoring: [{ dichotomy: 'JP', pole: 'J', polarity: 'positive' }] // 답변 점수가 높을수록 J 성향 점수 증가
  },
  // 예시 문항 53 (M/B 차원) - 수정됨: 'HM' -> 'MB'
  {
    id: 53,
    text_ko: "문제가 생기면 책임지고 해결하려는 편이다.",
    text_en: "I tend to take responsibility and solve problems.",
    scoring: [{ dichotomy: 'MB', pole: 'M', polarity: 'positive' }] // 답변 점수가 높을수록 M 성향 점수 증가 (이전 H)
  },
  // 예시 문항 54 (O/U 차원)
  {
    id: 54,
    text_ko: "내 주장과 다르더라도 상대의 입장을 수용할 수 있다.",
    text_en: "I can accept the other person's position even if it differs from mine.",
    scoring: [{ dichotomy: 'OU', pole: 'O', polarity: 'positive' }] // 답변 점수가 높을수록 O 성향 점수 증가
  },
  // 예시 문항 55 (K/R 차원)
  {
    id: 55,
    text_ko: "대화 흐름을 자연스럽게 이끌기 어려운 편이다.",
    text_en: "I find it difficult to lead the conversation naturally.",
    scoring: [{ dichotomy: 'KR', pole: 'R', polarity: 'positive' }] // 답변 점수가 높을수록 R 성향 점수 증가
  },
  // 예시 문항 56 (A/Y 차원)
  {
    id: 56,
    text_ko: "나는 매력 어필을 자연스럽게 잘한다.",
    text_en: "I naturally appeal to my charm.",
    scoring: [{ dichotomy: 'AY', pole: 'A', polarity: 'positive' }] // 답변 점수가 높을수록 A 성향 점수 증가
  },
  // 예시 문항 57 (E/I 차원)
  {
    id: 57,
    text_ko: "새로운 사람을 만나는 데 거리낌이 없다.",
    text_en: "I have no hesitation in meeting new people.",
    scoring: [{ dichotomy: 'EI', pole: 'E', polarity: 'positive' }] // 답변 점수가 높을수록 E 성향 점수 증가
  },
  // 예시 문항 58 (S/N 차원)
  {
    id: 58,
    text_ko: "과거의 사례를 참조해 판단한다.",
    text_en: "I refer to past cases for judgment.",
    scoring: [{ dichotomy: 'SN', pole: 'S', polarity: 'positive' }] // 답변 점수가 높을수록 S 성향 점수 증가
  },
  // 예시 문항 59 (T/F 차원)
  {
    id: 59,
    text_ko: "갈등은 공감과 대화로 해소된다.",
    text_en: "Conflicts are resolved through empathy and conversation.",
    scoring: [{ dichotomy: 'TF', pole: 'F', polarity: 'positive' }] // 답변 점수가 높을수록 F 성향 점수 증가
  },
  // 예시 문항 60 (J/P 차원)
  {
    id: 60,
    text_ko: "할 일을 리스트로 관리한다.",
    text_en: "I manage my tasks with a list.",
    scoring: [{ dichotomy: 'JP', pole: 'J', polarity: 'positive' }] // 답변 점수가 높을수록 J 성향 점수 증가
  },
  // 예시 문항 61 (M/B 차원) - 수정됨: 'HM' -> 'MB', 'H' -> 'M'
  {
    id: 61,
    text_ko: "중요한 자리를 맡는 것에 부담보다 의욕이 앞선다.",
    text_en: "I feel more motivated than burdened when taking on important roles.",
    scoring: [{ dichotomy: 'MB', pole: 'M', polarity: 'positive' }] // 답변 점수가 높을수록 M 성향 점수 증가 (이전 H)
  },
  // 예시 문항 62 (O/U 차원)
  {
    id: 62,
    text_ko: "고집이 센 편이라는 말을 종종 듣는다.",
    text_en: "I often hear that I am stubborn.",
    scoring: [{ dichotomy: 'OU', pole: 'U', polarity: 'positive' }] // 답변 점수가 높을수록 U 성향 점수 증가
  },
  // 예시 문항 63 (K/R 차원)
  {
    id: 63,
    text_ko: "대화 하다 보면 시간 가는 줄 모른다.",
    text_en: "I often lose track of time while talking.",
    scoring: [{ dichotomy: 'KR', pole: 'K', polarity: 'positive' }] // 답변 점수가 높을수록 K 성향 점수 증가
  },
  // 예시 문항 64 (A/Y 차원)
  {
    id: 64,
    text_ko: "내가 있으면 주변 분위기가 달라지는 걸 느낀다.",
    text_en: "I feel that the atmosphere around me changes when I am present.",
    scoring: [{ dichotomy: 'AY', pole: 'A', polarity: 'positive' }] // 답변 점수가 높을수록 A 성향 점수 증가
  },
  // 예시 문항 65 (E/I 차원)
  {
    id: 65,
    text_ko: "관계 형성에 신중한 편이다.",
    text_en: "I am cautious about forming relationships.",
    scoring: [{ dichotomy: 'EI', pole: 'I', polarity: 'positive' }] // 답변 점수가 높을수록 I 성향 점수 증가
  },
  // 예시 문항 66 (S/N 차원)
  {
    id: 66,
    text_ko: "만약에 말야 식의 말투를 많이 사용한다.",
    text_en: "I often use phrases like 'what if'.",
    scoring: [{ dichotomy: 'SN', pole: 'N', polarity: 'positive' }] // 답변 점수가 높을수록 N 성향 점수 증가
  },
  // 예시 문항 67 (T/F 차원)
  {
    id: 67,
    text_ko: "결정에는 개인 감정을 배제해야 한다.",
    text_en: "Decisions should exclude personal feelings.",
    scoring: [{ dichotomy: 'TF', pole: 'T', polarity: 'positive' }] // 답변 점수가 높을수록 T 성향 점수 증가
  },
  // 예시 문항 68 (J/P 차원)
  {
    id: 68,
    text_ko: "책장 안의 책이 한권 삐져나와 있으면 엄청 거슬린다.",
    text_en: "If a book is sticking out of the bookshelf, it bothers me a lot.",
    scoring: [{ dichotomy: 'JP', pole: 'J', polarity: 'positive' }] // 답변 점수가 높을수록 J 성향 점수 증가
  },
  // 예시 문항 69 (M/B 차원) - 수정됨: 'HM' -> 'MB'
  {
    id: 69,
    text_ko: "사람들을 이끄는 역할에 즐거움을 느낀다.",
    text_en: "I enjoy leading people.",
    scoring: [{ dichotomy: 'MB', pole: 'M', polarity: 'positive' }] // 답변 점수가 높을수록 M 성향 점수 증가 (이전 H)
  },
  // 예시 문항 70 (O/U 차원)
  {
    id: 70,
    text_ko: "생각이 다르면 대화를 피하기보다 풀려고 한다.",
    text_en: "I try to resolve differences in thought rather than avoiding conversation.",
    scoring: [{ dichotomy: 'OU', pole: 'O', polarity: 'positive' }] // 답변 점수가 높을수록 O 성향 점수 증가
  },
  // 예시 문항 71 (K/R 차원)
  {
    id: 71,
    text_ko: "사람들과 이야기하는게 피곤하게 느껴진다.",
    text_en: "I find it tiring to talk to people.",
    scoring: [{ dichotomy: 'KR', pole: 'R', polarity: 'positive' }] // 답변 점수가 높을수록 R 성향 점수 증가
  },
  // 예시 문항 72 (A/Y 차원)
  {
    id: 72,
    text_ko: "나를 매력적으로 포장하는데 익숙하지 않다.",
    text_en: "I am not used to packaging myself attractively.",
    scoring: [{ dichotomy: 'AY', pole: 'Y', polarity: 'positive' }] // 답변 점수가 높을수록 Y 성향 점수 증가
  },
  // 예시 문항 73 (E/I 차원)
  {
    id: 73,
    text_ko: "긴 시간 대화를 해도 지치지 않는다.",
    text_en: "I don't get tired even after a long conversation.",
    scoring: [{ dichotomy: 'EI', pole: 'E', polarity: 'positive' }] // 답변 점수가 높을수록 E 성향 점수 증가
  },
  // 예시 문항 74 (S/N 차원)
  {
    id: 74,
    text_ko: "핵심 개념만 알면 전체를 유추할 수 있다.",
    text_en: "I can infer the whole from the core concept.",
    scoring: [{ dichotomy: 'SN', pole: 'N', polarity: 'positive' }] // 답변 점수가 높을수록 N 성향 점수 증가
  },
  // 예시 문항 75 (T/F 차원)
  {
    id: 75,
    text_ko: "조언은 솔직해야 한다.",
    text_en: "Advice should be honest.",
    scoring: [{ dichotomy: 'TF', pole: 'T', polarity: 'positive' }] // 답변 점수가 높을수록 T 성향 점수 증가
  },
  // 예시 문항 76 (J/P 차원)
  {
    id: 76,
    text_ko: "여러가지 일을 동시에 처리하면 집중이 안된다.",
    text_en: "I can't concentrate when handling multiple tasks at once.",
    scoring: [{ dichotomy: 'JP', pole: 'J', polarity: 'positive' }] // 답변 점수가 높을수록 J 성향 점수 증가
  },
  // 예시 문항 77 (M/B 차원) - 수정됨: 'HM' -> 'MB'
  {
    id: 77,
    text_ko: "내게 주어진 역할만 충실히 해도 충분하다고 생각한다.",
    text_en: "I think it's enough to just fulfill my given role.",
    scoring: [{ dichotomy: 'MB', pole: 'B', polarity: 'positive' }] // 답변 점수가 높을수록 B 성향 점수 증가
  },
  // 예시 문항 78 (O/U 차원)
  {
    id: 78,
    text_ko: "나는 평소 말투가 진지하다는 말을 자주 듣는다.",
    text_en: "I often hear that my usual tone is serious.",
    scoring: [{ dichotomy: 'OU', pole: 'U', polarity: 'positive' }] // 답변 점수가 높을수록 U 성향 점수 증가
  },
  // 예시 문항 79 (K/R 차원)
  {
    id: 79,
    text_ko: "대화할 때 있는 그대로의 나를 드러내는 편이다.",
    text_en: "I tend to reveal my true self in conversations.",
    scoring: [{ dichotomy: 'KR', pole: 'K', polarity: 'positive' }] // 답변 점수가 높을수록 K 성향 점수 증가
  },
  // 예시 문항 80 (A/Y 차원)
  {
    id: 80,
    text_ko: "주목받으려는 행동은 오히려 나를 어색하게 만든다.",
    text_en: "I feel awkward when I try to attract attention.",
    scoring: [{ dichotomy: 'AY', pole: 'Y', polarity: 'positive' }] // 답변 점수가 높을수록 Y 성향 점수 증가
  },
  // 예시 문항 81 (E/I 차원)
  {
    id: 81,
    text_ko: "자신의 모습을 쉽게 드러내지 않는다.",
    text_en: "I don't easily reveal my true self.",
    scoring: [{ dichotomy: 'EI', pole: 'I', polarity: 'positive' }] // 답변 점수가 높을수록 I 성향 점수 증가
  },
  // 예시 문항 82 (S/N 차원)
  {
    id: 82,
    text_ko: "직감적으로 떠오르는 아이디어를 신뢰한다.",
    text_en: "I trust my intuitively generated ideas.",
    scoring: [{ dichotomy: 'SN', pole: 'N', polarity: 'positive' }] // 답변 점수가 높을수록 N 성향 점수 증가
  },
  // 예시 문항 83 (T/F 차원)
  {
    id: 83,
    text_ko: "지나친 냉정함은 상처를 줄 수 있다.",
    text_en: "Excessive coldness can hurt others.",
    scoring: [{ dichotomy: 'TF', pole: 'F', polarity: 'positive' }] // 답변 점수가 높을수록 F 성향 점수 증가
  },
  // 예시 문항 84 (J/P 차원)
  {
    id: 84,
    text_ko: "내 방은 늘 지저분하다.",
    text_en: "My room is always messy.",
    scoring: [{ dichotomy: 'JP', pole: 'P', polarity: 'positive' }] // 답변 점수가 높을수록 P 성향 점수 증가
  },
  // 예시 문항 85 (M/B 차원) - 수정됨: 'HM' -> 'MB'
  {
    id: 85,
    text_ko: "나보다 더 잘할 수 있는 사람이 있다면 양보할 수 있다.",
    text_en: "I can yield to someone who can do better than me.",
    scoring: [{ dichotomy: 'MB', pole: 'B', polarity: 'positive' }] // 답변 점수가 높을수록 B 성향 점수 증가 (이전 H)
  },
  // 예시 문항 86 (O/U 차원)
  {
    id: 86,
    text_ko: "대화에 깊이가 없으면 시간 낭비처럼 느껴진다.",
    text_en: "I feel like I'm wasting time if the conversation lacks depth.",
    scoring: [{ dichotomy: 'OU', pole: 'U', polarity: 'positive' }] // 답변 점수가 높을수록 U 성향 점수 증가
  },
  // 예시 문항 87 (K/R 차원)
  {
    id: 87,
    text_ko: "내 말투나 행동은 과하지 않고 편안하다는 평가를 받는다.",
    text_en: "My tone and behavior are evaluated as comfortable and not excessive.",
    scoring: [{ dichotomy: 'KR', pole: 'K', polarity: 'positive' }] // 답변 점수가 높을수록 K 성향 점수 증가
  },
  // 예시 문항 88 (A/Y 차원)
  {
    id: 88,
    text_ko: "나만의 무기나 매력이 딱히 떠오르지 않는다.",
    text_en: "I can't think of any unique weapons or charms I have.",
    scoring: [{ dichotomy: 'AY', pole: 'Y', polarity: 'positive' }] // 답변 점수가 높을수록 Y 성향 점수 증가
  },
  // 예시 문항 89 (E/I 차원)
  {
    id: 89,
    text_ko: "조용한 환경에서 마음이 안정된다.",
    text_en: "I feel at ease in a quiet environment.",
    scoring: [{ dichotomy: 'EI', pole: 'I', polarity: 'positive' }] // 답변 점수가 높을수록 I 성향 점수 증가
  },
  // 예시 문항 90 (S/N 차원)
  {
    id: 90,
    text_ko: "명확하고 구체적인 목표를 선호한다.",
    text_en: "I prefer clear and specific goals.",
    scoring: [{ dichotomy: 'SN', pole: 'S', polarity: 'positive' }] // 답변 점수가 높을수록 S 성향 점수 증가
  },
  // 예시 문항 91 (T/F 차원)
  {
    id: 91,
    text_ko: "잘못된 것은 명확히 지적해야 한다.",
    text_en: "Wrong things should be clearly pointed out.",
    scoring: [{ dichotomy: 'TF', pole: 'T', polarity: 'positive' }] // 답변 점수가 높을수록 T 성향 점수 증가
  },
  // 예시 문항 92 (J/P 차원)
  {
    id: 92,
    text_ko: "삶의 예측 불가능함이 스트레스보다는 자극을 준다.",
    text_en: "The unpredictability of life gives me stimulation rather than stress.",
    scoring: [{ dichotomy: 'JP', pole: 'P', polarity: 'positive' }] // 답변 점수가 높을수록 P 성향 점수 증가
  },
  // 예시 문항 93 (M/B 차원) - 수정됨: 'HM' -> 'MB'
  {
    id: 93,
    text_ko: "나는 일이 주어지기를 기다리기보다 만들어간다.",
    text_en: "I create opportunities rather than waiting for tasks to be given.",
    scoring: [{ dichotomy: 'MB', pole: 'M', polarity: 'positive' }] // 답변 점수가 높을수록 M 성향 점수 증가 (이전 H)
  },
  // 예시 문항 94 (O/U 차원)
  {
    id: 94,
    text_ko: "내가 틀렸을 때 가볍게 웃으며 '내가 또 그랬네~' 할 수 있다.",
    text_en: "I can lightly laugh and say 'I did it again~' when I'm wrong.",
    scoring: [{ dichotomy: 'OU', pole: 'O', polarity: 'positive' }] // 답변 점수가 높을수록 O 성향 점수 증가
  },
  // 예시 문항 95 (K/R 차원)
  {
    id: 95,
    text_ko: "누군가의 이야기에 즉각적으로 반응해준다.",
    text_en: "I respond immediately to someone's story.",
    scoring: [{ dichotomy: 'KR', pole: 'K', polarity: 'positive' }] // 답변 점수가 높을수록 K 성향 점수 증가
  },
  // 예시 문항 96 (A/Y 차원)
  {
    id: 96,
    text_ko: "내가 있어도 없는 것 같은 분위기를 느낀 적 있다.",
    text_en: "I have felt a presence that seems to be absent even when I am there.",
    scoring: [{ dichotomy: 'AY', pole: 'Y', polarity: 'positive' }] // 답변 점수가 높을수록 Y 성향 점수 증가
  },
  // 예시 문항 97 (E/I 차원)
  {
    id: 97,
    text_ko: "타인과의 교류는 일상의 중요한 부분이다.",
    text_en: "Interaction with others is an important part of my daily life.",
    scoring: [{ dichotomy: 'EI', pole: 'E', polarity: 'positive' }] // 답변 점수가 높을수록 E 성향 점수 증가
  },
  // 예시 문항 98 (S/N 차원)
  {
    id: 98,
    text_ko: "기존 체계가 아닌 새로운 시도를 원한다.",
    text_en: "I want to try new things rather than existing systems.",
    scoring: [{ dichotomy: 'SN', pole: 'N', polarity: 'positive' }] // 답변 점수가 높을수록 N 성향 점수 증가
  },
  // 예시 문항 99 (T/F 차원)
  {
    id: 99,
    text_ko: "남의 이야기에 공감을 잘하는 편이다.",
    text_en: "I tend to empathize well with others' stories.",
    scoring: [{ dichotomy: 'TF', pole: 'F', polarity: 'positive' }] // 답변 점수가 높을수록 F 성향 점수 증가
  },
  // 예시 문항 100 (J/P 차원)
  {
    id: 100,
    text_ko: "진행되는 흐름을 보고 상황에 따라 일을 결정한다.",
    text_en: "I decide on tasks based on the flow of the situation.",
    scoring: [{ dichotomy: 'JP', pole: 'P', polarity: 'positive' }] // 답변 점수가 높을수록 P 성향 점수 증가
  },
  // 예시 문항 101 (M/B 차원) - 수정됨: 'HM' -> 'MB'
  {
    id: 101,
    text_ko: "다른 사람의 지시에 따라 일하는 것이 마음이 편하다.",
    text_en: "I feel comfortable working under someone else's direction.",
    scoring: [{ dichotomy: 'MB', pole: 'B', polarity: 'positive' }] // 답변 점수가 높을수록 B 성향 점수 증가 (이전 H)
  },
  // 예시 문항 102 (O/U 차원)
  {
    id: 102,
    text_ko: "상황이 틀어져도 웃으며 받아들이는 편이다.",
    text_en: "I tend to accept situations with a smile even if they go wrong.",
    scoring: [{ dichotomy: 'OU', pole: 'O', polarity: 'positive' }] // 답변 점수가 높을수록 O 성향 점수 증가
  },
  // 예시 문항 103 (K/R 차원)
  {
    id: 103,
    text_ko: "대화를 하다 보면 상대에게 몰입하게 된다.",
    text_en: "I get immersed in the other person during a conversation.",
    scoring: [{ dichotomy: 'KR', pole: 'K', polarity: 'positive' }] // 답변 점수가 높을수록 K 성향 점수 증가
  },
  // 예시 문항 104 (A/Y 차원)
  {
    id: 104,
    text_ko: "나의 위치나 태도는 당당하다는 말을 들을 수 있다.",
    text_en: "I can hear that my position or attitude is confident.",
    scoring: [{ dichotomy: 'AY', pole: 'A', polarity: 'positive' }] // 답변 점수가 높을수록 A 성향 점수 증가
  },
  // 예시 문항 105 (E/I 차원)
  {
    id: 105,
    text_ko: "사교성은 나의 강점이다.",
    text_en: "Sociability is my strength.",
    scoring: [{ dichotomy: 'EI', pole: 'E', polarity: 'positive' }] // 답변 점수가 높을수록 E 성향 점수 증가
  },
  // 예시 문항 106 (S/N 차원)
  {
    id: 106,
    text_ko: "의미와 상징을 담아 전달하려 한다.",
    text_en: "I try to convey meaning and symbolism.",
    scoring: [{ dichotomy: 'SN', pole: 'N', polarity: 'positive' }] // 답변 점수가 높을수록 N 성향 점수 증가
  },
  // 예시 문항 107 (T/F 차원)
  {
    id: 107,
    text_ko: "직설적인 표현이 더 낫다.",
    text_en: "Direct expressions are better.",
    scoring: [{ dichotomy: 'TF', pole: 'T', polarity: 'positive' }] // 답변 점수가 높을수록 T 성향 점수 증가
  },
  // 예시 문항 108 (J/P 차원)
  {
    id: 108,
    text_ko: "명확한 기준보다 유연함을 중시한다.",
    text_en: "I value flexibility over clear standards.",
    scoring: [{ dichotomy: 'JP', pole: 'P', polarity: 'positive' }] // 답변 점수가 높을수록 P 성향 점수 증가
  },
  // 예시 문항 109 (M/B 차원)
  {
    id: 109,
    text_ko: "새로운 일을 시도할 때 두려움보다 기대가 앞선다다.",
    text_en: "I feel more excited than scared when trying something new.",
    scoring: [{ dichotomy: 'MB', pole: 'M', polarity: 'positive' }] // 답변 점수가 높을수록 M 성향 점수 증가
  },
  // 예시 문항 110 (O/U 차원)
  {
    id: 110,
    text_ko: "실수한 사람을 편하게 해주려고 일부러 웃으며 반응한다.",
    text_en: "I intentionally respond with a smile to make the person who made a mistake feel comfortable.",
    scoring: [{ dichotomy: 'OU', pole: 'O', polarity: 'positive' }] // 답변 점수가 높을수록 O 성향 점수 증가
  },
  // 예시 문항 111 (K/R 차원)
  {
    id: 111,
    text_ko: "상대가 무슨 말을 할지 미리 짐작하며 듣는다.",
    text_en: "I guess what the other person will say in advance while listening.",
    scoring: [{ dichotomy: 'KR', pole: 'K', polarity: 'positive' }] // 답변 점수가 높을수록 K 성향 점수 증가
  },
  // 예시 문항 112 (A/Y 차원)
  {
    id: 112,
    text_ko: "사회적 상황에서 긴장하지 않고 자신감 있게 행동한다.",
    text_en: "I act confidently in social situations without feeling nervous.",
    scoring: [{ dichotomy: 'AY', pole: 'A', polarity: 'positive' }] // 답변 점수가 높을수록 A 성향 점수 증가
  },
  // 예시 문항 113 (E/I 차원)
  {
    id: 113,
    text_ko: "신중함은 나의 강점이다.",
    text_en: "Caution is my strength.",
    scoring: [{ dichotomy: 'EI', pole: 'I', polarity: 'positive' }] // 답변 점수가 높을수록 I 성향 점수 증가
  },
  // 예시 문항 114 (S/N 차원)
  {
    id: 114,
    text_ko: "실제성과 실현 가능성을 중요하게 생각한다.",
    text_en: "I value practicality and feasibility.",
    scoring: [{ dichotomy: 'SN', pole: 'S', polarity: 'positive' }] // 답변 점수가 높을수록 S 성향 점수 증가
  },
  // 예시 문항 115 (T/F 차원)
  {
    id: 115,
    text_ko: "우회적이고 부드러운 표현이 더 낫다.",
    text_en: "Indirect and soft expressions are better.",
    scoring: [{ dichotomy: 'TF', pole: 'F', polarity: 'positive' }] // 답변 점수가 높을수록 F 성향 점수 증가
  },
  // 예시 문항 116 (J/P 차원)
  {
    id: 116,
    text_ko: "여행갈 때 치밀한 계획보다 자유로운게 좋다.",
    text_en: "I prefer freedom over meticulous planning when traveling.",
    scoring: [{ dichotomy: 'JP', pole: 'P', polarity: 'positive' }] // 답변 점수가 높을수록 P 성향 점수 증가
  },
  // 예시 문항 117 (M/B 차원)
  {
    id: 117,
    text_ko: "실패 가능성이 있는 일은 쉽게 손대지 않는다.",
    text_en: "I don't easily take on tasks that have a risk of failure.",
    scoring: [{ dichotomy: 'MB', pole: 'B', polarity: 'positive' }] // 답변 점수가 높을수록 B 성향 점수 증가
  },
  // 예시 문항 118 (O/U 차원)
  {
    id: 118,
    text_ko: "내 태도 때문에 '무섭다'거나 '편하지 않다'는 말을 들어봤다.",
    text_en: "I have heard that my attitude is 'scary' or 'uncomfortable'.",
    scoring: [{ dichotomy: 'OU', pole: 'U', polarity: 'positive' }] // 답변 점수가 높을수록 U 성향 점수 증가
  },
  // 예시 문항 119 (K/R 차원)
  {
    id: 119,
    text_ko: "이야기를 주고받는 흐름에 몸을 맡기는 편이다.",
    text_en: "I tend to go with the flow of the conversation.",
    scoring: [{ dichotomy: 'KR', pole: 'K', polarity: 'positive' }] // 답변 점수가 높을수록 K 성향 점수 증가
  },
  // 예시 문항 120 (A/Y 차원)
  {
    id: 120,
    text_ko: "외모, 성격, 이미지 등 전반적으로 만족도가 높다.",
    text_en: "I am generally satisfied with my appearance, personality, and image.",
    scoring: [{ dichotomy: 'AY', pole: 'A', polarity: 'positive' }] // 답변 점수가 높을수록 A 성향 점수 증가
  },
  // 예시 문항 121 (E/I 차원)
  {
    id: 121,
    text_ko: "대화 중 생각이 발전하는 느낌이 든다.",
    text_en: "I feel that my thoughts develop during conversations.",
    scoring: [{ dichotomy: 'EI', pole: 'E', polarity: 'positive' }] // 답변 점수가 높을수록 E 성향 점수 증가
  },
  // 예시 문항 122 (S/N 차원)
  {
    id: 122,
    text_ko: "향후 발생할 일에 대한 예측이 중요하다.",
    text_en: "Predictions about future events are important.",
    scoring: [{ dichotomy: 'SN', pole: 'S', polarity: 'positive' }] // 답변 점수가 높을수록 S 성향 점수 증가
  },
  // 예시 문항 123 (T/F 차원)
  {
    id: 123,
    text_ko: "단호하게 의견을 표현한다.",
    text_en: "I express my opinions firmly.",
    scoring: [{ dichotomy: 'TF', pole: 'T', polarity: 'positive' }]
  },
  // 예시 문항 124 (J/P 차원)
  {
    id: 124,
    text_ko: "마감시간에 부랴부랴 마무리하는 경향이 있다.",
    text_en: "I tend to rush to finish before the deadline.",
    scoring: [{ dichotomy: 'JP', pole: 'P', polarity: 'positive' }] // 답변 점수가 높을수록 P 성향 점수 증가
  },
  // 예시 문항 125 (M/B 차원)
  {
    id: 125,
    text_ko: "팀이 잘되면 내가 눈에 띄지 않아도 괜찮다.",
    text_en: "If the team does well, it's okay if I don't stand out.",
    scoring: [{ dichotomy: 'MB', pole: 'B', polarity: 'positive' }] // 답변 점수가 높을수록 B 성향 점수 증가
  },
  // 예시 문항 126 (O/U 차원)
  {
    id: 126,
    text_ko: "사람들이 내게 장난치기 어려워하는걸 느낀다.",
    text_en: "I feel that people find it hard to joke with me.",
    scoring: [{ dichotomy: 'OU', pole: 'U', polarity: 'positive' }] // 답변 점수가 높을수록 U 성향 점수 증가
  },
  // 예시 문항 127 (K/R 차원)
  {
    id: 127,
    text_ko: "이야기 도중 어떤 말로 이어가야 할지 고민된다.",
    text_en: "I tend to empathize with the other person's feelings.",
    scoring: [{ dichotomy: 'KR', pole: 'R', polarity: 'positive' }] // 답변 점수가 높을수록 R 성향 점수 증가
  },
  // 예시 문항 128 (A/Y 차원)
  {
    id: 128,
    text_ko: "친구들 옆에 서면 나만 칙칙해 보이는 것 같다.",
    text_en: "I feel like I look dull when standing next to my friends.",
    scoring: [{ dichotomy: 'AY', pole: 'Y', polarity: 'positive' }] // 답변 점수가 높을수록 Y 성향 점수 증가
  },
  // 예시 문항 129 (E/I 차원)
  {
    id: 129,
    text_ko: "자신의 감정을 말로 풀어내는 것이 익숙하다.",
    text_en: "I am used to expressing my feelings in words.",
    scoring: [{ dichotomy: 'EI', pole: 'E', polarity: 'positive' }] // 답변 점수가 높을수록 E 성향 점수 증가
  },
  // 예시 문항 130 (S/N 차원)
  {
    id: 130,
    text_ko: "익숙한 것보다 새로움이 자극된다.",
    text_en: "I am more stimulated by new things than by familiar ones.",
    scoring: [{ dichotomy: 'SN', pole: 'N', polarity: 'positive' }] // 답변 점수가 높을수록 N 성향 점수 증가
  },
  // 예시 문항 131 (T/F 차원)
  {
    id: 131,
    text_ko: "정확함보다는 따뜻함이 신뢰의 바탕이다.",
    text_en: "Warmth is the basis of trust rather than accuracy.",
    scoring: [{ dichotomy: 'TF', pole: 'F', polarity: 'positive' }] // 답변 점수가 높을수록 F 성향 점수 증가
  },
  // 예시 문항 132 (J/P 차원)
  {
    id: 132,
    text_ko: "처음부터 끝까지 흐름을 예측해야 안심된다.",
    text_en: "I need to predict the flow from start to finish to feel at ease.",
    scoring: [{ dichotomy: 'JP', pole: 'J', polarity: 'positive' }] // 답변 점수가 높을수록 J 성향 점수 증가
  },
  // 예시 문항 133 (M/B 차원)
  {
    id: 133,
    text_ko: "내가 이끄는 것보다 누군가를 도우며 함께 가는게 좋다.",
    text_en: "I prefer to help someone and go together rather than lead.",
    scoring: [{ dichotomy: 'MB', pole: 'B', polarity: 'positive' }] // 답변 점수가 높을수록 B 성향 점수 증가
  },
  // 예시 문항 134 (O/U 차원)
  {
    id: 134,
    text_ko: ".속상한 일이 있어도 농담이나 웃음으로 풀어낸다",
    text_en: "I can resolve my frustrations with jokes or laughter.",
    scoring: [{ dichotomy: 'OU', pole: 'O', polarity: 'positive' }] // 답변 점수가 높을수록 O 성향 점수 증가
  },
  // 예시 문항 135 (K/R 차원)
  {
    id: 135,
    text_ko: "이야기를 듣긴 해도 내 차례가 되면 말이 안 나온다.",
    text_en: "I listen to the story, but I can't find the words when it's my turn.",
    scoring: [{ dichotomy: 'KR', pole: 'R', polarity: 'positive' }] // 답변 점수가 높을수록 R 성향 점수 증가
  },
  // 예시 문항 136 (A/Y 차원)
  {
    id: 136,
    text_ko: "나의 이미지 관리는 내 삶의 일부다.",
    text_en: "My image management is part of my life.",
    scoring: [{ dichotomy: 'AY', pole: 'A', polarity: 'positive' }] // 답변 점수가 높을수록 A 성향 점수 증가
  },
  // 예시 문항 137 (E/I 차원)
  {
    id: 137,
    text_ko: "다양한 모임을 주도하는 일이 즐겁다",
    text_en: "I enjoy leading various gatherings.",
    scoring: [{ dichotomy: 'EI', pole: 'E', polarity: 'positive' }] // 답변 점수가 높을수록 E 성향 점수 증가
  },
  // 예시 문항 138 (S/N 차원)
  {
    id: 138,
    text_ko: "말한 그대로 받아들이는 편이다",
    text_en: "I tend to take things literally.",
    scoring: [{ dichotomy: 'SN', pole: 'S', polarity: 'positive' }] // 답변 점수가 높을수록 S 성향 점수 증가
  },
  // 예시 문항 139 (T/F 차원)
  {
    id: 139,
    text_ko: "업무는 효율적으로 끝내는 것이 중요하다.",
    text_en: "Finishing tasks efficiently is important.",
    scoring: [{ dichotomy: 'TF', pole: 'T', polarity: 'positive' }] // 답변 점수가 높을수록 T 성향 점수 증가
  },
  // 예시 문항 140 (J/P 차원)
  {
    id: 140,
    text_ko: "일단 해보며 배우느 스타일이다",
    text_en: "I learn by trying things out.",
    scoring: [{ dichotomy: 'JP', pole: 'P', polarity: 'positive' }] // 답변 점수가 높을수록 P 성향 점수 증가
  },
  // 예시 문항 141 (M/B 차원)
  {
    id: 141,
    text_ko: "나는 어려운 상황이 오면 슬쩍 빠지는 편이다.",
    text_en: "I tend to slip away when a difficult situation arises.",
    scoring: [{ dichotomy: 'MB', pole: 'B', polarity: 'positive' }] // 답변 점수가 높을수록 B 성향 점수 증가
  },
  // 예시 문항 142 (O/U 차원)
  {
    id: 142,
    text_ko: "감정을 얼굴에 잘 드러내지 않으려 애쓴다.",
    text_en: "I try not to show my emotions on my face.",
    scoring: [{ dichotomy: 'OU', pole: 'U', polarity: 'positive' }] // 답변 점수가 높을수록 U 성향 점수 증가
  },
  // 예시 문항 143 (K/R 차원)
  {
    id: 143,
    text_ko: "감정표현이 연습한 듯 부자연스럽다는 얘기를 들은 적이 없다.",
    text_en: "I have never been told that my emotional expressions seem unnatural or rehearsed.",
    scoring: [{ dichotomy: 'KR', pole: 'R', polarity: 'positive' }] // 답변 점수가 높을수록 R 성향 점수 증가
  },
  // 예시 문항 144 (A/Y 차원)
  {
    id: 144,
    text_ko: "SNS나 사진속 내 모습에 만족하는 편이다.",
    text_en: "I like my appearance in SNS or photos.",
    scoring: [{ dichotomy: 'AY', pole: 'A', polarity: 'positive' }] // 답변 점수가 높을수록 A 성향 점수 증가
  },
  // 예시 문항 145 (E/I 차원)
  {
    id: 145,
    text_ko: "모임보다는 개인 시간 확보가 중요하다.",
    text_en: "Securing personal time is more important than gatherings.",
    scoring: [{ dichotomy: 'EI', pole: 'I', polarity: 'positive' }] // 답변 점수가 높을수록 I 성향 점수 증가
  },
  // 예시 문항 146 (S/N 차원)
  {
    id: 146,
    text_ko: "구체적인 경험이 없는 이론은 신뢰하지 않는다.",
    text_en: "I don't trust theories without concrete experiences.",
    scoring: [{ dichotomy: 'SN', pole: 'S', polarity: 'positive' }] // 답변 점수가 높을수록 S 성향 점수 증가
  },
  // 예시 문항 147 (T/F 차원)
  {
    id: 147,
    text_ko: "협력과 관계도 그만큼 중요하다.",
    text_en: "Collaboration and relationships are equally important.",
    scoring: [{ dichotomy: 'TF', pole: 'F', polarity: 'positive' }] // 답변 점수가 높을수록 F 성향 점수 증가
  },
  // 예시 문항 148 (J/P 차원)
  {
    id: 148,
    text_ko: "계획표를 짜고 실천하는 것을 좋아한다.",
    text_en: "I like to make and follow a schedule.",
    scoring: [{ dichotomy: 'JP', pole: 'J', polarity: 'positive' }] // 답변 점수가 높을수록 J 성향 점수 증가
  },
  // 예시 문항 149 (M/B 차원)
  {
    id: 149,
    text_ko: "내 말에 사람들이 자연스럽게 따르는 편이다",
    text_en: "People tend to naturally follow what I say.",
    scoring: [{ dichotomy: 'MB', pole: 'M', polarity: 'positive' }] // 답변 점수가 높을수록 M 성향 점수 증가
  },
  // 예시 문항 150 (O/U 차원)
  {
    id: 150,
    text_ko: "내가 농담을 잘 못 받아들이는 편이라는 걸 알고 있다.",
    text_en: "I know that I tend to take jokes poorly.",
    scoring: [{ dichotomy: 'OU', pole: 'U', polarity: 'positive' }] // 답변 점수가 높을수록 U 성향 점수 증가
  },
  // 예시 문항 151 (K/R 차원)
  {
    id: 151,
    text_ko: "말하는 동안 내 표정이나 목소리가 부자연스럽게 느껴진다.",
    text_en: "I feel that my expression or voice is unnatural while speaking.",
    scoring: [{ dichotomy: 'KR', pole: 'R', polarity: 'positive' }] // 답변 점수가 높을수록 R 성향 점수 증가
  },
  // 예시 문항 152 (A/Y 차원)
  {
    id: 152,
    text_ko: "타인의 관심을 즐기는 편이다.",
    text_en: "I enjoy being the center of attention.",
    scoring: [{ dichotomy: 'AY', pole: 'A', polarity: 'positive' }] // 답변 점수가 높을수록 A 성향 점수 증가
  },
  // 예시 문항 153 (E/I 차원)
  {
    id: 153,
    text_ko: "기존 관계를 깊게 유지하는 것이 중요하다",
    text_en: "Maintaining existing relationships is important.",
    scoring: [{ dichotomy: 'EI', pole: 'I', polarity: 'positive' }] // 답변 점수가 높을수록 I 성향 점수 증가
  },
  // 예시 문항 154 (S/N 차원)
  {
    id: 154,
    text_ko: "일상에서 반복되는 규칙이 안정감을 준다.",
    text_en: "Daily routines and rules give me a sense of stability.",
    scoring: [{ dichotomy: 'SN', pole: 'S', polarity: 'positive' }] // 답변 점수가 높을수록 S 성향 점수 증가
  },
  // 예시 문항 155 (T/F 차원)
  {
    id: 155,
    text_ko: "공정함은 감정보다 우선이다.",
    text_en: "Fairness comes before emotions.",
    scoring: [{ dichotomy: 'TF', pole: 'T', polarity: 'positive' }] // 답변 점수가 높을수록 T 성향 점수 증가
  },
  // 예시 문항 156 (J/P 차원)
  {
    id: 156,
    text_ko: "열린 결말보다 명확한 결말을 선호한다.",
    text_en: "I prefer a clear ending over an open ending.",
    scoring: [{ dichotomy: 'JP', pole: 'J', polarity: 'positive' }] // 답변 점수가 높을수록 J 성향 점수 증가
  },
  // 예시 문항 157 (M/B 차원)
  {
    id: 157,
    text_ko: "리더 역할을 제안 받아도 거절한 적이 있다.",
    text_en: "I have refused a suggestion to take on a leadership role.",
    scoring: [{ dichotomy: 'MB', pole: 'B', polarity: 'positive' }] // 답변 점수가 높을수록 B 성향 점수 증가
  },
  // 예시 문항 158 (O/U 차원)
  {
    id: 158,
    text_ko: "나와 있으면 사람들이 조심스러워지는 게 느껴진다.",
    text_en: "I feel that people become cautious around me.",
    scoring: [{ dichotomy: 'OU', pole: 'U', polarity: 'positive' }] // 답변 점수가 높을수록 U 성향 점수 증가
  },
  // 예시 문항 159 (K/R 차원)
  {
    id: 159,
    text_ko: "사람들이 나와 이야기하는 걸 편하다고 말한다.",
    text_en: "People say they feel comfortable talking to me.",
    scoring: [{ dichotomy: 'KR', pole: 'K', polarity: 'positive' }] // 답변 점수가 높을수록 K 성향 점수 증가
  },
  // 예시 문항 160 (A/Y 차원)
  {
    id: 160,
    text_ko: "사진 찍히는 것이 불편하거나 어색하다",
    text_en: "I feel uncomfortable or awkward being photographed.",
    scoring: [{ dichotomy: 'AY', pole: 'Y', polarity: 'positive' }] // 답변 점수가 높을수록 Y 성향 점수 증가
  }
];