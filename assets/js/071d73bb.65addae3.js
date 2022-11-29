"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(r),m=o,y=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},9629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,title:"\ud83c\udfac Custom Server Entrypoint"},i="Custom Server Entrypoint \ud83c\udfac",c={unversionedId:"advanced/custom_entrypoint",id:"advanced/custom_entrypoint",title:"\ud83c\udfac Custom Server Entrypoint",description:"Dart Frog supports creating a custom entrypoint in cases where you need fine-grained control over the server initialization or wish to execute code prior to starting the server.",source:"@site/docs/advanced/custom_entrypoint.md",sourceDirName:"advanced",slug:"/advanced/custom_entrypoint",permalink:"/docs/advanced/custom_entrypoint",draft:!1,editUrl:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/docs/docs/advanced/custom_entrypoint.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\ud83c\udfac Custom Server Entrypoint"},sidebar:"docs",previous:{title:"Advanced",permalink:"/docs/category/advanced"},next:{title:"\ud83d\udc33 Custom Dockerfile",permalink:"/docs/advanced/custom_dockerfile"}},p={},s=[{value:"Creating a Custom Entrypoint \u2728",id:"creating-a-custom-entrypoint-",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-server-entrypoint-"},"Custom Server Entrypoint \ud83c\udfac"),(0,o.kt)("p",null,"Dart Frog supports creating a custom entrypoint in cases where you need fine-grained control over the server initialization or wish to execute code prior to starting the server."),(0,o.kt)("h2",{id:"creating-a-custom-entrypoint-"},"Creating a Custom Entrypoint \u2728"),(0,o.kt)("p",null,"To create a custom entrypoint, simply create a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.dart")," file at the root of your Dart Frog project. The ",(0,o.kt)("inlineCode",{parentName:"p"},"main.dart")," file must expose a top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method with the following signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:io';\n\nimport 'package:dart_frog/dart_frog.dart';\n\nFuture<HttpServer> run(Handler handler, InternetAddress ip, int port) {\n  // 1. Execute any custom code prior to starting the server...\n\n  // 2. Use the provided `handler`, `ip`, and `port` to create a custom `HttpServer`.\n  // Or use the Dart Frog serve method to do that for you.\n  return serve(handler, ip, port);\n}\n")),(0,o.kt)("p",null,"The Dart Frog CLI will detect the custom entrypoint and execute your custom ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method instead of the default implementation."))}d.isMDXComponent=!0}}]);