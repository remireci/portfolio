'use client'

import React, { useEffect } from 'react';

function BootstrapTooltip() {
  useEffect(() => {
    // Your Bootstrap tooltip script here
    require('../static/main.70a66962.js');
    // Make sure to return a cleanup function if needed
    return () => {
      // Cleanup code here
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return null; // This component doesn't render anything, it just initializes the script
}

export default BootstrapTooltip;