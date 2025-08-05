import React, { useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { scamTypeProfiles } from "../data/scamTypeProfiles";
import { ScamTypeKey } from "../data/mbtiToScamType";
import html2canvas from "html2canvas";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion"; // ✅ 추가

const Share: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const mbti = searchParams.get("mbti") || "";
  const scamType = searchParams.get("scamType") as ScamTypeKey;
  const typedScamType: ScamTypeKey = scamType;
  const profile = scamTypeProfiles[typedScamType];
  const previewRef = useRef<HTMLDivElement>(null);

  const backgroundColors = {
    감정공감형: "#fce4ec",
    절차맹신형: "#e0f7fa",
    직진반응형: "#fff3e0",
    실험과잉형: "#f3e5f5",
    신뢰우선형: "#ede7f6",
    회피수동형: "#e8f5e9",
    정보과신형: "#e0f2f1",
    선한낙관형: "#f9fbe7",
  } as const satisfies Record<ScamTypeKey, string>;

  const scamTypeIcons: Record<ScamTypeKey, string> = {
    감정공감형: "💓",
    절차맹신형: "📋",
    직진반응형: "🏃",
    실험과잉형: "🧪",
    신뢰우선형: "🤝",
    회피수동형: "🙈",
    정보과신형: "🔍",
    선한낙관형: "🌞",
  };

  if (!mbti || !scamType || !profile) {
    return <p>정보가 부족합니다. 결과 페이지로 다시 이동해 주세요.</p>;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다! 친구에게 공유해보세요.");
  };

  const handleCapture = () => {
    if (!previewRef.current) return;
    html2canvas(previewRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = `사기예방테스트_결과_${mbti}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      alert("📥 저장되었습니다! 인스타에 업로드해보세요.");
    });
  };

  const buttonStyle = {
    backgroundColor: "#e5e7eb",
    color: "#111827",
    padding: "10px 20px",
    margin: "10px 5px",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: backgroundColors[typedScamType], // ✅ 페이지 배경색 변경
        minHeight: "100vh",
      }}
    >
      {/* ✅ 최상단 문구 */}
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        당신의 테스트 결과는?
      </h2>

      {/* ✅ 결과 프리뷰 카드 (모션 적용) */}
      <motion.div
        ref={previewRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          border: "2px solid #ccc",
          borderRadius: "16px",
          padding: "20px",
          backgroundColor: "#ffffff",
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* 🧷 사기 유형 아이콘 */}
        <div style={{ fontSize: "40px", marginBottom: "10px" }}>
          {scamTypeIcons[scamType as ScamTypeKey]}
        </div>

        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
          🧠 {mbti} ({scamType})
        </h2>
        <p style={{ fontWeight: "bold", fontSize: "18px" }}>{profile.title}</p>
        <blockquote
          style={{
            fontStyle: "italic",
            fontWeight: "bold", // ✅ 볼드체 적용
            margin: "20px 0",
          }}
        >
          “{profile.slogan}”
        </blockquote>
        <p style={{ color: "#444", fontSize: "14px", marginBottom: "10px" }}>
          📊 위험도: {profile.vulnerabilityLevel}
        </p>
        <p style={{ fontSize: "12px", color: "#777" }}>
          #사기1초전 #사기예방테스트 #{scamType.replace(/\s/g, "")} #경찰청
        </p>

        {/* ✅ QR 코드 삽입 */}
        <div style={{ marginTop: "20px" }}>
          <QRCodeCanvas
            value={window.location.href}
            size={80}
            bgColor="#ffffff"
            fgColor="#000000"
            includeMargin={true}
          />
          <p style={{ fontSize: "10px", color: "#999" }}>결과 공유용 QR</p>
        </div>
      </motion.div>

      {/* ✅ 공유 및 다시하기 버튼 */}
      <div style={{ marginTop: "40px" }}>
        <button
          style={{
            backgroundColor: "#f9a8d4",
            color: "white",
            fontSize: "16px",
            padding: "12px 30px",
            borderRadius: "999px",
            marginBottom: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleCapture}
        >
          📸 전체결과 저장하기
        </button>
        <br />
        <button
          style={{
            backgroundColor: "#3b82f6",
            color: "white",
            fontSize: "16px",
            padding: "12px 30px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          🔁 다시하기
        </button>
      </div>

      {/* ✅ 공유 링크 및 관련 버튼 */}
      <div style={{ marginTop: "30px" }}>
        <h4>📎 공유 링크 및 관련 페이지</h4>

        <button onClick={handleCopyLink} style={buttonStyle}>
          🔗 테스트 결과 URL 복사
        </button>

        <a
          href="https://ecrm.police.go.kr/minwon/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={buttonStyle}>🚨 사이버범죄신고센터</button>
        </a>

        <a
          href="https://www.police.go.kr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={buttonStyle}>🏛 경찰청 홈페이지</button>
        </a>
      </div>

      {/* ✅ 캠페인 문구 */}
      <p
        style={{
          marginTop: "50px",
          textAlign: "center",
          color: "#6b7280",
          fontWeight: "bold",
        }}
      >
        이 캠페인은 👮‍♀️경남 경찰청👮‍♂️과 함께합니다.
      </p>
    </div>
  );
};

export default Share;
