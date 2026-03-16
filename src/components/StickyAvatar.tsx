import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StickyAvatarProps {
  src: string;
  alt: string;
  initialSize?: number;
  finalSize?: number;
}

export default function StickyAvatar({ 
  src, 
  alt, 
  initialSize = 360, 
  finalSize = 180 
}: StickyAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState({ start: 0, end: 1 });
  
  useEffect(() => {
    const updateRange = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      // Start shrinking when hero ends, finish by mid-about section
      const start = scrollTop + rect.top + window.innerHeight * 0.5;
      const end = start + window.innerHeight * 0.6;
      setScrollRange({ start, end });
    };
    
    updateRange();
    window.addEventListener('resize', updateRange);
    return () => window.removeEventListener('resize', updateRange);
  }, []);

  const { scrollY } = useScroll();
  
  const size = useTransform(
    scrollY,
    [scrollRange.start, scrollRange.end],
    [initialSize, finalSize]
  );
  
  const borderRadius = useTransform(
    scrollY,
    [scrollRange.start, scrollRange.end],
    ['50%', '16px']
  );

  return (
    <div ref={containerRef} className="sticky-avatar-container">
      <div className="sticky-avatar-wrapper">
        <motion.img
          src={src}
          alt={alt}
          className="sticky-avatar-img"
          style={{
            width: size,
            height: size,
            borderRadius,
          }}
          loading="eager"
        />
      </div>
      
      <style>{`
        .sticky-avatar-container {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 0;
          overflow: visible;
        }
        
        .sticky-avatar-wrapper {
          position: sticky;
          top: 100px;
          float: right;
          margin-right: 1.5rem;
        }
        
        .sticky-avatar-img {
          display: block;
          object-fit: cover;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
          border: 3px solid var(--bg);
          outline: 1px solid var(--border);
        }
        
        @media (max-width: 768px) {
          .sticky-avatar-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
