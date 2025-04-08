import { useEffect, useRef } from "react";

export default function BackgroundStarlight() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const stars = [];
    const numStars = 200;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
    className="w-full h-full opacity-30"
    style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
  />
);
}