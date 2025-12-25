import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const EnergyCore = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const energyRef = useRef([]);
  const lightningRef = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

    // Energy particle class
    class EnergyParticle {
      constructor(angle, distance) {
        this.angle = angle;
        this.distance = distance;
        this.baseDistance = distance;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.color = this.getEnergyColor();
        this.life = 1;
        this.decay = Math.random() * 0.005 + 0.002;
      }

      getEnergyColor() {
        const colors = [
          { r: 0, g: 243, b: 255 },    // Electric Blue
          { r: 157, g: 0, b: 255 },    // Neon Purple  
          { r: 255, g: 0, b: 255 },    // Plasma Pink
          { r: 0, g: 255, b: 157 },    // Cyber Green
          { r: 255, g: 102, b: 0 }     // Warning Orange
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.angle += this.speed;
        this.pulsePhase += 0.05;
        
        // Pulsing distance
        const pulseFactor = Math.sin(this.pulsePhase) * 20;
        this.distance = this.baseDistance + pulseFactor;
        
        // Life decay
        this.life -= this.decay;
        if (this.life <= 0) {
          this.reset();
        }
      }

      reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.baseDistance = Math.random() * 150 + 50;
        this.distance = this.baseDistance;
        this.life = 1;
        this.color = this.getEnergyColor();
      }

      draw(ctx, centerX, centerY) {
        const x = centerX + Math.cos(this.angle) * this.distance;
        const y = centerY + Math.sin(this.angle) * this.distance;
        
        // Glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.size * 4);
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life})`);
        gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, this.size * 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Core particle
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life})`;
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Lightning bolt class
    class LightningBolt {
      constructor(startX, startY, endX, endY) {
        this.points = this.generateBolt(startX, startY, endX, endY);
        this.life = 1;
        this.decay = 0.02;
        this.color = { r: 0, g: 243, b: 255 };
      }

      generateBolt(startX, startY, endX, endY) {
        const points = [{x: startX, y: startY}];
        const segments = 8;
        
        for (let i = 1; i < segments; i++) {
          const progress = i / segments;
          const x = startX + (endX - startX) * progress + (Math.random() - 0.5) * 50;
          const y = startY + (endY - startY) * progress + (Math.random() - 0.5) * 50;
          points.push({x, y});
        }
        
        points.push({x: endX, y: endY});
        return points;
      }

      update() {
        this.life -= this.decay;
        return this.life > 0;
      }

      draw(ctx) {
        ctx.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life})`;
        ctx.lineWidth = 2 + this.life * 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life})`;
        
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        
        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize energy particles
    const particleCount = 200;
    energyRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const distance = Math.random() * 150 + 50;
      energyRef.current.push(new EnergyParticle(angle, distance));
    }

    // Animation loop
    const animate = () => {
      // Clear with trail effect
      ctx.fillStyle = 'rgba(10, 10, 26, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw energy core
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 100);
      coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      coreGradient.addColorStop(0.3, 'rgba(0, 243, 255, 0.6)');
      coreGradient.addColorStop(0.6, 'rgba(157, 0, 255, 0.4)');
      coreGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner core
      const innerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 30);
      innerGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      innerGradient.addColorStop(0.5, 'rgba(0, 243, 255, 0.8)');
      innerGradient.addColorStop(1, 'rgba(157, 0, 255, 0.6)');
      
      ctx.fillStyle = innerGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
      ctx.fill();
      
      // Update and draw energy particles
      energyRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx, centerX, centerY);
      });
      
      // Generate random lightning
      if (Math.random() < 0.02) {
        const angle = Math.random() * Math.PI * 2;
        const startDistance = 40;
        const endDistance = 200;
        
        const startX = centerX + Math.cos(angle) * startDistance;
        const startY = centerY + Math.sin(angle) * startDistance;
        const endX = centerX + Math.cos(angle) * endDistance;
        const endY = centerY + Math.sin(angle) * endDistance;
        
        lightningRef.current.push(new LightningBolt(startX, startY, endX, endY));
      }
      
      // Update and draw lightning
      lightningRef.current = lightningRef.current.filter(bolt => {
        const alive = bolt.update();
        if (alive) {
          bolt.draw(ctx);
        }
        return alive;
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

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a1a] via-purple-900/30 to-[#0a0a1a] overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(0,243,255,0.05)_49%,rgba(0,243,255,0.05)_51%,transparent_52%)] bg-[length:60px_60px]"></div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      {/* Content overlay */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center px-6 max-w-4xl"
        >
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotateY: isHovered ? 360 : 0
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00ff9d] mb-6">
              Energy Core
            </h2>
            <p className="text-xl md:text-2xl text-[#ff6600] font-light mb-8">
              Quantum-powered talent matching engine with infinite energy
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { title: "200+ Energy Particles", desc: "Real-time physics simulation", color: "from-[#00f3ff] to-[#0066ff]" },
              { title: "Lightning Strikes", desc: "Random electrical discharges", color: "from-[#9d00ff] to-[#ff00ff]" },
              { title: "Plasma Core", desc: "Infinite energy source", color: "from-[#00ff9d] to-[#ff33cc]" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 40px rgba(255, 0, 255, 0.3)" 
                }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
              >
                <div className={`h-1 w-12 bg-gradient-to-r ${stat.color} rounded-full mb-4 animate-pulse`}></div>
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
            <p className="text-sm text-orange-400/60">
              Hover over the energy core to amplify its power • Watch for lightning strikes
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating energy orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            scale: [0.5, 1.5, 0.5],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          className="absolute w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-lg"
        />
      ))}
    </section>
  );
};

export default EnergyCore;
