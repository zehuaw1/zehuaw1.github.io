import{j as n,m as o}from"./proxy.CyV3LBSc.js";import"./index.DK-fsZOb.js";function d({name:l,tagline:m,highlightWords:s=[]}){const c={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},h={hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{duration:.6,ease:[.21,.47,.32,.98]}}};function p(t){if(s.length===0)return t;const e=[];let i=t;return s.forEach(r=>{const a=i.indexOf(r);a>=0&&(a>0&&e.push(i.slice(0,a)),e.push(n.jsx("span",{className:"hero-highlight",children:r},r)),i=i.slice(a+r.length))}),i&&e.push(i),e}return n.jsxs(o.div,{variants:c,initial:"hidden",animate:"show",className:"hero-anim-wrapper",children:[n.jsx(o.h1,{variants:h,className:"hero-name",children:l}),m.split(`
`).map((t,e)=>n.jsx(o.p,{variants:h,className:e===0?"hero-tagline hero-tagline-first":"hero-tagline",children:e===0?t:p(t)},e)),n.jsx("style",{children:`
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
      `})]})}export{d as default};
