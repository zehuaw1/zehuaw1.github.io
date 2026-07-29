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
  titleLink?: { text: string; url: string };
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

      <motion.ol layout className="project-list" role="list">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="project-row"
            >
              <div className="row-meta">
                <span className="row-year">{project.year}</span>
                {project.featured && <span className="row-featured">Featured</span>}
              </div>

              <div className="row-body">
                <h3 className="row-title">
                  {project.titleLink && project.title.includes(project.titleLink.text) ? (
                    project.title.split(project.titleLink.text).map((part, index, parts) => (
                      <span key={`${project.slug}-title-${index}`}>
                        {part}
                        {index < parts.length - 1 && (
                          <a
                            href={project.titleLink?.url}
                            className="row-title-external"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.titleLink?.text}
                          </a>
                        )}
                      </span>
                    ))
                  ) : (
                    <a href={`/projects/${project.slug}`} className="row-title-link">
                      {project.title}
                    </a>
                  )}
                </h3>

                <p className="row-desc">{project.description}</p>

                <div className="row-meta-line">
                  <div className="row-tags">
                    {project.tags.map((tag, i) => (
                      <span key={tag} className="row-tag">
                        <button
                          onClick={() => setActiveTag(tag)}
                          className={`row-tag-btn ${activeTag === tag ? 'row-tag-active' : ''}`}
                        >
                          {tag}
                        </button>
                        {i < project.tags.length - 1 && (
                          <span className="row-tag-sep" aria-hidden="true"> · </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="row-links">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        className="row-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d={iconMap[link.type] ?? iconMap.website} />
                        </svg>
                        {link.label ?? link.type}
                      </a>
                    ))}
                    <a href={`/projects/${project.slug}`} className="row-link row-link-primary">
                      Details →
                    </a>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ol>

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
          transition: color 0.15s ease, border-color 0.15s ease;
          font-family: inherit;
        }
        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-primary);
        }
        .filter-btn:active {
          transform: translateY(1px);
        }
        .filter-btn-active {
          color: var(--text-primary);
          border-color: var(--text-primary);
          font-weight: 600;
        }
        .filter-count {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 1.75rem;
          font-family: var(--font-mono);
        }

        .project-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .project-row {
          display: grid;
          grid-template-columns: 6rem 1fr;
          gap: 1.5rem;
          padding: 1.75rem 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        .project-row:first-child {
          border-top: 1px solid var(--border-subtle);
        }
        @media (max-width: 640px) {
          .project-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            padding: 1.25rem 0;
          }
        }

        .row-meta {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding-top: 0.35rem;
        }
        .row-year {
          font-size: 0.85rem;
          font-weight: 500;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }
        .row-featured {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
        }
        @media (max-width: 640px) {
          .row-meta {
            flex-direction: row;
            align-items: center;
            gap: 0.85rem;
            padding-top: 0;
          }
        }

        .row-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 0;
        }
        .row-title-link {
          color: inherit;
          text-decoration: none;
        }
        .row-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
          letter-spacing: -0.02em;
          margin: 0;
          transition: color 0.15s ease;
        }
        .row-title-link:hover,
        .row-title-external:hover {
          color: var(--accent);
        }
        .row-title-external {
          color: inherit;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 0.16em;
          text-decoration-color: color-mix(in srgb, currentColor 35%, transparent);
          transition: color 0.15s ease;
        }
        .row-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          max-width: 60ch;
        }

        .row-meta-line {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem 1.5rem;
          margin-top: 0.4rem;
        }

        .row-tags {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .row-tag-btn {
          background: none;
          border: none;
          padding: 0;
          font: inherit;
          color: inherit;
          cursor: pointer;
          transition: color 0.15s ease;
        }
        .row-tag-btn:hover {
          color: var(--text-primary);
        }
        .row-tag-active {
          color: var(--text-primary);
          font-weight: 600;
        }
        .row-tag-sep {
          color: var(--text-muted);
          opacity: 0.6;
          margin: 0 0.1em;
        }

        .row-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }
        .row-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .row-link:hover {
          color: var(--text-primary);
        }
        .row-link-primary {
          color: var(--accent);
        }
        .row-link-primary:hover {
          color: var(--accent-hover);
        }
      `}</style>
    </div>
  );
}
