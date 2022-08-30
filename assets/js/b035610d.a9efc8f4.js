"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[863],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Rest Api",s={unversionedId:"nestjs/RestApi",id:"nestjs/RestApi",title:"Rest Api",description:"please use httpModule under Axios",source:"@site/docs/nestjs/RestApi.md",sourceDirName:"nestjs",slug:"/nestjs/RestApi",permalink:"/docs/nestjs/RestApi",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/nestjs/RestApi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project Structure",permalink:"/docs/nestjs/ProjectStructure"},next:{title:"Sentry in Nest.js",permalink:"/docs/nestjs/Sentry"}},p={},l=[{value:"Install",id:"install",level:2},{value:"Setup",id:"setup",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rest-api"},"Rest Api"),(0,o.kt)("p",null,"please use httpModule under Axios"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm i @nestjs/axios")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Insert into ",(0,o.kt)("inlineCode",{parentName:"p"},"app.module.ts")," into imports:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpModule } from '@nestjs/axios';\n\n@Module({\n  imports: [HttpModule],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/http-module#http-module"},"documentation")," for axios"))))}u.isMDXComponent=!0}}]);