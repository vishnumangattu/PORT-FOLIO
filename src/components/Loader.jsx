import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="globe-wrapper">
        <svg className="globe-svg" viewBox="0 0 200 200">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00e0ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#001f2f" stopOpacity="0.1" />
            </radialGradient>
            <filter id="glow-effect" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="100" cy="100" r="70" fill="url(#glow)" filter="url(#glow-effect)" />
          <path d="M100,30 Q120,60 100,100 Q80,140 100,170" stroke="#00e0ff" strokeWidth="2" fill="none" opacity="0.7"/>
          <path d="M60,100 Q100,120 140,100 Q100,80 60,100" stroke="#00e0ff" strokeWidth="2" fill="none" opacity="0.5"/>
          <path d="M100,60 Q110,100 100,140 Q90,100 100,60" stroke="#00e0ff" strokeWidth="1.5" fill="none" opacity="0.4"/>
        </svg>
      </div>
      <div className="loader-text">{progress === 100 ? 'COMPLETED' : 'LOADING...'}</div>
      <div className="progress-bar-wrapper">
        <div className="progress-bar-bg">
          <div className="progress-bar-fg" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-percent">{progress} %</div>
      </div>
    </div>
  );
};

export default Loader; 