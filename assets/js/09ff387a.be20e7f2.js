"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[927],{2690:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>A,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"create/nodes","title":"Nodes","description":"Nodes","source":"@site/docs/create/nodes.md","sourceDirName":"create","slug":"/create/nodes","permalink":"/lds.github.io/docs/create/nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/create/nodes.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Sketch Curve","permalink":"/lds.github.io/docs/create/sketch_curve"},"next":{"title":"Cells","permalink":"/lds.github.io/docs/create/cells"}}');var i=s(4848),o=s(8453);const A={sidebar_position:2},a="Nodes",r={},l=[{value:"Usage",id:"usage",level:2},{value:"Min Rod Length",id:"min-rod-length",level:4},{value:"Max Rod Length",id:"max-rod-length",level:4},{value:"Number of Subdivisions",id:"number-of-subdivisions",level:4},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"nodes",children:"Nodes"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Nodes",src:s(5479).A+"",width:"52",height:"50"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"The nodes creation tool is used to place points along the curves of the sketch, that can later be used to generate the cells in the sketch profile."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Nodes",src:s(8911).A+"",width:"1346",height:"616"})}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.h4,{id:"min-rod-length",children:"Min Rod Length"}),"\n",(0,i.jsx)(t.p,{children:"Minimum distance between two points. If the segmentation requires to create a point at a distance lower than this threshold it will fail and not create such node. This parameter is usually used to prevent designing 'non-buildable' parts"}),"\n",(0,i.jsx)(t.h4,{id:"max-rod-length",children:"Max Rod Length"}),"\n",(0,i.jsx)(t.p,{children:"Maximum distance between two points. If a segment does not meet the requirement, the segmentation will fail. This parameter is usually used to prevent designing 'non-buildable' parts"}),"\n",(0,i.jsx)(t.h4,{id:"number-of-subdivisions",children:"Number of Subdivisions"}),"\n",(0,i.jsx)(t.p,{children:"Defines how many points will be inserted on each segment (as long as they meet the two previous parameters)"}),"\n",(0,i.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["The 'node creation' step is required in order to use the cell-generation feature of the LDS plugin. Jump to that section ",(0,i.jsx)(t.a,{href:"/lds.github.io/docs/create/cells",children:"here"})]})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5479:(e,t,s)=>{s.d(t,{A:()=>n});const n="data:image/png;base64,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"},8453:(e,t,s)=>{s.d(t,{R:()=>A,x:()=>a});var n=s(6540);const i={},o=n.createContext(i);function A(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:A(e.components),n.createElement(o.Provider,{value:t},e.children)}},8911:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/usage-6a6c4dc889abf75e5ffc9d74605f7b58.png"}}]);