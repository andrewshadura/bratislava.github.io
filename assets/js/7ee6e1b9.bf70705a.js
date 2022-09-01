"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[9013],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),h=i,d=m["".concat(o,".").concat(h)]||m[h]||u[h]||r;return t?a.createElement(d,l(l({ref:n},p),{},{components:t})):a.createElement(d,l({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const r={},l="Meilisearch",s={unversionedId:"meilisearch",id:"meilisearch",title:"Meilisearch",description:"We use meilisearch for all kinds of searching - often simply through meilisearch-strapi-plugin (read below), but in the future also to scrape the library catalog.",source:"@site/docs/meilisearch.md",sourceDirName:".",slug:"/meilisearch",permalink:"/docs/meilisearch",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/meilisearch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Regular meetings, sync & rituals",permalink:"/docs/other/meetings-syncs-rituals"}},o={},c=[{value:"Setup",id:"setup",level:2},{value:"Running meilisearch instance locally",id:"running-meilisearch-instance-locally",level:3},{value:"Running the meilisearch instance in Kubernetes",id:"running-the-meilisearch-instance-in-kubernetes",level:3},{value:"Env setup",id:"env-setup",level:4},{value:"Getting the search and admin keys",id:"getting-the-search-and-admin-keys",level:2},{value:"Setting up new index",id:"setting-up-new-index",level:2},{value:"Connecting Strapi to meilisearch and dealing with localization",id:"connecting-strapi-to-meilisearch-and-dealing-with-localization",level:2},{value:"Additional settings",id:"additional-settings",level:2},{value:"Accessing search functionality",id:"accessing-search-functionality",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"meilisearch"},"Meilisearch"),(0,i.kt)("p",null,"We use meilisearch for all kinds of searching - often simply through ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/meilisearch/strapi-plugin-meilisearch"},"meilisearch-strapi-plugin")," (read below), but in the future also to scrape the library catalog."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Important - there might be custom index/search setup for each project - that should be covered in project-specific documentation")),(0,i.kt)("h3",{id:"running-meilisearch-instance-locally"},"Running meilisearch instance locally"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.meilisearch.com/learn/getting_started/quick_start.html#setup-and-installation"},"Read the official docs"),", we recommend to run in docker."),(0,i.kt)("h3",{id:"running-the-meilisearch-instance-in-kubernetes"},"Running the meilisearch instance in Kubernetes"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: This section needs to be verified, info might be missing or incorrect")),(0,i.kt)("p",null,"You can setup everything relating to your instance using kustomize. Presently this setup tends to be clumped with ",(0,i.kt)("inlineCode",{parentName:"p"},"strapi")," kustomize files, so in the paths below we're always referencing such existing ",(0,i.kt)("inlineCode",{parentName:"p"},"strapi")," setup."),(0,i.kt)("p",null,"Create the following files:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes/base/service-meilisearch.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: ${BUILD_REPOSITORY_NAME}-meilisearch\n  namespace: ${NAMESPACE}\nspec:\n  type: ClusterIP\n  ports:\n    - name: internal\n      port: 7700\n      targetPort: http\n      protocol: TCP\n    - name: external\n      port: 80\n      targetPort: 7700\n      protocol: TCP\n  selector:\n    service: meilisearch\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes/base/stateful-set-meilisearch.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: ${BUILD_REPOSITORY_NAME}-meilisearch\n  namespace: ${NAMESPACE}\n  labels:\n    service: meilisearch\nspec:\n  selector:\n    matchLabels:\n      app: meilisearch\n  replicas: 1\n  serviceName: ${BUILD_REPOSITORY_NAME}-meilisearch\n  template:\n    metadata:\n      labels:\n        service: meilisearch\n    spec:\n      containers:\n        - name: meilisearch\n          image: "getmeili/meilisearch:v0.28.0"\n          imagePullPolicy: IfNotPresent\n          envFrom:\n            - configMapRef:\n                name: ${BUILD_REPOSITORY_NAME}-meilisearch\n            - secretRef:\n                name: ${BUILD_REPOSITORY_NAME}-meilisearch-secret\n          ports:\n            - name: http\n              containerPort: 7700\n              protocol: TCP\n          livenessProbe:\n            httpGet:\n              path: /health\n              port: http\n            periodSeconds: 60\n            initialDelaySeconds: 60\n          readinessProbe:\n            httpGet:\n              path: /health\n              port: http\n            periodSeconds: 60\n            initialDelaySeconds: 60\n          volumeMounts:\n            - name: ${BUILD_REPOSITORY_NAME}-meilisearch-data-storage\n              mountPath: /meili_data\n          resources: {}\n  volumeClaimTemplates:\n    - metadata:\n        name: ${BUILD_REPOSITORY_NAME}-meilisearch-data-storage\n        labels:\n          service: meilisearch\n      spec:\n        accessModes: ["ReadWriteOnce"]\n        resources:\n          requests:\n            storage: 10Gi\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes/base/ingress.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ${BUILD_REPOSITORY_NAME}-ingress\n  namespace: ${NAMESPACE}\n  labels:\n    service: app\n  annotations:\n    cert-manager.io/cluster-issuer: letsencrypt\n    cert-manager.io/issue-temporary-certificate: "true"\n    kubernetes.io/ingress.class: haproxy\nspec:\n  tls:\n    - hosts:\n        - ${HOSTNAME}\n        - ${BUILD_REPOSITORY_NAME}-meilisearch.${DEPLOYMENT_ENV}bratislava.sk\n      secretName: ${BUILD_REPOSITORY_NAME}-tls\n  rules:\n    - host: ${HOSTNAME}\n      http:\n        paths:\n          - path: /\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: ${BUILD_REPOSITORY_NAME}-app\n                port:\n                  number: 80\n    - host: ${BUILD_REPOSITORY_NAME}-meilisearch.${DEPLOYMENT_ENV}bratislava.sk\n      http:\n        paths:\n          - path: /\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: ${BUILD_REPOSITORY_NAME}-meilisearch\n                port:\n                  number: 80\n')),(0,i.kt)("p",null,"Add following to ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes/base/configuration.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"resources: ...\n  - ingress.yml\n  - stateful-set-meilisearch.yml\n  - service-meilisearch.yml\n\nconfigMapGenerator:\n  - name: ${BUILD_REPOSITORY_NAME}-meilisearch\n    namespace: ${NAMESPACE}\n    envs:\n      - .meilisearch.env\n")),(0,i.kt)("p",null,"And to ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"  ...\n  envFrom:\n    - secretRef:\n        name: ${BUILD_REPOSITORY_NAME}-meilisearch-secret\n    - configMapRef:\n        name: ${BUILD_REPOSITORY_NAME}-meilisearch\n")),(0,i.kt)("h4",{id:"env-setup"},"Env setup"),(0,i.kt)("p",null,"You'll want to setup a meilisearch master key as a secret (check out the section on env vars & secrets), you can see the secret reference above already. The sealed secret file will looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'apiVersion: bitnami.com/v1alpha1\nkind: SealedSecret\nmetadata:\n  annotations:\n    sealedsecrets.bitnami.com/namespace-wide: "true"\n  creationTimestamp: null\n  name: <your-prefix>-meilisearch-secret\n  namespace: standalone\nspec:\n  encryptedData:\n    MEILI_MASTER_KEY: YOUR_BASE_64_ENCODED_KEY\n  template:\n    data: null\n    metadata:\n      annotations:\n        sealedsecrets.bitnami.com/namespace-wide: "true"\n      creationTimestamp: null\n      name: <your-prefix>-meilisearch-secret\n      namespace: standalone\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is different from the search secret you'll be using to query meilisearch data, and should preferably be different from your admin secret as well, so that you can later swap it painlessly")),(0,i.kt)("p",null,"Along with an appropriate ",(0,i.kt)("inlineCode",{parentName:"p"},".meilisearch.env")," file for non-secret setup, usually residing at ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes/base/.meilisearch.env")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"MEILI_ENV=production\nMEILI_NO_ANALYTICS=true\n")),(0,i.kt)("p",null,"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"MEILI_ENV")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"development")," serves a gui with search console by the meili server."),(0,i.kt)("p",null,"In case you have multiple ",(0,i.kt)("inlineCode",{parentName:"p"},".meilisearch.<env>.env")," files, reference the correct one in ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes/envs/<env>/kustommization.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"configMapGenerator:\n  ...\n  - name: ${BUILD_REPOSITORY_NAME}-meilisearch\n    namespace: ${NAMESPACE}\n    behavior: merge\n    envs:\n      - .meilisearch.<env>.env\n")),(0,i.kt)("h2",{id:"getting-the-search-and-admin-keys"},"Getting the search and admin keys"),(0,i.kt)("p",null,"More info in meilisearch docs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request GET \\\n  --url http://your-strapi-url/keys \\\n  --header \'Authorization: Bearer YOUR_MASTER_KEY\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{"attributesToHighlight":["*"],"limit":21,"q":"asds"}\'\n')),(0,i.kt)("h2",{id:"setting-up-new-index"},"Setting up new index"),(0,i.kt)("p",null,"Before you can search your data, you need to a) set up a index in meilisearch instance and b) fill it with the data to be search. Today our indexes (against strapi data) are setup and filled using GUI provided by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/meilisearch/strapi-plugin-meilisearch"},"meilisearch-strapi-plugin")," - follow their docs. To set up an index manually, follow the Meilisearch docs."),(0,i.kt)("h2",{id:"connecting-strapi-to-meilisearch-and-dealing-with-localization"},"Connecting Strapi to meilisearch and dealing with localization"),(0,i.kt)("p",null,"We are using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bratislava/strapi-plugin-meilisearch"},"our own fork")," of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/meilisearch/strapi-plugin-meilisearch"},"meilisearch-strapi-plugin")," - this is to deal with the localization issue."),(0,i.kt)("p",null,"As of today, the original plugin deals only with the primary locale. A one-liner change makes it index all of the locales, but these will then be clumped together. That means that after indexing the data from Strapi GUI, you need to make the following request against ",(0,i.kt)("em",{parentName:"p"},"each localized index"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request PATCH \\\n  --url https://your-meili-url/indexes/your-index-name/settings \\\n  --header 'Authorization: Bearer YOUR_MASTER_KEY' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n    \"filterableAttributes\": [\"locale\"]\n}'\n")),(0,i.kt)("p",null,"Afterwards, you can filter by locale so that your results don't get mixed up, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST \\\n  --url https://your-meili-url/indexes/your-index-name/search \\\n  --header \'Authorization: Bearer 0125a124666e7339642c8b04bc05e84697c7afcf50e025f1398642b5f8e42c4d\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n    "q": "Youth",\n    "filter": ["locale = en"]\n}\'\n')),(0,i.kt)("p",null,"More info in meilisearch docs."),(0,i.kt)("h2",{id:"additional-settings"},"Additional settings"),(0,i.kt)("p",null,"Just like with ",(0,i.kt)("inlineCode",{parentName:"p"},"filterableAttributes"),", you can further configure your indexes (i.e. add sortableAttributes) - check out meilisearch docs."),(0,i.kt)("h2",{id:"accessing-search-functionality"},"Accessing search functionality"),(0,i.kt)("p",null,"When you have your indexes setup (using strapi plugin or manually), you can search them using the following"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"debug")," using either Postman or by accessing the dev gui served by the meilisearch instance in dev mode"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"frontend/backend")," using the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/meilisearch/meilisearch-js"},"meilisearch-js sdk"))),(0,i.kt)("p",null,"Check out Meilisearch pages/github before delving into custom integrations, as they provide & maintain, including embedable search bars and scrapers."))}u.isMDXComponent=!0}}]);