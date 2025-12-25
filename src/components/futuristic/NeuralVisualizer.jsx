import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const NeuralVisualizer = () => {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const connectionsRef = useRef([]);
  const animationRef = useRef();
  const [hoveredNode, setHoveredNode] = useState(null);
  const [dataFlow, setDataFlow] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create enhanced neural network structure
    class NeuralNode {
      constructor(x, y, layer, index) {
        this.x = x;
        this.y = y;
        this.layer = layer;
        this.index = index;
        this.radius = 8 + Math.random() * 8;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.activation = Math.random();
        this.targetActivation = Math.random();
        this.connections = [];
        this.color = this.getColorByLayer(layer);
        this.glowIntensity = 0;
        this.dataPackets = [];
      }

      getColorByLayer(layer) {
        const colors = [
          { h: 180, s: 100, l: 50 }, // Input - Cyan
          { h: 270, s: 100, l: 50 }, // Hidden - Purple  
          { h: 330, s: 100, l: 50 }, // Hidden 2 - Pink
          { h: 60, s: 100, l: 50 }, // Hidden 3 - Yellow
          { h: 0, s: 100, l: 50 }   // Output - Red
        ];
        return colors[layer] || colors[1];
      }

      update() {
        // Smooth activation transitions
        this.activation += (this.targetActivation - this.activation) * 0.1;
        
        // Random activation changes
        if (Math.random() < 0.02) {
          this.targetActivation = Math.random();
        }

        // Pulse animation
        this.pulsePhase += 0.05;
        
        // Glow effect
        this.glowIntensity = Math.sin(this.pulsePhase) * 0.5 + 0.5;

        // Update data packets
        this.dataPackets = this.dataPackets.filter(packet => {
          packet.progress += 0.02;
          return packet.progress < 1;
        });
      }

      draw(ctx) {
        const pulseSize = this.radius + Math.sin(this.pulsePhase) * 2;
        const glowSize = pulseSize * (1 + this.glowIntensity * 0.5);
        
        // Outer glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowSize * 3);
        gradient.addColorStop(0, `hsla(${this.color.h}, ${this.color.s}%, ${this.color.l}%, ${this.activation * 0.8})`);
        gradient.addColorStop(0.5, `hsla(${this.color.h}, ${this.color.s}%, ${this.color.l}%, ${this.activation * 0.3})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // Main node
        ctx.fillStyle = `hsla(${this.color.h}, ${this.color.s}%, ${this.color.l}%, ${0.8 + this.activation * 0.2})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.fillStyle = `hsla(${this.color.h}, ${this.color.s}%, ${this.color.l + 20}%, ${this.activation})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Draw data packets
        this.dataPackets.forEach(packet => {
          const packetX = this.x + (packet.targetX - this.x) * packet.progress;
          const packetY = this.y + (packet.targetY - this.y) * packet.progress;
          
          ctx.fillStyle = `hsla(180, 100%, 70%, ${1 - packet.progress})`;
          ctx.beginPath();
          ctx.arc(packetX, packetY, 3, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      addDataPacket(targetNode) {
        this.dataPackets.push({
          targetX: targetNode.x,
          targetY: targetNode.y,
          progress: 0
        });
      }
    }

    // Create neural network layers
    const layers = [4, 6, 8, 6, 4]; // Input, Hidden1, Hidden2, Hidden3, Output
    const layerSpacing = canvas.width / (layers.length + 1);
    
    nodesRef.current = [];
    connectionsRef.current = [];

    // Create nodes
    layers.forEach((nodeCount, layerIndex) => {
      const x = layerSpacing * (layerIndex + 1);
      const nodeSpacing = canvas.height / (nodeCount + 1);
      
      for (let i = 0; i < nodeCount; i++) {
        const y = nodeSpacing * (i + 1);
        const node = new NeuralNode(x, y, layerIndex, i);
        nodesRef.current.push(node);
      }
    });

    // Create connections
    for (let i = 0; i < layers.length - 1; i++) {
      const currentLayerNodes = nodesRef.current.filter(n => n.layer === i);
      const nextLayerNodes = nodesRef.current.filter(n => n.layer === i + 1);
      
      currentLayerNodes.forEach(node => {
        nextLayerNodes.forEach(nextNode => {
          if (Math.random() < 0.7) { // 70% connection probability
            connectionsRef.current.push({
              from: node,
              to: nextNode,
              weight: Math.random(),
              signal: 0,
              signalPhase: Math.random() * Math.PI * 2
            });
            node.connections.push(nextNode);
          }
        });
      });
    }

    const animate = () => {
      // Clear canvas with trail effect
      ctx.fillStyle = 'rgba(10, 10, 26, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections
      connectionsRef.current.forEach(connection => {
        connection.signalPhase += 0.03;
        connection.signal = Math.sin(connection.signalPhase) * 0.5 + 0.5;
        
        const opacity = connection.weight * connection.signal * 0.6;
        const gradient = ctx.createLinearGradient(
          connection.from.x, connection.from.y,
          connection.to.x, connection.to.y
        );
        
        gradient.addColorStop(0, `hsla(${connection.from.color.h}, 100%, 50%, ${opacity * connection.from.activation})`);
        gradient.addColorStop(1, `hsla(${connection.to.color.h}, 100%, 50%, ${opacity * connection.to.activation})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1 + connection.weight * 2;
        ctx.beginPath();
        ctx.moveTo(connection.from.x, connection.from.y);
        ctx.lineTo(connection.to.x, connection.to.y);
        ctx.stroke();

        // Data flow animation
        if (Math.random() < 0.01) {
          connection.from.addDataPacket(connection.to);
        }
      });

      // Update and draw nodes
      nodesRef.current.forEach(node => {
        node.update();
        node.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Find clicked node
    const clickedNode = nodesRef.current.find(node => {
      const distance = Math.sqrt((node.x - x) ** 2 + (node.y - y) ** 2);
      return distance < node.radius + 5;
    });

    if (clickedNode) {
      setHoveredNode(clickedNode);
      // Trigger activation burst
      clickedNode.targetActivation = 1;
      clickedNode.connections.forEach(conn => {
        conn.addDataPacket(conn);
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950/50 to-indigo-950 overflow-hidden">
      {/* Neural background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(139,92,246,0.05)_49%,rgba(139,92,246,0.05)_51%,transparent_52%)] bg-[length:40px_40px]"></div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={handleCanvasClick}
      />

      {/* Content overlay */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center px-6 max-w-4xl"
        >
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6">
              Neural Network Visualizer
            </h2>
            <p className="text-xl md:text-2xl text-indigo-300 font-light mb-8">
              Advanced AI talent matching through deep neural connections
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-12"
          >
            {[
              { label: "Input Layer", nodes: 4, color: "from-cyan-400 to-blue-500" },
              { label: "Hidden Layer 1", nodes: 6, color: "from-purple-400 to-indigo-500" },
              { label: "Hidden Layer 2", nodes: 8, color: "from-pink-400 to-purple-500" },
              { label: "Hidden Layer 3", nodes: 6, color: "from-yellow-400 to-orange-500" },
              { label: "Output Layer", nodes: 4, color: "from-red-400 to-pink-500" }
            ].map((layer, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${layer.color} rounded-full mb-3`}></div>
                <h3 className="text-sm font-bold text-white mb-1">{layer.label}</h3>
                <p className="text-xs text-gray-300">{layer.nodes} nodes</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-indigo-300/60">
              Click on any node to trigger activation burst • Watch data packets flow through the network
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating neural particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-sm"
        />
      ))}

      {/* Energy pulses */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-500/30 rounded-full"
      />
    </section>
  );
};

export default NeuralVisualizer;
