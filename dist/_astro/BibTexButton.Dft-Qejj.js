import{j as e,m as n}from"./proxy.CyV3LBSc.js";import{r as c}from"./index.DK-fsZOb.js";import{A as l}from"./index.SwMIWDlg.js";function m({bibtex:t}){const[o,r]=c.useState(!1),[a,s]=c.useState(!1),d=async()=>{try{await navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)}catch{const i=document.createElement("textarea");i.value=t,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),r(!0),setTimeout(()=>r(!1),2e3)}};return e.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[e.jsxs("div",{style:{display:"flex",gap:"0.4rem",alignItems:"center"},children:[e.jsxs("button",{onClick:()=>s(!a),className:"bibtex-btn bibtex-btn-secondary","aria-expanded":a,"aria-label":"Toggle BibTeX preview",children:[e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),"BibTeX"]}),e.jsx("button",{onClick:d,className:`bibtex-btn ${o?"bibtex-btn-success":"bibtex-btn-primary"}`,"aria-label":o?"Copied!":"Copy BibTeX to clipboard",children:e.jsx(l,{mode:"wait",children:o?e.jsxs(n.span,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},transition:{duration:.15},style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Copied"]},"check"):e.jsxs(n.span,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},transition:{duration:.15},style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e.jsx("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]}),"Copy"]},"copy")})})]}),e.jsx(l,{children:a&&e.jsxs(n.div,{initial:{opacity:0,y:-8,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.97},transition:{duration:.18},className:"bibtex-preview",children:[e.jsx("pre",{children:t}),e.jsx("button",{onClick:()=>s(!1),className:"bibtex-close","aria-label":"Close BibTeX preview",children:"×"})]})}),e.jsx("style",{children:`
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
      `})]})}export{m as default};
