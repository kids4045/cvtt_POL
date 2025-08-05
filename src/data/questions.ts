// src/data/questions.ts

export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    type: "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "검찰이라며 문자로 출석요구가 온다면?",
    options: [
      { text: "무서워서 바로 전화를 건다", type: "E" },
      { text: "문자를 무시하고 검색부터 해본다", type: "I" },
      { text: "지인에게 물어본다", type: "S" },
      { text: "경찰청에 직접 확인한다", type: "T" },
    ],
  },
  {
    id: 2,
    question: "택배 배송 오류로 링크 클릭을 유도한다면?",
    options: [
      { text: "내 물건일 수 있으니 일단 눌러본다", type: "E" },
      { text: "배송 내역을 앱에서 먼저 확인한다", type: "I" },
      { text: "링크 주소를 자세히 분석한다", type: "N" },
      { text: "택배 기사에게 직접 연락해본다", type: "S" },
    ],
  },
  {
    id: 3,
    question: "SNS DM으로 이벤트 당첨을 알려오고 수수료를 요구한다면?",
    options: [
      { text: "일단 축하하고 수수료를 보낸다", type: "F" },
      { text: "이벤트를 검색해서 진짜인지 확인한다", type: "T" },
      { text: "무작위 DM은 절대 열지 않는다", type: "I" },
      { text: "링크를 눌러서 확인한다", type: "E" },
    ],
  },
  {
    id: 4,
    question: "지인을 사칭한 메시지가 도착했다면?",
    options: [
      { text: "지인이니까 도와줘야지", type: "F" },
      { text: "의심스러우니 전화로 확인한다", type: "T" },
      { text: "내용을 캡처해서 가족 단톡방에 올린다", type: "E" },
      { text: "절대 응답하지 않는다", type: "I" },
    ],
  },
  {
    id: 5,
    question: "금융기관을 사칭해 OTP 번호를 요구한다면?",
    options: [
      { text: "은행이니 믿고 준다", type: "F" },
      { text: "정상적인 절차가 아니라고 판단한다", type: "T" },
      { text: "일단 물어본다", type: "E" },
      { text: "OTP 자체가 뭔지 잘 모른다", type: "P" },
    ],
  },
  {
    id: 6,
    question: "취업 사기 의심 사이트에서 정보를 요구한다면?",
    options: [
      { text: "경쟁률 높을까봐 빨리 제출한다", type: "P" },
      { text: "사이트 주소와 기업명부터 확인한다", type: "J" },
      { text: "지원 전에 다른 후기들을 찾아본다", type: "N" },
      { text: "의심되는 순간 바로 브라우저를 닫는다", type: "T" },
    ],
  },
  {
    id: 7,
    question: "가족이 다급하게 전화해 돈을 요구한다면?",
    options: [
      { text: "상황이 급하니 먼저 송금한다", type: "F" },
      { text: "다른 가족에게 연락해 확인한다", type: "T" },
      { text: "돈을 주기 전에 누구인지 물어본다", type: "J" },
      { text: "긴장해서 우왕좌왕한다", type: "P" },
    ],
  },
  {
    id: 8,
    question: "중고거래 시 선입금을 요구하는 판매자라면?",
    options: [
      { text: "일단 입금하고 확인한다", type: "F" },
      { text: "직거래만 한다고 말한다", type: "T" },
      { text: "다른 플랫폼에서 후기 검색", type: "N" },
      { text: "가격이 너무 싸면 무조건 의심한다", type: "J" },
    ],
  },
  {
    id: 9,
    question: "학교 단체 채팅방에 출처 불명 링크가 올라온다면?",
    options: [
      { text: "재미있어 보여서 클릭한다", type: "E" },
      { text: "친구에게 먼저 물어본다", type: "I" },
      { text: "링크 앞부분 주소를 분석한다", type: "N" },
      { text: "관리자에게 바로 신고한다", type: "J" },
    ],
  },
  {
    id: 10,
    question: "다단계 느낌이 나는 재택근무 제안을 받는다면?",
    options: [
      { text: "설명 들으러 가본다", type: "E" },
      { text: "지나치게 좋아보이면 일단 의심", type: "N" },
      { text: "지인 추천이라면 고민한다", type: "F" },
      { text: "유튜브에서 사례를 찾아본다", type: "T" },
    ],
  },
  {
    id: 11,
    question: "광고 문자에 적힌 '무료 체험' 링크가 온다면?",
    options: [
      { text: "일단 눌러본다", type: "P" },
      { text: "광고 차단 설정부터 한다", type: "J" },
      { text: "무료라면 한번 해볼까?", type: "F" },
      { text: "광고 전화번호를 블랙리스트에 등록", type: "T" },
    ],
  },
  {
    id: 12,
    question: "비트코인 수익 보장 메시지를 받는다면?",
    options: [
      { text: "수익률이 높으면 솔깃하다", type: "P" },
      { text: "투자라는 단어에 알레르기 반응", type: "J" },
      { text: "지인의 투자 실패담이 떠오른다", type: "F" },
      { text: "내용을 보고 금융 사기임을 직감", type: "T" },
    ],
  },
  {
    id: 13,
    question: "AI로 지인을 위조한 영상이 퍼졌다면?",
    options: [
      { text: "진짜인지 헷갈려서 친구에게 묻는다", type: "F" },
      { text: "딥페이크 감별 방법을 검색한다", type: "T" },
      { text: "영상 속 디테일을 분석한다", type: "N" },
      { text: "그럴싸해 보여도 일단 의심한다", type: "J" },
    ],
  },
  {
    id: 14,
    question: "불법 도박 링크가 게임처럼 도는 채팅방이라면?",
    options: [
      { text: "심심하니까 눌러본다", type: "P" },
      { text: "광고 유형이라고 판단하고 무시", type: "J" },
      { text: "어디까지가 불법인지 검색해본다", type: "N" },
      { text: "운영자를 신고한다", type: "T" },
    ],
  },
  {
    id: 15,
    question: "이벤트 당첨이라며 개인정보를 요구한다면?",
    options: [
      { text: "이벤트니 이름 정도는 알려준다", type: "F" },
      { text: "공식 계정인지 먼저 확인한다", type: "T" },
      { text: "이벤트 댓글을 확인한다", type: "N" },
      { text: "모르는 번호는 응답하지 않는다", type: "I" },
    ],
  },
  {
    id: 16,
    question: "SNS 광고로 본 고수익 부업 제안이 DM으로 온다면?",
    options: [
      { text: "시간 남는데 해볼까?", type: "P" },
      { text: "그럴싸한 제안은 일단 의심한다", type: "J" },
      { text: "지인의 조언을 구한다", type: "F" },
      { text: "검색해서 후기와 피해 사례를 찾는다", type: "T" },
    ],
  },
];
