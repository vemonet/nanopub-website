"use strict";(self.webpackChunknanopub_website=self.webpackChunknanopub_website||[]).push([[381],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||b[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"tools",title:"Tools"},s=void 0,p={unversionedId:"tools",id:"tools",title:"Tools",description:"There are a few existing tools to access and publish nanopublications.",source:"@site/docs/tools.md",sourceDirName:".",slug:"/tools",permalink:"/docs/tools",draft:!1,editUrl:"https://github.com/Nanopublication/nanopub-website/edit/main/website/docs/tools.md",tags:[],version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1678903694,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{id:"tools",title:"Tools"},sidebar:"docs",previous:{title:"Network",permalink:"/docs/network"},next:{title:"Users",permalink:"/docs/users"}},u={},c=[{value:"\ud83c\udf10 Web service",id:"-web-service",level:2},{value:"\ud83d\udecb\ufe0f Nanodash",id:"\ufe0f-nanodash",level:3},{value:"\ud83d\udd2c Knowledge Collaboratory",id:"-knowledge-collaboratory",level:3},{value:"\ud83d\udcda\ufe0f Libraries",id:"\ufe0f-libraries",level:2},{value:"\u2615\ufe0f Java libraries",id:"\ufe0f-java-libraries",level:3},{value:"\ud83d\udc0d Python libraries",id:"-python-libraries",level:3},{value:"\ud83d\ude80 JavaScript:",id:"-javascript",level:3},{value:"\ud83d\udd17 Related links",id:"-related-links",level:2}],b={toc:c},d="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are a few existing tools to access and publish nanopublications."),(0,o.kt)("h2",{id:"-web-service"},"\ud83c\udf10 Web service"),(0,o.kt)("h3",{id:"\ufe0f-nanodash"},"\ud83d\udecb\ufe0f Nanodash"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/knowledgepixels/nanodash"},(0,o.kt)("strong",{parentName:"a"},"Nanodash"))," is the official web service to browse and publish nanopublications is"),(0,o.kt)("h3",{id:"-knowledge-collaboratory"},"\ud83d\udd2c Knowledge Collaboratory"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://collaboratory.semanticscience.org/"},"Knowledge Collaboratory")," is a service to help annotate biomedical text, publish those annotations as nanopublications, and browse nanopublications."),(0,o.kt)("h2",{id:"\ufe0f-libraries"},"\ud83d\udcda\ufe0f Libraries"),(0,o.kt)("p",null,"Libraries in various languages are available to manipulate and publish nanopublications:"),(0,o.kt)("h3",{id:"\ufe0f-java-libraries"},"\u2615\ufe0f Java libraries"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Nanopublication/nanopub-java"},(0,o.kt)("strong",{parentName:"a"},"nanopub-java"))," (",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1508.04977"},"paper"),"): the official implementation to sign, verify, and publish nanopubs."),(0,o.kt)("h3",{id:"-python-libraries"},"\ud83d\udc0d Python libraries"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/fair-workflows/nanopub"},(0,o.kt)("strong",{parentName:"a"},"nanopub")),": a python implementation to sign, verify, and publish nanopubs."),(0,o.kt)("h3",{id:"-javascript"},"\ud83d\ude80 JavaScript:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/vemonet/nanopub-display"},"\ud83e\uddec ",(0,o.kt)("inlineCode",{parentName:"a"},"@nanopub/display"))),": a standard web component to easily display nanopublications in pure HTML, or any existing framework."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/knowledgepixels/nanopub-utils"},"\ud83d\udee0\ufe0f ",(0,o.kt)("inlineCode",{parentName:"a"},"@nanopub/utils"))),": a TypeScript/JavaScript library with various functions to work with nanopubs (e.g. fetch nanopubs)."),(0,o.kt)("h2",{id:"-related-links"},"\ud83d\udd17 Related links"),(0,o.kt)("p",null,"You can find other tools in the GitHub organization: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Nanopublication/"},"Nanopublication")),(0,o.kt)("p",null,"More informations about ",(0,o.kt)("a",{parentName:"p",href:"http://trustyuri.net/"},"Trusty URI on their website")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1809.06532"},"See this paper")," for datasets using nanopublications:"))}h.isMDXComponent=!0}}]);