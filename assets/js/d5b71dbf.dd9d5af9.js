"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[5058],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},i="Developer Accesses",l={unversionedId:"onboarding/developer-accesses",id:"onboarding/developer-accesses",title:"Developer Accesses",description:"List of accesses for internal developers & contractors. Does not go into documents signed or other HR stuff \ud83d\ude42",source:"@site/docs/onboarding/developer-accesses.md",sourceDirName:"onboarding",slug:"/onboarding/developer-accesses",permalink:"/docs/onboarding/developer-accesses",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/onboarding/developer-accesses.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Onboarding, editor setup & git workflow",permalink:"/docs/onboarding/onboarding-editor-git"},next:{title:"Regular meetings, sync & rituals",permalink:"/docs/onboarding/meetings-syncs-rituals"}},s={},c=[{value:"General",id:"general",level:2},{value:"Optional",id:"optional",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"developer-accesses"},"Developer Accesses"),(0,n.kt)("p",null,"List of accesses for internal developers & contractors. Does not go into documents signed or other HR stuff \ud83d\ude42"),(0,n.kt)("h2",{id:"general"},"General"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Slack"),(0,n.kt)("li",{parentName:"ul"},"Jira / Confluence"),(0,n.kt)("li",{parentName:"ul"},"@bratislava email and access to Bratislava VPN - usually goes hand in hand and is needed only for internal users"),(0,n.kt)("li",{parentName:"ul"},"Vema (BA HR system) access - accessible only from Magistrate network, internals only"),(0,n.kt)("li",{parentName:"ul"},"add to OIADS_EMPLOYEES AD group - again for internals, this gives access to ",(0,n.kt)("a",{parentName:"li",href:"https://harbor.bratislava.sk/"},"Harbor"),", ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.bratislava.sk/"},"Grafana"),", ",(0,n.kt)("a",{parentName:"li",href:"https://cdn.bratislava.sk/"},"Minio CDN")," and apps deployed on DEV cluster. Guests / external users can be arranged, either via different group or assigned to the apps directly."),(0,n.kt)("li",{parentName:"ul"},"Github"),(0,n.kt)("li",{parentName:"ul"},"Azure devops (mainly for database backups)"),(0,n.kt)("li",{parentName:"ul"},"Miro - mainly for weekly retrospectives, internals only")),(0,n.kt)("h2",{id:"optional"},"Optional"),(0,n.kt)("p",null,"Not needed for everyone or needed for specific roles - usually not needed during onboarding, listed so that we know about the services used"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Figma - this is often per-project"),(0,n.kt)("li",{parentName:"ul"},"Google Cloud Console - google specific services (i.e. places api, recaptcha)"),(0,n.kt)("li",{parentName:"ul"},"Mailgun"),(0,n.kt)("li",{parentName:"ul"},"Mailchimp"),(0,n.kt)("li",{parentName:"ul"},"Sentry - error monitoring and alerting"),(0,n.kt)("li",{parentName:"ul"},"Expo.io - if you are working on mobile apps"),(0,n.kt)("li",{parentName:"ul"},"Inovacie gmail account"),(0,n.kt)("li",{parentName:"ul"},"Bratislava's google analytics account"),(0,n.kt)("li",{parentName:"ul"},"Plausible.io analytics"),(0,n.kt)("li",{parentName:"ul"},"Hotjar analytics"),(0,n.kt)("li",{parentName:"ul"},"Mapbox"),(0,n.kt)("li",{parentName:"ul"},"Websupport (one for Bratislava, multiple others for other clients/projects)"),(0,n.kt)("li",{parentName:"ul"},"AppleID (mostly for mobile dev)")))}u.isMDXComponent=!0}}]);