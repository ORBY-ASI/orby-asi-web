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
    function handleResize() {
      // 원래 위치 기억
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      
      // 캔버스 크기 업데이트
      resizeCanvas();
      
      // 별 위치 비율 조정
      stars.forEach(star => {
        star.x = (star.x / oldWidth) * canvas.width;
        star.y = (star.y / oldHeight) * canvas.height;
      });
    }

    window.addEventListener("resize", handleResize);
    
    // 컴포넌트 언마운트 시 정리
    return () => {
      window.removeEventListener("resize", handleResize);
      // 애니메이션 프레임 취소 로직이 필요하다면 여기에 추가
    };
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none' // 이것이 링크 클릭을 방해하지 않도록 함
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.3,
          display: 'block'
        }}
      />
    </div>
  );
}