"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[4608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},l="Environment variables & Secrets",s={unversionedId:"deployment-and-infrastructure/env-vars-and-secrets",id:"deployment-and-infrastructure/env-vars-and-secrets",title:"Environment variables & Secrets",description:"If you want an easy-to-follow guide on where to place your env config based on your project, jump directly to Env vars cookbook - if you're new to this topic it's recommended to read and understand at least the section on Run time vs Build time env vars beforehand",source:"@site/docs/deployment-and-infrastructure/env-vars-and-secrets.md",sourceDirName:"deployment-and-infrastructure",slug:"/deployment-and-infrastructure/env-vars-and-secrets",permalink:"/docs/deployment-and-infrastructure/env-vars-and-secrets",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/deployment-and-infrastructure/env-vars-and-secrets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/deployment-and-infrastructure/deployment"},next:{title:"Grafana",permalink:"/docs/deployment-and-infrastructure/grafana"}},o={},p=[{value:"Run time vs Build time",id:"run-time-vs-build-time",level:2},{value:"Local development environment variables",id:"local-development-environment-variables",level:2},{value:"Next.js",id:"nextjs",level:3},{value:"Strapi",id:"strapi",level:3},{value:"Nest.js",id:"nestjs",level:3},{value:"Build time environment variables",id:"build-time-environment-variables",level:2},{value:"Next.js",id:"nextjs-1",level:3},{value:"Strapi",id:"strapi-1",level:3},{value:"Nest.js",id:"nestjs-1",level:3},{value:"Run time environment variables",id:"run-time-environment-variables",level:2},{value:"Secrets",id:"secrets",level:2},{value:"Database naming convention",id:"database-naming-convention",level:3},{value:"Tips &amp; Tricks",id:"tips--tricks",level:3},{value:"Env vars cookbook",id:"env-vars-cookbook",level:2},{value:"Next.js",id:"nextjs-2",level:3},{value:"Strapi",id:"strapi-2",level:3},{value:"Nest.js",id:"nestjs-2",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"environment-variables--secrets"},"Environment variables & Secrets"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you want an easy-to-follow guide on where to place your env config based on your project, jump directly to ",(0,i.kt)("a",{parentName:"p",href:"#env-vars-cookbook"},"Env vars cookbook")," - if you're new to this topic it's recommended to read and understand at least the section on ",(0,i.kt)("a",{parentName:"p",href:"#run-time-vs-build-time"},"Run time vs Build time")," env vars beforehand")),(0,i.kt)("p",null,"There are 4 main sources of configuration for our apps, each group being stored slightly differently:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"local development environment variables"),", these will not be used in any of the deployments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"build time environment variables"),", which need to be available on local machine / in pipelines at build time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"run time environment variables"),", accessible by the running (server) instance in Kubernetes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"secrets")," stored in Kubernetes using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets"},"Sealed secrets"),", accessible at ",(0,i.kt)("strong",{parentName:"li"},"run time"))),(0,i.kt)("p",null,"There are also build-time secrets - but the need for these is rare and we won't go into them."),(0,i.kt)("h2",{id:"run-time-vs-build-time"},"Run time vs Build time"),(0,i.kt)("p",null,"Our applications run in k8s cluster but are typically built on a local machine or in pipelines. Therefore we distinguish between groups of environment variables based on when they are available to the application."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if it's ",(0,i.kt)("strong",{parentName:"li"},"accessible on frontend")," it's typically a ",(0,i.kt)("strong",{parentName:"li"},"build time")," variable (i.e. next.js preps the frontend bundle during build-time, despite it being also the one serving it run-time)"),(0,i.kt)("li",{parentName:"ul"},"if it ",(0,i.kt)("strong",{parentName:"li"},"configures")," the behaviour of ",(0,i.kt)("strong",{parentName:"li"},"the build itself"),"  it's a ",(0,i.kt)("strong",{parentName:"li"},"build time")," variable - these are usually set-up by the environment itself, and ",(0,i.kt)("strong",{parentName:"li"},"super rare"),". One example of build-time variable like this is the ",(0,i.kt)("inlineCode",{parentName:"li"},"SENTRY_AUTH_TOKEN")," which is needed to upload source_maps - but this is usually configured either by using ",(0,i.kt)("inlineCode",{parentName:"li"},".sentryrc")," file or is taken from pipelines global config. Other typical one is ",(0,i.kt)("inlineCode",{parentName:"li"},"process.env.CI"),", which is set by Github pipelines automatically"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"everything else")," is a ",(0,i.kt)("strong",{parentName:"li"},"run time")," variable - these can be accessed by server at runtime and typically includes secrets which shouldn't leak to end users (or be placed under source control) ")),(0,i.kt)("h2",{id:"local-development-environment-variables"},"Local development environment variables"),(0,i.kt)("h3",{id:"nextjs"},"Next.js"),(0,i.kt)("p",null,"Next.js loads ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development")," automatically - values in here can be overwritten using ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development.local"),". More info in ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order"},"Next.js environment variable order guide")),(0,i.kt)("h3",{id:"strapi"},"Strapi"),(0,i.kt)("p",null,"Our Strapi setup (usually) loads data from ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," file in development - this file is gitinored and should be created from ",(0,i.kt)("inlineCode",{parentName:"p"},".env.example")," during dev setup."),(0,i.kt)("h3",{id:"nestjs"},"Nest.js"),(0,i.kt)("p",null,"Our nest.js tempalte configuration loads data from ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in development - this file is gitinored and should be created from ",(0,i.kt)("inlineCode",{parentName:"p"},".env.example")," during dev setup."),(0,i.kt)("h2",{id:"build-time-environment-variables"},"Build time environment variables"),(0,i.kt)("h3",{id:"nextjs-1"},"Next.js"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},".env.production")," for those common for all environments. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},".env.bratiska-cli-build.<env>")," files for setup specific to environment."),(0,i.kt)("admonition",{title:"bratiska-cli ",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Today ",(0,i.kt)("inlineCode",{parentName:"p"},"bratiska-cli")," works by overriding ",(0,i.kt)("inlineCode",{parentName:"p"},".env.production.local")," file - your data stored in this file will be over-written on each build! ")),(0,i.kt)("h3",{id:"strapi-1"},"Strapi"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),". We don't have a way to set these up per-environment at the moment."),(0,i.kt)("h3",{id:"nestjs-1"},"Nest.js"),(0,i.kt)("p",null,"We don't have a mechanism (or at the moment a need) to have or persist these."),(0,i.kt)("h2",{id:"run-time-environment-variables"},"Run time environment variables"),(0,i.kt)("p",null,"These are the same for all frameworks and are stored in ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," files in ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes")," directory of each project. There are a few options ",(0,i.kt)("em",{parentName:"p"},"where")," to put this ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," files, based on whether the config is global for all deployment environments, or only for some:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"/kubernetes/base/.env")," for config common for all deplyments"),(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"/kubernetes/envs/<Env>/.env")," for specific env, where ",(0,i.kt)("inlineCode",{parentName:"li"},"<Env>")," is one of ",(0,i.kt)("inlineCode",{parentName:"li"},"Dev"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Prod"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Staging"))),(0,i.kt)("h2",{id:"secrets"},"Secrets"),(0,i.kt)("p",null,"We are using ",(0,i.kt)("inlineCode",{parentName:"p"},"Sealed Secrets")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitnami-labs/sealed-secrets"},"https://github.com/bitnami-labs/sealed-secrets"),".\nTo use a secret in your project, you have to install ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeseal")," if you haven`t installed it yet. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kubeseal\n")),(0,i.kt)("p",null,"Afterwards go to the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets")," where all our secrets are stored:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd kubernetes/base/secrets\n")),(0,i.kt)("admonition",{title:"Sealed secret can be generated in a single step from the cli",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For a simpler way of creating the secrets file, go to the Tips & Tricks section at the bottom")),(0,i.kt)("p",null,"After that, we need to create a temp file for our new secrets. Let's assume we want database connection secretes. You need to make this file ",(0,i.kt)("inlineCode",{parentName:"p"},"database.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: database-secret\nannotation:\n  sealedsecrets.bitnami.com/managed: "true"\ndata:\n  POSTGRES_DB: YmFuYW5h\n  POSTGRES_USER: YmFuYW5h\n  POSTGRES_PASSWORD: YmFuYW5h\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadata.name")," is the name of the group of secrets in our case, ",(0,i.kt)("inlineCode",{parentName:"li"},"database-secret")," - if this is app specific, it is often prefix by app name, so for example ",(0,i.kt)("inlineCode",{parentName:"li"},"bratislava-strapi-database-secret")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"annotation/sealedsecrets.bitnami.com"),' automatically creates "unsealed" secret inside k8 cluster, managed by the bitnami secret plugin'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," contains environment variables keys (",(0,i.kt)("inlineCode",{parentName:"li"},"POSTGRES_DB"),") and base64 encode values (",(0,i.kt)("inlineCode",{parentName:"li"},"YmFuYW5h"),").")),(0,i.kt)("p",null,"For example, if you need to set up the database name to ",(0,i.kt)("inlineCode",{parentName:"p"},"banana"),", you need to base64 encode this value. You can use an online base64 converter like ",(0,i.kt)("a",{parentName:"p",href:"https://www.base64encode.org"},"https://www.base64encode.org")," and encode ",(0,i.kt)("inlineCode",{parentName:"p"},"banana")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"YmFuYW5h"),". This has to happen even if the value you want to provide is base64 encoded! In such case you'll take your base64 encoded value and encode it again."),(0,i.kt)("p",null,"The last thing is encrypting our secrets by kubeseal to be used on Kubernetes. You need to run this command that creates the file ",(0,i.kt)("inlineCode",{parentName:"p"},"database.secret.yml")," where all our values are encrypted and safe to add to the repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubeseal --controller-name=sealed-secrets --scope=namespace-wide --namespace=standalone --format=yaml < database.yml > database.secret.yml \n")),(0,i.kt)("p",null,"If you want to propagate a sealed secret to Kubernetes without a pipeline, you can run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f database.secret.yml\n")),(0,i.kt)("p",null,"If you already have a sealed secret in Kubernetes, you can update it with the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f database.secret.yml\n")),(0,i.kt)("p",null,"Usually, you get this kind of error: ",(0,i.kt)("inlineCode",{parentName:"p"},'Error from server (AlreadyExists): error when creating "database.secret.yml": sealedsecrets.bitnami.com "nest-Prisma-template-database-secret" already exists')),(0,i.kt)("p",null,"If you want to check if your secret is there, you can run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret --namespace=standalone nest-prisma-template-database-secret\n")),(0,i.kt)("h3",{id:"database-naming-convention"},"Database naming convention"),(0,i.kt)("p",null,"Please use our services names (project-slugs) as database names and users. In this case, we will use ",(0,i.kt)("inlineCode",{parentName:"p"},"nest-prisma-template"),". And for passwords, use at least 16 characters long pass with random chars."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"POSTGRES_DB: nest-prisma-template\nPOSTGRES_USER: nest-prisma-template\nPOSTGRES_PASSWORD: LBcdso08b&aasd(ck2*d!p\n")),(0,i.kt)("p",null,"which after base64 encoding looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"POSTGRES_DB: bmVzdC1wcmlzbWEtdGVtcGxhdGU=\nPOSTGRES_USER: bmVzdC1wcmlzbWEtdGVtcGxhdGU=\nPOSTGRES_PASSWORD: TEJjZHNvMDhiJmFhc2QoY2syKmQhcA==\n")),(0,i.kt)("h3",{id:"tips--tricks"},"Tips & Tricks"),(0,i.kt)("p",null,"If you don't need special settings for your secret, you can create entire ",(0,i.kt)("inlineCode",{parentName:"p"},"kubesealed")," secret by running following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' kubectl create secret generic <SECRET_NAME> --from-literal=<KEY>=<VALUE> --dry-run=client -o json \\\n | jq \'. += { "annotation": {"sealedsecrets.bitnami.com/managed": "true"} }\' \\\n | kubeseal --controller-name=sealed-secrets --scope=namespace-wide -o yaml --namespace=<NAMESPACE>\n')),(0,i.kt)("p",null,"Sticking with our banana example, we create a ",(0,i.kt)("inlineCode",{parentName:"p"},"database-secret"),' with "banana" user, password and DB in namespace ',(0,i.kt)("inlineCode",{parentName:"p"},'"standalone"')," and push it to the file name ",(0,i.kt)("inlineCode",{parentName:"p"},"database.secret.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' kubectl create secret generic database-secret \\\n    --from-literal=POSTGRES_DB=banana \\\n    --from-literal=POSTGRES_USER=banana \\\n    --from-literal=POSTGRES_PASSWORD=banana \\\n  --dry-run=client -o json \\\n | jq \'. += { "annotation": {"sealedsecrets.bitnami.com/managed": "true"} }\' \\\n | kubeseal --controller-name=sealed-secrets --scope=namespace-wide -o yaml --namespace=standalone > database.secret.yml\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note, you may need to install ",(0,i.kt)("a",{parentName:"em",href:"https://stedolan.github.io/jq/"},(0,i.kt)("inlineCode",{parentName:"a"},"jq"))," by standard means like")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install jq\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"or Debian based")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt install jq\n")),(0,i.kt)("h2",{id:"env-vars-cookbook"},"Env vars cookbook"),(0,i.kt)("p",null,"Use the first that applies for the framework you are using"),(0,i.kt)("h3",{id:"nextjs-2"},"Next.js"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if it's local development only value, that can be public to the world, store it in ",(0,i.kt)("inlineCode",{parentName:"li"},".env.development")),(0,i.kt)("li",{parentName:"ul"},"if it's local development value that can't be commited / shared with the world, put a placeholder into ",(0,i.kt)("inlineCode",{parentName:"li"},".env.development")," guiding devs to ask for this value (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"SECRET_VAR=<get-this-from-@user>"),") - store the value iself in ",(0,i.kt)("inlineCode",{parentName:"li"},".env.development.local")," which is gitignored"),(0,i.kt)("li",{parentName:"ul"},"if it's public information and/or build-time variable common to all deployments store it in ",(0,i.kt)("inlineCode",{parentName:"li"},".env.production")," file (committed to git) - anything prefixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_")," common to all deployments is here"),(0,i.kt)("li",{parentName:"ul"},"if it's public information and/or build-time variable different across deployments use one (or all) of the files: ",(0,i.kt)("inlineCode",{parentName:"li"},".env.bratiska-cli-build.dev"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".env.bratiska-cli-build.staging"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".env.bratiska-cli-build.prod")),(0,i.kt)("li",{parentName:"ul"},"if it shouldn't be stored in git / viewed by public use ",(0,i.kt)("inlineCode",{parentName:"li"},"kubeseal")," and create a sealed secret - this can be common for all environments in a file like ",(0,i.kt)("inlineCode",{parentName:"li"},"kubernetes/base/secrets/your-secret.secret.all.yml")," or specific for each one i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"kubernetes/base/secrets/your-secret.secret.staging.yml")," - see the appropriate section in Secrets on how to create these")),(0,i.kt)("p",null,"When in doubt, use the ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order"},"Next.js environment variable order guide"),"."),(0,i.kt)("h3",{id:"strapi-2"},"Strapi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if it's local development only value, that can be public to the world, store it in ",(0,i.kt)("inlineCode",{parentName:"li"},".env.example")," - during development these values should be copied to ",(0,i.kt)("inlineCode",{parentName:"li"},".env.local")),(0,i.kt)("li",{parentName:"ul"},"if it's local development value that can't be commited / shared with the world, put a placeholder into ",(0,i.kt)("inlineCode",{parentName:"li"},".env.example")," guiding devs to ask for this value (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"SECRET_VAR=<get-this-from-@user>"),"), store the value itself in ",(0,i.kt)("inlineCode",{parentName:"li"},".env.local")),(0,i.kt)("li",{parentName:"ul"},"if it's public information and/or build-time variable common to all environments store it in ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file (committed to git)"),(0,i.kt)("li",{parentName:"ul"},"if it's public information different across deployments use one (or all) of the files: ",(0,i.kt)("inlineCode",{parentName:"li"},"/kubernetes/envs/Dev/.env"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"/kubernetes/envs/Staging/.env"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"/kubernetes/envs/Prod/.env")),(0,i.kt)("li",{parentName:"ul"},"if it shouldn't be stored in git / viewed by public use ",(0,i.kt)("inlineCode",{parentName:"li"},"kubeseal")," and create a sealed secret - this can be common for all environments in a file like ",(0,i.kt)("inlineCode",{parentName:"li"},"kubernetes/base/secrets/your-secret.secret.all.yml")," or specific for each one i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"kubernetes/base/secrets/your-secret.secret.staging.yml")," - see the appropriate section in Secrets on how to create these")),(0,i.kt)("h3",{id:"nestjs-2"},"Nest.js"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if it's local development only value, that can be public to the world, store it in ",(0,i.kt)("inlineCode",{parentName:"li"},".env.example")," - during development these values should be copied to ",(0,i.kt)("inlineCode",{parentName:"li"},".env.local")),(0,i.kt)("li",{parentName:"ul"},"if it's local development value that can't be commited / shared with the world, put a placeholder into ",(0,i.kt)("inlineCode",{parentName:"li"},".env.example")," guiding devs to ask for this value (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"SECRET_VAR=<get-this-from-@user>"),"), store the value itself in ",(0,i.kt)("inlineCode",{parentName:"li"},".env.local")),(0,i.kt)("li",{parentName:"ul"},"if it's public information same for all deployments use ",(0,i.kt)("inlineCode",{parentName:"li"},"/kubernetes/base/.env")),(0,i.kt)("li",{parentName:"ul"},"if it's public information different across deployments use one (or all) of the files: ",(0,i.kt)("inlineCode",{parentName:"li"},"/kubernetes/envs/Dev/.env"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"/kubernetes/envs/Staging/.env"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"/kubernetes/envs/Prod/.env")),(0,i.kt)("li",{parentName:"ul"},"if it shouldn't be stored in git / viewed by public use ",(0,i.kt)("inlineCode",{parentName:"li"},"kubeseal")," and create a sealed secret - this can be common for all environments in a file like ",(0,i.kt)("inlineCode",{parentName:"li"},"kubernetes/base/secrets/your-secret.secret.all.yml")," or specific for each one i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"kubernetes/base/secrets/your-secret.secret.staging.yml")," - see the appropriate section in Secrets on how to create these")))}m.isMDXComponent=!0}}]);