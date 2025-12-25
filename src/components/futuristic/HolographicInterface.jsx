import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HolographicInterface = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const panels = [
    {
      title: "AI Talent Matrix",
      data: [
        { label: "React Developers", value: 94, color: "from-cyan-400 to-blue-500" },
        { label: "Python Experts", value: 87, color: "from-purple-400 to-pink-500" },
        { label: "DevOps Engineers", value: 91, color: "from-green-400 to-emerald-500" },
        { label: "Data Scientists", value: 88, color: "from-orange-400 to-red-500" }
      ]
    },
    {
      title: "Real-time Analytics",
      data: [
        { label: "Active Candidates", value: 1247, trend: "+12%" },
        { label: "Companies Hiring", value: 89, trend: "+8%" },
        { label: "Matches Today", value: 342, trend: "+23%" },
        { label: "Success Rate", value: 96.5, trend: "+2.1%" }
      ]
    },
    {
      title: "Neural Connections",
      data: [
        { label: "Skill Nodes", value: 1847, connections: 5234 },
        { label: "Active Links", value: 892, connections: 3102 },
        { label: "AI Models", value: 47, connections: 891 },
        { label: "Data Points", value: "1.2M", connections: "3.4M" }
      ]
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Animated holographic grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(0,243,255,0.03)_49%,rgba(0,243,255,0.03)_51%,transparent_52%,transparent_98%,rgba(0,243,255,0.03)_99%,rgba(0,243,255,0.03)_101%,transparent_102%)] bg-[length:60px_60px] animate-spin-slow"></div>
      </div>

      {/* Floating holographic elements */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          rotateX: mousePosition.y * 0.01,
          rotateY: mousePosition.x * 0.01
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-full max-w-6xl px-6">
          {/* Main holographic display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
          >
            {/* Glass morphism container */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
              
              {/* Header */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative z-10 text-center mb-8"
              >
                <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
                  Holographic Interface
                </h2>
                <p className="text-xl text-cyan-300/80 font-light">
                  Advanced 3D talent visualization with real-time data streams
                </p>
              </motion.div>

              {/* Panel navigation */}
              <div className="relative z-10 flex justify-center gap-4 mb-8">
                {panels.map((panel, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActivePanel(index)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activePanel === index
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {panel.title}
                  </motion.button>
                ))}
              </div>

              {/* Holographic panels */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePanel}
                  initial={{ opacity: 0, x: 100, rotateY: 90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -100, rotateY: -90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {panels[activePanel].data.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -5,
                          boxShadow: "0 20px 40px rgba(0, 243, 255, 0.3)"
                        }}
                        className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 overflow-hidden group"
                      >
                        {/* Holographic glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-lg font-semibold text-white mb-3">{item.label}</h3>
                          
                          {item.color ? (
                            // Progress bar panels
                            <div className="space-y-2">
                              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                {item.value}%
                              </div>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${item.value}%` }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                  className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                                ></motion.div>
                              </div>
                            </div>
                          ) : item.connections ? (
                            // Neural connection panels
                            <div className="space-y-2">
                              <div className="text-2xl font-bold text-cyan-400">{item.value}</div>
                              <div className="text-sm text-purple-400">{item.connections} connections</div>
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                                  />
                                ))}
                              </div>
                            </div>
                          ) : (
                            // Analytics panels
                            <div className="space-y-2">
                              <div className="text-2xl font-bold text-cyan-400">{item.value}</div>
                              <div className="text-sm text-green-400 font-semibold">{item.trend}</div>
                            </div>
                          )}
                        </div>

                        {/* Floating particles */}
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0.3, 0.8, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                          className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-sm"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Interactive holographic sphere */}
              <motion.div
                animate={{
                  rotateY: 360,
                  rotateZ: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-20 -right-20 w-40 h-40"
              >
                <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40 blur-xl"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full opacity-60 blur-lg"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Data stream effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -20,
              opacity: 0
            }}
            animate={{
              y: window.innerHeight + 20,
              opacity: [0, 1, 0],
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
          />
        ))}
      </div>

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
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HolographicInterface;
