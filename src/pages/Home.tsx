import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        background: "linear-gradient(135deg, #FDEB71 0%, #F8D800 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      {/* 🔍 흐릿한 사기 문자 배경 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          fontSize: "60px",
          color: "rgba(255, 255, 255, 0.03)",
          zIndex: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "center",
          lineHeight: "1.4",
          pointerEvents: "none",
        }}
      >
        {Array(30)
          .fill("사기 의심 문자 • 보이스피싱 • 딥페이크 • 스미싱")
          .map((text, idx) => (
            <div key={idx} style={{ margin: "10px" }}>
              {text}
            </div>
          ))}
      </div>

      {/* 🔐 motion으로 감싼 콘텐츠 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ zIndex: 1 }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "16px",
          }}
        >
          🧠 사기 유형 MBTI 테스트
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            maxWidth: "500px",
            marginBottom: "40px",
          }}
        >
          나도 혹시 사기 1초 전...? <br />
          16문항으로 알아보는 나의 사기 취약 유형! <br />
          지금 바로 테스트해보세요.
        </p>

        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => navigate("/test")}
          style={{
            fontSize: "18px",
            padding: "14px 32px",
            backgroundColor: "#FF6B6B",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            cursor: "pointer",
          }}
        >
          테스트 시작하기 🚨
        </motion.button>
      </motion.div>

      {/* 👮 경남경찰청 로고 or 문구 */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          textAlign: "center",
          fontSize: "14px",
          color: "#444",
          zIndex: 1,
        }}
      >
        <img
          src="/logo_gnpolice.png"
          alt="경남경찰청 로고"
          style={{ height: "30px", marginBottom: "6px" }}
        />
        <div>이 캠페인은 경남경찰청과 함께합니다</div>
      </div>
    </div>
  );
}
