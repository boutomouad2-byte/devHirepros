import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TimePortal = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const vortexRef = useRef([]);
  const starsRef = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [portalActive, setPortalActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Vortex particle class
    class VortexParticle {
      constructor(angle, distance, layer) {
        this.angle = angle;
        this.distance = distance;
        this.layer = layer;
        this.baseDistance = distance;
        this.speed = (3 - layer) * 0.02 + Math.random() * 0.01;
        this.size = (4 - layer) * Math.random() * 2 + 1;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.color = this.getLayerColor(layer);
        this.opacity = 1;
        this.trail = [];
        this.maxTrailLength = 10;
      }

      getLayerColor(layer) {
        const colors = [
          { r: 255, g: 0, b: 255 },    // Layer 0: Plasma Pink
          { r: 0, g: 243, b: 255 },    // Layer 1: Electric Blue
          { r: 157, g: 0, b: 255 },    // Layer 2: Neon Purple
          { r: 0, g: 255, b: 157 }     // Layer 3: Cyber Green
        ];
        return colors[layer] || colors[0];
      }

      update(centerX, centerY) {
        // Store trail position
        const currentX = centerX + Math.cos(this.angle) * this.distance;
        const currentY = centerY + Math.sin(this.angle) * this.distance;
        
        this.trail.push({ x: currentX, y: currentY });
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }
        
        // Spiral motion
        this.angle += this.speed;
        this.distance -= 0.5;
        
        // Pulse effect
        this.pulsePhase += 0.05;
        
        // Fade as it approaches center
        this.opacity = Math.max(0, this.distance / this.baseDistance);
        
        // Reset if reached center
        if (this.distance < 10) {
          this.reset();
        }
      }

      reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.baseDistance = Math.random() * 200 + 100;
        this.distance = this.baseDistance;
        this.trail = [];
        this.opacity = 1;
      }

      draw(ctx) {
        // Draw trail
        if (this.trail.length > 1) {
          ctx.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.3})`;
          ctx.lineWidth = this.size * 0.5;
          ctx.beginPath();
          ctx.moveTo(this.trail[0].x, this.trail[0].y);
          
          for (let i = 1; i < this.trail.length; i++) {
            const alpha = (i / this.trail.length) * this.opacity * 0.3;
            ctx.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
            ctx.lineTo(this.trail[i].x, this.trail[i].y);
          }
          
          ctx.stroke();
        }
        
        // Draw particle
        if (this.trail.length > 0) {
          const currentPos = this.trail[this.trail.length - 1];
          const pulseSize = this.size + Math.sin(this.pulsePhase) * 1;
          
          // Glow effect
          const gradient = ctx.createRadialGradient(
            currentPos.x, currentPos.y, 0,
            currentPos.x, currentPos.y, pulseSize * 3
          );
          gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`);
          gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.5})`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(currentPos.x, currentPos.y, pulseSize * 3, 0, Math.PI * 2);
          ctx.fill();
          
          // Core particle
          ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
          ctx.beginPath();
          ctx.arc(currentPos.x, currentPos.y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Background star class
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.twinkleSpeed = Math.random() * 0.05 + 0.02;
      }

      update() {
        this.twinklePhase += this.twinkleSpeed;
      }

      draw(ctx) {
        const brightness = Math.sin(this.twinklePhase) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize vortex particles
    const layers = 4;
    const particlesPerLayer = 50;
    vortexRef.current = [];
    
    for (let layer = 0; layer < layers; layer++) {
      for (let i = 0; i < particlesPerLayer; i++) {
        const angle = (Math.PI * 2 * i) / particlesPerLayer;
        const distance = Math.random() * 200 + 100;
        vortexRef.current.push(new VortexParticle(angle, distance, layer));
      }
    }

    // Initialize stars
    const starCount = 100;
    starsRef.current = [];
    for (let i = 0; i < starCount; i++) {
      starsRef.current.push(new Star());
    }

    // Animation loop
    const animate = () => {
      // Clear with fade effect
      ctx.fillStyle = 'rgba(10, 10, 26, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw stars
      starsRef.current.forEach(star => {
        star.update();
        star.draw(ctx);
      });
      
      // Draw portal vortex
      const portalRadius = 80;
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, portalRadius);
      
      if (portalActive) {
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(0, 243, 255, 0.8)');
        gradient.addColorStop(0.6, 'rgba(255, 0, 255, 0.6)');
        gradient.addColorStop(1, 'rgba(157, 0, 255, 0.3)');
      } else {
        gradient.addColorStop(0, 'rgba(100, 100, 100, 0.8)');
        gradient.addColorStop(0.5, 'rgba(50, 50, 50, 0.5)');
        gradient.addColorStop(1, 'transparent');
      }
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, portalRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw portal rings
      for (let i = 1; i <= 3; i++) {
        const ringRadius = portalRadius + i * 20;
        const ringOpacity = portalActive ? 0.6 - i * 0.15 : 0.2 - i * 0.05;
        
        ctx.strokeStyle = `rgba(0, 243, 255, ${ringOpacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Update and draw vortex particles
      vortexRef.current.forEach(particle => {
        particle.update(centerX, centerY);
        particle.draw(ctx);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
      if (distance < 100) {
        setPortalActive(!portalActive);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [portalActive]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a1a] via-indigo-900/30 to-[#0a0a1a] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.1)_0%,transparent_70%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(138,43,226,0.03)_49%,rgba(138,43,226,0.03)_51%,transparent_52%)] bg-[length:80px_80px]"></div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      {/* Content overlay */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, rotateY: 180 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center px-6 max-w-4xl"
        >
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              textShadow: isHovered 
                ? "0 0 40px rgba(138, 43, 226, 0.8), 0 0 80px rgba(0, 243, 255, 0.6)" 
                : "0 0 20px rgba(138, 43, 226, 0.4), 0 0 40px rgba(0, 243, 255, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] via-[#00f3ff] to-[#8a2be2] mb-6">
              Time Warp Portal
            </h2>
            <p className="text-xl md:text-2xl text-[#8a2be2] font-light mb-8">
              Dimensional gateway to future talent across time and space
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { title: "4-Layer Vortex", desc: "Multi-dimensional spiral", color: "from-[#ff00ff] to-[#8a2be2]" },
              { title: "Time Dilation", desc: "Manipulate temporal flow", color: "from-[#00f3ff] to-[#0066ff]" },
              { title: "Portal Activation", desc: "Click to power up", color: "from-[#8a2be2] to-[#9d00ff]" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 40px rgba(138, 43, 226, 0.3)" 
                }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
              >
                <div className={`h-1 w-12 bg-gradient-to-r ${stat.color} rounded-full mb-4 animate-spin-slow`}></div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
                <p className="text-gray-300 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-purple-300/60">
              Click the portal center to activate • Hover to intensify the vortex
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating temporal anomalies */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            rotate: [0, 360, 720]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut"
          }}
          className="absolute w-8 h-8 border-2 border-purple-400 rounded-full blur-sm"
        />
      ))}

      {/* Custom styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TimePortal;
