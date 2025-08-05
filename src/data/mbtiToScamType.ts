export type ScamTypeKey =
  | "감정공감형"
  | "절차맹신형"
  | "직진반응형"
  | "실험과잉형"
  | "신뢰우선형"
  | "회피수동형"
  | "정보과신형"
  | "선한낙관형";

export const mbtiToScamType: Record<string, ScamTypeKey> = {
  ISFJ: "절차맹신형",
  ISTJ: "절차맹신형",
  ESTJ: "절차맹신형",
  ESFJ: "신뢰우선형",

  INFP: "감정공감형",
  ENFP: "감정공감형",
  ISFP: "선한낙관형",
  ESFP: "직진반응형",

  ENFJ: "신뢰우선형",
  INFJ: "회피수동형",
  INTJ: "정보과신형",
  INTP: "정보과신형",

  ENTP: "실험과잉형",
  ESTP: "직진반응형",
  ISTP: "정보과신형",
  ENTJ: "절차맹신형",
};
