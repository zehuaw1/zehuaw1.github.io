import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
}

export default function ScrollFadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-80px 0px' });

  const directionOffset: Record<string, { x?: number; y?: number }> = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
    none: {},
  };

  const initial = {
    opacity: 0,
    ...directionOffset[direction],
  };

  const animate = isInView
    ? { opacity: 1, x: 0, y: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
