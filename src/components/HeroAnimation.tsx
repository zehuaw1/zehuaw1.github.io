import { motion } from 'framer-motion';

interface HeroAnimationProps {
  name: string;
  tagline: string;
  highlightWords?: string[];
  tags: string[];
}

export default function HeroAnimation({ name, tagline, highlightWords = [] }: HeroAnimationProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  // Render tagline with highlighted words
  function renderTagline(text: string) {
    if (highlightWords.length === 0) return text;
    
    const parts: (string | JSX.Element)[] = [];
    let remaining = text;
    
    highlightWords.forEach((word) => {
      const idx = remaining.indexOf(word);
      if (idx >= 0) {
        if (idx > 0) parts.push(remaining.slice(0, idx));
        parts.push(<span key={word} className="hero-highlight">{word}</span>);
        remaining = remaining.slice(idx + word.length);
      }
    });
    if (remaining) parts.push(remaining);
    
    return parts;
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="hero-anim-wrapper"
    >
      <motion.h1 variants={item} className="hero-name">
        {name}
      </motion.h1>

      {tagline.split('\n').map((line, i) => (
        <motion.p key={i} variants={item} className={i === 0 ? 'hero-tagline hero-tagline-first' : 'hero-tagline'}>
          {i === 0 ? line : renderTagline(line)}
        </motion.p>
      ))}

      <style>{`
        .hero-anim-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .hero-name {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
          margin: 0;
          color: var(--text-primary);
        }
        .hero-tagline {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: var(--text-secondary);
          max-width: 48ch;
          line-height: 1.6;
          margin: 0;
          font-weight: 400;
          font-family: inherit;
        }
        .hero-tagline-first {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 500;
          color: var(--text-primary);
          opacity: 0.7;
          margin-bottom: 0.5rem;
        }
        .hero-highlight {
          color: var(--accent);
          font-weight: 500;
        }
      `}</style>
    </motion.div>
  );
}
