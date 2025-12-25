import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Zap, Shield, Users, ArrowRight, CheckCircle2, Cpu, Brain, Rocket, Globe, Code2, TrendingUp, Star, Menu, X } from "lucide-react";

const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Your 4 images array - update these paths with your actual image paths
  const images = [
    "../../images/hero_1.jpg",
    "../../images/hero_2.png",
    "../../images/hero_4.png",
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  // Mouse tracking for futuristic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze skills, experience, and cultural fit to find perfect candidates instantly.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Real-time Code Assessment",
      description: "Evaluate technical skills with live coding challenges and automated scoring systems.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Data-driven insights to predict candidate success and optimize hiring decisions.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with full compliance to data protection regulations.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Talent Pool",
      description: "Access to millions of developers worldwide with diverse skills and backgrounds.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Reduce hiring time by 80% with streamlined workflows and automation.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Developers", icon: <Code2 className="w-6 h-6" /> },
    { number: "1000+", label: "Companies", icon: <Globe className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24h", label: "Avg. Hire Time", icon: <Rocket className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]"></div>
        
        {/* Mouse follower */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">DevHire</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#stats" className="text-gray-300 hover:text-white transition-colors">Stats</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <Link 
              to="/register" 
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300">AI-Powered Hiring Platform</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block">Hire the</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Future of Tech</span>
                  <span className="block">Talent</span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-lg">
                  Revolutionize your hiring process with AI-driven candidate matching, real-time code assessments, and predictive analytics.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/register"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  Start Hiring Now
                </Link>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="text-purple-400">{stat.icon}</div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - Interactive Demo */}
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg rotate-45 animate-spin-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
              
              {/* Main Demo Container */}
              <div className="relative bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/30 overflow-hidden">
                {/* Image Gallery */}
                <div className="relative h-96 rounded-xl overflow-hidden">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentImageIndex 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-95'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`DevHire Dashboard ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  ))}
                  
                  {/* Controls */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <div className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-sm">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                      >
                        {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'w-8 bg-white'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-6">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">CUTTING-EDGE FEATURES</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Next-Generation Hiring
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Experience the future of recruitment with our advanced AI-powered platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50K+", label: "Active Developers", change: "+12%" },
                { number: "1000+", label: "Companies", change: "+25%" },
                { number: "95%", label: "Success Rate", change: "+5%" },
                { number: "24h", label: "Avg. Hire Time", change: "-80%" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 mb-2">{stat.label}</div>
                  <div className={`text-sm font-semibold ${
                    stat.change.startsWith('+') ? 'text-green-400' : 'text-cyan-400'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Revolutionize Your Hiring?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using DevHire to build their dream teams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-500/30 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">DevHire</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DevHire. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
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
          animation: spin-slow 8s linear infinite;
        }
        
        .bg-grid-white\\/5 {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </div>
  );
};

export default Landing;
