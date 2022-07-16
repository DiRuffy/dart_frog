"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[684],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return g}});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(o),g=l,m=s["".concat(u,".").concat(g)]||s[g]||p[g]||r;return o?n.createElement(m,a(a({ref:t},d),{},{components:o})):n.createElement(m,a({ref:t},d))}));function g(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=o.length,a=new Array(r);a[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},6211:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=o(7462),l=o(3366),r=(o(7294),o(3905)),a=["components"],i={sidebar_position:1},u="Google Cloud Run \u2601\ufe0f",c={unversionedId:"deploy/google-cloud-run",id:"deploy/google-cloud-run",title:"Google Cloud Run \u2601\ufe0f",description:"Cloud Run is a service in the Google Cloud Platform that allows you to deploy highly scalable containerized applications using your favorite language on a fully managed serverless platform. You can use Cloud Run to serve requests from your Dart Frog API to the internet. This will provide:",source:"@site/docs/deploy/google-cloud-run.md",sourceDirName:"deploy",slug:"/deploy/google-cloud-run",permalink:"/docs/deploy/google-cloud-run",draft:!1,editUrl:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/docs/docs/deploy/google-cloud-run.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Deploy \ud83d\ude80",permalink:"/docs/category/deploy-"},next:{title:"AWS App Runner \ud83c\udfc3",permalink:"/docs/deploy/aws-app-runner"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying",id:"deploying",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],s={toc:p};function g(e){var t=e.components,o=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-cloud-run-\ufe0f"},"Google Cloud Run \u2601\ufe0f"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/run"},"Cloud Run")," is a service in the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/"},"Google Cloud Platform")," that allows you to deploy highly scalable containerized applications using your favorite language on a fully managed serverless platform. You can use Cloud Run to serve requests from your Dart Frog API to the internet. This will provide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fully managed autoscaling to handle any number of requests"),(0,r.kt)("li",{parentName:"ul"},"Only pay for the computing resources you use, and pay nothing when your service isn't being used"),(0,r.kt)("li",{parentName:"ul"},"Automatic logging in ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/logging"},"Cloud Logging"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you get started, if you don't already have these, you'll need to create:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/accounts/answer/27441?hl=en"},"free Google Account")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects"},"Google Cloud Platform (GCP) Project")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/billing/docs/how-to/manage-billing-account#create_a_new_billing_account"},"billing account")," connected to your GCP project")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"While the Google Cloud Platform has a free tier that should cover testing projects, you can incur costs when running this quickstart through Cloud Run, Cloud Build, or Artifact Registry. For more details, see the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/pricing/list"},"Google Cloud Price List"),".")),(0,r.kt)("p",null,"Additionally, you'll need the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},(0,r.kt)("inlineCode",{parentName:"a"},"gcloud")," command line interface (CLI)")," installed on your computer."),(0,r.kt)("p",null,"Finally, you'll want to log in to ",(0,r.kt)("inlineCode",{parentName:"p"},"gcloud")," by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud auth login\n")),(0,r.kt)("h2",{id:"deploying"},"Deploying"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Build your API for production use by running:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dart_frog build\n")),(0,r.kt)("p",null,"This will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"/build")," directory with all the files needed to deploy your API."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Deploy your API to Cloud Run by running:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud run deploy [SERVICE_NAME] \\\n  --source build \\\n  --project=[PROJECT_ID] \\\n  --region=[REGION] \\\n  --allow-unauthenticated\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[SERVICE_NAME]"),": The name of the Cloud Run service you want to create/update"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[PROJECT_ID]"),": The ID of the Google Cloud project"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[REGION]"),": The GCP region you wish to deploy to (ex: us-central1)")),(0,r.kt)("p",null,"Running this command will do three things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upload the code in the ",(0,r.kt)("inlineCode",{parentName:"li"},"/build")," directory"),(0,r.kt)("li",{parentName:"ul"},"Build the Docker image in ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/build"},"Cloud Build")," and upload it to ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/artifact-registry"},"Artifact Registry")),(0,r.kt)("li",{parentName:"ul"},"Deploy the image to the specified Cloud Run service")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Congratulations! \ud83c\udf89 You have successfully built and deployed your API to Cloud Run. You can now access your API at the Service URL that is printed in the last line of output.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you have not already enabled the nessesary Google Cloud APIs to deploy your API, ",(0,r.kt)("inlineCode",{parentName:"p"},"gcloud")," can enable them for you. Just select ",(0,r.kt)("inlineCode",{parentName:"p"},"Y")," when prompted.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can save the project ID and region to ",(0,r.kt)("inlineCode",{parentName:"p"},"gcloud")," so you don't have to specify them each time you deploy."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set core/project [PROJECT_ID]\ngcloud config set run/region [REGION]\n"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ gcloud run deploy hello  --source build --allow-unauthenticated\n\nBuilding using Dockerfile and deploying container to Cloud Run service [hello] in project [dart-demo] region [us-central1]\n\u2713 Building and deploying new service... Done.\n  \u2713 Uploading sources...\n  \u2713 Building Container... Logs are available at [https://console.cloud.google.com/cloud-build/builds/df7f07d1-d88b-4443-a2b1-bdfd3cdab15b?project=700116488077].\n  \u2713 Creating Revision... Revision deployment finished. Waiting for health check to begin.\n  \u2713 Routing traffic...\n  \u2713 Setting IAM Policy...\nDone.\nService [hello] revision [hello-00001-yen] has been deployed and is serving 100 percent of traffic.\nService URL: https://hello-gpua4upw6q-uc.a.run.app\n")),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/run/docs/overview/what-is-cloud-run"},"What is Cloud Run")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/gcloud/reference/run/deploy"},(0,r.kt)("inlineCode",{parentName:"a"},"gcloud run deploy")," documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/run/docs/logging"},"Cloud Run automatic logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/run/docs/mapping-custom-domains"},"Mapping custom domains to Cloud Run"))))}g.isMDXComponent=!0}}]);