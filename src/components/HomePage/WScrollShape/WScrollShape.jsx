import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// تسجيل المكون الإضافي ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const WScrollShape = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

    const pathD = "M 50 50 L 150 450 L 250 50 L 350 450 L 450 50";

  useLayoutEffect(() => {
    const path = pathRef.current;
    
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length, 
      strokeDashoffset: length, 
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current, 
        start: "top center",  
        end: "bottom center",  
        scrub: true,       
      },
    });

    tl.to(path, {
      strokeDashoffset: 0,
    });

    // Cleanup function
    return () => {
      tl.kill(); 
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg 
        ref={svgRef} 
        viewBox="0 0 500 500" 
        className="w-[800px] h-[800px] absolute top-[-100px] left-[-100px] opacity-70" 
      >
        <path
          ref={pathRef} 
          d={pathD} 
          fill="none"
          stroke="#c5a36366" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default WScrollShape;