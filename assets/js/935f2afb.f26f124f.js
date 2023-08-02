"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Overview","href":"/docs/overview","docId":"overview"},{"type":"category","label":"Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\ude8f Routes","href":"/docs/basics/routes","docId":"basics/routes"},{"type":"link","label":"\ud83c\udf54 Middleware","href":"/docs/basics/middleware","docId":"basics/middleware"},{"type":"link","label":"\ud83d\udc89 Dependency Injection","href":"/docs/basics/dependency-injection","docId":"basics/dependency-injection"},{"type":"link","label":"\ud83e\uddea Testing","href":"/docs/basics/testing","docId":"basics/testing"},{"type":"link","label":"\ud83d\udcc1 Serving Static Files","href":"/docs/basics/serving-static-files","docId":"basics/serving-static-files"},{"type":"link","label":"\ud83c\udf31 Environments","href":"/docs/basics/environments","docId":"basics/environments"},{"type":"link","label":"\ud83d\udcda Additional Resources","href":"/docs/basics/resources","docId":"basics/resources"}],"href":"/docs/category/basics"},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udc4b Hello World","href":"/docs/tutorials/hello_world","docId":"tutorials/hello_world"},{"type":"link","label":"\ud83d\udd0a Echo","href":"/docs/tutorials/echo","docId":"tutorials/echo"},{"type":"link","label":"\ud83d\udd22 Counter","href":"/docs/tutorials/counter","docId":"tutorials/counter"},{"type":"link","label":"\ud83d\uddd2 Todos","href":"/docs/tutorials/todos","docId":"tutorials/todos"},{"type":"link","label":"\ud83d\udd0c WebSocket Counter","href":"/docs/tutorials/web_socket_counter","docId":"tutorials/web_socket_counter"}],"href":"/docs/category/tutorials"},{"type":"category","label":"Deploy","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u2601\ufe0f Google Cloud Run","href":"/docs/deploy/google-cloud-run","docId":"deploy/google-cloud-run"},{"type":"link","label":"\ud83c\udfc3 AWS App Runner","href":"/docs/deploy/aws-app-runner","docId":"deploy/aws-app-runner"},{"type":"link","label":"\ud83c\udf0a Digital Ocean App Platform","href":"/docs/deploy/digital-ocean-app-platform","docId":"deploy/digital-ocean-app-platform"}],"href":"/docs/category/deploy"},{"type":"category","label":"Advanced","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83c\udfac Custom Server Entrypoint","href":"/docs/advanced/custom_entrypoint","docId":"advanced/custom_entrypoint"},{"type":"link","label":"\ud83d\udeeb Custom Init Method","href":"/docs/advanced/custom_init_method","docId":"advanced/custom_init_method"},{"type":"link","label":"\ud83d\udc33 Custom Dockerfile","href":"/docs/advanced/custom_dockerfile","docId":"advanced/custom_dockerfile"},{"type":"link","label":"\ud83d\udd0c WebSockets","href":"/docs/advanced/web_socket","docId":"advanced/web_socket"},{"type":"link","label":"\ud83d\udd0b Powered By Header","href":"/docs/advanced/powered_by_header","docId":"advanced/powered_by_header"},{"type":"link","label":"\ud83d\udd11 Security Context","href":"/docs/advanced/security_context","docId":"advanced/security_context"},{"type":"link","label":"\ud83d\udd12 Authentication","href":"/docs/advanced/authentication","docId":"advanced/authentication"},{"type":"link","label":"\ud83e\uddf0 Daemon","href":"/docs/advanced/daemon","docId":"advanced/daemon"}],"href":"/docs/category/advanced"},{"type":"link","label":"Roadmap","href":"/docs/roadmap","docId":"roadmap"}]},"docs":{"advanced/authentication":{"id":"advanced/authentication","title":"\ud83d\udd12 Authentication","description":"There are many different approaches, protocols, and services when tackling authentication in a backend, which can all be affected by the business logic of the application.","sidebar":"docs"},"advanced/custom_dockerfile":{"id":"advanced/custom_dockerfile","title":"\ud83d\udc33 Custom Dockerfile","description":"A Dockerfile is automatically generated when creating a production build via the dart_frog build command.","sidebar":"docs"},"advanced/custom_entrypoint":{"id":"advanced/custom_entrypoint","title":"\ud83c\udfac Custom Server Entrypoint","description":"Dart Frog supports creating a custom entrypoint in cases where you need fine-grained control over the server initialization or wish to execute code prior to starting the server.","sidebar":"docs"},"advanced/custom_init_method":{"id":"advanced/custom_init_method","title":"\ud83d\udeeb Custom Init Method","description":"Dart Frog supports creating a custom entrypoint as shown in the Custom Entrypoint docs but that will run every time the server hot reloads. In cases where you want to initialize something only on server start, like setting up a database connection, you can use the init method.","sidebar":"docs"},"advanced/daemon":{"id":"advanced/daemon","title":"\ud83e\uddf0 Daemon","description":"Dart Frog daemon is a standing process that, during its lifetime, will be used by first and","sidebar":"docs"},"advanced/powered_by_header":{"id":"advanced/powered_by_header","title":"\ud83d\udd0b Powered By Header","description":"By default, all Dart Frog responses include an X-Powered-By header:","sidebar":"docs"},"advanced/security_context":{"id":"advanced/security_context","title":"\ud83d\udd11 Security Context","description":"By default, Dart Frog uses the insecure HTTP protocol. To enable the secure HTTPS protocol, you must pass a SecurityContext to the serve method in a custom entrypoint:","sidebar":"docs"},"advanced/web_socket":{"id":"advanced/web_socket","title":"\ud83d\udd0c WebSockets","description":"Dart Frog recently introduced package:dartfrogwebsocket to make working with WebSockets easier.","sidebar":"docs"},"basics/dependency-injection":{"id":"basics/dependency-injection","title":"\ud83d\udc89 Dependency Injection","description":"Middleware can be used to inject dependencies into a RequestContext via a provider.","sidebar":"docs"},"basics/environments":{"id":"basics/environments","title":"\ud83c\udf31 Environments","description":"There are many ways that environments can be configured in a Dart Frog application. The","sidebar":"docs"},"basics/middleware":{"id":"basics/middleware","title":"\ud83c\udf54 Middleware","description":"Middleware in Dart Frog allows you to execute code before and after a request is processed. You can modify the inbound request and outbound responses, provide dependencies, and more!","sidebar":"docs"},"basics/resources":{"id":"basics/resources","title":"\ud83d\udcda Additional Resources","description":"- Awesome Dart Frog repo: Highlights awesome Dart Frog resources \u2014 articles, videos, open source projects, and more!","sidebar":"docs"},"basics/routes":{"id":"basics/routes","title":"\ud83d\ude8f Routes","description":"Overview \u2728","sidebar":"docs"},"basics/serving-static-files":{"id":"basics/serving-static-files","title":"\ud83d\udcc1 Serving Static Files","description":"Dart Frog supports serving static files including images, text, json, html, and more.","sidebar":"docs"},"basics/testing":{"id":"basics/testing","title":"\ud83e\uddea Testing","description":"In Dart Frog, we can effectively unit test our route handlers and middleware using packagemocktail.","sidebar":"docs"},"deploy/aws-app-runner":{"id":"deploy/aws-app-runner","title":"\ud83c\udfc3 AWS App Runner","description":"App Runner is a fully managed service that makes it easy for developers to quickly deploy containerized web applications and APIs, at scale and with no prior infrastructure experience required. It is service in Amazon Web Services. App Runner automatically:","sidebar":"docs"},"deploy/digital-ocean-app-platform":{"id":"deploy/digital-ocean-app-platform","title":"\ud83c\udf0a Digital Ocean App Platform","description":"App Platform is a service from Digital Ocean that helps you launch apps quickly while they manage the underlying infrastructure.","sidebar":"docs"},"deploy/google-cloud-run":{"id":"deploy/google-cloud-run","title":"\u2601\ufe0f Google Cloud Run","description":"Cloud Run is a service in the Google Cloud Platform that allows you to deploy highly scalable containerized applications using your favorite language on a fully managed serverless platform. You can use Cloud Run to serve requests from your Dart Frog API to the internet. This will provide:","sidebar":"docs"},"overview":{"id":"overview","title":"Overview","description":"Dart Frog is built on top of shelf and mason and is inspired by many tools including remix.run, next.js, and express.js.","sidebar":"docs"},"roadmap":{"id":"roadmap","title":"Roadmap","description":"In the interest of transparency, we want to share high-level details of our roadmap, so that others can see our priorities and make plans based on the work we are doing.","sidebar":"docs"},"tutorials/counter":{"id":"tutorials/counter","title":"\ud83d\udd22 Counter","description":"Build a simple \\"Counter\\" application.","sidebar":"docs"},"tutorials/echo":{"id":"tutorials/echo","title":"\ud83d\udd0a Echo","description":"Build a simple \\"Echo\\" application.","sidebar":"docs"},"tutorials/hello_world":{"id":"tutorials/hello_world","title":"\ud83d\udc4b Hello World","description":"Build a simple \\"Hello World\\" application.","sidebar":"docs"},"tutorials/todos":{"id":"tutorials/todos","title":"\ud83d\uddd2 Todos","description":"Build a simple \\"Todos\\" application.","sidebar":"docs"},"tutorials/web_socket_counter":{"id":"tutorials/web_socket_counter","title":"\ud83d\udd0c WebSocket Counter","description":"Build a real time \\"Counter\\" powered by WebSockets.","sidebar":"docs"}}}')}}]);