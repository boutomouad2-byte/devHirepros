import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Zap, Shield, Users, ArrowRight, CheckCircle2, Cpu, Brain, Rocket, Globe, Code2, TrendingUp, Star } from "lucide-react";

// Real-time data context for cross-page sharing
const useRealTimeData = () => {
  const [realTimeStats, setRealTimeStats] = useState({
    developers: 0,
    companies: 0,
    successRate: 0,
    hireTime: 0,
    activeSkills: 0,
    totalJobs: 0,
    avgResponse: 0,
    fillRate: 0,
    newApplications: 0,
    activeInterviews: 0,
    pendingReviews: 0,
    completedHires: 0
  });

  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isConnected, setIsConnected] = useState(false);

  // Simulate real-time backend connection
  useEffect(() => {
    const connectToBackend = async () => {
      try {
        // Simulate WebSocket connection or API polling
        setIsConnected(true);
        
        // Initial data fetch
        const initialData = await fetchInitialStats();
        setRealTimeStats(initialData);
        setLastUpdate(new Date());
        
        // Set up real-time updates
        const interval = setInterval(async () => {
          const updatedStats = await fetchUpdatedStats();
          setRealTimeStats(prev => ({
            ...prev,
            ...updatedStats
          }));
          setLastUpdate(new Date());
        }, 8000); // Update every 8 seconds for more realistic changes
        
        return () => clearInterval(interval);
      } catch (error) {
        console.error('Real-time connection failed:', error);
        setIsConnected(false);
      }
    };

    connectToBackend();
  }, []);

  return { realTimeStats, lastUpdate, isConnected };
};

// Simulated backend API functions
const fetchInitialStats = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    developers: 48500, // Realistic developer base
    companies: 1050, // Realistic company count
    successRate: 94, // Realistic success rate
    hireTime: 24, // Realistic hire time in hours
    activeSkills: 4200, // Realistic skill count
    totalJobs: 8500, // Realistic job postings
    avgResponse: 91, // Realistic response rate
    fillRate: 87, // Realistic fill rate
    newApplications: 125, // Realistic daily applications
    activeInterviews: 85, // Realistic active interviews
    pendingReviews: 45, // Realistic pending reviews
    completedHires: 245 // Realistic monthly hires
  };
};

const fetchUpdatedStats = async () => {
  // Simulate realistic, slow, natural data changes
  await new Promise(resolve => setTimeout(resolve, 1000)); // Slower updates
  
  // Realistic small changes that happen naturally over time
  const randomFactor = Math.random();
  
  return {
    developers: randomFactor > 0.8 ? Math.floor(Math.random() * 3) + 1 : 0, // Rare new developers
    companies: randomFactor > 0.95 ? Math.floor(Math.random() * 1) + 1 : 0, // Very rare new companies
    successRate: randomFactor > 0.98 ? Math.min(100, Math.floor(Math.random() * 1) + 1) : 0, // Extremely rare success rate improvement
    hireTime: randomFactor > 0.7 ? Math.max(1, Math.floor(Math.random() * 1) - 1) : 0, // Occasional efficiency improvement
    activeSkills: randomFactor > 0.6 ? Math.floor(Math.random() * 2) + 1 : 0, // Sometimes new skills
    totalJobs: randomFactor > 0.5 ? Math.floor(Math.random() * 5) + 1 : 0, // Regular job postings
    avgResponse: randomFactor > 0.85 ? Math.min(100, Math.floor(Math.random() * 1) + 1) : 0, // Rare response rate improvement
    fillRate: randomFactor > 0.9 ? Math.min(100, Math.floor(Math.random() * 1) + 1) : 0, // Very rare fill rate improvement
    newApplications: randomFactor > 0.4 ? Math.floor(Math.random() * 3) + 1 : 0, // Regular applications
    activeInterviews: randomFactor > 0.6 ? Math.floor(Math.random() * 2) + 1 : 0, // Sometimes interviews
    pendingReviews: randomFactor > 0.5 ? Math.floor(Math.random() * 2) + 1 : 0, // Regular reviews
    completedHires: randomFactor > 0.75 ? Math.floor(Math.random() * 1) + 1 : 0 // Occasional hires
  };
};

// Professional Cross-Page Connection System
const useCrossPageConnection = () => {
  const [connectionStatus, setConnectionStatus] = useState('connecting');
  const [sharedData, setSharedData] = useState({});
  const [navigationHistory, setNavigationHistory] = useState([]);

  // Initialize cross-page connection
  useEffect(() => {
    const initializeConnection = async () => {
      try {
        // Check for existing shared data
        const existingData = localStorage.getItem('devhire_shared_data');
        const existingHistory = localStorage.getItem('devhire_navigation_history');
        
        if (existingData) {
          setSharedData(JSON.parse(existingData));
        }
        
        if (existingHistory) {
          setNavigationHistory(JSON.parse(existingHistory));
        }

        // Establish connection
        setConnectionStatus('connected');
        
        // Set up real-time listeners
        const handleStorageChange = (e) => {
          if (e.key === 'devhire_shared_data' && e.newValue) {
            setSharedData(JSON.parse(e.newValue));
          }
          
          if (e.key === 'devhire_navigation_history' && e.newValue) {
            setNavigationHistory(JSON.parse(e.newValue));
          }
        };

        window.addEventListener('storage', handleStorageChange);
        
        // Broadcast connection established
        broadcastConnectionEvent('connection_established', {
          page: 'landing',
          timestamp: new Date().toISOString(),
          data: sharedData
        });

        return () => {
          window.removeEventListener('storage', handleStorageChange);
        };
      } catch (error) {
        console.error('Cross-page connection failed:', error);
        setConnectionStatus('error');
      }
    };

    initializeConnection();
  }, []);

  // Broadcast events to other pages
  const broadcastConnectionEvent = (eventType, data) => {
    const event = {
      type: eventType,
      data: data,
      timestamp: new Date().toISOString(),
      source: 'landing'
    };
    
    localStorage.setItem('devhire_broadcast_event', JSON.stringify(event));
    
    // Clear after broadcast
    setTimeout(() => {
      localStorage.removeItem('devhire_broadcast_event');
    }, 100);
  };

  // Share data with other pages
  const shareDataWithPages = (key, value) => {
    const newData = { ...sharedData, [key]: value };
    setSharedData(newData);
    localStorage.setItem('devhire_shared_data', JSON.stringify(newData));
    
    broadcastConnectionEvent('data_shared', {
      key: key,
      value: value,
      source: 'landing'
    });
  };

  // Track navigation
  const trackNavigation = (destination, context = {}) => {
    const navigation = {
      from: 'landing',
      to: destination,
      timestamp: new Date().toISOString(),
      context: context
    };
    
    const newHistory = [...navigationHistory, navigation];
    setNavigationHistory(newHistory);
    localStorage.setItem('devhire_navigation_history', JSON.stringify(newHistory));
    
    broadcastConnectionEvent('navigation_tracked', navigation);
  };

  // Get shared data from other pages
  const getSharedData = (key) => {
    return sharedData[key];
  };

  // Check if other pages are active
  const checkPageActivity = () => {
    const activePages = [];
    
    // Check common page indicators
    const indicators = [
      'devhire_dashboard_active',
      'devhire_analytics_active',
      'devhire_candidates_active',
      'devhire_jobs_active',
      'devhire_settings_active'
    ];
    
    indicators.forEach(indicator => {
      const value = localStorage.getItem(indicator);
      if (value) {
        const timestamp = new Date(value);
        const now = new Date();
        const diff = now - timestamp;
        
        // Consider active if updated within last 30 seconds
        if (diff < 30000) {
          activePages.push(indicator.replace('devhire_', '').replace('_active', ''));
        }
      }
    });
    
    return activePages;
  };

  return {
    connectionStatus,
    shareDataWithPages,
    getSharedData,
    trackNavigation,
    checkPageActivity,
    broadcastConnectionEvent
  };
};

const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animatedNumbers, setAnimatedNumbers] = useState({
    developers: 0,
    companies: 0,
    successRate: 0,
    hireTime: 0,
    activeSkills: 0,
    totalJobs: 0,
    avgResponse: 0,
    fillRate: 0,
    newApplications: 0,
    activeInterviews: 0,
    pendingReviews: 0,
    completedHires: 0
  });

  // Use real-time data hook
  const { realTimeStats, lastUpdate, isConnected } = useRealTimeData();
  
  // Use cross-page connection system
  const { 
    connectionStatus, 
    shareDataWithPages, 
    getSharedData, 
    trackNavigation, 
    checkPageActivity, 
    broadcastConnectionEvent 
  } = useCrossPageConnection();

  // Real-time number animation with backend data
  useEffect(() => {
    const duration = 1500; // Faster for real-time updates
    const steps = 30; // Fewer steps for smoother real-time feel
    const stepDuration = duration / steps;

    const animateToTarget = (targetValues) => {
      let currentStep = 0;
      const startValues = { ...animatedNumbers };
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        // Smooth easing for real-time updates
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        
        setAnimatedNumbers(prev => ({
          developers: Math.floor(startValues.developers + (targetValues.developers - startValues.developers) * easeOutCubic),
          companies: Math.floor(startValues.companies + (targetValues.companies - startValues.companies) * easeOutCubic),
          successRate: Math.floor(startValues.successRate + (targetValues.successRate - startValues.successRate) * easeOutCubic),
          hireTime: Math.floor(startValues.hireTime + (targetValues.hireTime - startValues.hireTime) * easeOutCubic),
          activeSkills: Math.floor(startValues.activeSkills + (targetValues.activeSkills - startValues.activeSkills) * easeOutCubic),
          totalJobs: Math.floor(startValues.totalJobs + (targetValues.totalJobs - startValues.totalJobs) * easeOutCubic),
          avgResponse: Math.floor(startValues.avgResponse + (targetValues.avgResponse - startValues.avgResponse) * easeOutCubic),
          fillRate: Math.floor(startValues.fillRate + (targetValues.fillRate - startValues.fillRate) * easeOutCubic),
          newApplications: Math.floor(startValues.newApplications + (targetValues.newApplications - startValues.newApplications) * easeOutCubic),
          activeInterviews: Math.floor(startValues.activeInterviews + (targetValues.activeInterviews - startValues.activeInterviews) * easeOutCubic),
          pendingReviews: Math.floor(startValues.pendingReviews + (targetValues.pendingReviews - startValues.pendingReviews) * easeOutCubic),
          completedHires: Math.floor(startValues.completedHires + (targetValues.completedHires - startValues.completedHires) * easeOutCubic)
        }));
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    // Animate to real-time values when they change
    if (realTimeStats.developers > 0) {
      animateToTarget(realTimeStats);
    }
  }, [realTimeStats, animatedNumbers]);

  // Cross-page data sharing with other pages
  useEffect(() => {
    // Share real-time stats with other pages
    if (realTimeStats.developers > 0) {
      shareDataWithPages('landing_stats', realTimeStats);
      shareDataWithPages('last_update', lastUpdate);
      shareDataWithPages('connection_status', connectionStatus);
    }
  }, [realTimeStats, lastUpdate, connectionStatus]);

  // Track page activity
  useEffect(() => {
    // Update landing page activity indicator
    localStorage.setItem('devhire_landing_active', new Date().toISOString());
    
    // Clean up on unmount
    return () => {
      localStorage.removeItem('devhire_landing_active');
    };
  }, []);

  // Listen for broadcast events from other pages
  useEffect(() => {
    const handleBroadcastEvents = () => {
      const event = localStorage.getItem('devhire_broadcast_event');
      if (event) {
        try {
          const parsedEvent = JSON.parse(event);
          
          // Handle different event types
          switch (parsedEvent.type) {
            case 'connection_established':
              console.log('Connection established with:', parsedEvent.data.page);
              break;
            case 'data_shared':
              console.log('Data shared from:', parsedEvent.data.source);
              break;
            case 'navigation_tracked':
              console.log('Navigation tracked:', parsedEvent.data);
              break;
            default:
              break;
          }
        } catch (error) {
          console.error('Error parsing broadcast event:', error);
        }
      }
    };

    const interval = setInterval(handleBroadcastEvents, 1000);
    return () => clearInterval(interval);
  }, []);

  // Cross-page data sharing via localStorage
  useEffect(() => {
    // Store real-time data for other pages
    localStorage.setItem('devhire_realtime_stats', JSON.stringify(realTimeStats));
    localStorage.setItem('devhire_last_update', lastUpdate.toISOString());
    
    // Listen for updates from other pages
    const handleStorageChange = (e) => {
      if (e.key === 'devhire_realtime_stats' && e.newValue) {
        const updatedStats = JSON.parse(e.newValue);
        setAnimatedNumbers(prev => ({
          ...prev,
          ...updatedStats
        }));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [realTimeStats, lastUpdate]);

  // Professional navigation handler
  const handleNavigation = (destination, context = {}) => {
    // Track navigation
    trackNavigation(destination, context);
    
    // Share navigation context with other pages
    shareDataWithPages('current_navigation', {
      destination,
      context,
      timestamp: new Date().toISOString()
    });
    
    // Log navigation for analytics
    console.log(`Navigation: Landing → ${destination}`, context);
  };

  // Get active pages status
  const activePages = checkPageActivity();
  const [metricsData, setMetricsData] = useState({
    growthData: [
      { 
        height: '25%', 
        label: 'Q1 2024', 
        value: '2.1K', 
        color: 'from-purple-500 to-purple-600',
        growth: '+12%',
        description: 'Strong start'
      },
      { 
        height: '45%', 
        label: 'Q2 2024', 
        value: '3.8K', 
        color: 'from-blue-500 to-blue-600',
        growth: '+81%',
        description: 'Rapid expansion'
      },
      { 
        height: '70%', 
        label: 'Q3 2024', 
        value: '5.2K', 
        color: 'from-cyan-500 to-cyan-600',
        growth: '+37%',
        description: 'Market leadership'
      },
      { 
        height: '85%', 
        label: 'Q4 2024', 
        value: '7.1K', 
        color: 'from-pink-500 to-pink-600',
        growth: '+37%',
        description: 'Record quarter'
      }
    ],
    skillsData: [
      { percentage: 85, color: 'from-purple-500 to-purple-600', label: 'React', offset: 0 },
      { percentage: 78, color: 'from-blue-500 to-blue-600', label: 'Python', offset: 90 },
      { percentage: 72, color: 'from-cyan-500 to-cyan-600', label: 'AWS', offset: 180 },
      { percentage: 68, color: 'from-emerald-500 to-emerald-600', label: 'Node.js', offset: 270 }
    ],
    companyMetrics: [
      {
        title: "Time to Hire",
        value: "24h",
        change: "-80%",
        icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
        gradient: "from-purple-500 to-pink-500",
        description: "Average placement time"
      },
      {
        title: "Success Rate", 
        value: "95%",
        change: "+15%",
        icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
        gradient: "from-blue-500 to-cyan-500",
        description: "Successful matches"
      },
      {
        title: "Global Reach",
        value: "150+",
        change: "+45%",
        icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
        gradient: "from-green-500 to-emerald-500", 
        description: "Countries covered"
      },
      {
        title: "AI Accuracy",
        value: "98.7%",
        change: "+12%",
        icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
        gradient: "from-orange-500 to-red-500",
        description: "Match precision rate"
      }
    ]
  });

  // Simulate real-time data updates
  useEffect(() => {
    const dataUpdateInterval = setInterval(() => {
      setMetricsData(prev => ({
        ...prev,
        companyMetrics: prev.companyMetrics.map(metric => ({
          ...metric,
          value: metric.value.includes('%') 
            ? `${(Math.random() * 5 + 93).toFixed(1)}%`
            : metric.value.includes('h')
            ? `${Math.floor(Math.random() * 8 + 20)}h`
            : metric.value.includes('+')
            ? `${Math.floor(Math.random() * 50 + 130)}+`
            : metric.value
        }))
      }));
    }, 5000);

    return () => clearInterval(dataUpdateInterval);
  }, []);

  
  // Massive state management for complex animations
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [time, setTime] = useState(new Date());
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [particleCount, setParticleCount] = useState(50);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [colorScheme, setColorScheme] = useState('purple');
  const [is3DEnabled, setIs3DEnabled] = useState(true);
  const [mouseTrail, setMouseTrail] = useState([]);
  const [orbitalRotation, setOrbitalRotation] = useState(0);
  const [waveAmplitude, setWaveAmplitude] = useState(1);
  const [pulseFrequency, setPulseFrequency] = useState(1);
  const [gridDensity, setGridDensity] = useState(100);
  const [blurIntensity, setBlurIntensity] = useState(3);
  const [glowIntensity, setGlowIntensity] = useState(0.5);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [opacityLevel, setOpacityLevel] = useState(0.7);
  const [transitionDuration, setTransitionDuration] = useState(300);
  const [easingFunction, setEasingFunction] = useState('ease-out');
  const [perspectiveValue, setPerspectiveValue] = useState(1000);
  const [transformOrigin, setTransformOrigin] = useState('center');
  const [backfaceVisibility, setBackfaceVisibility] = useState('hidden');
  const [transformStyle, setTransformStyle] = useState('preserve-3d');
  const [willChange, setWillChange] = useState('transform');
  const [filterValue, setFilterValue] = useState('blur(0px)');
  const [mixBlendMode, setMixBlendMode] = useState('normal');
  const [isolation, setIsolation] = useState('auto');
  const [clipPath, setClipPath] = useState('none');
  const [maskImage, setMaskImage] = useState('none');
  const [boxShadow, setBoxShadow] = useState('none');
  const [textShadow, setTextShadow] = useState('none');
  const [backgroundPosition, setBackgroundPosition] = useState('center');
  const [backgroundSize, setBackgroundSize] = useState('cover');
  const [backgroundRepeat, setBackgroundRepeat] = useState('no-repeat');
  const [backgroundAttachment, setBackgroundAttachment] = useState('scroll');
  const [backgroundOrigin, setBackgroundOrigin] = useState('padding-box');
  const [backgroundClip, setBackgroundClip] = useState('border-box');
  const [objectFit, setObjectFit] = useState('cover');
  const [objectPosition, setObjectPosition] = useState('center');
  const [borderRadius, setBorderRadius] = useState('0px');
  const [borderWidth, setBorderWidth] = useState('0px');
  const [borderStyle, setBorderStyle] = useState('solid');
  const [borderColor, setBorderColor] = useState('transparent');
  const [outlineWidth, setOutlineWidth] = useState('0px');
  const [outlineStyle, setOutlineStyle] = useState('none');
  const [outlineColor, setOutlineColor] = useState('transparent');
  const [outlineOffset, setOutlineOffset] = useState('0px');
  const [columnCount, setColumnCount] = useState('auto');
  const [columnFill, setColumnFill] = useState('balance');
  const [columnGap, setColumnGap] = useState('normal');
  const [columnRule, setColumnRule] = useState('none');
  const [columnRuleColor, setColumnRuleColor] = useState('currentColor');
  const [columnRuleStyle, setColumnRuleStyle] = useState('none');
  const [columnRuleWidth, setColumnRuleWidth] = useState('medium');
  const [columnSpan, setColumnSpan] = useState('none');
  const [columnWidth, setColumnWidth] = useState('auto');
  const [breakAfter, setBreakAfter] = useState('auto');
  const [breakBefore, setBreakBefore] = useState('auto');
  const [breakInside, setBreakInside] = useState('auto');
  const [boxDecorationBreak, setBoxDecorationBreak] = useState('slice');
  const [boxSizing, setBoxSizing] = useState('content-box');
  const [display, setDisplay] = useState('block');
  const [float, setFloat] = useState('none');
  const [clear, setClear] = useState('none');
  const [verticalAlign, setVerticalAlign] = useState('baseline');
  const [textAlign, setTextAlign] = useState('start');
  const [textAlignLast, setTextAlignLast] = useState('auto');
  const [textJustify, setTextJustify] = useState('auto');
  const [lineHeight, setLineHeight] = useState('normal');
  const [wordSpacing, setWordSpacing] = useState('normal');
  const [letterSpacing, setLetterSpacing] = useState('normal');
  const [textIndent, setTextIndent] = useState('0px');
  const [textOverflow, setTextOverflow] = useState('clip');
  const [textTransform, setTextTransform] = useState('none');
  const [whiteSpace, setWhiteSpace] = useState('normal');
  const [wordBreak, setWordBreak] = useState('normal');
  const [overflowWrap, setOverflowWrap] = useState('normal');
  const [tabSize, setTabSize] = useState(8);
  const [hyphens, setHyphens] = useState('manual');
  const [pointerEvents, setPointerEvents] = useState('auto');
  const [userSelect, setUserSelect] = useState('auto');
  const [resize, setResize] = useState('none');
  const [cursor, setCursor] = useState('auto');
  const [caretColor, setCaretColor] = useState('auto');
  const [touchAction, setTouchAction] = useState('auto');
  const [pointerEventsNone, setPointerEventsNone] = useState('none');
  const [willChangeTransform, setWillChangeTransform] = useState('transform');
  const [contain, setContain] = useState('none');
  const [contentVisibility, setContentVisibility] = useState('visible');
  const [inset, setInset] = useState('auto');
  const [top, setTop] = useState('auto');
  const [right, setRight] = useState('auto');
  const [bottom, setBottom] = useState('auto');
  const [left, setLeft] = useState('auto');
  const [zIndex, setZIndex] = useState('auto');
  const [position, setPosition] = useState('static');
  const [overflow, setOverflow] = useState('visible');
  const [overflowX, setOverflowX] = useState('visible');
  const [overflowY, setOverflowY] = useState('visible');
  const [overflowBlock, setOverflowBlock] = useState('visible');
  const [overflowInline, setOverflowInline] = useState('visible');
  const [overscrollBehavior, setOverscrollBehavior] = useState('auto');
  const [overscrollBehaviorBlock, setOverscrollBehaviorBlock] = useState('auto');
  const [overscrollBehaviorInline, setOverscrollBehaviorInline] = useState('auto');
  const [overscrollBehaviorX, setOverscrollBehaviorX] = useState('auto');
  const [overscrollBehaviorY, setOverscrollBehaviorY] = useState('auto');
  const [visibility, setVisibility] = useState('visible');
  const [opacity, setOpacity] = useState(1);
  const [isolationMode, setIsolationMode] = useState('auto');
  const [mixBlendModeValue, setMixBlendModeValue] = useState('normal');
  const [backgroundBlendMode, setBackgroundBlendMode] = useState('normal');
  const [filter, setFilter] = useState('none');
  const [backdropFilter, setBackdropFilter] = useState('none');
  const [perspective, setPerspective] = useState('none');
  const [perspectiveOrigin, setPerspectiveOrigin] = useState('50% 50%');
  const [transform, setTransform] = useState('none');
  const [transformBox, setTransformBox] = useState('view-box');
  const [transformOriginValue, setTransformOriginValue] = useState('50% 50%');
  const [backfaceVisibilityValue, setBackfaceVisibilityValue] = useState('visible');
  const [transformStyleValue, setTransformStyleValue] = useState('flat');
  const [animationName, setAnimationName] = useState('none');
  const [animationDuration, setAnimationDuration] = useState('0s');
  const [animationTimingFunction, setAnimationTimingFunction] = useState('ease');
  const [animationDelay, setAnimationDelay] = useState('0s');
  const [animationIterationCount, setAnimationIterationCount] = useState('1');
  const [animationDirection, setAnimationDirection] = useState('normal');
  const [animationFillMode, setAnimationFillMode] = useState('none');
  const [animationPlayState, setAnimationPlayState] = useState('running');
  const [transitionProperty, setTransitionProperty] = useState('all');
  const [transitionDurationValue, setTransitionDurationValue] = useState('0s');
  const [transitionTimingFunctionValue, setTransitionTimingFunctionValue] = useState('ease');
  const [transitionDelayValue, setTransitionDelayValue] = useState('0s');
  const [transitionBehavior, setTransitionBehavior] = useState('normal');

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
      setMouseVelocity({ 
        x: e.clientX - mousePosition.x, 
        y: e.clientY - mousePosition.y 
      });
      setMouseTrail(prev => [...prev.slice(-20), { x: e.clientX, y: e.clientY }]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mousePosition.x, mousePosition.y]);

  // Scroll position tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setActiveSection(getActiveSection());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Window size tracking
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Time tracking for time-based animations
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setOrbitalRotation(prev => prev + rotationSpeed);
      setWaveAmplitude(1 + Math.sin(Date.now() / 1000) * 0.5);
      setPulseFrequency(1 + Math.cos(Date.now() / 2000) * 0.3);
    }, 50);
    return () => clearInterval(interval);
  }, [rotationSpeed]);

  // Complex animation controller
  useEffect(() => {
    const animationController = setInterval(() => {
      setAnimationSpeed(prev => 1 + Math.sin(Date.now() / 3000) * 0.5);
      setGlowIntensity(prev => 0.5 + Math.cos(Date.now() / 2000) * 0.3);
      setBlurIntensity(prev => 3 + Math.sin(Date.now() / 4000) * 2);
      setScaleFactor(prev => 1 + Math.sin(Date.now() / 5000) * 0.2);
      setOpacityLevel(prev => 0.7 + Math.cos(Date.now() / 3500) * 0.3);
    }, 100);
    return () => clearInterval(animationController);
  }, []);

  // Particle system controller
  useEffect(() => {
    const particleController = setInterval(() => {
      setParticleCount(prev => 50 + Math.floor(Math.sin(Date.now() / 2000) * 30));
      setGridDensity(prev => 100 + Math.floor(Math.cos(Date.now() / 3000) * 50));
    }, 500);
    return () => clearInterval(particleController);
  }, []);

  // Color scheme cycling
  useEffect(() => {
    const colorController = setInterval(() => {
      const schemes = ['purple', 'blue', 'cyan', 'pink', 'indigo', 'green'];
      const currentIndex = schemes.indexOf(colorScheme);
      setColorScheme(schemes[(currentIndex + 1) % schemes.length]);
    }, 10000);
    return () => clearInterval(colorController);
  }, [colorScheme]);

  // Complex helper functions
  const getActiveSection = () => {
    const sections = ['hero', 'features', 'stats', 'testimonials'];
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    return sections[Math.floor(scrollPercent * sections.length)] || 'hero';
  };

  const calculate3DTransform = (x, y, z) => {
    return `translate3d(${x}px, ${y}px, ${z}px)`;
  };

  const calculateRotation = (x, y, z) => {
    return `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  };

  const calculateScale = (x, y, z) => {
    return `scale3d(${x}, ${y}, ${z})`;
  };

  const calculateSkew = (x, y) => {
    return `skew(${x}deg, ${y}deg)`;
  };

  const calculateMatrix = (a, b, c, d, e, f) => {
    return `matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f})`;
  };

  const calculateMatrix3D = (values) => {
    return `matrix3d(${values.join(', ')})`;
  };

  const calculatePerspective = (distance) => {
    return `perspective(${distance}px)`;
  };

  const calculateFilter = (blur, brightness, contrast, grayscale, hueRotate, invert, saturate, sepia) => {
    return `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) grayscale(${grayscale}) hue-rotate(${hueRotate}deg) invert(${invert}) saturate(${saturate}) sepia(${sepia})`;
  };

  const calculateBoxShadow = (x, y, blur, spread, color, inset) => {
    return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}`;
  };

  const calculateTextShadow = (x, y, blur, color) => {
    return `${x}px ${y}px ${blur}px ${color}`;
  };

  const calculateGradient = (type, colors, direction) => {
    const colorString = colors.join(', ');
    return `${type}-gradient(${direction}, ${colorString})`;
  };

  const calculateAnimation = (name, duration, timing, delay, iteration, direction, fill, playState) => {
    return `${name} ${duration} ${timing} ${delay} ${iteration} ${direction} ${fill} ${playState}`;
  };

  const calculateTransition = (property, duration, timing, delay) => {
    return `${property} ${duration} ${timing} ${delay}`;
  };

  const calculateTransformOrigin = (x, y, z) => {
    return `${x} ${y} ${z}`;
  };

  const calculateClipPath = (shape, values) => {
    const shapeMap = {
      circle: `circle(${values})`,
      ellipse: `ellipse(${values})`,
      inset: `inset(${values})`,
      polygon: `polygon(${values})`,
      path: `path('${values}')`
    };
    return shapeMap[shape] || 'none';
  };

  const calculateMaskImage = (source, mode, position, size, repeat) => {
    return `mask-image: url(${source}); mask-mode: ${mode}; mask-position: ${position}; mask-size: ${size}; mask-repeat: ${repeat}`;
  };

  const calculateBackdropFilter = (blur, brightness, contrast, grayscale) => {
    return `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) grayscale(${grayscale})`;
  };

  const calculateMixBlendMode = (mode) => {
    return mode;
  };

  const calculateIsolation = (mode) => {
    return mode;
  };

  const calculateWillChange = (properties) => {
    return Array.isArray(properties) ? properties.join(', ') : properties;
  };

  const calculateContain = (values) => {
    return Array.isArray(values) ? values.join(' ') : values;
  };

  const calculateContentVisibility = (mode) => {
    return mode;
  };

  const calculateInset = (top, right, bottom, left) => {
    return `${top} ${right} ${bottom} ${left}`;
  };

  const calculateOverflow = (x, y) => {
    return `${x} ${y}`;
  };

  const calculateOverscrollBehavior = (x, y) => {
    return `${x} ${y}`;
  };

  const calculateColumn = (count, width, gap, rule, ruleColor, ruleStyle, ruleWidth, span, fill) => {
    return {
      columnCount: count,
      columnWidth: width,
      columnGap: gap,
      columnRule: rule,
      columnRuleColor: ruleColor,
      columnRuleStyle: ruleStyle,
      columnRuleWidth: ruleWidth,
      columnSpan: span,
      columnFill: fill
    };
  };

  const calculateBreak = (before, after, inside) => {
    return {
      breakBefore: before,
      breakAfter: after,
      breakInside: inside
    };
  };

  const calculateBoxDecoration = (breakValue) => {
    return breakValue;
  };

  const calculateBoxSizing = (mode) => {
    return mode;
  };

  const calculateLayout = (display, position, float, clear, verticalAlign) => {
    return {
      display,
      position,
      float,
      clear,
      verticalAlign
    };
  };

  const calculateText = (align, alignLast, justify, lineHeight, wordSpacing, letterSpacing, indent, overflow, transform, whiteSpace, wordBreak, overflowWrap, tabSize, hyphens) => {
    return {
      textAlign: align,
      textAlignLast: alignLast,
      textJustify: justify,
      lineHeight,
      wordSpacing,
      letterSpacing,
      textIndent: indent,
      textOverflow: overflow,
      textTransform: transform,
      whiteSpace,
      wordBreak,
      overflowWrap,
      tabSize,
      hyphens
    };
  };

  const calculateInteraction = (pointerEvents, userSelect, resize, cursor, caretColor, touchAction) => {
    return {
      pointerEvents,
      userSelect,
      resize,
      cursor,
      caretColor,
      touchAction
    };
  };

  const calculateBorder = (width, style, color, radius, outlineWidth, outlineStyle, outlineColor, outlineOffset) => {
    return {
      borderWidth: width,
      borderStyle: style,
      borderColor: color,
      borderRadius: radius,
      outlineWidth,
      outlineStyle,
      outlineColor,
      outlineOffset
    };
  };

  const calculateBackground = (position, size, repeat, attachment, origin, clip, color, image, blendMode) => {
    return {
      backgroundPosition: position,
      backgroundSize: size,
      backgroundRepeat: repeat,
      backgroundAttachment: attachment,
      backgroundOrigin: origin,
      backgroundClip: clip,
      backgroundColor: color,
      backgroundImage: image,
      backgroundBlendMode: blendMode
    };
  };

  const calculateObject = (fit, position) => {
    return {
      objectFit: fit,
      objectPosition: position
    };
  };

  const calculateFilterComplex = (blur, brightness, contrast, grayscale, hueRotate, invert, saturate, sepia, dropShadow) => {
    const filters = [];
    if (blur) filters.push(`blur(${blur}px)`);
    if (brightness) filters.push(`brightness(${brightness})`);
    if (contrast) filters.push(`contrast(${contrast})`);
    if (grayscale) filters.push(`grayscale(${grayscale})`);
    if (hueRotate) filters.push(`hue-rotate(${hueRotate}deg)`);
    if (invert) filters.push(`invert(${invert})`);
    if (saturate) filters.push(`saturate(${saturate})`);
    if (sepia) filters.push(`sepia(${sepia})`);
    if (dropShadow) filters.push(`drop-shadow(${dropShadow})`);
    return filters.join(' ');
  };

  const calculateAnimationComplex = (animations) => {
    return animations.map(anim => {
      const { name, duration, timing, delay, iteration, direction, fill, playState } = anim;
      return `${name} ${duration} ${timing} ${delay} ${iteration} ${direction} ${fill} ${playState}`;
    }).join(', ');
  };

  const calculateTransitionComplex = (transitions) => {
    return transitions.map(trans => {
      const { property, duration, timing, delay } = trans;
      return `${property} ${duration} ${timing} ${delay}`;
    }).join(', ');
  };

  const calculateTransformComplex = (transforms) => {
    return transforms.map(trans => {
      const { type, values } = trans;
      switch (type) {
        case 'translate': return `translate(${values.join('px, ')}px)`;
        case 'translate3d': return `translate3d(${values.join('px, ')}px)`;
        case 'translateX': return `translateX(${values[0]}px)`;
        case 'translateY': return `translateY(${values[0]}px)`;
        case 'translateZ': return `translateZ(${values[0]}px)`;
        case 'scale': return `scale(${values.join(', ')})`;
        case 'scale3d': return `scale3d(${values.join(', ')})`;
        case 'scaleX': return `scaleX(${values[0]})`;
        case 'scaleY': return `scaleY(${values[0]})`;
        case 'scaleZ': return `scaleZ(${values[0]})`;
        case 'rotate': return `rotate(${values[0]}deg)`;
        case 'rotate3d': return `rotate3d(${values.join(', ')})`;
        case 'rotateX': return `rotateX(${values[0]}deg)`;
        case 'rotateY': return `rotateY(${values[0]}deg)`;
        case 'rotateZ': return `rotateZ(${values[0]}deg)`;
        case 'skew': return `skew(${values.join('deg, ')}deg)`;
        case 'skewX': return `skewX(${values[0]}deg)`;
        case 'skewY': return `skewY(${values[0]}deg)`;
        case 'matrix': return `matrix(${values.join(', ')})`;
        case 'matrix3d': return `matrix3d(${values.join(', ')})`;
        case 'perspective': return `perspective(${values[0]}px)`;
        default: return '';
      }
    }).join(' ');
  };

  // Complex animation generators
  const generateParticleAnimation = (index, total) => {
    const delay = (index / total) * 5;
    const duration = 20 + Math.random() * 10;
    const amplitude = 100 + Math.random() * 200;
    const frequency = 0.5 + Math.random() * 1.5;
    return {
      animationName: `particle-float-${index}`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      animationFillMode: 'none',
      animationPlayState: 'running'
    };
  };

  const generateOrbitalAnimation = (radius, speed, direction) => {
    return {
      animationName: 'orbital-motion',
      animationDuration: `${speed}s`,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDirection: direction,
      animationFillMode: 'none',
      animationPlayState: 'running',
      transform: `rotate(0deg) translateX(${radius}px) rotate(0deg)`
    };
  };

  const generatePulseAnimation = (scale, duration) => {
    return {
      animationName: 'pulse-effect',
      animationDuration: `${duration}s`,
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      animationFillMode: 'none',
      animationPlayState: 'running',
      transform: `scale(${scale})`
    };
  };

  const generateWaveAnimation = (amplitude, frequency, phase) => {
    return {
      animationName: 'wave-motion',
      animationDuration: `${10 / frequency}s`,
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDirection: 'normal',
      animationFillMode: 'none',
      animationPlayState: 'running',
      transform: `translateY(${Math.sin(phase) * amplitude}px)`
    };
  };

  const generateGlowAnimation = (intensity, color) => {
    return {
      animationName: 'glow-effect',
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      animationFillMode: 'none',
      animationPlayState: 'running',
      boxShadow: `0 0 ${20 * intensity}px ${color}`
    };
  };

  const generateRotationAnimation = (axis, speed, direction) => {
    return {
      animationName: `${axis}-rotation`,
      animationDuration: `${speed}s`,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDirection: direction,
      animationFillMode: 'none',
      animationPlayState: 'running',
      transform: `rotate${axis.toUpperCase()}(0deg)`
    };
  };

  const generateComplexAnimation = (type, params) => {
    const animations = [];
    
    switch (type) {
      case 'particle':
        for (let i = 0; i < params.count; i++) {
          animations.push(generateParticleAnimation(i, params.count));
        }
        break;
      case 'orbital':
        animations.push(generateOrbitalAnimation(params.radius, params.speed, params.direction));
        break;
      case 'pulse':
        animations.push(generatePulseAnimation(params.scale, params.duration));
        break;
      case 'wave':
        animations.push(generateWaveAnimation(params.amplitude, params.frequency, params.phase));
        break;
      case 'glow':
        animations.push(generateGlowAnimation(params.intensity, params.color));
        break;
      case 'rotation':
        animations.push(generateRotationAnimation(params.axis, params.speed, params.direction));
        break;
      default:
        break;
    }
    
    return animations;
  };

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
    <div className="min-h-screen bg-black text-white overflow-hidden relative" style={{
      backgroundImage: 'url("../../images/hero_1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Professional Background Animation */}
      <div className="fixed inset-0 z-0">
        {/* Dark background overlay for better visuals */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Professional gradient overlay */}
        <div className="professional-gradient-overlay absolute inset-0"></div>
        
        {/* Professional floating orbs with shadows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="orb-1 absolute top-10 left-10"></div>
          <div className="orb-2 absolute top-1/4 right-1/4"></div>
          <div className="orb-3 absolute bottom-1/4 left-1/3"></div>
          <div className="orb-4 absolute bottom-20 right-20"></div>
        </div>
        
        {/* Professional particle system */}
        <div className="particle-system absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        {/* Professional light beams */}
        <div className="absolute inset-0">
          <div className="light-beam-professional absolute top-0 left-1/4"></div>
          <div className="light-beam-professional absolute top-0 right-1/4" style={{animationDelay: '5s'}}></div>
          <div className="light-beam-professional absolute top-0 left-1/2" style={{animationDelay: '10s'}}></div>
        </div>
        
        {/* Professional wave patterns */}
        <div className="wave-pattern absolute inset-0"></div>
        
        {/* Professional Shadow Effects */}
        <div className="shadow-layer absolute inset-0"></div>
        
        {/* Beautiful Professional Snowflakes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large snowflakes with purple tint */}
          <div className="snowflake-large absolute top-[-20px] left-[10%]" style={{animationDelay: '0s'}}>
            <div className="w-6 h-6 bg-gradient-to-br from-purple-400/60 to-purple-600/40 rounded-full shadow-lg shadow-purple-500/30 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-large absolute top-[-20px] left-[30%]" style={{animationDelay: '3s'}}>
            <div className="w-6 h-6 bg-gradient-to-br from-cyan-400/60 to-cyan-600/40 rounded-full shadow-lg shadow-cyan-500/30 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-large absolute top-[-20px] left-[50%]" style={{animationDelay: '6s'}}>
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400/60 to-blue-600/40 rounded-full shadow-lg shadow-blue-500/30 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-large absolute top-[-20px] left-[70%]" style={{animationDelay: '9s'}}>
            <div className="w-6 h-6 bg-gradient-to-br from-pink-400/60 to-pink-600/40 rounded-full shadow-lg shadow-pink-500/30 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-large absolute top-[-20px] left-[90%]" style={{animationDelay: '12s'}}>
            <div className="w-6 h-6 bg-gradient-to-br from-indigo-400/60 to-indigo-600/40 rounded-full shadow-lg shadow-indigo-500/30 backdrop-blur-sm"></div>
          </div>
          
          {/* Medium snowflakes with mixed colors */}
          <div className="snowflake-medium absolute top-[-20px] left-[15%]" style={{animationDelay: '1s'}}>
            <div className="w-4 h-4 bg-gradient-to-br from-purple-300/50 to-purple-500/30 rounded-full shadow-md shadow-purple-400/20 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-medium absolute top-[-20px] left-[25%]" style={{animationDelay: '4s'}}>
            <div className="w-4 h-4 bg-gradient-to-br from-cyan-300/50 to-cyan-500/30 rounded-full shadow-md shadow-cyan-400/20 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-medium absolute top-[-20px] left-[45%]" style={{animationDelay: '7s'}}>
            <div className="w-4 h-4 bg-gradient-to-br from-blue-300/50 to-blue-500/30 rounded-full shadow-md shadow-blue-400/20 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-medium absolute top-[-20px] left-[65%]" style={{animationDelay: '10s'}}>
            <div className="w-4 h-4 bg-gradient-to-br from-pink-300/50 to-pink-500/30 rounded-full shadow-md shadow-pink-400/20 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-medium absolute top-[-20px] left-[85%]" style={{animationDelay: '13s'}}>
            <div className="w-4 h-4 bg-gradient-to-br from-indigo-300/50 to-indigo-500/30 rounded-full shadow-md shadow-indigo-400/20 backdrop-blur-sm"></div>
          </div>
          
          {/* Small snowflakes with light colors */}
          <div className="snowflake-small absolute top-[-20px] left-[5%]" style={{animationDelay: '0.5s'}}>
            <div className="w-2 h-2 bg-gradient-to-br from-purple-200/40 to-purple-400/20 rounded-full shadow-sm shadow-purple-300/10 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-small absolute top-[-20px] left-[20%]" style={{animationDelay: '2.5s'}}>
            <div className="w-2 h-2 bg-gradient-to-br from-cyan-200/40 to-cyan-400/20 rounded-full shadow-sm shadow-cyan-300/10 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-small absolute top-[-20px] left-[35%]" style={{animationDelay: '5s'}}>
            <div className="w-2 h-2 bg-gradient-to-br from-blue-200/40 to-blue-400/20 rounded-full shadow-sm shadow-blue-300/10 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-small absolute top-[-20px] left-[55%]" style={{animationDelay: '7.5s'}}>
            <div className="w-2 h-2 bg-gradient-to-br from-pink-200/40 to-pink-400/20 rounded-full shadow-sm shadow-pink-300/10 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-small absolute top-[-20px] left-[75%]" style={{animationDelay: '10s'}}>
            <div className="w-2 h-2 bg-gradient-to-br from-indigo-200/40 to-indigo-400/20 rounded-full shadow-sm shadow-indigo-300/10 backdrop-blur-sm"></div>
          </div>
          <div className="snowflake-small absolute top-[-20px] left-[95%]" style={{animationDelay: '12.5s'}}>
            <div className="w-2 h-2 bg-gradient-to-br from-purple-200/40 to-purple-400/20 rounded-full shadow-sm shadow-purple-300/10 backdrop-blur-sm"></div>
          </div>
          
          {/* Extra small snowflakes for depth */}
          <div className="snowflake-tiny absolute top-[-20px] left-[8%]" style={{animationDelay: '1.5s'}}>
            <div className="w-1 h-1 bg-gradient-to-br from-white/30 to-purple-300/10 rounded-full shadow-xs shadow-white/5 backdrop-blur-xs"></div>
          </div>
          <div className="snowflake-tiny absolute top-[-20px] left-[18%]" style={{animationDelay: '3.5s'}}>
            <div className="w-1 h-1 bg-gradient-to-br from-white/30 to-cyan-300/10 rounded-full shadow-xs shadow-white/5 backdrop-blur-xs"></div>
          </div>
          <div className="snowflake-tiny absolute top-[-20px] left-[28%]" style={{animationDelay: '5.5s'}}>
            <div className="w-1 h-1 bg-gradient-to-br from-white/30 to-blue-300/10 rounded-full shadow-xs shadow-white/5 backdrop-blur-xs"></div>
          </div>
          <div className="snowflake-tiny absolute top-[-20px] left-[38%]" style={{animationDelay: '7.5s'}}>
            <div className="w-1 h-1 bg-gradient-to-br from-white/30 to-pink-300/10 rounded-full shadow-xs shadow-white/5 backdrop-blur-xs"></div>
          </div>
          <div className="snowflake-tiny absolute top-[-20px] left-[48%]" style={{animationDelay: '9.5s'}}>
            <div className="w-1 h-1 bg-gradient-to-br from-white/30 to-indigo-300/10 rounded-full shadow-xs shadow-white/5 backdrop-blur-xs"></div>
          </div>
          <div className="snowflake-tiny absolute top-[-20px] left-[58%]" style={{animationDelay: '11.5s'}}>
            <div className="w-1 h-1 bg-gradient-to-br from-white/30 to-purple-300/10 rounded-full shadow-xs shadow-white/5 backdrop-blur-xs"></div>
          </div>
          <div className="snowflake-tiny absolute top-[-20px] left-[68%]" style={{animationDelay: '13.5s'}}>
            <div className="w-1 h-1 bg-gradient-to-br from-white/30 to-cyan-300/10 rounded-full shadow-xs shadow-white/5 backdrop-blur-xs"></div>
          </div>
          <div className="snowflake-tiny absolute top-[-20px] left-[78%]" style={{animationDelay: '15.5s'}}>
            <div className="w-1 h-1 bg-gradient-to-br from-white/30 to-blue-300/10 rounded-full shadow-xs shadow-white/5 backdrop-blur-xs"></div>
          </div>
          <div className="snowflake-tiny absolute top-[-20px] left-[88%]" style={{animationDelay: '17.5s'}}>
            <div className="w-1 h-1 bg-gradient-to-br from-white/30 to-pink-300/10 rounded-full shadow-xs shadow-white/5 backdrop-blur-xs"></div>
          </div>
          <div className="snowflake-tiny absolute top-[-20px] left-[98%]" style={{animationDelay: '19.5s'}}>
            <div className="w-1 h-1 bg-gradient-to-br from-white/30 to-indigo-300/10 rounded-full shadow-xs shadow-white/5 backdrop-blur-xs"></div>
          </div>
        </div>
        
        {/* Ultimate mouse follower system */}
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-600/40 via-purple-600/30 to-cyan-600/40 rounded-full blur-3xl pointer-events-none transition-all duration-100 ease-out"
          style={{
            left: mousePosition.x - 400,
            top: mousePosition.y - 400
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-500/50 via-blue-500/40 to-pink-500/50 rounded-full blur-2xl pointer-events-none transition-all duration-200 ease-out"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/60 via-purple-500/50 to-blue-500/60 rounded-full blur-xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200
          }}
        />
        <div 
          className="absolute w-[200px] h-[200px] bg-gradient-to-r from-pink-500/70 to-cyan-500/70 rounded-full blur-lg pointer-events-none transition-all duration-400 ease-out"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100
          }}
        />
        <div 
          className="absolute w-[100px] h-[100px] bg-white/30 rounded-full blur-md pointer-events-none transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            {/* DevHire branding removed */}
          </div>
          
          {/* Cross-Page Connection Status */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/20">
              <div className={`w-2 h-2 rounded-full ${
                connectionStatus === 'connected' ? 'bg-green-500 animate-pulse' : 
                connectionStatus === 'connecting' ? 'bg-yellow-500 animate-pulse' : 
                'bg-red-500'
              }`}></div>
              <span className="text-xs text-white font-medium">
                {connectionStatus === 'connected' ? 'Connected' : 
                 connectionStatus === 'connecting' ? 'Connecting...' : 
                 'Offline'}
              </span>
              {activePages.length > 0 && (
                <span className="text-xs text-gray-400">
                  ({activePages.length} active)
                </span>
              )}
            </div>
          </div>
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
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-text-glow">
                  <span className="block">Hire the</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Future of Tech</span>
                  <span className="block">Talent</span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-lg">
                  Transform your hiring process with AI-powered matching, automated screening, and predictive analytics. Find the perfect developers in minutes, not months.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="group relative px-16 py-8 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-3xl font-bold text-lg text-white transition-all duration-500 hover:shadow-3xl hover:shadow-purple-400/60 flex items-center justify-center gap-4 overflow-hidden">
                    {/* Bright animated background effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-cyan-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 rounded-3xl border-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Bright rotating gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/50 via-cyan-400/50 to-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Extra bright glow layer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-300/40 via-cyan-300/40 to-pink-300/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Button content */}
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-purple-400/60 group-hover:rotate-180 transition-transform duration-500">
                        <Rocket className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent group-hover:text-purple-200 transition-colors duration-300">
                        Start Hiring Now
                      </span>
                    </div>
                    
                    {/* Bright particle effects on hover */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Bright inner glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-300/20 via-cyan-300/20 to-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Bright pulsing ring effect */}
                    <div className="absolute -inset-2 rounded-3xl border-2 border-purple-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Outer bright glow */}
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-pink-400/20 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </button>
                </div>
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
            
            {/* Right Content - Professional Image Showcase */}
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-3xl rotate-45 animate-spin-slow shadow-2xl shadow-purple-500/50"></div>
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-full animate-pulse shadow-2xl shadow-cyan-500/50"></div>
              <div className="absolute top-1/2 -left-48 w-56 h-56 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-2xl animate-bounce-slow shadow-2xl shadow-indigo-500/40"></div>
              <div className="absolute top-1/3 -right-48 w-72 h-72 bg-gradient-to-r from-pink-600/30 to-cyan-600/30 rounded-full animate-float-slow shadow-2xl shadow-pink-500/40"></div>
              
              {/* Professional Showcase Container */}
              <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl rounded-3xl border-2 border-slate-700/50 overflow-hidden shadow-2xl shadow-black/50">
                {/* Professional Frame Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-purple-500/20 pointer-events-none"></div>
                <div className="absolute inset-1 rounded-3xl border border-slate-600/30 pointer-events-none"></div>
                
                {/* Professional Cover Header */}
                <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 via-black/60 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30">
                        <span className="text-xs text-purple-300 font-medium">Live Demo</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Image Gallery - Mobile Optimized */}
                <div className="mobile-image-gallery tablet-image-gallery relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/70 image-glow-effect">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
                        index === currentImageIndex 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-95'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Dashboard ${index + 1}`}
                        className="w-full h-full object-cover object-center transform-gpu transition-all duration-1500"
                        style={{
                          filter: index === currentImageIndex ? 'brightness(1) contrast(1.1) saturate(1.1)' : 'brightness(0.8) contrast(0.9) saturate(0.9)'
                        }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 mix-blend-overlay professional-image-overlay"></div>
                    </div>
                  ))}
                  
                  {/* Controls - Mobile Optimized */}
                  <div className="mobile-controls absolute top-4 sm:top-6 lg:top-20 left-4 sm:left-6 right-4 sm:right-6 z-30 flex justify-between items-center">
                    <div className="px-3 py-1.5 sm:px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-white/20">
                      <span className="text-xs sm:text-sm text-white font-medium">{currentImageIndex + 1} / {images.length}</span>
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110"
                      >
                        {isAutoPlaying ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4" />}
                      </button>
                    </div>
                  </div>
                  
                  {/* Navigation - Mobile Optimized */}
                  <button
                    onClick={prevImage}
                    className="mobile-nav-buttons absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="mobile-nav-buttons absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </button>
                  
                  {/* Dots - Mobile Optimized */}
                  <div className="mobile-dots absolute bottom-4 sm:bottom-6 left-1/2 z-30 -translate-x-1/2 flex gap-2 sm:gap-3">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'w-6 sm:w-8 bg-white'
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
                className="group relative professional-feature-card bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl rounded-3xl border border-purple-500/30 p-8 overflow-hidden transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{transitionDelay: '100ms'}}></div>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundClip: 'padding-box', borderImage: 'linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(6, 182, 212, 0.5), rgba(147, 51, 234, 0.5)) 1'}}></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute top-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute bottom-4 left-8 w-1 h-1 bg-pink-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.4s'}}></div>
                  <div className="absolute bottom-8 right-4 w-1 h-1 bg-blue-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.6s'}}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Enhanced icon container */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-purple-500/30`}>
                    <div className="text-white text-2xl transform-gpu transition-transform duration-500 group-hover:scale-125">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Enhanced title */}
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-500 transform-gpu group-hover:translate-y-[-2px]">
                    {feature.title}
                  </h3>
                  
                  {/* Enhanced description */}
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500 transform-gpu group-hover:translate-y-[-1px]">
                    {feature.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform-gpu group-hover:scale-100 group-hover:rotate-180">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="group relative professional-stats-card bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl rounded-3xl border border-purple-500/30 p-12 overflow-hidden transform-gpu transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/20">
            {/* Animated background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-900" style={{transitionDelay: '200ms'}}></div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-8 left-8 w-2 h-2 bg-purple-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100"></div>
              <div className="absolute top-12 right-12 w-2 h-2 bg-cyan-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute bottom-8 left-12 w-2 h-2 bg-pink-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.6s'}}></div>
              <div className="absolute bottom-12 right-8 w-2 h-2 bg-blue-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.9s'}}></div>
            </div>
            
            {/* Real-time Status Indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/20 z-20">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-xs text-white font-medium">
                {isConnected ? 'Live' : 'Offline'}
              </span>
              <span className="text-xs text-gray-400">
                {lastUpdate.toLocaleTimeString()}
              </span>
            </div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { 
                    number: `${Math.floor(animatedNumbers.developers / 1000)}K+`, 
                    label: "Active Developers", 
                    change: "+12%", 
                    icon: <Code2 className="w-5 h-5" />,
                    realTime: true
                  },
                  { 
                    number: `${animatedNumbers.companies}+`, 
                    label: "Companies", 
                    change: "+25%", 
                    icon: <Globe className="w-5 h-5" />,
                    realTime: true
                  },
                  { 
                    number: `${animatedNumbers.successRate}%`, 
                    label: "Success Rate", 
                    change: "+5%", 
                    icon: <TrendingUp className="w-5 h-5" />,
                    realTime: true
                  },
                  { 
                    number: `${animatedNumbers.hireTime}h`, 
                    label: "Avg. Hire Time", 
                    change: "-80%", 
                    icon: <Rocket className="w-5 h-5" />,
                    realTime: true
                  }
                ].map((stat, index) => (
                  <div key={index} className="group/stat text-center transform-gpu transition-all duration-500 hover:scale-105">
                    {/* Icon container */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl mb-4 transform-gpu transition-all duration-500 group-hover/stat:scale-110 group-hover/stat:rotate-6 border border-purple-500/30">
                      <div className="text-purple-400 transform-gpu transition-transform duration-500 group-hover/stat:scale-125">
                        {stat.icon}
                      </div>
                    </div>
                    
                    {/* Number */}
                    <div className="relative">
                      <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 transform-gpu transition-all duration-500 group-hover/stat:scale-110 group-hover/stat:translate-y-[-2px]">
                        {stat.number}
                      </div>
                      {stat.realTime && (
                        <div className="absolute -top-2 -right-2 flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
                        </div>
                      )}
                    </div>
                    
                    {/* Label */}
                    <div className="text-gray-300 mb-2 group-hover/stat:text-gray-200 transition-colors duration-500 transform-gpu group-hover/stat:translate-y-[-1px]">
                      {stat.label}
                    </div>
                    
                    {/* Change indicator */}
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold transform-gpu transition-all duration-500 group-hover/stat:scale-105 ${
                      stat.change.startsWith('+') 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    }`}>
                      <span className="transform-gpu transition-transform duration-500 group-hover/stat:scale-125">
                        {stat.change.startsWith('+') ? '↑' : '↓'}
                      </span>
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Live Metrics Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-300 font-medium">REAL-TIME FEED</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Live Platform Activity
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Monitor real-time hiring activity across the DevHire platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* New Applications */}
            <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl rounded-2xl border border-green-500/30 p-6 overflow-hidden transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-transparent to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-3 right-3 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-green-400 font-semibold">LIVE</span>
                </div>
                
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {animatedNumbers.newApplications}
                </div>
                <div className="text-sm text-gray-300 mb-3">New Applications</div>
                <div className="flex items-center gap-2 text-xs text-green-400">
                  <ArrowRight className="w-3 h-3" />
                  <span>Last {lastUpdate.toLocaleTimeString()}</span>
                </div>
              </div>
            </div>

            {/* Active Interviews */}
            <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl rounded-2xl border border-blue-500/30 p-6 overflow-hidden transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-3 right-3 flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-blue-400 font-semibold">LIVE</span>
                </div>
                
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {animatedNumbers.activeInterviews}
                </div>
                <div className="text-sm text-gray-300 mb-3">Active Interviews</div>
                <div className="flex items-center gap-2 text-xs text-blue-400">
                  <ArrowRight className="w-3 h-3" />
                  <span>In Progress</span>
                </div>
              </div>
            </div>

            {/* Pending Reviews */}
            <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl rounded-2xl border border-purple-500/30 p-6 overflow-hidden transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-3 right-3 flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-purple-400 font-semibold">LIVE</span>
                </div>
                
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {animatedNumbers.pendingReviews}
                </div>
                <div className="text-sm text-gray-300 mb-3">Pending Reviews</div>
                <div className="flex items-center gap-2 text-xs text-purple-400">
                  <ArrowRight className="w-3 h-3" />
                  <span>Awaiting Action</span>
                </div>
              </div>
            </div>

            {/* Completed Hires */}
            <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl rounded-2xl border border-orange-500/30 p-6 overflow-hidden transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-3 right-3 flex items-center gap-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-orange-400 font-semibold">TODAY</span>
                </div>
                
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  {animatedNumbers.completedHires}
                </div>
                <div className="text-sm text-gray-300 mb-3">Completed Hires</div>
                <div className="flex items-center gap-2 text-xs text-orange-400">
                  <ArrowRight className="w-3 h-3" />
                  <span>Success Rate 95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional 3D Data Visualization Section */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-4 sm:mb-6">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-purple-300">REAL-TIME ANALYTICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Real-Time Hiring Analytics
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300">
              Monitor talent acquisition trends, skill demands, and hiring performance across our platform
            </p>
          </div>
          
          {/* Mobile-First 3D Analytics Dashboard */}
          <div className="space-y-8 lg:space-y-12">
            
            {/* Professional Skills Distribution - Enhanced Circle Design */}
            <div className="group enhanced-metric-card mobile-touch-card relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-purple-500/40 p-6 sm:p-8 lg:p-12 overflow-hidden transform-gpu transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/30">
              {/* Animated background gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-900" style={{transitionDelay: '200ms'}}></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
                <div className="absolute top-8 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100"></div>
                <div className="absolute top-12 right-12 w-2 h-2 bg-purple-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute bottom-8 left-12 w-2 h-2 bg-pink-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.6s'}}></div>
                <div className="absolute bottom-12 right-8 w-2 h-2 bg-blue-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.9s'}}></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent transform-gpu transition-all duration-500 group-hover:scale-105">
                  In-Demand Skills Distribution
                </h3>
                <div className="relative h-[30rem] sm:h-[35rem] lg:h-[40rem] mb-6 sm:mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80">
                      {metricsData.skillsData.map((skill, index) => (
                        <div
                          key={index}
                          className="absolute inset-0"
                          style={{ transform: `rotate(${skill.offset}deg)` }}
                        >
                          <div 
                            className={`group/skill absolute top-0 left-1/2 -translate-x-1/2 w-2 sm:w-3 bg-gradient-to-t ${skill.color} rounded-full origin-bottom transform-gpu transition-all duration-1000 hover:scale-125 shadow-lg cursor-pointer`}
                            style={{ 
                              height: `${skill.percentage * 0.8}px sm:${skill.percentage * 1.0}px lg:${skill.percentage * 1.2}px`,
                              animation: `skill-pulse ${2 + index * 0.3}s ease-in-out infinite, skill-glow ${3 + index * 0.4}s ease-in-out infinite`,
                              boxShadow: `0 0 20px ${skill.color.includes('purple') ? 'rgba(147, 51, 234, 0.6)' : skill.color.includes('blue') ? 'rgba(59, 130, 246, 0.6)' : skill.color.includes('cyan') ? 'rgba(6, 182, 212, 0.6)' : 'rgba(236, 72, 153, 0.6)'}`
                            }}
                          >
                            {/* Hover effect for skill bars */}
                            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <div 
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 sm:-translate-y-10 lg:-translate-y-12 bg-gradient-to-br from-black/90 to-black/80 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap shadow-xl border border-white/20 transform-gpu transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:border-purple-400/50"
                            style={{ transform: `rotate(-${skill.offset}deg)` }}
                          >
                            <span className="hidden sm:inline">{skill.label}: </span>{skill.percentage}%
                          </div>
                        </div>
                      ))}
                      <div className="group/center absolute inset-4 sm:inset-6 lg:inset-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border-2 border-purple-500/40 flex items-center justify-center shadow-2xl transform-gpu transition-all duration-500 hover:scale-105 hover:border-purple-400/60">
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse transform-gpu transition-transform duration-500 group-hover/center:scale-110">
                            {animatedNumbers.activeSkills.toLocaleString()}
                          </div>
                          <div className="text-sm sm:text-base text-gray-300 mt-2 group-hover/center:text-gray-200 transition-colors duration-500">Active Skills</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center transform-gpu transition-all duration-500 group-hover:scale-105">
                  <span className="text-sm sm:text-base font-semibold text-gray-300">Top Technologies</span>
                  <span className="text-sm sm:text-base font-bold text-cyan-400 animate-pulse">Updated Live</span>
                </div>
              </div>
            </div>

            {/* 3D Company Metrics Grid - Mobile Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {metricsData.companyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="enhanced-metric-card mobile-touch-card group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl rounded-xl sm:rounded-2xl border border-purple-500/40 p-3 sm:p-4 lg:p-6 overflow-hidden transform-gpu transition-all duration-700 hover:scale-105 hover:translate-z-10 hover:shadow-2xl hover:shadow-purple-500/30"
                  style={{animation: `enhanced-metric-pulse 6s ease-in-out infinite ${1 + index * 0.3}s`}}
                >
                  {/* Animated background gradients */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-15 rounded-xl sm:rounded-2xl transition-opacity duration-700`}></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-900" style={{transitionDelay: '200ms'}}></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
                    <div className="absolute top-2 left-2 w-1 h-1 bg-purple-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100"></div>
                    <div className="absolute top-3 right-3 w-1 h-1 bg-cyan-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.2s'}}></div>
                    <div className="absolute bottom-2 left-3 w-1 h-1 bg-pink-400 rounded-full animate-float-particle opacity-0 group-hover:opacity-100" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Enhanced icon container */}
                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 bg-gradient-to-r ${metric.gradient} rounded-lg sm:rounded-xl mb-3 sm:mb-4 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-purple-500/30`}>
                      <div className="text-white transform-gpu transition-transform duration-500 group-hover:scale-125">
                        {metric.icon}
                      </div>
                    </div>
                    
                    {/* Enhanced title */}
                    <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2 transform-gpu transition-all duration-500 group-hover:translate-y-[-1px] group-hover:text-purple-200">
                      {metric.title}
                    </h4>
                    
                    {/* Enhanced value and change */}
                    <div className="flex items-baseline gap-1 sm:gap-2 mb-2">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:translate-y-[-2px]">
                        {metric.value}
                      </span>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs sm:text-sm font-semibold transform-gpu transition-all duration-500 group-hover:scale-105 ${
                        metric.change.startsWith('+') 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      }`}>
                        <span className="transform-gpu transition-transform duration-500 group-hover:scale-125">
                          {metric.change.startsWith('+') ? '↑' : '↓'}
                        </span>
                        {metric.change}
                      </span>
                    </div>
                    
                    {/* Enhanced description */}
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors duration-500 transform-gpu group-hover:translate-y-[-0.5px]">
                      {metric.description}
                    </p>
                    
                    {/* Enhanced progress bar */}
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden transform-gpu transition-all duration-500 group-hover:scale-105">
                      <div 
                        className={`h-full bg-gradient-to-r ${metric.gradient} transform-gpu transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-purple-500/50`}
                        style={{ 
                          width: '0%',
                          animation: `progress-fill ${2 + index * 0.3}s ease-out forwards`
                        }}
                      >
                        {/* Progress bar glow effect */}
                        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
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
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Enterprise Footer */}
      <footer className="relative z-10 border-t border-purple-500/30 py-16 px-6 bg-gradient-to-b from-transparent via-black/50 to-black/80">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Official Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Company Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50 border border-blue-400/30">
                    <span className="text-white text-sm font-bold">DH</span>
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">DevHire</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Next-generation AI-powered hiring solutions for the world's leading technology companies.
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                    <span className="text-xs text-green-400 font-semibold">ISO 27001 Certified</span>
                  </div>
                  <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full">
                    <span className="text-xs text-blue-400 font-semibold">SOC 2 Compliant</span>
                  </div>
                </div>
              </div>

              {/* Legal & Compliance */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">Legal & Compliance</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">Privacy Policy</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">Terms of Service</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">GDPR Compliance</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <Rocket className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">Enterprise Agreement</span>
                  </div>
                </div>
              </div>

              {/* Global Presence */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">Global Operations</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/20">
                    <div className="text-lg font-bold text-purple-300">50K+</div>
                    <div className="text-xs text-gray-400">Active Users</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-lg border border-cyan-500/20">
                    <div className="text-lg font-bold text-cyan-300">1000+</div>
                    <div className="text-xs text-gray-400">Companies</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/20">
                    <div className="text-lg font-bold text-blue-300">24/7</div>
                    <div className="text-xs text-gray-400">Support</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-pink-900/30 to-pink-800/20 rounded-lg border border-pink-500/20">
                    <div className="text-lg font-bold text-pink-300">99.9%</div>
                    <div className="text-xs text-gray-400">Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Copyright Section */}
            <div className="border-t border-purple-500/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm font-medium">System Status: Operational</span>
                  </div>
                  <div className="text-gray-500 text-sm">|</div>
                  <span className="text-gray-300 text-sm">Version 3.0.1</span>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-gray-300 text-sm">
                    © {new Date().getFullYear()} DevHire. All rights reserved.
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center shadow-lg shadow-blue-500/50 border border-blue-400/30">
                      <span className="text-white text-xs font-bold">DH</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Legal Notice */}
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-xs max-w-3xl mx-auto">
                  This platform is designed for enterprise use only. All hiring processes are subject to applicable employment laws and regulations. 
                  Unauthorized access or use is strictly prohibited and may violate applicable laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Ultimate CSS Animations - Final Masterpiece */}
      <style>{`
        /* Professional Background Animations */
        .professional-gradient-overlay {
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.04) 0%, transparent 60%);
          animation: professional-pulse 60s ease-in-out infinite;
        }

        @keyframes professional-pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.02); }
        }

        /* Professional Floating Orbs */
        .orb-1 {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.2), rgba(99, 102, 241, 0.05));
          box-shadow: 
            0 0 20px rgba(99, 102, 241, 0.15),
            0 0 40px rgba(99, 102, 241, 0.1),
            inset 0 0 10px rgba(99, 102, 241, 0.1);
          animation: orb-float-1 50s ease-in-out infinite;
        }

        .orb-2 {
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.18), rgba(139, 92, 246, 0.04));
          box-shadow: 
            0 0 15px rgba(139, 92, 246, 0.12),
            0 0 30px rgba(139, 92, 246, 0.08),
            inset 0 0 8px rgba(139, 92, 246, 0.08);
          animation: orb-float-2 55s ease-in-out infinite reverse;
        }

        .orb-3 {
          position: absolute;
          width: 85px;
          height: 85px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, rgba(168, 85, 247, 0.15), rgba(168, 85, 247, 0.03));
          box-shadow: 
            0 0 18px rgba(168, 85, 247, 0.12),
            0 0 35px rgba(168, 85, 247, 0.08),
            inset 0 0 9px rgba(168, 85, 247, 0.08);
          animation: orb-float-3 60s ease-in-out infinite;
        }

        .orb-4 {
          position: absolute;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: radial-gradient(circle at 45% 45%, rgba(196, 181, 253, 0.12), rgba(196, 181, 253, 0.02));
          box-shadow: 
            0 0 12px rgba(196, 181, 253, 0.1),
            0 0 25px rgba(196, 181, 253, 0.06),
            inset 0 0 6px rgba(196, 181, 253, 0.06);
          animation: orb-float-4 65s ease-in-out infinite reverse;
        }

        @keyframes orb-float-1 {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.3; 
          }
          25% { 
            transform: translate(30px, -20px) scale(1.05); 
            opacity: 0.4; 
          }
          50% { 
            transform: translate(60px, 10px) scale(1.08); 
            opacity: 0.5; 
          }
          75% { 
            transform: translate(40px, 30px) scale(1.03); 
            opacity: 0.4; 
          }
        }

        @keyframes orb-float-2 {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.25; 
          }
          33% { 
            transform: translate(-40px, 25px) scale(1.06); 
            opacity: 0.35; 
          }
          66% { 
            transform: translate(20px, -35px) scale(0.94); 
            opacity: 0.3; 
          }
        }

        @keyframes orb-float-3 {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.28; 
          }
          50% { 
            transform: translate(-50px, 40px) scale(1.1); 
            opacity: 0.4; 
          }
        }

        @keyframes orb-float-4 {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.2; 
          }
          50% { 
            transform: translate(35px, -25px) scale(1.08); 
            opacity: 0.35; 
          }
        }

        /* Professional Particle System */
        .particle-system {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 3px rgba(255, 255, 255, 0.2);
          animation: particle-rise 30s linear infinite;
        }

        @keyframes particle-rise {
          0% {
            transform: translateY(100vh) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            transform: translateY(90vh) translateX(5px) scale(1);
            opacity: 0.3;
          }
          90% {
            transform: translateY(10vh) translateX(-5px) scale(1);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0) translateX(0) scale(0);
            opacity: 0;
          }
        }

        /* Professional Light Beams */
        .light-beam-professional {
          position: absolute;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, 
            transparent 0%, 
            rgba(99, 102, 241, 0.05) 20%, 
            rgba(99, 102, 241, 0.1) 50%, 
            rgba(99, 102, 241, 0.05) 80%, 
            transparent 100%);
          animation: beam-scan 80s ease-in-out infinite;
        }

        @keyframes beam-scan {
          0%, 100% { 
            transform: translateX(-100%) scaleY(0.5); 
            opacity: 0.1; 
          }
          50% { 
            transform: translateX(100%) scaleY(0.5); 
            opacity: 0.2; 
          }
        }

        /* Professional Wave Patterns */
        .wave-pattern {
          position: absolute;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(99, 102, 241, 0.03) 10px,
            rgba(99, 102, 241, 0.03) 20px
          );
          animation: wave-drift 60s linear infinite;
        }

        @keyframes wave-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        /* Professional Shadow Effects */
        .shadow-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, 
            rgba(0, 0, 0, 0.4) 0%, 
            rgba(0, 0, 0, 0.2) 40%, 
            transparent 70%);
          animation: shadow-pulse 30s ease-in-out infinite;
        }

        @keyframes shadow-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        /* Holographic Grid Systems */
        .holographic-grid-primary {
          background-image: 
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: holographic-grid-primary-rotate 60s linear infinite;
        }

        .holographic-grid-secondary {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: holographic-grid-secondary-rotate 45s linear infinite reverse;
        }

        .holographic-grid-tertiary {
          background-image: 
            linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px);
          background-size: 120px 120px;
          animation: holographic-grid-tertiary-rotate 90s linear infinite;
        }

        @keyframes holographic-grid-primary-rotate {
          0% { transform: perspective(1000px) rotateX(60deg) rotateZ(0deg); opacity: 0.1; }
          50% { transform: perspective(1000px) rotateX(60deg) rotateZ(180deg); opacity: 0.2; }
          100% { transform: perspective(1000px) rotateX(60deg) rotateZ(360deg); opacity: 0.1; }
        }

        @keyframes holographic-grid-secondary-rotate {
          0% { transform: perspective(1000px) rotateX(45deg) rotateZ(0deg); opacity: 0.08; }
          50% { transform: perspective(1000px) rotateX(45deg) rotateZ(-180deg); opacity: 0.15; }
          100% { transform: perspective(1000px) rotateX(45deg) rotateZ(-360deg); opacity: 0.08; }
        }

        @keyframes holographic-grid-tertiary-rotate {
          0% { transform: perspective(1000px) rotateX(30deg) rotateZ(0deg); opacity: 0.05; }
          50% { transform: perspective(1000px) rotateX(30deg) rotateZ(180deg); opacity: 0.12; }
          100% { transform: perspective(1000px) rotateX(30deg) rotateZ(360deg); opacity: 0.05; }
        }

        /* Light Rays and Beams */
        .light-ray-1 {
          background: linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.4), transparent);
          animation: light-ray-pulse-1 4s ease-in-out infinite;
        }

        .light-ray-2 {
          background: linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.4), transparent);
          animation: light-ray-pulse-2 5s ease-in-out infinite 1s;
        }

        .light-ray-3 {
          background: linear-gradient(to bottom, transparent, rgba(236, 72, 153, 0.4), transparent);
          animation: light-ray-pulse-3 6s ease-in-out infinite 2s;
        }

        .light-beam-1 {
          background: linear-gradient(to right, transparent, rgba(59, 130, 246, 0.3), transparent);
          animation: light-beam-sweep-1 8s ease-in-out infinite;
        }

        .light-beam-2 {
          background: linear-gradient(to right, transparent, rgba(147, 51, 234, 0.3), transparent);
          animation: light-beam-sweep-2 10s ease-in-out infinite 3s;
        }

        @keyframes light-ray-pulse-1 {
          0%, 100% { opacity: 0.2; transform: scaleY(0.5); }
          50% { opacity: 0.6; transform: scaleY(1); }
        }

        @keyframes light-ray-pulse-2 {
          0%, 100% { opacity: 0.15; transform: scaleY(0.3); }
          50% { opacity: 0.5; transform: scaleY(1); }
        }

        @keyframes light-ray-pulse-3 {
          0%, 100% { opacity: 0.1; transform: scaleY(0.4); }
          50% { opacity: 0.4; transform: scaleY(1); }
        }

        @keyframes light-beam-sweep-1 {
          0%, 100% { opacity: 0.2; transform: scaleX(0.3); }
          50% { opacity: 0.5; transform: scaleX(1); }
        }

        @keyframes light-beam-sweep-2 {
          0%, 100% { opacity: 0.15; transform: scaleX(0.2); }
          50% { opacity: 0.4; transform: scaleX(1); }
        }

        /* Plasma Fields */
        .plasma-field-alpha {
          background: radial-gradient(ellipse at 25% 25%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
                      radial-gradient(ellipse at 75% 75%, rgba(6, 182, 212, 0.4) 0%, transparent 50%);
          animation: plasma-alpha-pulse 12s ease-in-out infinite;
        }

        .plasma-field-beta {
          background: radial-gradient(ellipse at 75% 25%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                      radial-gradient(ellipse at 25% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%);
          animation: plasma-beta-pulse 15s ease-in-out infinite reverse;
        }

        .plasma-field-gamma {
          background: radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.2) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 100%);
          animation: plasma-gamma-pulse 18s ease-in-out infinite;
        }

        @keyframes plasma-alpha-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.25; }
          33% { transform: scale(1.2) rotate(120deg); opacity: 0.4; }
          66% { transform: scale(0.8) rotate(240deg); opacity: 0.3; }
        }

        @keyframes plasma-beta-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.2; }
          50% { transform: scale(1.3) rotate(180deg); opacity: 0.35; }
        }

        @keyframes plasma-gamma-pulse {
          0%, 100% { transform: scale(0.8) rotate(0deg); opacity: 0.15; }
          50% { transform: scale(1.5) rotate(180deg); opacity: 0.25; }
        }

        /* Image Gallery Animations */
        @keyframes scan-horizontal {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes scan-vertical {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }

        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-20px) translateX(10px); opacity: 0; }
        }

        @keyframes frame-glow {
          0%, 100% { opacity: 0.3; filter: hue-rotate(0deg); }
          25% { opacity: 0.6; filter: hue-rotate(90deg); }
          50% { opacity: 0.8; filter: hue-rotate(180deg); }
          75% { opacity: 0.6; filter: hue-rotate(270deg); }
        }

        /* Enhanced Button Animations */
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes border-glow {
          0%, 100% { 

@keyframes float-particle {
0% { 
transform: translateY(0) translateX(0) scale(0); 
opacity: 0; 
}
10% { 
transform: translateY(-5px) translateX(5px) scale(1); 
opacity: 1; 
}
90% { 
transform: translateY(-15px) translateX(15px) scale(1); 
opacity: 1; 
}
100% { 
transform: translateY(-20px) translateX(20px) scale(0); 
opacity: 0; 
}
}
            opacity: 0; 
          }
          10% { 
            transform: translateY(-5px) translateX(5px) scale(1); 
            opacity: 1; 
          }
          90% { 
            transform: translateY(-15px) translateX(15px) scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-20px) translateX(20px) scale(0); 
            opacity: 0; 
          }
        }

        /* Professional Spark Mouse Follower Animations */
        @keyframes spark-ray-1 {
          0%, 100% { 
            opacity: 0.3; 
            transform: translateX(-50%) translateY(-100%) scaleY(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: translateX(-50%) translateY(-100%) scaleY(1); 
          }
        }

        @keyframes spark-ray-2 {
          0%, 100% { 
            opacity: 0.3; 
            transform: translateX(-50%) translateY(-100%) rotate(45deg) scaleY(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: translateX(-50%) translateY(-100%) rotate(45deg) scaleY(1); 
          }
        }

        @keyframes spark-ray-3 {
          0%, 100% { 
            opacity: 0.3; 
            transform: translateX(-50%) translateY(-100%) rotate(90deg) scaleY(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: translateX(-50%) translateY(-100%) rotate(90deg) scaleY(1); 
          }
        }

        @keyframes spark-ray-4 {
          0%, 100% { 
            opacity: 0.3; 
            transform: translateX(-50%) translateY(-100%) rotate(135deg) scaleY(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: translateX(-50%) translateY(-100%) rotate(135deg) scaleY(1); 
          }
        }

        @keyframes spark-ray-5 {
          0%, 100% { 
            opacity: 0.3; 
            transform: translateX(-50%) translateY(-100%) rotate(180deg) scaleY(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: translateX(-50%) translateY(-100%) rotate(180deg) scaleY(1); 
          }
        }

        @keyframes spark-ray-6 {
          0%, 100% { 
            opacity: 0.3; 
            transform: translateX(-50%) translateY(-100%) rotate(225deg) scaleY(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: translateX(-50%) translateY(-100%) rotate(225deg) scaleY(1); 
          }
        }

        @keyframes spark-ray-7 {
          0%, 100% { 
            opacity: 0.3; 
            transform: translateX(-50%) translateY(-100%) rotate(270deg) scaleY(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: translateX(-50%) translateY(-100%) rotate(270deg) scaleY(1); 
          }
        }

        @keyframes spark-ray-8 {
          0%, 100% { 
            opacity: 0.3; 
            transform: translateX(-50%) translateY(-100%) rotate(315deg) scaleY(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: translateX(-50%) translateY(-100%) rotate(315deg) scaleY(1); 
          }
        }

        @keyframes spark-particle-1 {
          0%, 100% { 
            transform: translateX(-50%) translateY(-50%) scale(0); 
            opacity: 0; 
          }
          10% { 
            transform: translateX(-50%) translateY(-50%) translateX(20px) translateY(-20px) scale(1); 
            opacity: 1; 
          }
          90% { 
            transform: translateX(-50%) translateY(-50%) translateX(40px) translateY(-40px) scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: translateX(-50%) translateY(-50%) translateX(60px) translateY(-60px) scale(0); 
            opacity: 0; 
          }
        }

        @keyframes spark-particle-2 {
          0%, 100% { 
            transform: translateX(-50%) translateY(-50%) scale(0); 
            opacity: 0; 
          }
          10% { 
            transform: translateX(-50%) translateY(-50%) translateX(-20px) translateY(-20px) scale(1); 
            opacity: 1; 
          }
          90% { 
            transform: translateX(-50%) translateY(-50%) translateX(-40px) translateY(-40px) scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: translateX(-50%) translateY(-50%) translateX(-60px) translateY(-60px) scale(0); 
            opacity: 0; 
          }
        }

        @keyframes spark-particle-3 {
          0%, 100% { 
            transform: translateX(-50%) translateY(-50%) scale(0); 
            opacity: 0; 
          }
          10% { 
            transform: translateX(-50%) translateY(-50%) translateX(20px) translateY(20px) scale(1); 
            opacity: 1; 
          }
          90% { 
            transform: translateX(-50%) translateY(-50%) translateX(40px) translateY(40px) scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: translateX(-50%) translateY(-50%) translateX(60px) translateY(60px) scale(0); 
            opacity: 0; 
          }
        }

        @keyframes spark-particle-4 {
          0%, 100% { 
            transform: translateX(-50%) translateY(-50%) scale(0); 
            opacity: 0; 
          }
          10% { 
            transform: translateX(-50%) translateY(-50%) translateX(-20px) translateY(20px) scale(1); 
            opacity: 1; 
          }
          90% { 
            transform: translateX(-50%) translateY(-50%) translateX(-40px) translateY(40px) scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: translateX(-50%) translateY(-50%) translateX(-60px) translateY(60px) scale(0); 
            opacity: 0; 
          }
        }

        @keyframes spark-particle-5 {
          0%, 100% { 
            transform: translateX(-50%) translateY(-50%) scale(0); 
            opacity: 0; 
          }
          10% { 
            transform: translateX(-50%) translateY(-50%) translateX(30px) translateY(-10px) scale(1); 
            opacity: 1; 
          }
          90% { 
            transform: translateX(-50%) translateY(-50%) translateX(60px) translateY(-20px) scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: translateX(-50%) translateY(-50%) translateX(90px) translateY(-30px) scale(0); 
            opacity: 0; 
          }
        }

        @keyframes spark-particle-6 {
          0%, 100% { 
            transform: translateX(-50%) translateY(-50%) scale(0); 
            opacity: 0; 
          }
          10% { 
            transform: translateX(-50%) translateY(-50%) translateX(-30px) translateY(-10px) scale(1); 
            opacity: 1; 
          }
          90% { 
            transform: translateX(-50%) translateY(-50%) translateX(-60px) translateY(-20px) scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: translateX(-50%) translateY(-50%) translateX(-90px) translateY(-30px) scale(0); 
            opacity: 0; 
          }
        }

        /* Beautiful Professional Snowflake Animations */
        .snowflake-large {
          animation: snowfall-large 25s linear infinite;
        }
        
        .snowflake-medium {
          animation: snowfall-medium 20s linear infinite;
        }
        
        .snowflake-small {
          animation: snowfall-small 15s linear infinite;
        }
        
        .snowflake-tiny {
          animation: snowfall-tiny 10s linear infinite;
        }
        
        @keyframes snowfall-large {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) translateX(50px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes snowfall-medium {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh) translateX(-30px) rotate(-360deg);
            opacity: 0;
          }
        }
        
        @keyframes snowfall-small {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) translateX(20px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes snowfall-tiny {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh) translateX(-10px) rotate(-360deg);
            opacity: 0;
          }
        }

        /* Enhanced Existing Animations */
        @keyframes 3d-cube {
          0%, 100% {
            transform: rotateX(0deg) rotateY(0deg) translateZ(0px);
            opacity: 0.7;
          }
          25% {
            transform: rotateX(45deg) rotateY(45deg) translateZ(50px);
            opacity: 0.9;
          }
          50% {
            transform: rotateX(90deg) rotateY(90deg) translateZ(30px);
            opacity: 0.8;
          }
          75% {
            transform: rotateX(135deg) rotateY(135deg) translateZ(60px);
            opacity: 0.95;
          }
        }
        
        @keyframes 3d-cube-reverse {
          0%, 100% {
            transform: rotateX(360deg) rotateY(360deg) translateZ(0px);
            opacity: 0.7;
          }
          25% {
            transform: rotateX(315deg) rotateY(315deg) translateZ(50px);
            opacity: 0.9;
          }
          50% {
            transform: rotateX(270deg) rotateY(270deg) translateZ(30px);
            opacity: 0.8;
          }
          75% {
            transform: rotateX(225deg) rotateY(225deg) translateZ(60px);
            opacity: 0.95;
          }
        }
        
        @keyframes 3d-sphere {
          0%, 100% {
            transform: translateZ(0px) scale(1) rotateX(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translateZ(100px) scale(1.2) rotateX(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateZ(50px) scale(0.9) rotateX(180deg);
            opacity: 0.7;
          }
          75% {
            transform: translateZ(150px) scale(1.1) rotateX(270deg);
            opacity: 0.9;
          }
        }
        
        @keyframes 3d-sphere-reverse {
          0%, 100% {
            transform: translateZ(0px) scale(1) rotateX(360deg);
            opacity: 0.6;
          }
          25% {
            transform: translateZ(100px) scale(1.2) rotateX(270deg);
            opacity: 0.8;
          }
          50% {
            transform: translateZ(50px) scale(0.9) rotateX(180deg);
            opacity: 0.7;
          }
          75% {
            transform: translateZ(150px) scale(1.1) rotateX(90deg);
            opacity: 0.9;
          }
        }
        
        @keyframes float-orb-3d {
          0%, 100% {
            transform: translate(0, 0) translateZ(0px) scale(1) rotateX(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translate(100px, -150px) translateZ(100px) scale(1.3) rotateX(45deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50px, -100px) translateZ(50px) scale(0.8) rotateX(90deg);
            opacity: 0.5;
          }
          75% {
            transform: translate(-100px, 150px) translateZ(150px) scale(1.2) rotateX(135deg);
            opacity: 0.7;
          }
        }
        
        @keyframes float-orb-3d-reverse {
          0%, 100% {
            transform: translate(0, 0) translateZ(0px) scale(1) rotateX(360deg);
            opacity: 0.4;
          }
          25% {
            transform: translate(-100px, 150px) translateZ(100px) scale(1.3) rotateX(315deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(50px, 100px) translateZ(50px) scale(0.8) rotateX(270deg);
            opacity: 0.5;
          }
          75% {
            transform: translate(100px, -150px) translateZ(150px) scale(1.2) rotateX(225deg);
            opacity: 0.7;
          }
        }
        
        @keyframes particle-float-3d {
          0% {
            transform: translateY(100vh) translateX(0) translateZ(0px) scale(0) rotateX(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) translateX(-30px) translateZ(50px) scale(1) rotateX(90deg);
          }
          50% {
            transform: translateY(50vh) translateX(20px) translateZ(100px) scale(1.2) rotateX(180deg);
            opacity: 0.8;
          }
          90% {
            opacity: 1;
            transform: translateY(10vh) translateX(30px) translateZ(50px) scale(1) rotateX(270deg);
          }
          100% {
            transform: translateY(0) translateX(0) translateZ(0px) scale(0) rotateX(360deg);
            opacity: 0;
          }
        }
        
        @keyframes grid-move-3d {
          0% {
            transform: translate(0, 0) translateZ(0px) rotateX(0deg);
          }
          50% {
            transform: translate(40px, 40px) translateZ(20px) rotateX(2deg);
          }
          100% {
            transform: translate(80px, 80px) translateZ(0px) rotateX(0deg);
          }
        }
        
        @keyframes button-3d-hover {
          0% {
            transform: translateZ(0px) scale(1) rotateX(0deg);
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
          }
          50% {
            transform: translateZ(10px) scale(1.05) rotateX(-5deg);
            box-shadow: 0 10px 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(59, 130, 246, 0.6);
          }
          100% {
            transform: translateZ(15px) scale(1.1) rotateX(-10deg);
            box-shadow: 0 15px 50px rgba(147, 51, 234, 0.9), 0 0 80px rgba(59, 130, 246, 0.7);
          }
        }
        
        @keyframes icon-3d-spin {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
        
        .animate-3d-cube {
          animation: 3d-cube 15s ease-in-out infinite;
        }
        
        .animate-3d-cube-reverse {
          animation: 3d-cube-reverse 18s ease-in-out infinite;
        }
        
        .animate-3d-sphere {
          animation: 3d-sphere 12s ease-in-out infinite;
        }
        
        .animate-3d-sphere-reverse {
          animation: 3d-sphere-reverse 14s ease-in-out infinite;
        }
        
        .animate-float-orb-3d {
          animation: float-orb-3d 25s ease-in-out infinite;
        }
        
        .animate-float-orb-3d-reverse {
          animation: float-orb-3d-reverse 30s ease-in-out infinite;
        }
        
        .animate-particle-float-3d {
          animation: particle-float-3d linear infinite;
        }
        
        .animate-grid-move-3d {
          animation: grid-move-3d 15s linear infinite;
        }
        
        .animate-button-3d-hover {
          animation: button-3d-hover 0.6s ease-in-out;
        }
        
        .animate-icon-3d-spin {
          animation: icon-3d-spin 20s linear infinite;
        }
        
        .bg-grid-white\\/15 {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px);
        }
        
        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(50px, -100px) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-30px, -50px) scale(0.9);
            opacity: 0.7;
          }
          75% {
            transform: translate(-50px, 100px) scale(1.05);
            opacity: 0.9;
          }
        }
        
        @keyframes float-orb-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(-50px, 100px) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translate(30px, 50px) scale(0.9);
            opacity: 0.7;
          }
          75% {
            transform: translate(50px, -100px) scale(1.05);
            opacity: 0.9;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        
        @keyframes pulse-slow-reverse {
          0%, 100% {
            transform: scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: scale(1);
            opacity: 0.5;
          }
        }
        
        @keyframes particle-float {
          0% {
            transform: translateY(100vh) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) translateX(-20px) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(10vh) translateX(20px) scale(1);
          }
          100% {
            transform: translateY(0) translateX(0) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(59, 130, 246, 0.6);
          }
        }
        
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(147, 51, 234, 0.8), 0 0 30px rgba(59, 130, 246, 0.6);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float-orb {
          animation: float-orb 20s ease-in-out infinite;
        }
        
        .animate-float-orb-reverse {
          animation: float-orb-reverse 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 8s ease-in-out infinite;
        }
        
        .animate-particle-float {
          animation: particle-float linear infinite;
        }
        
        .animate-grid-move {
          animation: grid-move 10s linear infinite;
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        
        .bg-grid-white\\/10 {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .delay-2000 {
          animation-delay: 2000ms;
        }
        
        /* ========================================
           MASSIVE 3D ANIMATION SYSTEM
           ======================================== */
        
        /* Professional Corporate Animations */
        @keyframes corporate-wall-slide {
          0% {
            transform: translateX(-100%) translateY(0px) translateZ(0px) rotateY(0deg);
            opacity: 0;
            filter: brightness(0.8) contrast(1.1);
          }
          20% {
            transform: translateX(-50%) translateY(-20px) translateZ(100px) rotateY(15deg);
            opacity: 0.4;
            filter: brightness(0.9) contrast(1.2);
          }
          40% {
            transform: translateX(-25%) translateY(-40px) translateZ(200px) rotateY(30deg);
            opacity: 0.7;
            filter: brightness(1) contrast(1.3);
          }
          60% {
            transform: translateX(0%) translateY(-60px) translateZ(300px) rotateY(45deg);
            opacity: 0.9;
            filter: brightness(1.1) contrast(1.4);
          }
          80% {
            transform: translateX(25%) translateY(-40px) translateZ(200px) rotateY(30deg);
            opacity: 0.7;
            filter: brightness(1) contrast(1.3);
          }
          100% {
            transform: translateX(50%) translateY(-20px) translateZ(100px) rotateY(15deg);
            opacity: 0.4;
            filter: brightness(0.9) contrast(1.2);
          }
        }
        
        @keyframes professional-data-flow {
          0% {
            transform: translateY(100vh) translateX(0px) scale(0.1) rotateZ(0deg);
            opacity: 0;
            filter: hue-rotate(0deg) brightness(0.8);
          }
          100% {
            transform: translateY(0vh) translateX(-100px) scale(2.1) rotateZ(360deg);
            opacity: 0;
            filter: hue-rotate(300deg) brightness(0.8);
          }
        }
        
        @keyframes executive-panel-glow {
          0% {
            transform: scale(1) rotateX(0deg) rotateY(0deg);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.8);
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
          50% {
            transform: scale(1.1) rotateX(10deg) rotateY(20deg);
            opacity: 0.7;
            filter: brightness(1) saturate(1);
            box-shadow: 0 0 60px rgba(147, 51, 234, 0.7);
          }
          100% {
            transform: scale(1) rotateX(0deg) rotateY(0deg);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.8);
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
        }
        
        @keyframes business-grid-rotate {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
            opacity: 0.4;
            filter: hue-rotate(0deg) brightness(0.9);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) scale(1.4);
            opacity: 0.8;
            filter: hue-rotate(180deg) brightness(1.3);
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) scale(1);
            opacity: 0.4;
            filter: hue-rotate(360deg) brightness(0.9);
          }
        }
        
        @keyframes professional-float-orbital {
          0% {
            transform: rotate(0deg) translateX(200px) rotate(0deg) scale(1);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.9);
          }
          25% {
            transform: rotate(90deg) translateX(220px) rotate(-90deg) scale(1.1);
            opacity: 0.5;
            filter: brightness(0.9) saturate(1);
          }
          50% {
            transform: rotate(180deg) translateX(250px) rotate(-180deg) scale(1.25);
            opacity: 0.8;
            filter: brightness(1.05) saturate(1.15);
          }
          75% {
            transform: rotate(270deg) translateX(220px) rotate(-270deg) scale(1.1);
            opacity: 0.5;
            filter: brightness(0.9) saturate(1);
          }
          100% {
            transform: rotate(360deg) translateX(200px) rotate(-360deg) scale(1);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.9);
          }
        }
        
        @keyframes enterprise-pulse-wave {
          0% {
            transform: scale(0.8) translateX(0px) translateY(0px);
            opacity: 0.2;
            filter: brightness(0.7) contrast(0.9);
          }
          25% {
            transform: scale(1.1) translateX(30px) translateY(-15px);
            opacity: 0.5;
            filter: brightness(0.85) contrast(1.05);
          }
          50% {
            transform: scale(1.4) translateX(60px) translateY(-30px);
            opacity: 0.8;
            filter: brightness(1) contrast(1.2);
          }
          75% {
            transform: scale(1.1) translateX(30px) translateY(-15px);
            opacity: 0.5;
            filter: brightness(0.85) contrast(1.05);
          }
          100% {
            transform: scale(0.8) translateX(0px) translateY(0px);
            opacity: 0.2;
            filter: brightness(0.7) contrast(0.9);
          }
        }
        
        @keyframes corporate-helix-spin {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px) translateY(0px);
            opacity: 0.3;
            filter: hue-rotate(0deg) brightness(0.9) saturate(0.9);
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(22.5deg) translateZ(50px) translateY(-25px);
            opacity: 0.5;
            filter: hue-rotate(90deg) brightness(1) saturate(1);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) translateZ(100px) translateY(-50px);
            opacity: 0.8;
            filter: hue-rotate(180deg) brightness(1.15) saturate(1.15);
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(67.5deg) translateZ(50px) translateY(-25px);
            opacity: 0.5;
            filter: hue-rotate(270deg) brightness(1) saturate(1);
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) translateZ(0px) translateY(0px);
            opacity: 0.3;
            filter: hue-rotate(360deg) brightness(0.9) saturate(0.9);
          }
        }
        
        @keyframes professional-morph-transition {
          0% {
            border-radius: 20% 80% 80% 20% / 20% 80% 20% 80%;
            transform: rotate(0deg) scale(1) translateX(0px) translateY(0px);
            opacity: 0.4;
            filter: hue-rotate(0deg) brightness(0.9) saturate(0.9);
          }
          25% {
            border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
            transform: rotate(90deg) scale(1.2) translateX(20px) translateY(-10px);
            opacity: 0.6;
            filter: hue-rotate(90deg) brightness(1) saturate(1);
          }
          50% {
            border-radius: 100% 0% 0% 100% / 100% 0% 100% 0%;
            transform: rotate(180deg) scale(1.4) translateX(40px) translateY(-20px);
            opacity: 0.8;
            filter: hue-rotate(180deg) brightness(1.1) saturate(1.1);
          }
          75% {
            border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
            transform: rotate(270deg) scale(1.2) translateX(20px) translateY(-10px);
            opacity: 0.6;
            filter: hue-rotate(270deg) brightness(1) saturate(1);
          }
          100% {
            border-radius: 20% 80% 80% 20% / 20% 80% 20% 80%;
            transform: rotate(360deg) scale(1) translateX(0px) translateY(0px);
            opacity: 0.4;
            filter: hue-rotate(360deg) brightness(0.9) saturate(0.9);
          }
        }
        
        /* 3D Cube Animations */
        @keyframes cube-rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
            opacity: 0.3;
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(45deg) translateZ(50px);
            opacity: 0.6;
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(90deg) translateZ(100px);
            opacity: 0.9;
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(135deg) translateZ(50px);
            opacity: 0.6;
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(180deg) translateZ(0px);
            opacity: 0.3;
          }
        }
        
        @keyframes cube-float-3d {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(0deg) rotateY(0deg);
            filter: hue-rotate(0deg) brightness(1);
          }
          25% {
            transform: translateY(-30px) translateX(20px) translateZ(60px) rotateX(90deg) rotateY(45deg);
            filter: hue-rotate(90deg) brightness(1.2);
          }
          50% {
            transform: translateY(-60px) translateX(-20px) translateZ(120px) rotateX(180deg) rotateY(90deg);
            filter: hue-rotate(180deg) brightness(1.4);
          }
          75% {
            transform: translateY(-30px) translateX(-40px) translateZ(60px) rotateX(270deg) rotateY(135deg);
            filter: hue-rotate(270deg) brightness(1.2);
          }
        }
        
        @keyframes corporate-wall-expand {
          0% {
            transform: scaleX(0.1) scaleY(0.1) scaleZ(0.1) translateX(-50%) translateY(-50%);
            opacity: 0.1;
            filter: brightness(0.5) contrast(0.8);
          }
          50% {
            transform: scaleX(0.9) scaleY(0.9) scaleZ(0.9) translateX(10%) translateY(10%);
            opacity: 0.7;
            filter: brightness(1.1) contrast(1.3);
          }
          100% {
            transform: scaleX(1.5) scaleY(1.5) scaleZ(1.5) translateX(50%) translateY(50%);
            opacity: 0.3;
            filter: brightness(0.7) contrast(0.9);
          }
        }
        
        @keyframes cube-pulse-3d {
          0%, 100% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          25% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(90deg) rotateY(45deg) rotateZ(45deg);
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
          50% {
            transform: scale3d(1.5, 1.5, 1.5) rotateX(180deg) rotateY(90deg) rotateZ(90deg);
            box-shadow: 0 0 60px rgba(59, 130, 246, 1);
          }
          75% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(270deg) rotateY(135deg) rotateZ(135deg);
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }
        
        @keyframes professional-data-stream {
          0% {
            transform: translateY(-100vh) translateX(0px) rotateZ(0deg) scale(0.5);
            opacity: 0;
            filter: hue-rotate(0deg) brightness(0.8) blur(2px);
          }
          50% {
            transform: translateY(0vh) translateX(-100px) rotateZ(180deg) scale(1.5);
            opacity: 1;
            filter: hue-rotate(180deg) brightness(1.2) blur(0px);
          }
          100% {
            transform: translateY(100vh) translateX(0px) rotateZ(360deg) scale(0.5);
            opacity: 0;
            filter: hue-rotate(360deg) brightness(0.8) blur(2px);
          }
        }
        
        @keyframes executive-panel-slide {
          0% {
            transform: translateX(-100vw) translateY(0px) rotateY(90deg) scale(0.5);
            opacity: 0;
            filter: brightness(0.7) saturate(0.7);
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.2);
          }
          50% {
            transform: translateX(0vw) translateY(-60px) rotateY(45deg) scale(1.1);
            opacity: 0.8;
            filter: brightness(1) saturate(1);
            box-shadow: 0 0 70px rgba(147, 51, 234, 0.8);
          }
          100% {
            transform: translateX(100vw) translateY(0px) rotateY(0deg) scale(0.5);
            opacity: 0;
            filter: brightness(0.7) saturate(0.7);
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.2);
          }
        }
        
        @keyframes business-hologram-float {
          0% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0.3;
            filter: brightness(0.8) hue-rotate(0deg) blur(1px);
          }
          50% {
            transform: translateY(-60px) translateX(60px) translateZ(120px) rotateX(180deg) rotateY(90deg) rotateZ(45deg);
            opacity: 0.9;
            filter: brightness(1.1) hue-rotate(180deg) blur(0.4px);
          }
          100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(360deg) rotateY(180deg) rotateZ(90deg);
            opacity: 0.3;
            filter: brightness(0.8) hue-rotate(360deg) blur(1px);
          }
        }
        
        @keyframes corporate-energy-field {
          0% {
            transform: scale(0.5) rotate(0deg) translateX(0px) translateY(0px);
            opacity: 0.2;
            filter: brightness(0.6) saturate(0.8) hue-rotate(0deg);
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.3), inset 0 0 10px rgba(6, 182, 212, 0.3);
          }
          50% {
            transform: scale(1.2) rotate(180deg) translateX(80px) translateY(-40px);
            opacity: 0.9;
            filter: brightness(1) saturate(1.2) hue-rotate(180deg);
            box-shadow: 0 0 50px rgba(147, 51, 234, 0.7), inset 0 0 50px rgba(6, 182, 212, 0.7);
          }
          100% {
            transform: scale(0.5) rotate(360deg) translateX(0px) translateY(0px);
            opacity: 0.2;
            filter: brightness(0.6) saturate(0.8) hue-rotate(360deg);
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.3), inset 0 0 10px rgba(6, 182, 212, 0.3);
          }
        }
        
        @keyframes professional-neural-network {
          0% {
            transform: scale(0.3) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0.1;
            filter: brightness(0.5) contrast(0.8) hue-rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotateX(180deg) rotateY(90deg) rotateZ(45deg);
            opacity: 0.8;
            filter: brightness(0.9) contrast(1.2) hue-rotate(180deg);
          }
          100% {
            transform: scale(0.3) rotateX(360deg) rotateY(180deg) rotateZ(90deg);
            opacity: 0.1;
            filter: brightness(0.5) contrast(0.8) hue-rotate(360deg);
          }
        }
        
        @keyframes executive-vortex-spin {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.5) translateZ(0px);
            opacity: 0.2;
            filter: brightness(0.6) saturate(0.8) hue-rotate(0deg);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) scale(1.1) translateZ(100px);
            opacity: 0.8;
            filter: brightness(1) saturate(1.1) hue-rotate(180deg);
            box-shadow: 0 0 65px rgba(147, 51, 234, 0.8);
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) scale(0.5) translateZ(0px);
            opacity: 0.2;
            filter: brightness(0.6) saturate(0.8) hue-rotate(360deg);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3);
          }
        }
        
        @keyframes corporate-quantum-field {
          0% {
            transform: scale(0.2) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.1;
            filter: brightness(0.4) contrast(0.7) saturate(0.8) hue-rotate(0deg) blur(2px);
          }
          50% {
            transform: scale(1.1) rotateX(180deg) rotateY(90deg) rotateZ(45deg) translateX(90px) translateY(-45px) translateZ(90px);
            opacity: 0.8;
            filter: brightness(1) contrast(1.3) saturate(1.1) hue-rotate(180deg) blur(0.8px);
          }
          100% {
            transform: scale(0.2) rotateX(360deg) rotateY(180deg) rotateZ(90deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.1;
            filter: brightness(0.4) contrast(0.7) saturate(0.8) hue-rotate(360deg) blur(2px);
          }
        }
        
        @keyframes professional-matrix-rain {
          0% {
            transform: translateY(-100vh) translateX(0px) scale(0.1) rotateZ(0deg);
            opacity: 0;
            filter: hue-rotate(120deg) brightness(0.8) blur(1px);
          }
          10% {
            transform: translateY(-80vh) translateX(-10px) scale(0.3) rotateZ(36deg);
            opacity: 0.1;
            filter: hue-rotate(108deg) brightness(0.85) blur(0.9px);
          }
          20% {
            transform: translateY(-60vh) translateX(-20px) scale(0.5) rotateZ(72deg);
            opacity: 0.2;
            filter: hue-rotate(96deg) brightness(0.9) blur(0.8px);
          }
          30% {
            transform: translateY(-40vh) translateX(-30px) scale(0.7) rotateZ(108deg);
            opacity: 0.3;
            filter: hue-rotate(84deg) brightness(0.95) blur(0.7px);
          }
          40% {
            transform: translateY(-20vh) translateX(-40px) scale(0.9) rotateZ(144deg);
            opacity: 0.4;
            filter: hue-rotate(72deg) brightness(1) blur(0.6px);
          }
          50% {
            transform: translateY(0vh) translateX(-50px) scale(1.1) rotateZ(180deg);
            opacity: 0.5;
            filter: hue-rotate(60deg) brightness(1.05) blur(0.5px);
          }
          60% {
            transform: translateY(20vh) translateX(-40px) scale(0.9) rotateZ(216deg);
            opacity: 0.4;
            filter: hue-rotate(48deg) brightness(1) blur(0.6px);
          }
          70% {
            transform: translateY(40vh) translateX(-30px) scale(0.7) rotateZ(252deg);
            opacity: 0.3;
            filter: hue-rotate(36deg) brightness(0.95) blur(0.7px);
          }
          80% {
            transform: translateY(60vh) translateX(-20px) scale(0.5) rotateZ(288deg);
            opacity: 0.2;
            filter: hue-rotate(24deg) brightness(0.9) blur(0.8px);
          }
          90% {
            transform: translateY(80vh) translateX(-10px) scale(0.3) rotateZ(324deg);
            opacity: 0.1;
            filter: hue-rotate(12deg) brightness(0.85) blur(0.9px);
          }
          100% {
            transform: translateY(100vh) translateX(0px) scale(0.1) rotateZ(360deg);
            opacity: 0;
            filter: hue-rotate(0deg) brightness(0.8) blur(1px);
          }
        }
        
        @keyframes executive-cyber-grid {
          0% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1);
            opacity: 0.3;
            filter: brightness(0.8) contrast(1.1) saturate(0.9);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2));
          }
          12.5% {
            transform: perspective(1000px) rotateX(45deg) rotateY(11.25deg) scale(1.1);
            opacity: 0.4;
            filter: brightness(0.85) contrast(1.15) saturate(0.95);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(6, 182, 212, 0.3));
          }
          25% {
            transform: perspective(1000px) rotateX(90deg) rotateY(22.5deg) scale(1.2);
            opacity: 0.5;
            filter: brightness(0.9) contrast(1.2) saturate(1);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.4), rgba(6, 182, 212, 0.4));
          }
          37.5% {
            transform: perspective(1000px) rotateX(135deg) rotateY(33.75deg) scale(1.3);
            opacity: 0.6;
            filter: brightness(0.95) contrast(1.25) saturate(1.05);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(6, 182, 212, 0.5));
          }
          50% {
            transform: perspective(1000px) rotateX(180deg) rotateY(45deg) scale(1.4);
            opacity: 0.7;
            filter: brightness(1) contrast(1.3) saturate(1.1);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.6), rgba(6, 182, 212, 0.6));
          }
          62.5% {
            transform: perspective(1000px) rotateX(225deg) rotateY(56.25deg) scale(1.3);
            opacity: 0.6;
            filter: brightness(0.95) contrast(1.25) saturate(1.05);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(6, 182, 212, 0.5));
          }
          75% {
            transform: perspective(1000px) rotateX(270deg) rotateY(67.5deg) scale(1.2);
            opacity: 0.5;
            filter: brightness(0.9) contrast(1.2) saturate(1);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.4), rgba(6, 182, 212, 0.4));
          }
          87.5% {
            transform: perspective(1000px) rotateX(315deg) rotateY(78.75deg) scale(1.1);
            opacity: 0.4;
            filter: brightness(0.85) contrast(1.15) saturate(0.95);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(6, 182, 212, 0.3));
          }
          100% {
            transform: perspective(1000px) rotateX(360deg) rotateY(90deg) scale(1);
            opacity: 0.3;
            filter: brightness(0.8) contrast(1.1) saturate(0.9);
            background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2));
          }
        }
        
        @keyframes professional-dna-helix {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.9) hue-rotate(0deg);
          }
          8.33% {
            transform: rotateX(30deg) rotateY(15deg) rotateZ(7.5deg) translateX(15px) translateY(-7.5px) translateZ(15px);
            opacity: 0.4;
            filter: brightness(0.85) saturate(0.95) hue-rotate(30deg);
          }
          16.66% {
            transform: rotateX(60deg) rotateY(30deg) rotateZ(15deg) translateX(30px) translateY(-15px) translateZ(30px);
            opacity: 0.5;
            filter: brightness(0.9) saturate(1) hue-rotate(60deg);
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(22.5deg) translateX(45px) translateY(-22.5px) translateZ(45px);
            opacity: 0.6;
            filter: brightness(0.95) saturate(1.05) hue-rotate(90deg);
          }
          33.33% {
            transform: rotateX(120deg) rotateY(60deg) rotateZ(30deg) translateX(60px) translateY(-30px) translateZ(60px);
            opacity: 0.7;
            filter: brightness(1) saturate(1.1) hue-rotate(120deg);
          }
          41.66% {
            transform: rotateX(150deg) rotateY(75deg) rotateZ(37.5deg) translateX(75px) translateY(-37.5px) translateZ(75px);
            opacity: 0.8;
            filter: brightness(1.05) saturate(1.15) hue-rotate(150deg);
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg) translateX(90px) translateY(-45px) translateZ(90px);
            opacity: 0.9;
            filter: brightness(1.1) saturate(1.2) hue-rotate(180deg);
          }
          58.33% {
            transform: rotateX(210deg) rotateY(105deg) rotateZ(52.5deg) translateX(75px) translateY(-37.5px) translateZ(75px);
            opacity: 0.8;
            filter: brightness(1.05) saturate(1.15) hue-rotate(210deg);
          }
          66.66% {
            transform: rotateX(240deg) rotateY(120deg) rotateZ(60deg) translateX(60px) translateY(-30px) translateZ(60px);
            opacity: 0.7;
            filter: brightness(1) saturate(1.1) hue-rotate(240deg);
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(67.5deg) translateX(45px) translateY(-22.5px) translateZ(45px);
            opacity: 0.6;
            filter: brightness(0.95) saturate(1.05) hue-rotate(270deg);
          }
          83.33% {
            transform: rotateX(300deg) rotateY(150deg) rotateZ(75deg) translateX(30px) translateY(-15px) translateZ(30px);
            opacity: 0.5;
            filter: brightness(0.9) saturate(1) hue-rotate(300deg);
          }
          91.66% {
            transform: rotateX(330deg) rotateY(165deg) rotateZ(82.5deg) translateX(15px) translateY(-7.5px) translateZ(15px);
            opacity: 0.4;
            filter: brightness(0.85) saturate(0.95) hue-rotate(330deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.3;
            filter: brightness(0.8) saturate(0.9) hue-rotate(360deg);
          }
        }
        
        @keyframes corporate-photon-wave {
          0% {
            transform: scale(0.1) rotate(0deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.1;
            filter: brightness(0.3) contrast(0.7) saturate(0.8) hue-rotate(0deg) blur(3px);
            box-shadow: 0 0 5px rgba(147, 51, 234, 0.2), 0 0 10px rgba(6, 182, 212, 0.2);
          }
          10% {
            transform: scale(0.3) rotate(36deg) translateX(20px) translateY(-10px) translateZ(10px);
            opacity: 0.2;
            filter: brightness(0.4) contrast(0.8) saturate(0.85) hue-rotate(36deg) blur(2.7px);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3), 0 0 30px rgba(6, 182, 212, 0.3);
          }
          20% {
            transform: scale(0.5) rotate(72deg) translateX(40px) translateY(-20px) translateZ(20px);
            opacity: 0.3;
            filter: brightness(0.5) contrast(0.9) saturate(0.9) hue-rotate(72deg) blur(2.4px);
            box-shadow: 0 0 25px rgba(147, 51, 234, 0.4), 0 0 50px rgba(6, 182, 212, 0.4);
          }
          30% {
            transform: scale(0.7) rotate(108deg) translateX(60px) translateY(-30px) translateZ(30px);
            opacity: 0.4;
            filter: brightness(0.6) contrast(1) saturate(0.95) hue-rotate(108deg) blur(2.1px);
            box-shadow: 0 0 35px rgba(147, 51, 234, 0.5), 0 0 70px rgba(6, 182, 212, 0.5);
          }
          40% {
            transform: scale(0.9) rotate(144deg) translateX(80px) translateY(-40px) translateZ(40px);
            opacity: 0.5;
            filter: brightness(0.7) contrast(1.1) saturate(1) hue-rotate(144deg) blur(1.8px);
            box-shadow: 0 0 45px rgba(147, 51, 234, 0.6), 0 0 90px rgba(6, 182, 212, 0.6);
          }
          50% {
            transform: scale(1.1) rotate(180deg) translateX(100px) translateY(-50px) translateZ(50px);
            opacity: 0.6;
            filter: brightness(0.8) contrast(1.2) saturate(1.05) hue-rotate(180deg) blur(1.5px);
            box-shadow: 0 0 55px rgba(147, 51, 234, 0.7), 0 0 110px rgba(6, 182, 212, 0.7);
          }
          60% {
            transform: scale(0.9) rotate(216deg) translateX(80px) translateY(-40px) translateZ(40px);
            opacity: 0.5;
            filter: brightness(0.7) contrast(1.1) saturate(1) hue-rotate(216deg) blur(1.8px);
            box-shadow: 0 0 45px rgba(147, 51, 234, 0.6), 0 0 90px rgba(6, 182, 212, 0.6);
          }
          70% {
            transform: scale(0.7) rotate(252deg) translateX(60px) translateY(-30px) translateZ(30px);
            opacity: 0.4;
            filter: brightness(0.6) contrast(1) saturate(0.95) hue-rotate(252deg) blur(2.1px);
            box-shadow: 0 0 35px rgba(147, 51, 234, 0.5), 0 0 70px rgba(6, 182, 212, 0.5);
          }
          80% {
            transform: scale(0.5) rotate(288deg) translateX(40px) translateY(-20px) translateZ(20px);
            opacity: 0.3;
            filter: brightness(0.5) contrast(0.9) saturate(0.9) hue-rotate(288deg) blur(2.4px);
            box-shadow: 0 0 25px rgba(147, 51, 234, 0.4), 0 0 50px rgba(6, 182, 212, 0.4);
          }
          90% {
            transform: scale(0.3) rotate(324deg) translateX(20px) translateY(-10px) translateZ(10px);
            opacity: 0.2;
            filter: brightness(0.4) contrast(0.8) saturate(0.85) hue-rotate(324deg) blur(2.7px);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3), 0 0 30px rgba(6, 182, 212, 0.3);
          }
          100% {
            transform: scale(0.1) rotate(360deg) translateX(0px) translateY(0px) translateZ(0px);
            opacity: 0.1;
            filter: brightness(0.3) contrast(0.7) saturate(0.8) hue-rotate(360deg) blur(3px);
            box-shadow: 0 0 5px rgba(147, 51, 234, 0.2), 0 0 10px rgba(6, 182, 212, 0.2);
          }
        }
        
        /* 3D Sphere Animations */
        @keyframes sphere-rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1);
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          }
          25% {
            transform: rotateX(90deg) rotateY(90deg) rotateZ(90deg) scale3d(1.1, 1.1, 1.1);
            background: linear-gradient(135deg, #8b5cf6, #ec4899);
          }
          50% {
            transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg) scale3d(1.2, 1.2, 1.2);
            background: linear-gradient(225deg, #ec4899, #f59e0b);
          }
          75% {
            transform: rotateX(270deg) rotateY(270deg) rotateZ(270deg) scale3d(1.1, 1.1, 1.1);
            background: linear-gradient(315deg, #f59e0b, #3b82f6);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg) scale3d(1, 1, 1);
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          }
        }
        
        @keyframes sphere-orbit-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) translateZ(0px);
          }
          25% {
            transform: rotateX(45deg) rotateY(90deg) translateX(100px) translateY(-50px) translateZ(50px);
          }
          50% {
            transform: rotateX(90deg) rotateY(180deg) translateX(0px) translateY(-100px) translateZ(100px);
          }
          75% {
            transform: rotateX(135deg) rotateY(270deg) translateX(-100px) translateY(-50px) translateZ(50px);
          }
          100% {
            transform: rotateX(180deg) rotateY(360deg) translateX(0px) translateY(0px) translateZ(0px);
          }
        }
        
        @keyframes sphere-morph-3d {
          0%, 100% {
            border-radius: 50%;
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg);
            filter: blur(0px);
          }
          25% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: scale3d(1.3, 0.7, 1.2) rotateX(45deg) rotateY(90deg);
            filter: blur(2px);
          }
          50% {
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
            transform: scale3d(0.7, 1.3, 0.8) rotateX(90deg) rotateY(180deg);
            filter: blur(4px);
          }
          75% {
            border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
            transform: scale3d(1.2, 0.8, 1.1) rotateX(135deg) rotateY(270deg);
            filter: blur(2px);
          }
        }
        
        /* Pyramid Animations */
        @keyframes pyramid-spin-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
            opacity: 0.4;
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(45deg) translateZ(30px);
            opacity: 0.6;
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(90deg) translateZ(60px);
            opacity: 0.8;
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(135deg) translateZ(30px);
            opacity: 0.6;
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(180deg) translateZ(0px);
            opacity: 0.4;
          }
        }
        
        @keyframes pyramid-float-3d {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            filter: brightness(1) contrast(1);
          }
          25% {
            transform: translateY(-40px) translateX(30px) translateZ(80px) rotateX(45deg) rotateY(90deg) rotateZ(45deg);
            filter: brightness(1.3) contrast(1.2);
          }
          50% {
            transform: translateY(-80px) translateX(-30px) translateZ(160px) rotateX(90deg) rotateY(180deg) rotateZ(90deg);
            filter: brightness(1.6) contrast(1.4);
          }
          75% {
            transform: translateY(-40px) translateX(-60px) translateZ(80px) rotateX(135deg) rotateY(270deg) rotateZ(135deg);
            filter: brightness(1.3) contrast(1.2);
          }
        }
        
        @keyframes pyramid-glow-3d {
          0%, 100% {
            box-shadow: 0 0 30px rgba(236, 72, 153, 0.6), inset 0 0 30px rgba(236, 72, 153, 0.3);
            background: linear-gradient(45deg, rgba(236, 72, 153, 0.8), rgba(139, 92, 246, 0.8));
          }
          25% {
            box-shadow: 0 0 60px rgba(236, 72, 153, 0.8), inset 0 0 60px rgba(236, 72, 153, 0.5);
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.9), rgba(139, 92, 246, 0.9));
          }
          50% {
            box-shadow: 0 0 90px rgba(236, 72, 153, 1), inset 0 0 90px rgba(236, 72, 153, 0.7);
            background: linear-gradient(225deg, rgba(236, 72, 153, 1), rgba(139, 92, 246, 1));
          }
          75% {
            box-shadow: 0 0 60px rgba(236, 72, 153, 0.8), inset 0 0 60px rgba(236, 72, 153, 0.5);
            background: linear-gradient(315deg, rgba(236, 72, 153, 0.9), rgba(139, 92, 246, 0.9));
          }
        }
        
        /* Torus Ring Animations */
        @keyframes torus-rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 0.3);
            border-radius: 50%;
            opacity: 0.7;
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(45deg) scale3d(1.1, 1.1, 0.4);
            border-radius: 45% 55% 55% 45% / 45% 45% 55% 55%;
            opacity: 0.8;
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(90deg) scale3d(1.2, 1.2, 0.5);
            border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
            opacity: 0.9;
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(135deg) scale3d(1.1, 1.1, 0.4);
            border-radius: 45% 55% 55% 45% / 45% 45% 55% 55%;
            opacity: 0.8;
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(180deg) scale3d(1, 1, 0.3);
            border-radius: 50%;
            opacity: 0.7;
          }
        }
        
        @keyframes torus-pulse-3d {
          0%, 100% {
            transform: scale3d(1, 1, 0.3) rotateX(0deg) rotateY(0deg);
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.6), inset 0 0 40px rgba(245, 158, 11, 0.3);
            background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.8), rgba(236, 72, 153, 0.6));
          }
          25% {
            transform: scale3d(1.3, 1.3, 0.5) rotateX(90deg) rotateY(45deg);
            box-shadow: 0 0 80px rgba(245, 158, 11, 0.8), inset 0 0 80px rgba(245, 158, 11, 0.5);
            background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.9), rgba(236, 72, 153, 0.8));
          }
          50% {
            transform: scale3d(1.6, 1.6, 0.7) rotateX(180deg) rotateY(90deg);
            box-shadow: 0 0 120px rgba(245, 158, 11, 1), inset 0 0 120px rgba(245, 158, 11, 0.7);
            background: radial-gradient(ellipse at center, rgba(245, 158, 11, 1), rgba(236, 72, 153, 1));
          }
          75% {
            transform: scale3d(1.3, 1.3, 0.5) rotateX(270deg) rotateY(135deg);
            box-shadow: 0 0 80px rgba(245, 158, 11, 0.8), inset 0 0 80px rgba(245, 158, 11, 0.5);
            background: radial-gradient(ellipse at center, rgba(245, 158, 11, 0.9), rgba(236, 72, 153, 0.8));
          }
        }
        
        @keyframes torus-orbit-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px);
          }
          25% {
            transform: rotateX(45deg) rotateY(90deg) rotateZ(45deg) translateX(150px) translateY(-75px) translateZ(75px);
          }
          50% {
            transform: rotateX(90deg) rotateY(180deg) rotateZ(90deg) translateX(0px) translateY(-150px) translateZ(150px);
          }
          75% {
            transform: rotateX(135deg) rotateY(270deg) rotateZ(135deg) translateX(-150px) translateY(-75px) translateZ(75px);
          }
          100% {
            transform: rotateX(180deg) rotateY(360deg) rotateZ(180deg) translateX(0px) translateY(0px) translateZ(0px);
          }
        }
        
        /* Hexagon Animations */
        @keyframes hexagon-rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1);
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
            opacity: 0.6;
          }
          25% {
            transform: rotateX(90deg) rotateY(45deg) rotateZ(45deg) scale3d(1.1, 1.1, 1.1);
            clip-path: polygon(25% 5%, 75% 5%, 95% 25%, 95% 75%, 75% 95%, 25% 95%, 5% 75%, 5% 25%);
            opacity: 0.7;
          }
          50% {
            transform: rotateX(180deg) rotateY(90deg) rotateZ(90deg) scale3d(1.2, 1.2, 1.2);
            clip-path: polygon(20% 10%, 80% 10%, 90% 20%, 90% 80%, 80% 90%, 20% 90%, 10% 80%, 10% 20%);
            opacity: 0.8;
          }
          75% {
            transform: rotateX(270deg) rotateY(135deg) rotateZ(135deg) scale3d(1.1, 1.1, 1.1);
            clip-path: polygon(25% 5%, 75% 5%, 95% 25%, 95% 75%, 75% 95%, 25% 95%, 5% 75%, 5% 25%);
            opacity: 0.7;
          }
          100% {
            transform: rotateX(360deg) rotateY(180deg) rotateZ(180deg) scale3d(1, 1, 1);
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
            opacity: 0.6;
          }
        }
        
        @keyframes hexagon-morph-3d {
          0%, 100% {
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg);
            background: linear-gradient(45deg, #10b981, #3b82f6);
          }
          25% {
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            transform: scale3d(1.2, 0.8, 1.1) rotateX(45deg) rotateY(90deg);
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          }
          50% {
            clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%);
            transform: scale3d(0.8, 1.2, 0.9) rotateX(90deg) rotateY(180deg);
            background: linear-gradient(225deg, #8b5cf6, #ec4899);
          }
          75% {
            clip-path: polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%);
            transform: scale3d(1.1, 0.9, 1.2) rotateX(135deg) rotateY(270deg);
            background: linear-gradient(315deg, #ec4899, #10b981);
          }
        }
        
        @keyframes hexagon-glow-3d {
          0%, 100% {
            box-shadow: 0 0 50px rgba(16, 185, 129, 0.7), inset 0 0 50px rgba(16, 185, 129, 0.4);
            background: radial-gradient(polygon at center, rgba(16, 185, 129, 0.9), rgba(59, 130, 246, 0.7));
            filter: brightness(1) saturate(1);
          }
          25% {
            box-shadow: 0 0 100px rgba(16, 185, 129, 0.9), inset 0 0 100px rgba(16, 185, 129, 0.6);
            background: radial-gradient(polygon at center, rgba(16, 185, 129, 1), rgba(59, 130, 246, 0.9));
            filter: brightness(1.3) saturate(1.2);
          }
          50% {
            box-shadow: 0 0 150px rgba(16, 185, 129, 1), inset 0 0 150px rgba(16, 185, 129, 0.8);
            background: radial-gradient(polygon at center, rgba(16, 185, 129, 1), rgba(59, 130, 246, 1));
            filter: brightness(1.6) saturate(1.4);
          }
          75% {
            box-shadow: 0 0 100px rgba(16, 185, 129, 0.9), inset 0 0 100px rgba(16, 185, 129, 0.6);
            background: radial-gradient(polygon at center, rgba(16, 185, 129, 1), rgba(59, 130, 246, 0.9));
            filter: brightness(1.3) saturate(1.2);
          }
        }
        
        /* Particle System Animations */
        @keyframes particle-float-3d {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) scale3d(1, 1, 1);
            opacity: 0.3;
            filter: blur(1px);
          }
          25% {
            transform: translateY(-50px) translateX(30px) translateZ(100px) scale3d(1.2, 1.2, 1.2);
            opacity: 0.5;
            filter: blur(0.5px);
          }
          50% {
            transform: translateY(-100px) translateX(-30px) translateZ(200px) scale3d(1.5, 1.5, 1.5);
            opacity: 0.7;
            filter: blur(0px);
          }
          75% {
            transform: translateY(-50px) translateX(-60px) translateZ(100px) scale3d(1.2, 1.2, 1.2);
            opacity: 0.5;
            filter: blur(0.5px);
          }
        }
        
        @keyframes particle-swarm-3d {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateX(80px) translateY(-60px) translateZ(120px) rotateX(90deg) rotateY(45deg) rotateZ(45deg);
            opacity: 0.6;
          }
          50% {
            transform: translateX(0px) translateY(-120px) translateZ(240px) rotateX(180deg) rotateY(90deg) rotateZ(90deg);
            opacity: 0.8;
          }
          75% {
            transform: translateX(-80px) translateY(-60px) translateZ(120px) rotateX(270deg) rotateY(135deg) rotateZ(135deg);
            opacity: 0.6;
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(360deg) rotateY(180deg) rotateZ(180deg);
            opacity: 0.4;
          }
        }
        
        @keyframes particle-pulse-3d {
          0%, 100% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
            background: radial-gradient(circle, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.7));
          }
          25% {
            transform: scale3d(1.5, 1.5, 1.5) rotateX(90deg) rotateY(45deg) rotateZ(45deg);
            box-shadow: 0 0 30px rgba(59, 130, 246, 1);
            background: radial-gradient(circle, rgba(59, 130, 246, 1), rgba(139, 92, 246, 0.9));
          }
          50% {
            transform: scale3d(2, 2, 2) rotateX(180deg) rotateY(90deg) rotateZ(90deg);
            box-shadow: 0 0 50px rgba(59, 130, 246, 1);
            background: radial-gradient(circle, rgba(59, 130, 246, 1), rgba(139, 92, 246, 1));
          }
          75% {
            transform: scale3d(1.5, 1.5, 1.5) rotateX(270deg) rotateY(135deg) rotateZ(135deg);
            box-shadow: 0 0 30px rgba(59, 130, 246, 1);
            background: radial-gradient(circle, rgba(59, 130, 246, 1), rgba(139, 92, 246, 0.9));
          }
        }
        
        /* Lightning Effect Animations */
        @keyframes lightning-strike-3d {
          0%, 90%, 100% {
            opacity: 0;
            transform: scaleY(0) rotateX(0deg) rotateY(0deg);
            filter: brightness(1);
          }
          5% {
            opacity: 1;
            transform: scaleY(1) rotateX(45deg) rotateY(90deg);
            filter: brightness(2);
          }
          10% {
            opacity: 0.8;
            transform: scaleY(0.8) rotateX(90deg) rotateY(135deg);
            filter: brightness(1.5);
          }
          15% {
            opacity: 1;
            transform: scaleY(1.2) rotateX(135deg) rotateY(180deg);
            filter: brightness(2.5);
          }
          20% {
            opacity: 0.6;
            transform: scaleY(0.6) rotateX(180deg) rotateY(225deg);
            filter: brightness(1.2);
          }
        }
        
        @keyframes lightning-glow-3d {
          0%, 85%, 100% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.8));
            filter: brightness(1) contrast(1);
          }
          5% {
            box-shadow: 0 0 50px rgba(255, 255, 255, 1);
            background: linear-gradient(45deg, rgba(255, 255, 255, 1), rgba(59, 130, 246, 1));
            filter: brightness(3) contrast(2);
          }
          10% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.9);
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.95), rgba(59, 130, 246, 0.9));
            filter: brightness(2) contrast(1.5);
          }
          15% {
            box-shadow: 0 0 80px rgba(255, 255, 255, 1);
            background: linear-gradient(45deg, rgba(255, 255, 255, 1), rgba(59, 130, 246, 1));
            filter: brightness(4) contrast(3);
          }
          20% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.85);
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(59, 130, 246, 0.85));
            filter: brightness(1.5) contrast(1.2);
          }
        }
        
        /* Grid Pattern Animations */
        @keyframes grid-move-3d {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg);
            opacity: 0.3;
            filter: hue-rotate(0deg);
          }
          25% {
            transform: translateX(100px) translateY(-50px) translateZ(200px) rotateX(45deg) rotateY(90deg);
            opacity: 0.5;
            filter: hue-rotate(90deg);
          }
          50% {
            transform: translateX(0px) translateY(-100px) translateZ(400px) rotateX(90deg) rotateY(180deg);
            opacity: 0.7;
            filter: hue-rotate(180deg);
          }
          75% {
            transform: translateX(-100px) translateY(-50px) translateZ(200px) rotateX(135deg) rotateY(270deg);
            opacity: 0.5;
            filter: hue-rotate(270deg);
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(180deg) rotateY(360deg);
            opacity: 0.3;
            filter: hue-rotate(360deg);
          }
        }
        
        @keyframes grid-pulse-3d {
          0%, 100% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg);
            background-size: 20px 20px;
            opacity: 0.4;
          }
          25% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(90deg) rotateY(45deg);
            background-size: 25px 25px;
            opacity: 0.6;
          }
          50% {
            transform: scale3d(1.5, 1.5, 1.5) rotateX(180deg) rotateY(90deg);
            background-size: 30px 30px;
            opacity: 0.8;
          }
          75% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(270deg) rotateY(135deg);
            background-size: 25px 25px;
            opacity: 0.6;
          }
        }
        
        @keyframes grid-morph-3d {
          0%, 100% {
            background-image: 
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px);
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
          }
          25% {
            background-image: 
              linear-gradient(rgba(139, 92, 246, 0.5) 2px, transparent 2px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.5) 2px, transparent 2px);
            transform: perspective(1000px) rotateX(45deg) rotateY(90deg);
          }
          50% {
            background-image: 
              linear-gradient(rgba(236, 72, 153, 0.7) 3px, transparent 3px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.7) 3px, transparent 3px);
            transform: perspective(1000px) rotateX(90deg) rotateY(180deg);
          }
          75% {
            background-image: 
              linear-gradient(rgba(245, 158, 11, 0.5) 2px, transparent 2px),
              linear-gradient(90deg, rgba(245, 158, 11, 0.5) 2px, transparent 2px);
            transform: perspective(1000px) rotateX(135deg) rotateY(270deg);
          }
        }
        
        /* Mouse Follower Animations */
        @keyframes mouse-follower-3d-1 {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(1, 1, 1);
            opacity: 0.6;
            filter: blur(0px) hue-rotate(0deg);
          }
          25% {
            transform: translateX(30px) translateY(-20px) translateZ(50px) scale3d(1.1, 1.1, 1.1);
            opacity: 0.7;
            filter: blur(1px) hue-rotate(90deg);
          }
          50% {
            transform: translateX(60px) translateY(-40px) translateZ(100px) scale3d(1.2, 1.2, 1.2);
            opacity: 0.8;
            filter: blur(2px) hue-rotate(180deg);
          }
          75% {
            transform: translateX(30px) translateY(-20px) translateZ(50px) scale3d(1.1, 1.1, 1.1);
            opacity: 0.7;
            filter: blur(1px) hue-rotate(270deg);
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(1, 1, 1);
            opacity: 0.6;
            filter: blur(0px) hue-rotate(360deg);
          }
        }
        
        @keyframes mouse-follower-3d-2 {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(0.8, 0.8, 0.8) rotateX(0deg) rotateY(0deg);
            opacity: 0.5;
            background: radial-gradient(circle, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.6));
          }
          25% {
            transform: translateX(-40px) translateY(30px) translateZ(80px) scale3d(0.9, 0.9, 0.9) rotateX(90deg) rotateY(45deg);
            opacity: 0.6;
            background: radial-gradient(circle, rgba(236, 72, 153, 0.9), rgba(245, 158, 11, 0.7));
          }
          50% {
            transform: translateX(-80px) translateY(60px) translateZ(160px) scale3d(1, 1, 1) rotateX(180deg) rotateY(90deg);
            opacity: 0.7;
            background: radial-gradient(circle, rgba(245, 158, 11, 1), rgba(16, 185, 129, 0.8));
          }
          75% {
            transform: translateX(-40px) translateY(30px) translateZ(80px) scale3d(0.9, 0.9, 0.9) rotateX(270deg) rotateY(135deg);
            opacity: 0.6;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.9), rgba(59, 130, 246, 0.7));
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(0.8, 0.8, 0.8) rotateX(360deg) rotateY(180deg);
            opacity: 0.5;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.6));
          }
        }
        
        @keyframes mouse-follower-3d-3 {
          0% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(1.2, 1.2, 1.2) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            opacity: 0.4;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
          25% {
            transform: translateX(50px) translateY(-30px) translateZ(120px) scale3d(1.3, 1.3, 1.3) rotateX(45deg) rotateY(90deg) rotateZ(45deg);
            opacity: 0.5;
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.8);
          }
          50% {
            transform: translateX(100px) translateY(-60px) translateZ(240px) scale3d(1.4, 1.4, 1.4) rotateX(90deg) rotateY(180deg) rotateZ(90deg);
            opacity: 0.6;
            box-shadow: 0 0 60px rgba(236, 72, 153, 1);
          }
          75% {
            transform: translateX(50px) translateY(-30px) translateZ(120px) scale3d(1.3, 1.3, 1.3) rotateX(135deg) rotateY(270deg) rotateZ(135deg);
            opacity: 0.5;
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.8);
          }
          100% {
            transform: translateX(0px) translateY(0px) translateZ(0px) scale3d(1.2, 1.2, 1.2) rotateX(180deg) rotateY(360deg) rotateZ(180deg);
            opacity: 0.4;
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
          }
        }
        
        /* Advanced Orb Animations */
        @keyframes orb-float-3d-advanced {
          0%, 100% {
            transform: translateY(0px) translateX(0px) translateZ(0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            filter: blur(0px) brightness(1) saturate(1) hue-rotate(0deg);
            opacity: 0.8;
          }
          12.5% {
            transform: translateY(-40px) translateX(60px) translateZ(120px) scale3d(1.1, 1.1, 1.1) rotateX(45deg) rotateY(90deg) rotateZ(45deg);
            filter: blur(1px) brightness(1.2) saturate(1.1) hue-rotate(45deg);
            opacity: 0.85;
          }
          25% {
            transform: translateY(-80px) translateX(120px) translateZ(240px) scale3d(1.2, 1.2, 1.2) rotateX(90deg) rotateY(180deg) rotateZ(90deg);
            filter: blur(2px) brightness(1.4) saturate(1.2) hue-rotate(90deg);
            opacity: 0.9;
          }
          37.5% {
            transform: translateY(-60px) translateX(180px) translateZ(180px) scale3d(1.3, 1.3, 1.3) rotateX(135deg) rotateY(270deg) rotateZ(135deg);
            filter: blur(1.5px) brightness(1.3) saturate(1.15) hue-rotate(135deg);
            opacity: 0.85;
          }
          50% {
            transform: translateY(-40px) translateX(240px) translateZ(120px) scale3d(1.4, 1.4, 1.4) rotateX(180deg) rotateY(360deg) rotateZ(180deg);
            filter: blur(1px) brightness(1.6) saturate(1.4) hue-rotate(180deg);
            opacity: 0.95;
          }
          62.5% {
            transform: translateY(-20px) translateX(180px) translateZ(60px) scale3d(1.3, 1.3, 1.3) rotateX(225deg) rotateY(450deg) rotateZ(225deg);
            filter: blur(0.5px) brightness(1.3) saturate(1.15) hue-rotate(225deg);
            opacity: 0.85;
          }
          75% {
            transform: translateY(0px) translateX(120px) translateZ(0px) scale3d(1.2, 1.2, 1.2) rotateX(270deg) rotateY(540deg) rotateZ(270deg);
            filter: blur(0px) brightness(1.2) saturate(1.1) hue-rotate(270deg);
            opacity: 0.8;
          }
          87.5% {
            transform: translateY(-20px) translateX(60px) translateZ(60px) scale3d(1.1, 1.1, 1.1) rotateX(315deg) rotateY(630deg) rotateZ(315deg);
            filter: blur(0.5px) brightness(1.1) saturate(1.05) hue-rotate(315deg);
            opacity: 0.75;
          }
        }
        
        @keyframes orb-pulse-3d-advanced {
          0%, 100% {
            transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            box-shadow: 
              0 0 30px rgba(59, 130, 246, 0.8),
              0 0 60px rgba(139, 92, 246, 0.6),
              0 0 90px rgba(236, 72, 153, 0.4),
              inset 0 0 30px rgba(59, 130, 246, 0.4);
            background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.7), rgba(236, 72, 153, 0.5));
            opacity: 0.9;
          }
          20% {
            transform: scale3d(1.3, 1.3, 1.3) rotateX(72deg) rotateY(72deg) rotateZ(72deg);
            box-shadow: 
              0 0 60px rgba(139, 92, 246, 0.9),
              0 0 120px rgba(236, 72, 153, 0.7),
              0 0 180px rgba(245, 158, 11, 0.5),
              inset 0 0 60px rgba(139, 92, 246, 0.5);
            background: radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 1), rgba(236, 72, 153, 0.8), rgba(245, 158, 11, 0.6));
            opacity: 0.95;
          }
          40% {
            transform: scale3d(1.6, 1.6, 1.6) rotateX(144deg) rotateY(144deg) rotateZ(144deg);
            box-shadow: 
              0 0 90px rgba(236, 72, 153, 1),
              0 0 180px rgba(245, 158, 11, 0.8),
              0 0 270px rgba(16, 185, 129, 0.6),
              inset 0 0 90px rgba(236, 72, 153, 0.6);
            background: radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 1), rgba(245, 158, 11, 0.9), rgba(16, 185, 129, 0.7));
            opacity: 1;
          }
          60% {
            transform: scale3d(1.4, 1.4, 1.4) rotateX(216deg) rotateY(216deg) rotateZ(216deg);
            box-shadow: 
              0 0 120px rgba(245, 158, 11, 0.9),
              0 0 240px rgba(16, 185, 129, 0.7),
              0 0 360px rgba(59, 130, 246, 0.5),
              inset 0 0 120px rgba(245, 158, 11, 0.7);
            background: radial-gradient(circle at 60% 60%, rgba(245, 158, 11, 1), rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.6));
            opacity: 0.95;
          }
          80% {
            transform: scale3d(1.2, 1.2, 1.2) rotateX(288deg) rotateY(288deg) rotateZ(288deg);
            box-shadow: 
              0 0 60px rgba(16, 185, 129, 0.8),
              0 0 120px rgba(59, 130, 246, 0.6),
              0 0 180px rgba(139, 92, 246, 0.4),
              inset 0 0 60px rgba(16, 185, 129, 0.4);
            background: radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.95), rgba(59, 130, 246, 0.75), rgba(139, 92, 246, 0.55));
            opacity: 0.9;
          }
        }
        
        /* Complex Wave Animations */
        @keyframes wave-complex-3d {
          0%, 100% {
            transform: 
              translateX(0px) translateY(0px) translateZ(0px)
              rotateX(0deg) rotateY(0deg) rotateZ(0deg)
              scale3d(1, 1, 1)
              skewX(0deg) skewY(0deg);
            opacity: 0.6;
            filter: blur(0px) brightness(1) contrast(1) saturate(1);
          }
          10% {
            transform: 
              translateX(20px) translateY(-15px) translateZ(40px)
              rotateX(36deg) rotateY(36deg) rotateZ(36deg)
              scale3d(1.1, 1.1, 1.1)
              skewX(5deg) skewY(-5deg);
            opacity: 0.65;
            filter: blur(0.5px) brightness(1.1) contrast(1.05) saturate(1.05);
          }
          20% {
            transform: 
              translateX(40px) translateY(-30px) translateZ(80px)
              rotateX(72deg) rotateY(72deg) rotateZ(72deg)
              scale3d(1.2, 1.2, 1.2)
              skewX(10deg) skewY(-10deg);
            opacity: 0.7;
            filter: blur(1px) brightness(1.2) contrast(1.1) saturate(1.1);
          }
          30% {
            transform: 
              translateX(60px) translateY(-45px) translateZ(120px)
              rotateX(108deg) rotateY(108deg) rotateZ(108deg)
              scale3d(1.3, 1.3, 1.3)
              skewX(15deg) skewY(-15deg);
            opacity: 0.75;
            filter: blur(1.5px) brightness(1.3) contrast(1.15) saturate(1.15);
          }
          40% {
            transform: 
              translateX(80px) translateY(-60px) translateZ(160px)
              rotateX(144deg) rotateY(144deg) rotateZ(144deg)
              scale3d(1.4, 1.4, 1.4)
              skewX(20deg) skewY(-20deg);
            opacity: 0.8;
            filter: blur(2px) brightness(1.4) contrast(1.2) saturate(1.2);
          }
          50% {
            transform: 
              translateX(100px) translateY(-75px) translateZ(200px)
              rotateX(180deg) rotateY(180deg) rotateZ(180deg)
              scale3d(1.5, 1.5, 1.5)
              skewX(25deg) skewY(-25deg);
            opacity: 0.85;
            filter: blur(2.5px) brightness(1.5) contrast(1.25) saturate(1.25);
          }
          60% {
            transform: 
              translateX(80px) translateY(-60px) translateZ(160px)
              rotateX(216deg) rotateY(216deg) rotateZ(216deg)
              scale3d(1.4, 1.4, 1.4)
              skewX(20deg) skewY(-20deg);
            opacity: 0.8;
            filter: blur(2px) brightness(1.4) contrast(1.2) saturate(1.2);
          }
          70% {
            transform: 
              translateX(60px) translateY(-45px) translateZ(120px)
              rotateX(252deg) rotateY(252deg) rotateZ(252deg)
              scale3d(1.3, 1.3, 1.3)
              skewX(15deg) skewY(-15deg);
            opacity: 0.75;
            filter: blur(1.5px) brightness(1.3) contrast(1.15) saturate(1.15);
          }
          80% {
            transform: 
              translateX(40px) translateY(-30px) translateZ(80px)
              rotateX(288deg) rotateY(288deg) rotateZ(288deg)
              scale3d(1.2, 1.2, 1.2)
              skewX(10deg) skewY(-10deg);
            opacity: 0.7;
            filter: blur(1px) brightness(1.2) contrast(1.1) saturate(1.1);
          }
          90% {
            transform: 
              translateX(20px) translateY(-15px) translateZ(40px)
              rotateX(324deg) rotateY(324deg) rotateZ(324deg)
              scale3d(1.1, 1.1, 1.1)
              skewX(5deg) skewY(-5deg);
            opacity: 0.65;
            filter: blur(0.5px) brightness(1.1) contrast(1.05) saturate(1.05);
          }
          @keyframes progress-fill {
            0% {
              width: 0%;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              width: var(--progress-width, 75%);
              opacity: 1;
            }
          }

          /* Mobile-Optimized 3D Animations */
          @keyframes mobile-3d-pulse {
            0%, 100% {
              transform: scale(1) translateZ(0px);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.05) translateZ(10px);
              opacity: 1;
            }
          }

          @keyframes mobile-glow-effect {
            0%, 100% {
              box-shadow: 0 0 15px rgba(147, 51, 234, 0.4);
              filter: brightness(1);
            }
            50% {
              box-shadow: 0 0 30px rgba(147, 51, 234, 0.7), 0 0 45px rgba(59, 130, 246, 0.5);
              filter: brightness(1.1);
            }
          }

          @keyframes mobile-float-animation {
            0%, 100% {
              transform: translateY(0px) translateX(0px) rotateZ(0deg);
            }
            25% {
              transform: translateY(-5px) translateX(3px) rotateZ(1deg);
            }
            50% {
              transform: translateY(-8px) translateX(0px) rotateZ(0deg);
            }
            75% {
              transform: translateY(-5px) translateX(-3px) rotateZ(-1deg);
            }
          }

          @keyframes mobile-data-flow {
            0% {
              transform: translateY(100%) translateX(0) scale(0.8);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            50% {
              transform: translateY(0%) translateX(10px) scale(1);
              opacity: 1;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(-100%) translateX(0) scale(0.8);
              opacity: 0;
            }
          }

          @keyframes mobile-metric-glow {
            0%, 100% {
              background: linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1));
              border-color: rgba(147, 51, 234, 0.3);
            }
            50% {
              background: linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2));
              border-color: rgba(147, 51, 234, 0.6);
              box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
            }
          }

          /* Touch-optimized hover effects */
          @media (hover: hover) {
            .mobile-touch-card:hover {
              transform: scale(1.02) translateY(-2px);
              box-shadow: 0 10px 30px rgba(147, 51, 234, 0.3);
            }
          }

          /* Reduce motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .mobile-3d-pulse,
            .mobile-glow-effect,
            .mobile-float-animation,
            .mobile-data-flow,
            .mobile-metric-glow {
              animation: none;
            }
          }

          /* Enhanced 3D Metrics Animations */
          @keyframes enhanced-metric-pulse {
            0%, 100% {
              transform: scale(1) rotateX(0deg) rotateY(0deg) translateZ(0px);
              box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
              filter: brightness(1) saturate(1);
            }
            25% {
              transform: scale(1.02) rotateX(2deg) rotateY(2deg) translateZ(5px);
              box-shadow: 0 0 30px rgba(147, 51, 234, 0.5);
              filter: brightness(1.05) saturate(1.1);
            }
            50% {
              transform: scale(1.05) rotateX(5deg) rotateY(5deg) translateZ(15px);
              box-shadow: 0 0 40px rgba(147, 51, 234, 0.7), 0 0 60px rgba(59, 130, 246, 0.4);
              filter: brightness(1.1) saturate(1.2);
            }
            75% {
              transform: scale(1.02) rotateX(2deg) rotateY(2deg) translateZ(5px);
              box-shadow: 0 0 30px rgba(147, 51, 234, 0.5);
              filter: brightness(1.05) saturate(1.1);
            }
          }

          @keyframes data-stream-flow {
            0% {
              transform: translateY(-100%) translateX(-20px) rotateZ(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            50% {
              transform: translateY(50%) translateX(20px) rotateZ(180deg);
              opacity: 1;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(200%) translateX(-20px) rotateZ(360deg);
              opacity: 0;
            }
          }

          @keyframes hologram-effect {
            0%, 100% {
              background: linear-gradient(45deg, transparent, rgba(147, 51, 234, 0.1), transparent);
              border-color: rgba(147, 51, 234, 0.4);
            }
            50% {
              background: linear-gradient(45deg, transparent, rgba(147, 51, 234, 0.3), transparent);
              border-color: rgba(147, 51, 234, 0.8);
              box-shadow: 
                0 0 30px rgba(147, 51, 234, 0.4),
                inset 0 0 20px rgba(147, 51, 234, 0.2);
            }
          }

          @keyframes particle-swarm {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 0.8;
            }
            33% {
              transform: translate(30px, -20px) scale(1.2);
              opacity: 0.6;
            }
            66% {
              transform: translate(-20px, 30px) scale(0.8);
              opacity: 0.4;
            }
            100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.8;
            }
          }

          /* Enhanced hover effects */
          .enhanced-metric-card {
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            transform-style: preserve-3d;
            perspective: 1000px;
          }

          .enhanced-metric-card:hover {
            transform: translateY(-8px) rotateX(5deg) rotateY(5deg) scale(1.02);
            box-shadow: 
              0 20px 40px rgba(147, 51, 234, 0.3),
              0 10px 20px rgba(59, 130, 246, 0.2),
              inset 0 0 30px rgba(147, 51, 234, 0.1);
          }

          /* Data visualization enhancements */
          .data-bar-animated {
            background: linear-gradient(180deg, 
              rgba(147, 51, 234, 0.9) 0%, 
              rgba(147, 51, 234, 0.6) 50%, 
              rgba(59, 130, 246, 0.4) 100%);
            box-shadow: 
              0 0 20px rgba(147, 51, 234, 0.5),
              inset 0 0 10px rgba(255, 255, 255, 0.2);
          }

          /* Mobile-specific performance optimizations */
          @media (max-width: 640px) {
            .enhanced-metric-card:hover {
              transform: translateY(-4px) scale(1.01);
            }
            
            .data-bar-animated {
              animation-duration: 3s;
            }
          }

          /* Mobile Image Optimizations */
          @media (max-width: 640px) {
            .hero-bg-image {
              background-attachment: scroll !important;
              background-position: center !important;
              background-size: cover !important;
            }
            
            .mobile-image-gallery {
              height: 300px !important;
            }
            
            .mobile-image-gallery img {
              object-fit: cover;
              object-position: center;
            }
            
            .mobile-controls {
              top: 1rem !important;
              left: 1rem !important;
              right: 1rem !important;
            }
            
            .mobile-nav-buttons {
              width: 2.5rem !important;
              height: 2.5rem !important;
            }
            
            .mobile-dots {
              bottom: 1rem !important;
            }
          }

          @media (min-width: 641px) and (max-width: 1024px) {
            .tablet-image-gallery {
              height: 450px !important;
            }
          }

          /* Professional image enhancements */
          .professional-image-overlay {
            background: linear-gradient(
              135deg,
              rgba(147, 51, 234, 0.1) 0%,
              rgba(59, 130, 246, 0.05) 50%,
              transparent 100%
            );
            mix-blend-mode: overlay;
          }

          .image-glow-effect {
            box-shadow: 
              0 0 30px rgba(147, 51, 234, 0.2),
              0 0 60px rgba(59, 130, 246, 0.1),
              inset 0 0 20px rgba(255, 255, 255, 0.05);
          }

          /* Professional Chart Animations */
          @keyframes chart-bar-grow {
            0% {
              height: 0%;
              opacity: 0;
              transform: translateY(100%);
            }
            20% {
              opacity: 0.8;
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes trend-line-draw {
            0% {
              stroke-dashoffset: 100;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }

          @keyframes data-point-pulse {
            0%, 100% {
              r: 3;
              opacity: 0.8;
            }
            50% {
              r: 5;
              opacity: 1;
            }
          }

          @keyframes chart-shine {
            0% {
              transform: translateX(-100%) translateY(-100%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(100%) translateY(100%);
              opacity: 0;
            }
          }

          @keyframes grid-fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .professional-chart-bar {
            animation: chart-bar-grow 1.5s ease-out forwards;
            transform-origin: bottom;
          }

          .trend-line-animated {
            stroke-dasharray: 100;
            animation: trend-line-draw 2s ease-out forwards;
          }

          .data-point-animated {
            animation: data-point-pulse 2s ease-in-out infinite;
          }

          .chart-shine-effect {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
            animation: chart-shine 3s ease-in-out infinite;
            pointer-events: none;
          }

          .grid-lines-animated {
            animation: grid-fade-in 1s ease-out forwards;
          }

          /* Chart hover effects */
          .chart-bar-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .chart-bar-hover:hover {
            transform: translateY(-4px) scale(1.02);
            filter: brightness(1.2) saturate(1.1);
          }

          @keyframes bar-glow {
            0%, 100% {
              box-shadow: 0 -8px 32px rgba(147, 51, 234, 0.6), inset 0 2px 4px rgba(255,255,255,0.3);
            }
            50% {
              box-shadow: 0 -12px 48px rgba(147, 51, 234, 0.8), inset 0 2px 6px rgba(255,255,255,0.4);
            }
          }

          @keyframes mobile-3d-pulse {
            0%, 100% {
              transform: scale(1) translateY(0);
            }
            50% {
              transform: scale(1.02) translateY(-2px);
            }
          }

          @keyframes enhanced-metric-pulse {
            0%, 100% {
              box-shadow: 0 0 20px rgba(147, 51, 234, 0.2);
              transform: scale(1);
            }
            50% {
              box-shadow: 0 0 40px rgba(147, 51, 234, 0.4);
              transform: scale(1.005);
            }
          }

          @keyframes powerful-bar-grow {
            0% {
              height: 0%;
              opacity: 0;
              transform: translateY(100%) scale(0.5);
            }
            20% {
              opacity: 0.8;
              transform: translateY(50%) scale(0.8);
            }
            50% {
              transform: translateY(20%) scale(1.1);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes powerful-bar-pulse {
            0%, 100% {
              transform: scale(1) translateY(0);
              filter: brightness(1) saturate(1);
            }
            25% {
              transform: scale(1.02) translateY(-1px);
              filter: brightness(1.1) saturate(1.1);
            }
            50% {
              transform: scale(1.03) translateY(-2px);
              filter: brightness(1.2) saturate(1.2);
            }
            75% {
              transform: scale(1.02) translateY(-1px);
              filter: brightness(1.1) saturate(1.1);
            }
          }

          @keyframes powerful-bar-glow {
            0%, 100% {
              box-shadow: 0 -12px 40px rgba(147, 51, 234, 0.8), inset 0 4px 8px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2);
            }
            33% {
              box-shadow: 0 -16px 48px rgba(147, 51, 234, 0.9), inset 0 6px 12px rgba(255,255,255,0.5), 0 0 80px rgba(255,255,255,0.3);
            }
            66% {
              box-shadow: 0 -20px 56px rgba(147, 51, 234, 1), inset 0 8px 16px rgba(255,255,255,0.6), 0 0 100px rgba(255,255,255,0.4);
            }
          }

          @keyframes powerful-bar-rotate {
            0%, 100% {
              transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
            }
            25% {
              transform: perspective(1000px) rotateY(2deg) rotateX(1deg);
            }
            50% {
              transform: perspective(1000px) rotateY(0deg) rotateX(2deg);
            }
            75% {
              transform: perspective(1000px) rotateY(-2deg) rotateX(1deg);
            }
          }

          .powerful-bar-chart {
            animation: powerful-bar-grow 2s ease-out forwards;
            transform-origin: bottom;
            position: relative;
          }

          .powerful-shine-1 {
            animation-delay: 0.2s;
          }

          .powerful-shine-2 {
            animation-delay: 0.5s;
          }

          /* Enhanced hover effects for powerful bars */
          .powerful-bar-chart:hover {
            animation: powerful-bar-hover 0.5s ease-out forwards;
          }

          @keyframes powerful-bar-hover {
            0% {
              transform: scale(1) translateY(0);
            }
            50% {
              transform: scale(1.15) translateY(-4px);
            }
            100% {
              transform: scale(1.15) translateY(-4px);
            }
          }

          @keyframes skill-pulse {
            0%, 100% {
              transform: scale(1) translateY(0);
              opacity: 0.9;
            }
            50% {
              transform: scale(1.05) translateY(-2px);
              opacity: 1;
            }
          }

          @keyframes skill-glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(147, 51, 234, 0.6);
            }
            50% {
              box-shadow: 0 0 30px rgba(147, 51, 234, 0.9);
            }
          }

          /* Mobile chart optimizations */
          @media (max-width: 640px) {
            .professional-chart-bar {
              animation-duration: 1s;
            }
            
            .trend-line-animated {
              animation-duration: 1.5s;
            }
          }
        `}</style>
    </div>
  );
};

export default Landing; 
