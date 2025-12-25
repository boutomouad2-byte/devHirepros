import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Database, Shield, Rocket, Sparkles } from 'lucide-react';

const HolographicUI = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [dataStreams, setDataStreams] = useState([]);

  useEffect(() => {
    const streams = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      value: Math.random() * 100,
      label: ['AI Processing', 'Neural Networks', 'Quantum Computing', 'Data Analysis', 'Cloud Storage', 'Security Scan', 'Code Optimization', 'Performance'][i]
    }));
    
    const interval = setInterval(() => {
      setDataStreams(prev => prev.map(stream => ({
        ...stream,
        value: Math.max(0, Math.min(100, stream.value + (Math.random() - 0.5) * 20))
      })));
    }, 100);

    setDataStreams(streams);
    return () => clearInterval(interval);
  }, []);

  const panels = [
    { icon: Cpu, title: 'AI Processing', color: 'from-cyan-500 to-blue-600' },
    { icon: Zap, title: 'Neural Networks', color: 'from-purple-500 to-pink-600' },
    { icon: Database, title: 'Data Analysis', color: 'from-green-500 to-teal-600' },
    { icon: Shield, title: 'Security Systems', color: 'from-orange-500 to-red-600' },
    { icon: Rocket, title: 'Performance', color: 'from-indigo-500 to-purple-600' },
    { icon: Sparkles, title: 'Innovation', color: 'from-pink-500 to-rose-600' }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
            Holographic Interface
          </h2>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
            Advanced 3D interface with real-time data visualization and interactive holographic panels
          </p>
        </div>

        {/* Floating panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {panels.map((panel, index) => {
            const Icon = panel.icon;
            return (
              <div
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1`}
                style={{
                  transform: `translateY(${Math.sin(Date.now() / 1000 + index) * 10}px)`,
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`
                }}
                onClick={() => setActivePanel(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${panel.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="relative bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${panel.color} rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{panel.title}</h3>
                  <p className="text-gray-400">Advanced processing capabilities with quantum optimization</p>
                  
                  {/* Data bars */}
                  <div className="mt-4 space-y-2">
                    {dataStreams.slice(0, 3).map((stream, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="text-xs text-cyan-400 w-24">{stream.label}</div>
                        <div className="flex-1 h-2 bg-black/50 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${panel.color} transition-all duration-300`}
                            style={{ width: `${stream.value}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-400 w-12">{Math.round(stream.value)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central hologram */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative bg-black/70 backdrop-blur-xl border border-cyan-500/50 rounded-3xl p-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-sm font-mono">SYSTEM ONLINE</span>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
                Quantum Processing Core
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {dataStreams.slice(0, 4).map((stream, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">
                      {Math.round(stream.value)}%
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {stream.label.split(' ')[0]}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Initialize System
                </button>
                <button className="px-6 py-3 bg-transparent border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300 transform hover:scale-105">
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default HolographicUI;
