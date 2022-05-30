(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(123)),l={slug:"nodejs-path-alias",title:"nodejs\u9879\u76ee\u6a21\u5757\u8def\u5f84\u522b\u540d",author:"LiLiucan",author_title:"Web Developer",author_url:"https://github.com/liliucan",author_image_url:"https://avatars2.githubusercontent.com/u/7759699?s=60&v=4",tags:["nodejs"]},c={permalink:"/blog/nodejs-path-alias",source:"@site/blog/2022-05-30-nodejs-path-alias.md",description:"\u53ef\u7528\u7684\u89e3\u51b3\u65b9\u6848",date:"2022-05-30T00:00:00.000Z",tags:[{label:"nodejs",permalink:"/blog/tags/nodejs"}],title:"nodejs\u9879\u76ee\u6a21\u5757\u8def\u5f84\u522b\u540d",readingTime:.305,truncated:!1,nextItem:{title:"git commit message\u89c4\u8303",permalink:"/blog/git-commit-message"}},i=[{value:"\u53ef\u7528\u7684\u89e3\u51b3\u65b9\u6848",id:"\u53ef\u7528\u7684\u89e3\u51b3\u65b9\u6848",children:[]},{value:"module-alias \u65b9\u6848\u5e94\u7528",id:"module-alias-\u65b9\u6848\u5e94\u7528",children:[]},{value:"Typescript \u9879\u76ee",id:"typescript-\u9879\u76ee",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u53ef\u7528\u7684\u89e3\u51b3\u65b9\u6848"},"\u53ef\u7528\u7684\u89e3\u51b3\u65b9\u6848"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://arunmichaeldsouza.com/blog/aliasing-module-paths-in-node-js"}),"Aliasing module paths in Node JS")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.jianshu.com/p/0d8201ee1605"}),"Node.js \u914d\u7f6e\u522b\u540d alias \u7684\u4e24\u79cd\u65b9\u6cd5")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ilearnio/module-alias"}),"module-alias"))),Object(o.b)("h3",{id:"module-alias-\u65b9\u6848\u5e94\u7528"},"module-alias \u65b9\u6848\u5e94\u7528"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u5b89\u88c5 module-alias")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"yarn add module-alias\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"\u5728 src/index.ts \u4e2d\u6ce8\u518c add module-alias")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import 'module-alias/register';\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"\u5728\u9879\u76ee package.json \u4e2d\u65b0\u589e\u522b\u540d\u914d\u7f6e")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'  "_moduleAliases": {\n  "@": "./bin"\n},\n')),Object(o.b)("h3",{id:"typescript-\u9879\u76ee"},"Typescript \u9879\u76ee"),Object(o.b)("p",null,"\u5728\u9879\u76ee tsconfig.json \u4e2d\u589e\u52a0\u5982\u4e0b\u914d\u7f6e"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),' "paths": {\n      "@/*": ["./src/*"]\n    }\n')))}p.isMDXComponent=!0}}]);