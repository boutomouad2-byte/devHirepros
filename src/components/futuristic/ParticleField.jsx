import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ParticleField = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef();
  const particlesRef = useRef([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles with enhanced physics
    const particleCount = 500;
    particlesRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 2000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: Math.random() * 2,
        size: Math.random() * 2 + 0.5,
        life: 1,
        decay: Math.random() * 0.01 + 0.005,
        hue: Math.random() * 60 + 180, // Blue to purple range
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Create trail effect
      ctx.fillStyle = 'rgba(10, 10, 26, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // 3D movement
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z -= particle.vz;

        // Mouse gravitational attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.5;
          particle.vy += (dy / distance) * force * 0.5;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset if z goes behind camera
        if (particle.z <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.z = 2000;
          particle.vx = (Math.random() - 0.5) * 0.5;
          particle.vy = (Math.random() - 0.5) * 0.5;
          particle.vz = Math.random() * 2;
          particle.life = 1;
        }

        // Life decay
        particle.life -= particle.decay;
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.z = 2000;
          particle.life = 1;
        }

        // Pulse effect
        particle.pulsePhase += 0.02;

        // 3D projection
        const perspective = 1000 / (1000 + particle.z);
        const screenX = (particle.x - canvas.width / 2) * perspective + canvas.width / 2;
        const screenY = (particle.y - canvas.height / 2) * perspective + canvas.height / 2;
        const screenSize = particle.size * perspective;
        
        // Color based on position and life
        const hue = particle.hue + (particle.x / canvas.width) * 60;
        const saturation = 70 + particle.life * 30;
        const lightness = 50 + particle.life * 20;
        
        // Glow effect
        ctx.shadowBlur = 20 * perspective;
        ctx.shadowColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${particle.life})`;
        
        // Draw particle
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${particle.life})`;
        ctx.beginPath();
        ctx.arc(screenX, screenY, screenSize + Math.sin(particle.pulsePhase) * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Trail effect
        ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${particle.life * 0.3})`;
        ctx.lineWidth = screenSize * 0.5;
        ctx.beginPath();
        ctx.moveTo(screenX, screenY);
        ctx.lineTo(screenX - particle.vx * 10, screenY - particle.vy * 10);
        ctx.stroke();

        // Draw connections between nearby particles
        particlesRef.current.slice(index + 1).forEach(other => {
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.5 * particle.life * other.life;
            ctx.strokeStyle = `rgba(0, 243, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,243,255,0.05)_25%,rgba(0,243,255,0.05)_26%,transparent_27%,transparent_74%,rgba(0,243,255,0.05)_75%,rgba(0,243,255,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,243,255,0.05)_25%,rgba(0,243,255,0.05)_26%,transparent_27%,transparent_74%,rgba(0,243,255,0.05)_75%,rgba(0,243,255,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px] animate-pulse"></div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      {/* Content overlay */}
      <div className="relative z-20 flex items-center justify-center min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6 max-w-4xl"
        >
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
              textShadow: isHovered 
                ? "0 0 30px rgba(0, 243, 255, 0.8), 0 0 60px rgba(0, 102, 255, 0.6)" 
                : "0 0 20px rgba(0, 243, 255, 0.5), 0 0 40px rgba(0, 102, 255, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] via-[#0066ff] to-[#9d00ff] mb-6">
              Quantum Particle Field
            </h2>
            <p className="text-xl md:text-2xl text-[#00ffcc] font-light mb-8">
              Interactive AI-powered talent matching with quantum precision
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { title: "500+ Particles", desc: "Real-time physics simulation", color: "from-[#00f3ff] to-[#0066ff]" },
              { title: "Mouse Tracking", desc: "Gravitational attraction system", color: "from-[#9d00ff] to-[#cc00ff]" },
              { title: "Neural Links", desc: "Dynamic connection mapping", color: "from-[#00ff9d] to-[#00ffcc]" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 40px rgba(0, 243, 255, 0.3)" 
                }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
              >
                <div className={`h-1 w-12 bg-gradient-to-r ${stat.color} rounded-full mb-4`}></div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
                <p className="text-gray-300 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating energy orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#00f3ff] to-[#0066ff] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] rounded-full blur-3xl"
      />
    </section>
  );
};

export default ParticleField;
