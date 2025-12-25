import React, { useEffect, useRef, useState } from 'react';

const CyberspaceTerminal = () => {
  const terminalRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
  const commands = [
    'INITIALIZE_QUANTUM_CORE...',
    'LOADING_NEURAL_FRAMEWORK...',
    'ESTABLISHING_SECURE_CONNECTION...',
    'ACTIVATING_AI_PROTOTOCOLS...',
    'SCANNING_FOR_TALENT_SIGNALS...',
    'ANALYZING_CANDIDATE_DATA...',
    'MATCHING_SKILL_VECTORS...',
    'OPTIMIZING_HIRING_ALGORITHMS...',
    'SUCCESS: PERFECT_MATCH_FOUND',
    'DEPLOYING_DEVHIRE_SYSTEM...'
  ];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentCommand = '';
    let isDeleting = false;

    const typeCommand = () => {
      if (lineIndex >= commands.length) {
        lineIndex = 0;
        setLines([]);
      }

      if (!isDeleting && charIndex < commands[lineIndex].length) {
        currentCommand += commands[lineIndex][charIndex];
        setCurrentLine(currentCommand);
        charIndex++;
      } else if (!isDeleting && charIndex === commands[lineIndex].length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && charIndex > 0) {
        currentCommand = currentCommand.slice(0, -1);
        setCurrentLine(currentCommand);
        charIndex--;
      } else if (isDeleting && charIndex === 0) {
        setLines(prev => [...prev, commands[lineIndex]]);
        currentCommand = '';
        setCurrentLine('');
        lineIndex++;
        charIndex = 0;
        isDeleting = false;
      }

      setTimeout(typeCommand, isDeleting ? 50 : 100);
    };

    typeCommand();
  }, []);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 600;

    const terminal = terminalRef.current;
    if (terminal) {
      terminal.appendChild(canvas);
    }

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(10, 10, 26, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff00';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(drawMatrix, 50);

    return () => {
      clearInterval(interval);
      if (terminal && canvas.parentNode === terminal) {
        terminal.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div ref={terminalRef} className="absolute inset-0"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 shadow-2xl shadow-green-500/20">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-mono text-sm ml-4">DEVHIRE_TERMINAL_v2.0</span>
            </div>
            
            <div className="font-mono text-sm space-y-1">
              <div className="text-green-400">
                <span className="text-cyan-400">$</span> ./devhire --initialize --mode=quantum
              </div>
              
              {lines.map((line, index) => (
                <div key={index} className="text-green-300 opacity-80 animate-fade-in">
                  {line}
                </div>
              ))}
              
              <div className="text-green-400 flex items-center">
                <span className="text-cyan-400 mr-2">$</span>
                <span>{currentLine}</span>
                <span className={`w-2 h-4 bg-green-400 ml-1 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                <div className="text-cyan-400 text-xs font-mono mb-1">SYSTEM_STATUS</div>
                <div className="text-green-400 text-2xl font-bold">ONLINE</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-4">
                <div className="text-purple-400 text-xs font-mono mb-1">MATCH_RATE</div>
                <div className="text-purple-400 text-2xl font-bold">98.7%</div>
              </div>
              <div className="bg-black/50 border border-pink-500/30 rounded-lg p-4">
                <div className="text-pink-400 text-xs font-mono mb-1">AI_POWER</div>
                <div className="text-pink-400 text-2xl font-bold">MAX</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-black rounded-lg font-bold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                ACCESS SYSTEM
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 0.8; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CyberspaceTerminal;
