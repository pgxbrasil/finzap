"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6298],{21335:(e,r,t)=>{t.d(r,{U:()=>m});var o=t(74848),a=t(57201),l=t(37323),s=t(91672),n=t(80431),i=t(43686),d=t(33566),c=t(10410);let u=[{month:"Janeiro",desktop:186,mobile:50},{month:"Fever",desktop:216,mobile:200},{month:"Mar\xe7o",desktop:270,mobile:120},{month:"Abr",desktop:510,mobile:190},{month:"Maio",desktop:700,mobile:130},{month:"Junho",desktop:790,mobile:7492}],f={desktop:{label:"Desktop",color:"#FFA35B"},mobile:{label:"Mobile",color:"#FFA35B"}};function m(){return(0,o.jsx)(d.Zp,{className:"!p-0 !border-none !shadow-none ",children:(0,o.jsx)(d.Wu,{className:"!p-0",children:(0,o.jsx)(c.at,{config:f,children:(0,o.jsxs)(a.b,{accessibilityLayer:!0,data:u,margin:{top:50,left:50,bottom:30,right:50},children:[(0,o.jsx)(l.d,{vertical:!1}),(0,o.jsx)(s.W,{dataKey:"month",tickLine:!1,axisLine:!1,tickMargin:28,className:"font-medium",tickFormatter:e=>e.slice(0,3)}),(0,o.jsxs)(n.N,{dataKey:"desktop",type:"natural",isAnimationActive:!1,fill:"url(#fillDesktop)",fillOpacity:.4,stroke:"var(--color-desktop)",strokeWidth:2,dot:{fill:"var(--color-desktop)"},activeDot:{r:6},children:[(0,o.jsx)(i.Z,{position:"top",offset:22,formatter:e=>"".concat("186"==e?"Voc\xea hoje":"790"==e?"Daqui 6 meses ":""," "),className:"fill-[#254D39] font-medium",fontSize:13}),(0,o.jsx)(i.Z,{position:"bottom",offset:22,dataKey:"mobile",formatter:e=>"".concat("50"==e?"R$ 50":"7492"==e?"R$ 7492":""," "),className:"fill-[#254D39] font-bold",fontSize:16})]}),(0,o.jsxs)("defs",{children:[(0,o.jsxs)("linearGradient",{id:"fillDesktop",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"5%",stopColor:"var(--color-desktop)",stopOpacity:.8}),(0,o.jsx)("stop",{offset:"95%",stopColor:"var(--color-desktop)",stopOpacity:.1})]}),(0,o.jsxs)("linearGradient",{id:"fillMobile",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"5%",stopColor:"var(--color-mobile)",stopOpacity:.8}),(0,o.jsx)("stop",{offset:"95%",stopColor:"var(--color-mobile)",stopOpacity:.1})]})]})]})})})})}},77711:(e,r,t)=>{t.d(r,{E:()=>n});var o=t(74848);t(96540);var a=t(22732),l=t(18019);let s=(0,a.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function n(e){let{className:r,variant:t,...a}=e;return(0,o.jsx)("div",{className:(0,l.cn)(s({variant:t}),r),...a})}},29748:(e,r,t)=>{t.d(r,{$:()=>d});var o=t(74848),a=t(96540),l=t(33362),s=t(22732),n=t(18019);let i=(0,s.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,r)=>{let{className:t,variant:a,size:s,asChild:d=!1,...c}=e,u=d?l.DX:"button";return(0,o.jsx)(u,{className:(0,n.cn)(i({variant:a,size:s,className:t})),ref:r,...c})});d.displayName="Button"},33566:(e,r,t)=>{t.d(r,{BT:()=>d,Wu:()=>c,ZB:()=>i,Zp:()=>s,aR:()=>n,wL:()=>u});var o=t(74848),a=t(96540),l=t(18019);let s=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,o.jsx)("div",{ref:r,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...a})});s.displayName="Card";let n=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,o.jsx)("div",{ref:r,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",t),...a})});n.displayName="CardHeader";let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,o.jsx)("div",{ref:r,className:(0,l.cn)("font-semibold leading-none tracking-tight",t),...a})});i.displayName="CardTitle";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,o.jsx)("div",{ref:r,className:(0,l.cn)("text-sm text-muted-foreground",t),...a})});d.displayName="CardDescription";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,o.jsx)("div",{ref:r,className:(0,l.cn)("p-6 pt-0",t),...a})});c.displayName="CardContent";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,o.jsx)("div",{ref:r,className:(0,l.cn)("flex items-center p-6 pt-0",t),...a})});u.displayName="CardFooter"},78498:(e,r,t)=>{t.d(r,{A7:()=>p,FN:()=>f,Wk:()=>m});var o=t(74848),a=t(96540),l=t(65193),s=t(93787),n=t(44226),i=t(18019),d=t(29748);let c=a.createContext(null);function u(){let e=a.useContext(c);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let f=a.forwardRef((e,r)=>{let{orientation:t="horizontal",opts:s,setApi:n,plugins:d,className:u,children:f,...m}=e,[p,h]=(0,l.A)({...s,axis:"horizontal"===t?"x":"y"},d),[x,v]=a.useState(!1),[g,b]=a.useState(!1),y=a.useCallback(e=>{e&&(v(e.canScrollPrev()),b(e.canScrollNext()))},[]),j=a.useCallback(()=>{null==h||h.scrollPrev()},[h]),N=a.useCallback(()=>{null==h||h.scrollNext()},[h]),k=a.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),j()):"ArrowRight"===e.key&&(e.preventDefault(),N())},[j,N]);return a.useEffect(()=>{h&&n&&n(h)},[h,n]),a.useEffect(()=>{if(h)return y(h),h.on("reInit",y),h.on("select",y),()=>{null==h||h.off("select",y)}},[h,y]),(0,o.jsx)(c.Provider,{value:{carouselRef:p,api:h,opts:s,orientation:t||((null==s?void 0:s.axis)==="y"?"vertical":"horizontal"),scrollPrev:j,scrollNext:N,canScrollPrev:x,canScrollNext:g},children:(0,o.jsx)("div",{ref:r,onKeyDownCapture:k,className:(0,i.cn)("relative",u),role:"region","aria-roledescription":"carousel",...m,children:f})})});f.displayName="Carousel";let m=a.forwardRef((e,r)=>{let{className:t,...a}=e,{carouselRef:l,orientation:s}=u();return(0,o.jsx)("div",{ref:l,className:"overflow-hidden",children:(0,o.jsx)("div",{ref:r,className:(0,i.cn)("flex","horizontal"===s?"-ml-4":"-mt-4 flex-col",t),...a})})});m.displayName="CarouselContent";let p=a.forwardRef((e,r)=>{let{className:t,...a}=e,{orientation:l}=u();return(0,o.jsx)("div",{ref:r,role:"group","aria-roledescription":"slide",className:(0,i.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===l?"pl-4":"pt-4",t),...a})});p.displayName="CarouselItem",a.forwardRef((e,r)=>{let{className:t,variant:a="outline",size:l="icon",...n}=e,{orientation:c,scrollPrev:f,canScrollPrev:m}=u();return(0,o.jsxs)(d.$,{ref:r,variant:a,size:l,className:(0,i.cn)("absolute  h-8 w-8 rounded-full","horizontal"===c?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!m,onClick:f,...n,children:[(0,o.jsx)(s.A,{className:"h-4 w-4"}),(0,o.jsx)("span",{className:"sr-only",children:"Previous slide"})]})}).displayName="CarouselPrevious",a.forwardRef((e,r)=>{let{className:t,variant:a="outline",size:l="icon",...s}=e,{orientation:c,scrollNext:f,canScrollNext:m}=u();return(0,o.jsxs)(d.$,{ref:r,variant:a,size:l,className:(0,i.cn)("absolute h-8 w-8 rounded-full","horizontal"===c?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!m,onClick:f,...s,children:[(0,o.jsx)(n.A,{className:"h-4 w-4"}),(0,o.jsx)("span",{className:"sr-only",children:"Next slide"})]})}).displayName="CarouselNext"},10410:(e,r,t)=>{t.d(r,{Hm:()=>h,_3:()=>p,at:()=>f});var o=t(74848),a=t(96540),l=t(60949),s=t(55466),n=t(1191),i=t(18019);let d={light:"",dark:".dark"},c=a.createContext(null);function u(){let e=a.useContext(c);if(!e)throw Error("useChart must be used within a <ChartContainer />");return e}let f=a.forwardRef((e,r)=>{let{id:t,className:s,children:n,config:d,...u}=e,f=a.useId(),p="chart-".concat(t||f.replace(/:/g,""));return(0,o.jsx)(c.Provider,{value:{config:d},children:(0,o.jsxs)("div",{"data-chart":p,ref:r,className:(0,i.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",s),...u,children:[(0,o.jsx)(m,{id:p,config:d}),(0,o.jsx)(l.u,{children:n})]})})});f.displayName="Chart";let m=e=>{let{id:r,config:t}=e,a=Object.entries(t).filter(e=>{let[,r]=e;return r.theme||r.color});return a.length?(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(d).map(e=>{let[t,o]=e;return"\n".concat(o," [data-chart=").concat(r,"] {\n").concat(a.map(e=>{var r;let[o,a]=e,l=(null===(r=a.theme)||void 0===r?void 0:r[t])||a.color;return l?"  --color-".concat(o,": ").concat(l,";"):null}).join("\n"),"\n}\n")}).join("\n")}}):null};s.m,a.forwardRef((e,r)=>{let{active:t,payload:l,className:s,indicator:n="dot",hideLabel:d=!1,hideIndicator:c=!1,label:f,labelFormatter:m,labelClassName:p,formatter:h,color:v,nameKey:g,labelKey:b}=e,{config:y}=u(),j=a.useMemo(()=>{var e;if(d||!(null==l?void 0:l.length))return null;let[r]=l,t="".concat(b||r.dataKey||r.name||"value"),a=x(y,r,t),s=b||"string"!=typeof f?null==a?void 0:a.label:(null===(e=y[f])||void 0===e?void 0:e.label)||f;return m?(0,o.jsx)("div",{className:(0,i.cn)("font-medium",p),children:m(s,l)}):s?(0,o.jsx)("div",{className:(0,i.cn)("font-medium",p),children:s}):null},[f,m,l,d,p,y,b]);if(!t||!(null==l?void 0:l.length))return null;let N=1===l.length&&"dot"!==n;return(0,o.jsxs)("div",{ref:r,className:(0,i.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",s),children:[N?null:j,(0,o.jsx)("div",{className:"grid gap-1.5",children:l.map((e,r)=>{let t="".concat(g||e.name||e.dataKey||"value"),a=x(y,e,t),l=v||e.payload.fill||e.color;return(0,o.jsx)("div",{className:(0,i.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground","dot"===n&&"items-center"),children:h&&(null==e?void 0:e.value)!==void 0&&e.name?h(e.value,e.name,e,r,e.payload):(0,o.jsxs)(o.Fragment,{children:[(null==a?void 0:a.icon)?(0,o.jsx)(a.icon,{}):!c&&(0,o.jsx)("div",{className:(0,i.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":"dot"===n,"w-1":"line"===n,"w-0 border-[1.5px] border-dashed bg-transparent":"dashed"===n,"my-0.5":N&&"dashed"===n}),style:{"--color-bg":l,"--color-border":l}}),(0,o.jsxs)("div",{className:(0,i.cn)("flex flex-1 justify-between leading-none",N?"items-end":"items-center"),children:[(0,o.jsxs)("div",{className:"grid gap-1.5",children:[N?j:null,(0,o.jsx)("span",{className:"text-muted-foreground",children:(null==a?void 0:a.label)||e.name})]}),e.value&&(0,o.jsx)("span",{className:"font-mono font-medium tabular-nums text-foreground",children:e.value.toLocaleString()})]})]})},e.dataKey)})})]})}).displayName="ChartTooltip";let p=n.s,h=a.forwardRef((e,r)=>{let{className:t,hideIcon:a=!1,payload:l,verticalAlign:s="bottom",nameKey:n}=e,{config:d}=u();return(null==l?void 0:l.length)?(0,o.jsx)("div",{ref:r,className:(0,i.cn)("flex items-center justify-center gap-4","top"===s?"pb-3":"pt-3",t),children:l.map(e=>{let r="".concat(n||e.dataKey||"value"),t=x(d,e,r);return(0,o.jsxs)("div",{className:(0,i.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),children:[(null==t?void 0:t.icon)&&!a?(0,o.jsx)(t.icon,{}):(0,o.jsx)("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:e.color}}),null==t?void 0:t.label]},e.value)})}):null});function x(e,r,t){if("object"!=typeof r||null===r)return;let o="payload"in r&&"object"==typeof r.payload&&null!==r.payload?r.payload:void 0,a=t;return t in r&&"string"==typeof r[t]?a=r[t]:o&&t in o&&"string"==typeof o[t]&&(a=o[t]),a in e?e[a]:e[t]}h.displayName="ChartLegend"},18019:(e,r,t)=>{t.d(r,{cn:()=>l});var o=t(34164),a=t(50856);function l(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.QP)((0,o.$)(r))}}}]);