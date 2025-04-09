import { useEffect, useRef } from "react";

export default function BackgroundStarlight() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const stars = [];
    const numStars = 200;

    function resizeCanvas() {
      // 캔버스 크기를 윈도우 크기에 맞게 설정
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initStars() {
      stars.length = 0; // 기존 별 초기화
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          velocity: Math.random() * 0.3 + 0.2,
        });
      }
    }

    function drawStars() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
        star.y += star.velocity;
        if (star.y > canvas.height) star.y = 0;
      });
      
      requestAnimationFrame(drawStars);
    }

    // 초기 설정 및 애니메이션 시작
    resizeCanvas();
    initStars();
    drawStars();

    // 창 크기 변경 처리
    window.addEventListener("resize", resizeCanvas);
    
    // 컴포넌트 언마운트 시 정리
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // 원래 코드로 돌아가기 - 단순화된 버전
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full opacity-30 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}