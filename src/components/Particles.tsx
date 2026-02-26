import { useEffect, useRef } from 'react';

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: any[] = [];

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5
    });

    const updateParticle = (particle: any) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (
        particle.x > canvas.width ||
        particle.x < 0 ||
        particle.y > canvas.height ||
        particle.y < 0
      ) {
        Object.assign(particle, createParticle());
      }
    };

    const drawParticle = (particle: any) => {
      ctx.fillStyle = `rgba(167, 139, 250, ${particle.opacity})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    };

    const setupParticles = () => {
      for (let i = 0; i < 80; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });
      animationId = requestAnimationFrame(animate);
    };

    initCanvas();
    setupParticles();
    animate();

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="particles-js" />;
};

export default Particles;
