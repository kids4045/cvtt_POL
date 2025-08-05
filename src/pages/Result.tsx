import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mbtiToScamType } from "../data/mbtiToScamType";
import { scamTypeProfiles } from "../data/scamTypeProfiles";
import { motion } from "framer-motion";

// ✅ Share.tsx와 동일한 배경색
const backgroundColors = {
  감정공감형: "#fce4ec",
  절차맹신형: "#e0f7fa",
  직진반응형: "#fff3e0",
  실험과잉형: "#f3e5f5",
  신뢰우선형: "#ede7f6",
  회피수동형: "#e8f5e9",
  정보과신형: "#e0f2f1",
  선한낙관형: "#f9fbe7",
} as const;

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers: string[] = location.state?.answers || [];
  const [mbti, setMbti] = useState("");

  useEffect(() => {
    const result = calculateMBTI(answers);
    setMbti(result);
  }, [answers]);

  const calculateMBTI = (answers: string[]): string => {
    const counts: Record<string, number> = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };
    answers.forEach((type) => counts[type]++);
    return (
      (counts.E >= counts.I ? "E" : "I") +
      (counts.S >= counts.N ? "S" : "N") +
      (counts.T >= counts.F ? "T" : "F") +
      (counts.J >= counts.P ? "J" : "P")
    );
  };

  const scamType = mbtiToScamType[mbti];
  const profile = scamTypeProfiles[scamType];
  const backgroundColor = backgroundColors[scamType] || "#FFF5E4";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: backgroundColor, // ✅ Share.tsx와 일치
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          padding: "40px 30px",
          maxWidth: "650px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{ fontSize: "24px", marginBottom: "12px", color: "#FF6B6B" }}
        >
          당신의 범죄 취약 MBTI는 <strong>{mbti}</strong>!
        </h2>

        <h3 style={{ fontSize: "20px", marginBottom: "24px" }}>
          사기 성향 유형: <strong>{scamType}</strong>
        </h3>

        {profile ? (
          <>
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>
              {profile.title}
            </h3>
            <p
              style={{ color: "#444", lineHeight: "1.6", marginBottom: "20px" }}
            >
              {profile.summary}
            </p>

            <div style={{ textAlign: "left", marginBottom: "20px" }}>
              <h4>🧠 당신의 반응 경향</h4>
              <ul>
                {profile.reactions.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>

              <h4 style={{ marginTop: "16px" }}>🚨 취약 지점</h4>
              <ul>
                {profile.vulnerabilities.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>

              <p style={{ marginTop: "16px" }}>
                <strong>📊 위험도: </strong>
                {profile.vulnerabilityLevel}
              </p>
            </div>

            {/* ✅ slogan 강조: 볼드체 적용 */}
            <blockquote
              style={{
                background: "#FFF2F2",
                padding: "16px",
                borderRadius: "12px",
                fontStyle: "italic",
                color: "#E74C3C",
                fontWeight: "bold",
              }}
            >
              "{profile.slogan}"
            </blockquote>

            <button
              style={{
                marginTop: "30px",
                padding: "12px 24px",
                fontSize: "16px",
                backgroundColor: "#FF6B6B",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "0.2s",
              }}
              onClick={() =>
                navigate(
                  `/share?mbti=${mbti}&scamType=${encodeURIComponent(scamType)}`
                )
              }
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#e74c3c";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#FF6B6B";
              }}
            >
              🔗 결과 공유하러 가기
            </button>
          </>
        ) : (
          <p>결과를 분석할 수 없습니다.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Result;
