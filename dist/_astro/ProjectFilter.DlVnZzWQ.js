import{M as A,j as t,u as E,P as L,a as S,b as I,L as T,m as N}from"./proxy.CfUQfNoK.js";import{r as n}from"./index.DK-fsZOb.js";class F extends n.Component{getSnapshotBeforeUpdate(i){const o=this.props.childRef.current;if(o&&i.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=o.offsetHeight||0,s.width=o.offsetWidth||0,s.top=o.offsetTop,s.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function H({children:a,isPresent:i}){const o=n.useId(),s=n.useRef(null),f=n.useRef({width:0,height:0,top:0,left:0}),{nonce:p}=n.useContext(A);return n.useInsertionEffect(()=>{const{width:e,height:r,top:m,left:l}=f.current;if(i||!s.current||!e||!r)return;s.current.dataset.motionPopId=o;const d=document.createElement("style");return p&&(d.nonce=p),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${m}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[i]),t.jsx(F,{isPresent:i,childRef:s,sizeRef:f,children:n.cloneElement(a,{ref:s})})}const V=({children:a,initial:i,isPresent:o,onExitComplete:s,custom:f,presenceAffectsLayout:p,mode:e})=>{const r=E(D),m=n.useId(),l=n.useCallback(h=>{r.set(h,!0);for(const w of r.values())if(!w)return;s&&s()},[r,s]),d=n.useMemo(()=>({id:m,initial:i,isPresent:o,custom:f,onExitComplete:l,register:h=>(r.set(h,!1),()=>r.delete(h))}),p?[Math.random(),l]:[o,l]);return n.useMemo(()=>{r.forEach((h,w)=>r.set(w,!1))},[o]),n.useEffect(()=>{!o&&!r.size&&s&&s()},[o]),e==="popLayout"&&(a=t.jsx(H,{isPresent:o,children:a})),t.jsx(L.Provider,{value:d,children:a})};function D(){return new Map}const y=a=>a.key||"";function z(a){const i=[];return n.Children.forEach(a,o=>{n.isValidElement(o)&&i.push(o)}),i}const B=({children:a,custom:i,initial:o=!0,onExitComplete:s,presenceAffectsLayout:f=!0,mode:p="sync",propagate:e=!1})=>{const[r,m]=S(e),l=n.useMemo(()=>z(a),[a]),d=e&&!r?[]:l.map(y),h=n.useRef(!0),w=n.useRef(l),v=E(()=>new Map),[R,P]=n.useState(l),[x,k]=n.useState(l);I(()=>{h.current=!1,w.current=l;for(let u=0;u<x.length;u++){const c=y(x[u]);d.includes(c)?v.delete(c):v.get(c)!==!0&&v.set(c,!1)}},[x,d.length,d.join("-")]);const b=[];if(l!==R){let u=[...l];for(let c=0;c<x.length;c++){const g=x[c],C=y(g);d.includes(C)||(u.splice(c,0,g),b.push(g))}p==="wait"&&b.length&&(u=b),k(z(u)),P(l);return}const{forceRender:j}=n.useContext(T);return t.jsx(t.Fragment,{children:x.map(u=>{const c=y(u),g=e&&!r?!1:l===x||d.includes(c),C=()=>{if(v.has(c))v.set(c,!0);else return;let M=!0;v.forEach($=>{$||(M=!1)}),M&&(j?.(),k(w.current),e&&m?.(),s&&s())};return t.jsx(V,{isPresent:g,initial:!h.current||o?void 0:!1,custom:g?void 0:i,presenceAffectsLayout:f,mode:p,onExitComplete:g?void 0:C,children:u},c)})})};function W({projects:a}){const[i,o]=n.useState("All"),s=n.useMemo(()=>{const e=new Set;return a.forEach(r=>r.tags.forEach(m=>e.add(m))),["All",...Array.from(e)]},[a]),f=n.useMemo(()=>i==="All"?a:a.filter(e=>e.tags.includes(i)),[a,i]),p={paper:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",code:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",demo:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",video:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z",website:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"};return t.jsxs("div",{children:[t.jsx("div",{className:"filter-bar",role:"group","aria-label":"Filter projects by tag",children:s.map(e=>t.jsx("button",{onClick:()=>o(e),className:`filter-btn ${i===e?"filter-btn-active":""}`,"aria-pressed":i===e,children:e},e))}),t.jsxs("p",{className:"filter-count","aria-live":"polite",children:[f.length," project",f.length!==1?"s":"",i!=="All"?` in "${i}"`:""]}),t.jsx(N.ol,{layout:!0,className:"project-list",role:"list",children:t.jsx(B,{mode:"popLayout",children:f.map(e=>t.jsxs(N.li,{layout:!0,initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.25,ease:[.21,.47,.32,.98]},className:"project-row",children:[t.jsxs("div",{className:"row-meta",children:[t.jsx("span",{className:"row-year",children:e.year}),e.featured&&t.jsx("span",{className:"row-featured",children:"Featured"})]}),t.jsxs("div",{className:"row-body",children:[t.jsx("a",{href:`/projects/${e.slug}`,className:"row-title-link",children:t.jsx("h3",{className:"row-title",children:e.title})}),t.jsx("p",{className:"row-desc",children:e.description}),t.jsxs("div",{className:"row-meta-line",children:[t.jsx("div",{className:"row-tags",children:e.tags.map((r,m)=>t.jsxs("span",{className:"row-tag",children:[t.jsx("button",{onClick:()=>o(r),className:`row-tag-btn ${i===r?"row-tag-active":""}`,children:r}),m<e.tags.length-1&&t.jsx("span",{className:"row-tag-sep","aria-hidden":"true",children:" · "})]},r))}),t.jsxs("div",{className:"row-links",children:[e.links.map(r=>t.jsxs("a",{href:r.url,className:"row-link",target:"_blank",rel:"noopener noreferrer",children:[t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("path",{d:p[r.type]??p.website})}),r.label??r.type]},r.url)),t.jsx("a",{href:`/projects/${e.slug}`,className:"row-link row-link-primary",children:"Details →"})]})]})]})]},e.id))})}),t.jsx("style",{children:`
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
          text-decoration: none;
          align-self: flex-start;
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
        .row-title-link:hover .row-title {
          color: var(--accent);
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
      `})]})}export{W as default};
