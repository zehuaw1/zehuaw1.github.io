import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: number;
  featured: boolean;
  links: Array<{ type: string; url: string; label?: string }>;
}

interface ProjectFilterProps {
  projects: Project[];
}

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeTag, setActiveTag] = useState<string>('All');

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return ['All', ...Array.from(tagSet)];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeTag === 'All') return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [projects, activeTag]);

  const iconMap: Record<string, string> = {
    paper: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    demo: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    video: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    website: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9',
  };

  return (
    <div>
      <div className="filter-bar" role="group" aria-label="Filter projects by tag">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`filter-btn ${activeTag === tag ? 'filter-btn-active' : ''}`}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      <p className="filter-count" aria-live="polite">
        {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        {activeTag !== 'All' ? ` in "${activeTag}"` : ''}
      </p>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="pf-card"
            >
              <div className="pf-body">
                <div className="pf-header">
                  <span className="pf-year">{project.year}</span>
                  {project.featured && <span className="pf-featured">Featured</span>}
                </div>

                <a href={`/projects/${project.slug}`} className="pf-title-link">
                  <h3 className="pf-title">{project.title}</h3>
                </a>
                <p className="pf-desc">{project.description}</p>

                <div className="pf-tags">
                  {project.tags.slice(0, 4).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className={`pf-tag ${activeTag === tag ? 'pf-tag-active' : ''}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="pf-links">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      className="pf-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={iconMap[link.type] ?? iconMap.website} />
                      </svg>
                      {link.label ?? link.type}
                    </a>
                  ))}
                  <a href={`/projects/${project.slug}`} className="pf-link-btn pf-link-primary">
                    Details →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .filter-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }
        .filter-btn {
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          transition: all 0.15s ease;
          font-family: inherit;
        }
        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-primary);
        }
        .filter-btn-active {
          background: var(--text-primary);
          color: var(--bg);
          border-color: var(--text-primary);
        }
        .filter-count {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 1.75rem;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.25rem;
        }
        .pf-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          box-shadow: var(--card-shadow);
          transition: box-shadow 0.2s, transform 0.2s;
          display: flex;
          flex-direction: column;
        }
        .pf-card:hover {
          box-shadow: var(--card-shadow-hover);
          transform: translateY(-1px);
        }
        .pf-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          flex: 1;
        }
        .pf-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .pf-year {
          font-size: 0.75rem;
          font-weight: 500;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }
        .pf-featured {
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        .pf-title-link { text-decoration: none; }
        .pf-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .pf-title-link:hover .pf-title { opacity: 0.7; }
        .pf-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0;
          flex: 1;
        }
        .pf-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pf-tag {
          font-size: 0.72rem;
          font-weight: 400;
          color: var(--text-muted);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
          transition: color 0.15s;
        }
        .pf-tag:hover { color: var(--text-primary); }
        .pf-tag-active {
          color: var(--text-primary);
          font-weight: 600;
        }
        .pf-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-subtle);
          margin-top: auto;
        }
        .pf-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.28rem;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          font-size: 0.73rem;
          font-weight: 500;
          color: var(--text-muted);
          border: 1px solid var(--border);
          text-decoration: none;
          transition: all 0.15s;
        }
        .pf-link-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-primary);
        }
        .pf-link-primary {
          color: var(--text-primary);
          margin-left: auto;
        }
      `}</style>
    </div>
  );
}
