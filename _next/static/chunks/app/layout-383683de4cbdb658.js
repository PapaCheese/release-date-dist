(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{509:function(e,t,n){Promise.resolve().then(n.t.bind(n,1034,23)),Promise.resolve().then(n.t.bind(n,3054,23)),Promise.resolve().then(n.bind(n,4858))},4858:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return a}});var c=n(7437);n(2265);var o=n(9512);function a(e){let{children:t,...n}=e;return(0,c.jsx)(o.f,{...n,children:t})}},3054:function(){},1034:function(e){e.exports={style:{fontFamily:"'__Inter_98abd7', '__Inter_Fallback_98abd7'",fontStyle:"normal"},className:"__className_98abd7"}},9512:function(e,t,n){"use strict";n.d(t,{F:function(){return i},f:function(){return m}});var c=n(2265),o=["light","dark"],a="(prefers-color-scheme: dark)",r="undefined"==typeof window,l=c.createContext(void 0),s={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=c.useContext(l))?e:s},m=e=>c.useContext(l)?e.children:c.createElement(u,{...e}),d=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:m=d,defaultTheme:u=r?"system":"light",attribute:b="data-theme",value:g,children:S,nonce:p}=e,[w,_]=c.useState(()=>f(i,u)),[k,C]=c.useState(()=>f(i)),T=g?Object.values(g):m,E=c.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=y());let c=g?g[t]:t,a=n?v():null,l=document.documentElement;if("class"===b?(l.classList.remove(...T),c&&l.classList.add(c)):c?l.setAttribute(b,c):l.removeAttribute(b),s){let e=o.includes(u)?u:null,n=o.includes(t)?t:e;l.style.colorScheme=n}null==a||a()},[]),x=c.useCallback(e=>{let t="function"==typeof e?e(e):e;_(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),L=c.useCallback(e=>{C(y(e)),"system"===w&&r&&!t&&E("system")},[w,t]);c.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),c.useEffect(()=>{let e=e=>{e.key===i&&x(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),c.useEffect(()=>{E(null!=t?t:w)},[t,w]);let N=c.useMemo(()=>({theme:w,setTheme:x,forcedTheme:t,resolvedTheme:"system"===w?k:w,themes:r?[...m,"system"]:m,systemTheme:r?k:void 0}),[w,x,t,k,r,m]);return c.createElement(l.Provider,{value:N},c.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:s,storageKey:i,themes:m,defaultTheme:u,attribute:b,value:g,children:S,attrs:T,nonce:p}),S)},h=c.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:r,enableSystem:l,enableColorScheme:s,defaultTheme:i,value:m,attrs:d,nonce:u}=e,h="system"===i,f="class"===r?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(r,"',s='setAttribute';"),v=s?(o.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],c=m?m[e]:e,a=t?e+"|| ''":"'".concat(c,"'"),l="";return s&&n&&!t&&o.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===r?t||c?l+="c.add(".concat(a,")"):l+="null":c&&(l+="d[s](n,".concat(a,")")),l},b=t?"!function(){".concat(f).concat(y(t),"}()"):l?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(y(m?"x[e]":"e",!0),"}").concat(h?"":"else{"+y(i,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(y(m?"x[e]":"e",!0),"}else{").concat(y(i,!1,!1),";}").concat(v,"}catch(t){}}();");return c.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:b}})}),f=(e,t)=>{let n;if(!r){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}},function(e){e.O(0,[6,971,23,744],function(){return e(e.s=509)}),_N_E=e.O()}]);