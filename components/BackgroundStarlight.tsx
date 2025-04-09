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

  // 글로벌 CSS 스타일 추가
  return (
    <>
      {/* 캔버스 */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: -1
        }}
      />
      
      {/* 글로벌 CSS로 모든 컨텐츠를 배경 위에 강제 표시 */}
      <style jsx global>{`
        /* 모든 주요 컨텐츠 요소에 상대 위치와 z-index 적용 */
        body, #__next {
          position: relative; 
          z-index: 1;
        }
        
        main, div, footer, header, section, nav, h1, h2, h3, p, button, a, span {
          position: relative;
          z-index: 5;
        }
        
        h1, h2, h3, p {
          position: relative;
          z-index: 10;
        }
        
        a, button, [role="button"] {
          position: relative;
          z-index: 15;
        }
      `}</style>
    </>
  );
}