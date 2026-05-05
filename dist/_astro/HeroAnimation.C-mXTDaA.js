import{j as a,m as s}from"./proxy.CfUQfNoK.js";import{u as y}from"./use-reduced-motion.3yL0w_U5.js";import"./index.DK-fsZOb.js";const l=[.22,1,.36,1];function w({name:m,tagline:p,highlightWords:c=[]}){const t=y(),d={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:t?0:.12,delayChildren:t?0:.1}}},h={hidden:t?{opacity:1,y:0}:{opacity:0,y:20},show:{opacity:1,y:0,transition:{duration:.65,ease:l}}},g={hidden:t?{opacity:1,color:"var(--accent)"}:{opacity:.4,color:"var(--text-secondary)"},show:{opacity:1,color:"var(--accent)",transition:{duration:.7,ease:l,delay:t?0:.55}}};function f(n){if(c.length===0)return n;const e=[];let i=n;return c.forEach(r=>{const o=i.indexOf(r);o>=0&&(o>0&&e.push(i.slice(0,o)),e.push(a.jsx(s.span,{variants:g,className:"hero-highlight",children:r},r)),i=i.slice(o+r.length))}),i&&e.push(i),e}return a.jsxs(s.div,{variants:d,initial:"hidden",animate:"show",className:"hero-anim-wrapper",children:[a.jsx(s.h1,{variants:h,className:"hero-name",children:m}),p.split(`
`).map((n,e)=>a.jsx(s.p,{variants:h,className:e===0?"hero-tagline hero-tagline-first":"hero-tagline",children:e===0?n:f(n)},e)),a.jsx("style",{children:`
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
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        .hero-highlight {
          font-style: italic;
          font-weight: 500;
          will-change: color, opacity;
        }
      `})]})}export{w as default};
