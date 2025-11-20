import React, { useCallback, useRef } from 'react';
import { useCanvas } from '../../hooks/useCanvas';
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}
export function ParticleSystem() {
  const particles = useRef<Particle[]>([]);
  const initialized = useRef(false);
  const draw = useCallback((ctx: CanvasRenderingContext2D, frameCount: number, canvas: HTMLCanvasElement) => {
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    // Initialize particles on first frame
    if (!initialized.current) {
      const particleCount = Math.floor(width * height / 15000);
      particles.current = Array.from({
        length: particleCount
      }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2
      }));
      initialized.current = true;
    }
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    // Update and draw particles
    particles.current.forEach((particle, i) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      // Wrap around edges
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 91, 255, ${particle.opacity})`;
      ctx.fill();
      // Draw connections to nearby particles
      particles.current.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          const opacity = (1 - distance / 120) * 0.15;
          ctx.strokeStyle = `rgba(99, 91, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });
  }, []);
  const canvasRef = useCanvas(draw);
  return <div className="canvas-container">
      <canvas ref={canvasRef} />
    </div>;
}