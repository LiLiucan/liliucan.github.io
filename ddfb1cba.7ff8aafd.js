(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),c=(n(0),n(112)),o={slug:"git-commit-message",title:"git commit message\u89c4\u8303",author:"LiLiucan",author_title:"Web Developer",author_url:"https://github.com/liliucan",author_image_url:"https://avatars2.githubusercontent.com/u/7759699?s=60&v=4",tags:["git"]},i={permalink:"/blog/git-commit-message",source:"@site/blog/2020-11-23-git-commit-message.md",description:"Commit message\u683c\u5f0f",date:"2020-11-23T00:00:00.000Z",tags:[{label:"git",permalink:"/blog/tags/git"}],title:"git commit message\u89c4\u8303",readingTime:.465,truncated:!1,nextItem:{title:"\u524d\u7aef\u5e38\u7528\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/blog/design pattern"}},b=[{value:"Commit message\u683c\u5f0f",id:"commit-message\u683c\u5f0f",children:[]},{value:"Commit message\u7c7b\u578b",id:"commit-message\u7c7b\u578b",children:[]},{value:"Scope",id:"scope",children:[]},{value:"Subject",id:"subject",children:[]},{value:"Body",id:"body",children:[]},{value:"Footer",id:"footer",children:[]},{value:"\u4e00\u4e2a\u793a\u4f8b",id:"\u4e00\u4e2a\u793a\u4f8b",children:[]}],l={toc:b};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"commit-message\u683c\u5f0f"},"Commit message\u683c\u5f0f"),Object(c.b)("p",null,"\u6bcf\u6761commit message\u5305\u542b\u5982\u4e0b\u51e0\u90e8\u5206\uff1aheader\u3001body\u548cfooter\u3002header\u6709\u4e00\u4e2a\u56fa\u5b9a\u7684\u683c\u5f0f\uff0c\u5305\u542b\u4e09\u90e8\u5206\uff1atype\u3001scope\u548csubject\u3002"),Object(c.b)("p",null,"\u4e00\u6761commit message\u7684\u6807\u51c6\u683c\u5f0f\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<type>(<scope>): <subject>\n \n<BLANK LINE>\n \n<body>\n \n<BLANK LINE>\n \n<footer>\n")),Object(c.b)("p",null,"header\u662f\u5fc5\u987b\u7684\uff0cheader\u4e2d\u7684scope\u662f\u53ef\u9009\u7684\u3002\ncommit message\u7684\u6bcf\u4e00\u884c\u6587\u5b57\u6700\u597d\u4e0d\u8981\u8d85\u8fc7100\u4e2a\u5b57\u7b26\uff0c\u8fd9\u6837\u7684\u8bdd\u53ef\u4ee5\u4fdd\u8bc1\u6613\u8bfb\u6027\u3002"),Object(c.b)("h2",{id:"commit-message\u7c7b\u578b"},"Commit message\u7c7b\u578b"),Object(c.b)("p",null,"commit message\u7c7b\u578b\u4e5f\u5c31\u662f\u4e0a\u9762\u8bf4\u7684type\uff0c\u6709\u5982\u4e0b\u51e0\u79cd\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"revert: \u56de\u9000\u4e00\u4e2acommit\uff0csubject\u4e2d\u9700\u8981\u5199\u660e\u88ab\u56de\u9000\u7684commit\u7684hash\uff0c\u4f8b\u5982\uff1arevert: This reverts commit ","[hash]"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"feat"),": \u65b0\u7279\u5b9a"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"fix"),"\uff1a\u4fee\u590dbug"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"docs"),"\uff1a\u6587\u6863\u4fee\u6539"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"style"),"\uff1a\u4e00\u4e9b\u5bf9\u4ee3\u7801\u5b9e\u9645\u610f\u4e49\u6ca1\u6709\u5f71\u54cd\u7684\u4fee\u6539\uff08\u4f8b\u5982\u683c\u5f0f\u5316\uff0c\u589e\u52a0\u9017\u53f7\uff0c\u7a7a\u683c\u7b49\u7b49\uff09"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"refactor"),": \u65e2\u4e0d\u662f\u65b0\u7279\u6027\u4e5f\u4e0d\u662f\u4fee\u590dbug"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"perf"),"\uff1a\u6027\u80fd\u4f18\u5316"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"test"),"\uff1a\u5355\u5143\u6d4b\u8bd5\u6216\u8005\u96c6\u6210\u6d4b\u8bd5\u76f8\u5173\u7684\u4fee\u6539"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"chore"),"\uff1a\u6784\u5efa\u6d41\u7a0b\u53ca\u5de5\u7a0b\u5316\u76f8\u5173\u7684\u4fee\u6539")),Object(c.b)("h2",{id:"scope"},"Scope"),Object(c.b)("p",null,"scope\u4e3acommit\u7684\u5f71\u54cd\u8303\u56f4\uff0c\u5982\u679c\u4e00\u4e2a\u9879\u76ee\u6709\u591a\u4e2a\u6a21\u5757\uff0c\u8fd9\u4e2ascope\u5c31\u53ef\u4ee5\u5bf9\u5e94\u4e00\u4e2a\u6a21\u5757\u3002\n\u4ee5zzb-js-sdk\u8fd9\u4e2a\u9879\u76ee\u7684commit message\u4e3a\u4f8b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"chore(zzb-react-components): \u6253\u5305\u914d\u7f6e\u65b0\u589eexternals\u914d\u7f6e\uff0creact\u548creact-dom\u4e0d\u6253\u5305\u8fdb\u6700\u7ec8\u4ee3\u7801\n")),Object(c.b)("h2",{id:"subject"},"Subject"),Object(c.b)("p",null,"subject\u7528\u4e8e\u7b80\u660e\u627c\u8981\u7684\u63cf\u8ff0\u4fee\u6539\u7684\u5185\u5bb9\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528\u7948\u4f7f\u53e5\uff0c\u6bd4\u5982\uff1a\u4fee\u6539\u4e86..."),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u7528\u82f1\u6587\uff0c\u4e0d\u8981\u5927\u5199\u9996\u5b57\u6bcd"),Object(c.b)("li",{parentName:"ul"},"\u7ed3\u5c3e\u4e0d\u8981\u7528\u6807\u70b9")),Object(c.b)("h2",{id:"body"},"Body"),Object(c.b)("p",null,"\u548csubject\u4e00\u6837\uff0c\u8fd9\u90e8\u5206\u5e94\u8be5\u5c3d\u91cf\u7b80\u660e\u627c\u8981\u3002\u5199\u6e05\u695a\u6b64\u6b21\u4fee\u6539\u7684\u52a8\u673a\u4ee5\u53ca\u548c\u4fee\u6539\u4e4b\u524d\u7684\u5dee\u522b\u3002"),Object(c.b)("h2",{id:"footer"},"Footer"),Object(c.b)("p",null,"\u8fd9\u90e8\u5206\u7528\u4e8e\u8bf4\u660e\u7834\u574f\u6027\u7684\u4fee\u6539\uff08Breaking Changes\uff09\u4ee5\u53ca\u9700\u8981\u5173\u95ed\u7684github issuses\u3002"),Object(c.b)("p",null,"\u6211\u89c9\u7684\u4e0d\u540c\u7684\u9879\u76ee\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u60c5\u51b5\u5b9a\u5236\u8fd9\u90e8\u5206\u3002\u6211\u7684\u505a\u6cd5\u662f\u5728\u8fd9\u91cc\u653e\u6b64\u6b21\u4fee\u6539\u76f8\u5173\u7684jira\u94fe\u63a5\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u3002"),Object(c.b)("h2",{id:"\u4e00\u4e2a\u793a\u4f8b"},"\u4e00\u4e2a\u793a\u4f8b"),Object(c.b)("p",null,"\u4e00\u4e2a\u5305\u542b\u5b8c\u6574\u5185\u5bb9\u7684commit message\u5dee\u4e0d\u591a\u662f\u8fd9\u4e2a\u6837\u5b50\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\nchore(zzb-utils): \u4f18\u5316\u6253\u5305\u914d\u7f6e\n \n1. \u5347\u7ea7zzb-react-components\uff0c\u4f18\u5316\u6253\u5305\u540e\u7684\u4ee3\u7801\u4f53\u79ef\n2. webpack\u914d\u7f6e\u4e2d\u65b0\u589eBundleAnalyzerPlugin\n3. webpack\u914d\u7f6e\u4e2d\u65b0\u589eexternals\u914d\u7f6e\uff0c\u89e3\u51b3\u5c06\u5e93\u4ee3\u7801\u6253\u5305\u8fdb\u6a21\u5757\u5bfc\u81f4\u7684\u4ee3\u7801\u4f53\u79ef\u8fc7\u5927\u7684\u95ee\u9898\n \njira: http://jira.xxxx.com/xxxxxx\n")))}m.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=m(n),p=r,j=s["".concat(o,".").concat(p)]||s[p]||u[p]||c;return n?a.a.createElement(j,i(i({ref:t},l),{},{components:n})):a.a.createElement(j,i({ref:t},l))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);