import { useEffect, useRef } from "react";

export default function BackgroundStarlight() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const stars = [];
    const numStars = 200;

    function resizeCanvas() {
      // 화면 너비는 그대로 사용
      canvas.width = window.innerWidth;
      // 높이를 제한 - 예: 화면 높이의 50%만 사용하거나 특정 픽셀 값으로 제한
      canvas.height = Math.min(window.innerHeight, 500); // 500px로 제한 (원하는 값으로 조정 가능)
    }

    function initStars() {
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
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full opacity-30 pointer-events-none"
      style={{ 
        zIndex: -1, 
        height: "0px" // CSS에서도 높이 제한
      }}
    />
  );
}