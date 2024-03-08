import React from 'react';

function StormTrooper3D() {
  return (
    <div className="sketchfab-embed-wrapper h-full w-full"> 
      <iframe 
        frameBorder="0"  
        allow="autoplay; fullscreen; xr-spatial-tracking" 
        xr-spatial-tracking 
        execution-while-out-of-viewport 
        execution-while-not-rendered 
        web-share 
        width="auto" 
        height="auto" 
        src="https://sketchfab.com/models/a0a6465bb3774a0f944120f37955bc36/embed?autostart=1&ui_theme=dark"> 
      </iframe> 
    </div>
  );
}

export default StormTrooper3D;
