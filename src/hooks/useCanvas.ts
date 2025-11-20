import { useEffect, useRef, useCallback } from 'react';
interface UseCanvasOptions {
  animate?: boolean;
  dpr?: number;
}
export function useCanvas(draw: (ctx: CanvasRenderingContext2D, frameCount: number, canvas: HTMLCanvasElement) => void, options: UseCanvasOptions = {}) {
  const {
    animate = true,
    dpr = window.devicePixelRatio || 1
  } = options;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCountRef = useRef(0);
  const animationFrameIdRef = useRef<number>();
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const {
      width,
      height
    } = parent.getBoundingClientRect();
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
  }, [dpr]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    resizeCanvas();
    const render = () => {
      draw(ctx, frameCountRef.current, canvas);
      frameCountRef.current++;
      if (animate) {
        animationFrameIdRef.current = requestAnimationFrame(render);
      }
    };
    render();
    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [draw, animate, resizeCanvas]);
  return canvasRef;
}