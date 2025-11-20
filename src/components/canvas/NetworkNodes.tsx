import React, { useCallback, useRef } from 'react';
import { useCanvas } from '../../hooks/useCanvas';
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
}
export function NetworkNodes() {
  const nodes = useRef<Node[]>([]);
  const initialized = useRef(false);
  const mousePos = useRef({
    x: 0,
    y: 0
  });
  const draw = useCallback((ctx: CanvasRenderingContext2D, frameCount: number, canvas: HTMLCanvasElement) => {
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    // Initialize nodes on first frame
    if (!initialized.current) {
      const nodeCount = 12;
      nodes.current = Array.from({
        length: nodeCount
      }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 4,
        connections: []
      }));
      // Create connections
      nodes.current.forEach((node, i) => {
        const connectionCount = Math.floor(Math.random() * 2) + 2;
        for (let j = 0; j < connectionCount; j++) {
          const targetIndex = Math.floor(Math.random() * nodeCount);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
      });
      initialized.current = true;
    }
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    // Update nodes
    nodes.current.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;
      // Bounce off edges
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
      // Keep within bounds
      node.x = Math.max(0, Math.min(width, node.x));
      node.y = Math.max(0, Math.min(height, node.y));
    });
    // Draw connections
    nodes.current.forEach((node, i) => {
      node.connections.forEach(targetIndex => {
        const target = nodes.current[targetIndex];
        if (!target) return;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(target.x, target.y);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    });
    // Draw nodes
    nodes.current.forEach(node => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius);
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.8)');
      gradient.addColorStop(1, 'rgba(6, 182, 212, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }, []);
  const canvasRef = useCanvas(draw);
  return <div className="canvas-container">
      <canvas ref={canvasRef} />
    </div>;
}