import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BibTexButtonProps {
  bibtex: string;
}

export default function BibTexButton({ bibtex }: BibTexButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = bibtex;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="bibtex-btn bibtex-btn-secondary"
          aria-expanded={showPreview}
          aria-label="Toggle BibTeX preview"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          BibTeX
        </button>

        <button
          onClick={handleCopy}
          className={`bibtex-btn ${copied ? 'bibtex-btn-success' : 'bibtex-btn-primary'}`}
          aria-label={copied ? 'Copied!' : 'Copy BibTeX to clipboard'}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Copied
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                </svg>
                Copy
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="bibtex-preview"
          >
            <pre>{bibtex}</pre>
            <button
              onClick={() => setShowPreview(false)}
              className="bibtex-close"
              aria-label="Close BibTeX preview"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .bibtex-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.3rem 0.7rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid;
          transition: all 0.15s ease;
          font-family: inherit;
        }
        .bibtex-btn-primary {
          background: var(--accent-light);
          color: var(--accent);
          border-color: transparent;
        }
        .bibtex-btn-primary:hover {
          opacity: 0.85;
        }
        .bibtex-btn-secondary {
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border-color: var(--border);
        }
        .bibtex-btn-secondary:hover {
          color: var(--text-primary);
          border-color: var(--accent);
        }
        .bibtex-btn-success {
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
          border-color: rgba(34, 197, 94, 0.2);
        }
        @media (prefers-color-scheme: dark) {
          .bibtex-btn-success {
            color: #4ade80;
          }
        }
        .bibtex-preview {
          position: relative;
          margin-top: 0.75rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1rem;
          overflow: auto;
          max-height: 280px;
          width: 100%;
          min-width: 320px;
        }
        .bibtex-preview pre {
          font-family: var(--font-mono, monospace);
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin: 0;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .bibtex-close {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: none;
          border: none;
          font-size: 1.1rem;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          transition: background 0.1s;
        }
        .bibtex-close:hover {
          background: var(--border);
        }
      `}</style>
    </div>
  );
}
