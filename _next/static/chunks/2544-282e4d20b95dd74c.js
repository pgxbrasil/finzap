"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2544],{24265:(e,t,s)=>{s.d(t,{F:()=>r});var l=s(74848),a=s(96540),x=s(96627),i=s(18019);let r=a.forwardRef((e,t)=>{let{className:s,children:a,...r}=e;return(0,l.jsxs)(x.bL,{ref:t,className:(0,i.cn)("relative overflow-hidden",s),...r,children:[(0,l.jsx)(x.LM,{className:"h-full w-full rounded-[inherit]",children:a}),(0,l.jsx)(n,{}),(0,l.jsx)(x.OK,{})]})});r.displayName=x.bL.displayName;let n=a.forwardRef((e,t)=>{let{className:s,orientation:a="vertical",...r}=e;return(0,l.jsx)(x.VM,{ref:t,orientation:a,className:(0,i.cn)("flex touch-none select-none transition-colors","vertical"===a&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===a&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",s),...r,children:(0,l.jsx)(x.lr,{className:"relative flex-1 rounded-full bg-border"})})});n.displayName=x.VM.displayName},32544:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var l=s(74848),a=s(29748),x=s(75130),i=s(1565),r=s(29965),n=s.n(r),m=s(85224),c=s(96540),o=s(24265),p=s(77711),d=s(10813),h=s(34422);function u(e){let{changePhase:t}=e,[s,r]=(0,c.useState)(""),u=(0,c.useRef)(null),f=(0,c.useRef)(null),j=(0,c.useRef)(null),[w,g]=(0,c.useState)([]),[b,N]=(0,c.useState)("camisa 110"),[y,v]=(0,c.useState)(!0),[k,D]=(0,c.useState)(!1),[S,A]=(0,c.useState)(!1),F=async e=>{var t,l,a,x,i,n,m,c,o,p,d,h,u;e.preventDefault(),v(!1),r("");let f=[...w,{type:"user",text:s,date:new Date}];null===(l=window)||void 0===l||null===(t=l.document)||void 0===t||t.querySelector("html").classList.add("scroll-smooth"),g(()=>f);let j=e=>new Promise(t=>setTimeout(t,e));await j(1e3),D(!0),null===(x=window)||void 0===x||null===(a=x.document)||void 0===a||a.querySelector("html").scrollTo(0,1e8);let b={};try{let e=await fetch("/api/fin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:s})}),t=await e.json();if(e.ok){let e=t.botMessage;b=t,g(()=>[...f,{type:"bot",text:e,date:new Date}])}else console.error("Error from OpenAI API:",t.error),g(()=>[...f,{type:"bot",text:"Erro ao obter resposta da IA.",date:new Date}])}catch(e){console.error("Error:",e),g(()=>[...f,{type:"bot",text:"Erro de conex\xe3o com o servidor.",date:new Date}])}if(D(!1),await j(1e3),null===(n=window)||void 0===n||null===(i=n.document)||void 0===i||i.querySelector("html").scrollTo(0,1e8),console.log(b),null==b?void 0:b.retry){D(!0),await j(1e3),g(e=>[...e,{type:"bot",text:"Por favor, tente novamente.",date:new Date}]),D(!1),null===(h=window)||void 0===h||null===(d=h.document)||void 0===d||d.querySelector("html").scrollTo(0,1e8);return}D(!0),await j(1e3),await j(1e3),D(!1);let N=(null!==(u=null==b?void 0:null===(m=b.data)||void 0===m?void 0:m.value)&&void 0!==u?u:50)*1.5,y="Lembrete: Voc\xea est\xe1 quase chegando no seu <strong>limite definido de R$ ".concat(N,"</strong> por m\xeas com <strong>").concat(null==b?void 0:null===(c=b.data)||void 0===c?void 0:c.category,"</strong>.");g(e=>[...e,{type:"bot",text:y,date:new Date}]),null===(p=window)||void 0===p||null===(o=p.document)||void 0===o||o.querySelector("html").scrollTo(0,1e8),A(!0)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{ref:f,className:"w-full scroll-smooth h-full flex flex-col",children:[(0,l.jsxs)("div",{className:"  px-[20px] mt-[30px] flex flex-col",children:[(0,l.jsx)("h1",{className:"font-bold text-[#254D39] font-montserrat mb-[40px] px-[10px] text-2xl text-center",children:"Como Funciona?"}),(0,l.jsxs)("h2",{className:"text-center text-[#254D39] font-montserrat text-lg ]",children:["Um assistente financeiro ",(0,l.jsx)("strong",{children:"no seu WhatsApp"}),", dispon\xedvel 24h para ser seu",(0,l.jsx)("strong",{children:"\xa0controle financeiro interativo."})]})]}),(0,l.jsxs)("div",{className:"messages-list mt-[30px] px-[20px] relative space-y-1 !justify-between items-center flex flex-col w-full ",children:[(0,l.jsx)(p.E,{className:"px-[13px] py-[3px] text-sm rounded-full bg-[#FFA35B] text-[#181818]",children:"Demonstra\xe7\xe3o"}),(0,l.jsx)("div",{className:"message !-mb-2 px-[20px]",children:(0,l.jsxs)("h3",{className:" flex gap-x-3 text-[#254D39]  items-start mt-5 mb-5 font-montserrat text-lg",children:[(0,l.jsx)("span",{className:"text-4xl  text-[#FFA35B] font-extrabold mr-2 ",children:"1."}),(0,l.jsxs)("span",{children:["Digite o que comprou e quanto custou, por exemplo:"," ",(0,l.jsx)("strong",{children:'"camisa 110".'}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Registre um gasto (real ou falso) para testar.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("small",{className:"italic",children:'N\xe3o se preocupe com v\xedrgulas, nem com por "R$", escreva do seu jeito.'})]})]})}),w.map((e,t)=>"user"===e.type?(0,l.jsx)(h.zW,{className:" w-full",direction:"down",triggerOnce:!0,children:(0,l.jsxs)("div",{className:"".concat(e.text.length>24?"flex flex-col ":""," msg-r !mt-[10px]  !mb-[10px] ml-auto flex rounded-[11px] items-end bg-[#154D39] px-[10px] py-[4px] w-fit max-w-[300px]"),children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:e.text}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:[(0,m.GP)(new Date(e.date),"HH:mm"),(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]},t)}):(0,l.jsx)(h.zW,{className:" w-full",direction:"down",triggerOnce:!0,children:(0,l.jsxs)("div",{className:"".concat(e.expense&&"gasto "," msg-l    mr-auto flex flex-col rounded-[11px] items-start bg-[#242625] px-[10px] py-[4px] max-w-[300px]"),children:[(0,l.jsx)("p",{className:"text-white text-left text-[15px] !font-inter",dangerouslySetInnerHTML:{__html:e.text}}),(0,l.jsx)("small",{className:"text-white ml-auto font-inter mt-auto opacity-50  text-[11px]",children:(0,l.jsx)("span",{className:"inline-block",children:(0,m.GP)(new Date(e.date),"HH:mm")})})]},t)})),k&&(0,l.jsx)("div",{className:"msg-l animate-bounce opacity-70  !mt-3 !mb-2 mr-auto  bg-[#242625] flex rounded-[11px] items-center px-[10px] py-[4px] max-w-[300px]",children:(0,l.jsx)("span",{className:" h-[22px] flex flex-col items-center justify-center text-[15px] font-inter",children:(0,l.jsx)(d.LW,{color:"#d2d2d2",width:50,wrapperClass:"flex text-sm",height:10})})}),!S&&(0,l.jsx)("div",{className:"w-[30px] bottom-0 mt-[40px] mb-[40px] h-[180px]",ref:j,children:(0,l.jsx)("span",{})})]}),!S&&(0,l.jsx)("div",{className:" ".concat(y?"relative -mt-[40px]":"fixed","  z-40 top-0 left-0 w-full h-[100%]"),children:(0,l.jsxs)("form",{ref:u,onSubmit:F,className:"flex  absolute px-[40px]  z-40  w-full bottom-[60px]   max-w items-center space-x-3",children:[(0,l.jsx)(x.p,{disabled:k,value:s,required:!0,onChange:e=>r(e.target.value),type:"text",className:"border-[#242625] bg-white font-montserrat px-[20px] font-medium text-base h-[50px] rounded-full",placeholder:"Exemplo: ifood 44"}),(0,l.jsx)(a.$,{type:"submit",disabled:k,className:"bg-[#1DA861] border-none rounded-full min-w-[50px] h-[50px] ",children:(0,l.jsx)(i.A,{})})]})}),S&&(0,l.jsx)("div",{className:"mt-6 px-[20px] mb-20 w-full",children:(0,l.jsx)(a.$,{onClick:()=>t(3),className:"font-montserrat hover:bg-[#FFA35B] text-[#181818] text-xl font-bold flex bg-[#FFA35B] rounded-2xl w-full !py-[40px]",children:"Continuar"})})]}),(0,l.jsx)("div",{className:"bottom-0 w-full hidden   max-w-[450px] relative overflow-clip  ",children:(0,l.jsxs)("div",{className:"relative   grid w-full grid-rows-[1fr_100px] grid-cols-[1fr]  h-[100vh]  px-[20px] justify-center",children:[(0,l.jsx)("div",{className:"bg-red-300 h-full overflow-hidden flex flex-col",children:(0,l.jsx)(o.F,{ref:f,className:"   ",children:(0,l.jsxs)("div",{className:"messages-list  relative space-y-1 !justify-between items-center flex flex-col w-full ",children:[(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:"comprei uma camisa 110"}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:["09:51",(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]}),(0,l.jsxs)("div",{className:"msg-l !mt-3 !mb-2 mr-auto flex rounded-[11px] items-center bg-[#242625] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsxs)("span",{className:"text-white text-[15px] font-inter",children:["comprei uma camisa 110",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"lero lero"]}),(0,l.jsx)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:"09:22"})]}),(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:"comprei uma camisa 110"}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:["09:51",(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]}),(0,l.jsxs)("div",{className:"msg-l !mt-3 !mb-2 mr-auto flex rounded-[11px] items-center bg-[#242625] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsxs)("span",{className:"text-white text-[15px] font-inter",children:["comprei uma camisa 110",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"lero lero"]}),(0,l.jsx)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:"09:22"})]}),(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:"comprei uma camisa 110"}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:["09:51",(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]}),(0,l.jsxs)("div",{className:"msg-l !mt-3 !mb-2 mr-auto flex rounded-[11px] items-center bg-[#242625] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsxs)("span",{className:"text-white text-[15px] font-inter",children:["comprei uma camisa 110",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"lero lero"]}),(0,l.jsx)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:"09:22"})]}),(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:"comprei uma camisa 110"}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:["09:51",(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]}),(0,l.jsxs)("div",{className:"msg-l !mt-3 !mb-2 mr-auto flex rounded-[11px] items-center bg-[#242625] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsxs)("span",{className:"text-white text-[15px] font-inter",children:["comprei uma camisa 110",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"lero lero"]}),(0,l.jsx)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:"09:22"})]}),(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:"comprei uma camisa 110"}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:["09:51",(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]}),(0,l.jsxs)("div",{className:"msg-l !mt-3 !mb-2 mr-auto flex rounded-[11px] items-center bg-[#242625] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsxs)("span",{className:"text-white text-[15px] font-inter",children:["comprei uma camisa 110",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"lero lero"]}),(0,l.jsx)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:"09:22"})]}),(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:"comprei uma camisa 110"}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:["09:51",(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]}),(0,l.jsxs)("div",{className:"msg-l !mt-3 !mb-2 mr-auto flex rounded-[11px] items-center bg-[#242625] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsxs)("span",{className:"text-white text-[15px] font-inter",children:["comprei uma camisa 110",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"lero lero"]}),(0,l.jsx)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:"09:22"})]}),(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:"comprei uma camisa 110"}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:["09:51",(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]}),(0,l.jsxs)("div",{className:"msg-l !mt-3 !mb-2 mr-auto flex rounded-[11px] items-center bg-[#242625] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsxs)("span",{className:"text-white text-[15px] font-inter",children:["comprei uma camisa 110",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"lero lero"]}),(0,l.jsx)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:"09:22"})]}),(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:"comprei uma camisa 110"}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:["09:51",(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]}),(0,l.jsxs)("div",{className:"msg-l !mt-3 !mb-2 mr-auto flex rounded-[11px] items-center bg-[#242625] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsxs)("span",{className:"text-white text-[15px] font-inter",children:["comprei uma camisa 110",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"lero lero"]}),(0,l.jsx)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:"09:22"})]}),(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:"comprei uma camisa 110"}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:["09:51",(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]}),(0,l.jsxs)("div",{className:"msg-l !mt-3 !mb-2 mr-auto flex rounded-[11px] items-center bg-[#242625] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsxs)("span",{className:"text-white text-[15px] font-inter",children:["comprei uma camisa 110",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"lero lero"]}),(0,l.jsx)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:"09:22"})]}),(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:"comprei uma camisa 110"}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:["09:51",(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]}),(0,l.jsxs)("div",{className:"msg-l !mt-3 !mb-2 mr-auto flex rounded-[11px] items-center bg-[#242625] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsxs)("span",{className:"text-white text-[15px] font-inter",children:["comprei uma camisa 110",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"lero lero"]}),(0,l.jsx)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:"09:22"})]}),(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:"comprei uma camisa 110"}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:["09:51",(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]}),(0,l.jsxs)("div",{className:"msg-l !mt-3 !mb-2 mr-auto flex rounded-[11px] items-center bg-[#242625] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsxs)("span",{className:"text-white text-[15px] font-inter",children:["comprei uma camisa 110",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"lero lero"]}),(0,l.jsx)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:"09:22"})]}),(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:"comprei uma camisa 110"}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:["09:51",(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]}),(0,l.jsxs)("div",{className:"msg-l !mt-3 !mb-2 mr-auto flex rounded-[11px] items-center bg-[#242625] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsxs)("span",{className:"text-white text-[15px] font-inter",children:["comprei uma camisa 110",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"lero lero"]}),(0,l.jsx)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:"09:22"})]}),w.map((e,t)=>{if("user"===e.type)return(0,l.jsxs)("div",{className:"msg-r ml-auto flex rounded-[11px] items-center bg-[#154D39] px-[10px] py-[4px] max-w-[300px]",children:[(0,l.jsx)("span",{className:"text-white text-[15px] font-inter",children:e.text}),(0,l.jsxs)("small",{className:"text-white font-inter mt-auto opacity-50 ml-2  text-[11px]",children:[(0,m.GP)(new Date(e.date),"HH:mm"),(0,l.jsx)(n(),{src:"/check.png",width:10,height:10,alt:"check",className:"w-[10px] inline-flex ml-1 brightness-[300%]"})]})]},t)}),(0,l.jsx)("div",{className:"w-[30px] bottom-0 h-[30px]",ref:j,children:(0,l.jsx)("span",{})})]})})}),(0,l.jsx)("div",{className:"flex h-[100px] bg-green-500",children:(0,l.jsx)("div",{className:"fixed   top-0 left-0 w-full h-[100%]",children:(0,l.jsxs)("form",{ref:u,onSubmit:F,className:"flex absolute px-[50px]  z-40  w-full bottom-[60px]   max-w items-center space-x-2",children:[(0,l.jsx)(x.p,{value:s,onChange:e=>r(e.target.value),type:"text",className:"border-[#242625] bg-white font-montserrat px-[20px] font-medium text-base h-[50px] rounded-full",placeholder:"Digite sua mensagem"}),(0,l.jsx)(a.$,{type:"submit",className:"bg-[#1DA861] border-none rounded-full min-w-[50px] h-[50px] ",children:(0,l.jsx)(i.A,{})})]})})})]})})]})}}}]);