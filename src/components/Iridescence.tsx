import React, { useEffect, useRef } from "react";

interface IridescenceProps {
  color: [number, number, number];
  amplitude: number;
  speed: number;
}

const Iridescence: React.FC<IridescenceProps> = ({
  color,
  amplitude,
  speed,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);

      // Add color stops with iridescent effect
      for (let i = 0; i <= 1; i += 0.1) {
        const hue = (color[0] * 360 + time * speed + i * 360) % 360;
        const saturation = 100;
        const lightness =
          50 + Math.sin(time * speed + i * Math.PI * 2) * amplitude * 50;

        gradient.addColorStop(i, `hsl(${hue}, ${saturation}%, ${lightness}%)`);
      }

      // Fill canvas with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      time += 0.01;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, speed, amplitude]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
      }}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default Iridescence;
