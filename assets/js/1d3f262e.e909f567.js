"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[8417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Sentry in Nest.js",s={unversionedId:"technologies-and-recipes/NestJS/Sentry",id:"technologies-and-recipes/NestJS/Sentry",title:"Sentry in Nest.js",description:"Installation",source:"@site/docs/technologies-and-recipes/NestJS/Sentry.md",sourceDirName:"technologies-and-recipes/NestJS",slug:"/technologies-and-recipes/NestJS/Sentry",permalink:"/docs/technologies-and-recipes/NestJS/Sentry",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/technologies-and-recipes/NestJS/Sentry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rest Api",permalink:"/docs/technologies-and-recipes/NestJS/RestApi"},next:{title:"Services",permalink:"/docs/technologies-and-recipes/NestJS/Services"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sentry-in-nestjs"},"Sentry in Nest.js"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@ntegral/nestjs-sentry")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add into ",(0,o.kt)("inlineCode",{parentName:"li"},"app.module.ts")," into imports:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  imports: [\n    SentryModule.forRoot({\n      dsn: 'https://{{id}}@o{{id}}.ingest.sentry.io/{{id}}',\n      debug: false,\n      environment: 'production',\n      release: APP_VERSION, // must create a release in sentry.io dashboard\n      tracesSampleRate: 1.0,\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\n"))),(0,o.kt)("li",{parentName:"ol"},"Add into your controller file new sentry decorator:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Controller('api')\n@UseInterceptors(new SentryInterceptor())\nexport class AppController {\n  @Get('healthcheck')\n  healthcheck(): string {\n    return 'OK';\n  }\n}\n")))))}u.isMDXComponent=!0}}]);