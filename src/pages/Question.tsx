import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { motion, AnimatePresence } from "framer-motion";

const Question: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();
  const [isEnding, setIsEnding] = useState(false);

  const handleClick = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      // 전환 애니메이션 시도
      setIsEnding(true);
      setTimeout(() => {
        navigate("/result", { state: { answers: newAnswers } });
      }, 500); // 0.5초 후 전환
    }
  };

  const q = questions[current];

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <AnimatePresence mode="wait">
        {!isEnding && (
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            style={{
              width: "100%",
              maxWidth: "700px",
            }}
          >
            {/* ✅ 진행 상태는 반드시 motion.div 내부에 있어야 함 */}
            <div
              style={{ marginBottom: "24px", fontSize: "16px", color: "#555" }}
            >
              <strong>
                {current + 1} / {questions.length} 문항
              </strong>
            </div>

            {/* 질문 및 선택지 영역도 여기 내부에 들어가야 함 */}
            <div
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "36px",
                maxWidth: "700px",
                lineHeight: "1.6",
              }}
            >
              🤔 {q.question}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100%",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              {q.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleClick(option.type)}
                  style={{
                    padding: "14px 20px",
                    fontSize: "16px",
                    backgroundColor: "#ffffff",
                    border: "2px solid #FF6B6B",
                    color: "#FF6B6B",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#FF6B6B";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#FF6B6B";
                  }}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Question;
