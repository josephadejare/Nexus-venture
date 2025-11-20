import React, { useCallback, useRef } from 'react';
import { useCanvas } from '../../hooks/useCanvas';
interface Point {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  angle: number;
  speed: number;
}
export function MorphingShapes() {
  const points = useRef<Point[]>([]);
  const initialized = useRef(false);
  const draw = useCallback((ctx: CanvasRenderingContext2D, frameCount: number, canvas: HTMLCanvasElement) => {
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    // Initialize points on first frame
    if (!initialized.current) {
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.15;
      const pointCount = 8;
      points.current = Array.from({
        length: pointCount
      }, (_, i) => {
        const angle = i / pointCount * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          angle: Math.random() * Math.PI * 2,
          speed: 0.01 + Math.random() * 0.02
        };
      });
      initialized.current = true;
    }
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    // Update points
    points.current.forEach(point => {
      point.angle += point.speed;
      const offset = Math.sin(point.angle) * 30;
      const dx = point.baseX - width / 2;
      const dy = point.baseY - height / 2;
      const angle = Math.atan2(dy, dx);
      point.x = point.baseX + Math.cos(angle) * offset;
      point.y = point.baseY + Math.sin(angle) * offset;
    });
    // Draw morphing shape
    ctx.beginPath();
    ctx.moveTo(points.current[0].x, points.current[0].y);
    for (let i = 0; i < points.current.length; i++) {
      const current = points.current[i];
      const next = points.current[(i + 1) % points.current.length];
      const cpX = (current.x + next.x) / 2;
      const cpY = (current.y + next.y) / 2;
      ctx.quadraticCurveTo(current.x, current.y, cpX, cpY);
    }
    ctx.closePath();
    // Gradient fill
    const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.min(width, height) * 0.3);
    gradient.addColorStop(0, 'rgba(139, 92, 246, 0.15)');
    gradient.addColorStop(1, 'rgba(99, 91, 255, 0.05)');
    ctx.fillStyle = gradient;
    ctx.fill();
    // Stroke
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }, []);
  const canvasRef = useCanvas(draw);
  return <div className="canvas-container">
      <canvas ref={canvasRef} />
    </div>;
}