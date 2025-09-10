import { useEffect, useRef } from 'react';

interface Star {
  orbitRadius: number;
  radius: number;
  orbitX: number;
  orbitY: number;
  timePassed: number;
  speed: number;
  alpha: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight;
    
    const hue = 217;
    const maxStars = 1400;
    let count = 0;

    // Cache gradient
    const canvas2 = document.createElement('canvas');
    const ctx2 = canvas2.getContext('2d');
    if (!ctx2) return;
    
    canvas2.width = 100;
    canvas2.height = 100;
    const half = canvas2.width / 2;
    const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, `hsl(${hue}, 61%, 33%)`);
    gradient2.addColorStop(0.25, `hsl(${hue}, 64%, 6%)`);
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    function random(min: number, max?: number): number {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }
      
      if (min > max!) {
        const hold = max!;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max! - min + 1)) + min;
    }

    function maxOrbit(x: number, y: number): number {
      const max = Math.max(x, y);
      const diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
    }

    function createStar(): Star {
      const orbitRadius = random(maxOrbit(w, h));
      const star: Star = {
        orbitRadius,
        radius: random(60, orbitRadius) / 12,
        orbitX: w / 2,
        orbitY: h / 2,
        timePassed: random(0, maxStars),
        speed: random(orbitRadius) / 50000,
        alpha: random(2, 10) / 10
      };

      count++;
      starsRef.current[count] = star;
      return star;
    }

    function drawStar(star: Star) {
      if (!ctx) return;
      
      const x = Math.sin(star.timePassed) * star.orbitRadius + star.orbitX;
      const y = Math.cos(star.timePassed) * star.orbitRadius + star.orbitY;
      const twinkle = random(10);

      if (twinkle === 1 && star.alpha > 0) {
        star.alpha -= 0.05;
      } else if (twinkle === 2 && star.alpha < 1) {
        star.alpha += 0.05;
      }

      ctx.globalAlpha = star.alpha;
      ctx.drawImage(canvas2, x - star.radius / 2, y - star.radius / 2, star.radius, star.radius);
      star.timePassed += star.speed;
    }

    // Initialize stars
    for (let i = 0; i < maxStars; i++) {
      createStar();
    }

    function animate() {
      if (!ctx) return;
      
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = `hsla(${hue}, 64%, 6%, 1)`;
      ctx.fillRect(0, 0, w, h);
      
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 1, l = starsRef.current.length; i < l; i++) {
        if (starsRef.current[i]) {
          drawStar(starsRef.current[i]);
        }
      }
      
      animationRef.current = window.requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{
        background: '#060e1b',
        zIndex: 0
      }}
    />
  );
}