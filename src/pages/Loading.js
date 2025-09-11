import React, { useState, useEffect } from 'react';
import './Loading.css';

export default function Loading({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-text">WILL</span>
            <span className="logo-accent">BANK</span>
          </div>
        </div>
        
        <div className="loading-bar">
          <div className="loading-progress" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="loading-text">
          <p>Carregando sua experiência bancária...</p>
          <span className="progress-text">{progress}%</span>
        </div>
      </div>
    </div>
  );
}