"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/introduction","docId":"introduction"},{"type":"category","label":"Recipes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Debugging k8s cluster connectivity to an outside service","href":"/docs/recipes/debug-cluster-connectivity","docId":"recipes/debug-cluster-connectivity"},{"type":"link","label":"Docker setup","href":"/docs/recipes/docker-setup","docId":"recipes/docker-setup"},{"type":"link","label":"Editor setup","href":"/docs/recipes/editor-setup","docId":"recipes/editor-setup"},{"type":"link","label":"Environment variables & Secrets","href":"/docs/recipes/env-vars-and-secrets","docId":"recipes/env-vars-and-secrets"},{"type":"link","label":"Git workflow (committing, submitting & reviewing pull requests)","href":"/docs/recipes/git-workflow","docId":"recipes/git-workflow"},{"type":"link","label":"Connecting to GraphQL APIs using GraphQL Codegen","href":"/docs/recipes/graphql-codegen-setup","docId":"recipes/graphql-codegen-setup"},{"type":"link","label":"Kubernetes / Lens setup","href":"/docs/recipes/kubernetes-lens-setup","docId":"recipes/kubernetes-lens-setup"},{"type":"link","label":"Load Production or Staging database dump in local development","href":"/docs/recipes/load-strapi-db-in-local-dev","docId":"recipes/load-strapi-db-in-local-dev"},{"type":"link","label":"Setup Postgres & tools","href":"/docs/recipes/postgres-setup","docId":"recipes/postgres-setup"},{"type":"link","label":"Sentry initial setup","href":"/docs/recipes/sentry-setup","docId":"recipes/sentry-setup"},{"type":"link","label":"Strapi initial setup","href":"/docs/recipes/strapi-setup","docId":"recipes/strapi-setup"},{"type":"link","label":"Sync Strapi database to different environment","href":"/docs/recipes/sync-strapi-db-to-different-env","docId":"recipes/sync-strapi-db-to-different-env"}],"href":"/docs/category/recipes"},{"type":"category","label":"Deployment and Infrastructure","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Database backups","href":"/docs/deployment-and-infrastructure/database-backups","docId":"deployment-and-infrastructure/database-backups"},{"type":"link","label":"Deployment","href":"/docs/deployment-and-infrastructure/deployment","docId":"deployment-and-infrastructure/deployment"},{"type":"link","label":"Grafana","href":"/docs/deployment-and-infrastructure/grafana","docId":"deployment-and-infrastructure/grafana"}],"href":"/docs/category/deployment-and-infrastructure"},{"type":"category","label":"NestJS","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"NestJS index","href":"/docs/nestjs/","docId":"nestjs/NestJS"},{"type":"link","label":"Authentication","href":"/docs/nestjs/Authentication","docId":"nestjs/Authentication"},{"type":"link","label":"Card Web Pay","href":"/docs/nestjs/CardWebPay","docId":"nestjs/CardWebPay"},{"type":"link","label":"Controllers","href":"/docs/nestjs/Controllers","docId":"nestjs/Controllers"},{"type":"link","label":"Kubernetes","href":"/docs/nestjs/Kubernetes","docId":"nestjs/Kubernetes"},{"type":"link","label":"Logging","href":"/docs/nestjs/Logging","docId":"nestjs/Logging"},{"type":"link","label":"Module","href":"/docs/nestjs/Module","docId":"nestjs/Module"},{"type":"link","label":"OpenAPI","href":"/docs/nestjs/OpenAPI","docId":"nestjs/OpenAPI"},{"type":"link","label":"Prisma","href":"/docs/nestjs/Prisma","docId":"nestjs/Prisma"},{"type":"link","label":"Project Structure","href":"/docs/nestjs/ProjectStructure","docId":"nestjs/ProjectStructure"},{"type":"link","label":"Rest Api","href":"/docs/nestjs/RestApi","docId":"nestjs/RestApi"},{"type":"link","label":"Sentry in Nest.js","href":"/docs/nestjs/Sentry","docId":"nestjs/Sentry"},{"type":"link","label":"Services","href":"/docs/nestjs/Services","docId":"nestjs/Services"},{"type":"link","label":"Testing","href":"/docs/nestjs/Testing","docId":"nestjs/Testing"}],"href":"/docs/category/nestjs"},{"type":"category","label":"Other","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Developer Accesses","href":"/docs/other/developer-accesses","docId":"other/developer-accesses"},{"type":"link","label":"Regular meetings, sync & rituals","href":"/docs/other/meetings-syncs-rituals","docId":"other/meetings-syncs-rituals"}],"href":"/docs/category/other"},{"type":"link","label":"Meilisearch","href":"/docs/meilisearch","docId":"meilisearch"}]},"docs":{"deployment-and-infrastructure/database-backups":{"id":"deployment-and-infrastructure/database-backups","title":"Database backups","description":"We have a db-backup pipeline available on our Azure Devops project which dumps all the postgres instances running on all of our clusters 3 times a day.","sidebar":"tutorialSidebar"},"deployment-and-infrastructure/deployment":{"id":"deployment-and-infrastructure/deployment","title":"Deployment","description":"Most of our projects are set up to be dockerized and deployed into our Kubernetes infrastructure. This can be done semi-manually using out bratiska-cli tool, or can be setup using github pipelines.","sidebar":"tutorialSidebar"},"deployment-and-infrastructure/grafana":{"id":"deployment-and-infrastructure/grafana","title":"Grafana","description":"We\'re using grafana for monitoring purposes.","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"\ud83d\udd27 This site is under active development - if you\'d like to contribute, get in touch via email or github","sidebar":"tutorialSidebar"},"meilisearch":{"id":"meilisearch","title":"Meilisearch","description":"We use meilisearch for all kinds of searching - often simply through meilisearch-strapi-plugin (read below), but in the future also to scrape the library catalog.","sidebar":"tutorialSidebar"},"nestjs/Authentication":{"id":"nestjs/Authentication","title":"Authentication","description":"This module is for authentication by Azure B2B, but you can use it similar with different auths services.","sidebar":"tutorialSidebar"},"nestjs/CardWebPay":{"id":"nestjs/CardWebPay","title":"Card Web Pay","description":"GP webpay","sidebar":"tutorialSidebar"},"nestjs/Controllers":{"id":"nestjs/Controllers","title":"Controllers","description":"More documentation here","sidebar":"tutorialSidebar"},"nestjs/Kubernetes":{"id":"nestjs/Kubernetes","title":"Kubernetes","description":"deploy to kubernetes and environments are setup in kustomize/kustomization.yml","sidebar":"tutorialSidebar"},"nestjs/Logging":{"id":"nestjs/Logging","title":"Logging","description":"For now use nest default logger, but it will be adjusted in few months","sidebar":"tutorialSidebar"},"nestjs/Module":{"id":"nestjs/Module","title":"Module","description":"Into module you can insert used controllers and services. If you are using more apps, please create one base module.ts and import other modules into this one.","sidebar":"tutorialSidebar"},"nestjs/NestJS":{"id":"nestjs/NestJS","title":"NestJS index","description":"What is the nestjs structure, what plugins and decorators do we use and how do we use it.","sidebar":"tutorialSidebar"},"nestjs/OpenAPI":{"id":"nestjs/OpenAPI","title":"OpenAPI","description":"Some of this is out-of-date / legacy from the projects being part of single monorepo","sidebar":"tutorialSidebar"},"nestjs/Prisma":{"id":"nestjs/Prisma","title":"Prisma","description":"Some of this is out-of-date / legacy from the projects being part of single monorepo","sidebar":"tutorialSidebar"},"nestjs/ProjectStructure":{"id":"nestjs/ProjectStructure","title":"Project Structure","description":"This part will show you, how to create basic structure of your NEST application. How to generate project and how to prepare folders and document structure. If you are familiar with nest after, this you can start programming. If not, you can check nest documentation https://docs.nestjs.com, or check other parts of this docs.","sidebar":"tutorialSidebar"},"nestjs/RestApi":{"id":"nestjs/RestApi","title":"Rest Api","description":"please use httpModule under Axios","sidebar":"tutorialSidebar"},"nestjs/Sentry":{"id":"nestjs/Sentry","title":"Sentry in Nest.js","description":"Installation","sidebar":"tutorialSidebar"},"nestjs/Services":{"id":"nestjs/Services","title":"Services","description":"More documentation here","sidebar":"tutorialSidebar"},"nestjs/Testing":{"id":"nestjs/Testing","title":"Testing","description":"TBD","sidebar":"tutorialSidebar"},"other/developer-accesses":{"id":"other/developer-accesses","title":"Developer Accesses","description":"List of accesses for internal developers & contractors. Does not go into documents signed or other HR stuff \ud83d\ude42","sidebar":"tutorialSidebar"},"other/meetings-syncs-rituals":{"id":"other/meetings-syncs-rituals","title":"Regular meetings, sync & rituals","description":"These are for developers across all projects in the Inovations team. Each project may have it\'s own planning/standup/retrospective meets & calls, we\'re not covering those here.","sidebar":"tutorialSidebar"},"recipes/debug-cluster-connectivity":{"id":"recipes/debug-cluster-connectivity","title":"Debugging k8s cluster connectivity to an outside service","description":"Let\'s assume you want to check if you can ping a service from the  next-city-library pod.","sidebar":"tutorialSidebar"},"recipes/docker-setup":{"id":"recipes/docker-setup","title":"Docker setup","description":"If you are on Linux or macOS, we recommend installing Docker desktop","sidebar":"tutorialSidebar"},"recipes/editor-setup":{"id":"recipes/editor-setup","title":"Editor setup","description":"We recommend using VS Code with the following extensions installed and formatting your code on save enabled (or, at minimum, formatting before commit):","sidebar":"tutorialSidebar"},"recipes/env-vars-and-secrets":{"id":"recipes/env-vars-and-secrets","title":"Environment variables & Secrets","description":"If you want an easy-to-follow guide on where to place your env config based on your project, jump directly to Env vars cookbook - if you\'re new to this topic it\'s recommended to read and understand at least the section on Run time vs Build time env vars beforehand","sidebar":"tutorialSidebar"},"recipes/git-workflow":{"id":"recipes/git-workflow","title":"Git workflow (committing, submitting & reviewing pull requests)","description":"Branches and environments","sidebar":"tutorialSidebar"},"recipes/graphql-codegen-setup":{"id":"recipes/graphql-codegen-setup","title":"Connecting to GraphQL APIs using GraphQL Codegen","description":"We\'re using GraphQL Codegen setup to generate typed clients for our gql servers - particularly Strapi CMS.","sidebar":"tutorialSidebar"},"recipes/kubernetes-lens-setup":{"id":"recipes/kubernetes-lens-setup","title":"Kubernetes / Lens setup","description":"You can only do this with sufficient access rights - ask Innovations team or Bratislava IT department if connecting to k8s infrastructure is relevant to you.","sidebar":"tutorialSidebar"},"recipes/load-strapi-db-in-local-dev":{"id":"recipes/load-strapi-db-in-local-dev","title":"Load Production or Staging database dump in local development","description":"You\'ll need access to our Azure Devops project o access the database dumps","sidebar":"tutorialSidebar"},"recipes/postgres-setup":{"id":"recipes/postgres-setup","title":"Setup Postgres & tools","description":"We recommend running your postgres database in a docker. For docker setup recommendations, look here.","sidebar":"tutorialSidebar"},"recipes/sentry-setup":{"id":"recipes/sentry-setup","title":"Sentry initial setup","description":"We\'re using Sentry to collect FE errors, as well as for FE/BE alerting.","sidebar":"tutorialSidebar"},"recipes/strapi-setup":{"id":"recipes/strapi-setup","title":"Strapi initial setup","description":"ENV_PATH setup","sidebar":"tutorialSidebar"},"recipes/sync-strapi-db-to-different-env":{"id":"recipes/sync-strapi-db-to-different-env","title":"Sync Strapi database to different environment","description":"Below is a set of commands to copy production Strapi data to staging environment - can be modified for other similar tasks. If you need exact copy of database, you should scale down strapi & next deployments and drop & recreate database before loading the data.","sidebar":"tutorialSidebar"}}}')}}]);