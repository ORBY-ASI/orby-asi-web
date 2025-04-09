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
      stars.length = 0;
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

    resizeCanvas();
    initStars();
    drawStars();

    window.addEventListener("resize", resizeCanvas);
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* 배경 캔버스 */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        style={{ zIndex: 0 }} // 0 or higher to be above default -1 elements
      />
      
      {/* 전역 스타일 추가 - 모든 주요 콘텐츠 컨테이너에 z-index 추가 */}
      <style jsx global>{`
        main, 
        section, 
        header, 
        footer,
        nav,
        .content-container,
        .z-above-bg {
          position: relative;
          z-index: 1;
        }
        
        /* 링크 클릭 가능 보장 */
        a, button, [role="button"] {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </>
  );
}