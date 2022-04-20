(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=(r(0),r(115));const a={slug:"React",title:"React Hooks",author:"LiLiucan",author_title:"Web Developer",author_url:"https://github.com/liliucan",author_image_url:"https://avatars2.githubusercontent.com/u/7759699?s=60&v=4",tags:["\u524d\u7aef"]},c={permalink:"/blog/React",source:"@site/blog/2020-03-06-react-hooks.md",description:"Class Components\u5230hooks\u6700\u91cd\u8981\u7684\u53d8\u5316\u5e94\u8be5\u662f\u5fc3\u667a\u6a21\u578b\u7684\u53d8\u5316",date:"2020-03-06T00:00:00.000Z",tags:[{label:"\u524d\u7aef",permalink:"/blog/tags/\u524d\u7aef"}],title:"React Hooks",readingTime:.045,truncated:!1,prevItem:{title:"React\u548cVue\u7684\u533a\u522b",permalink:"/blog/React Vue"},nextItem:{title:"\u6d4f\u89c8\u5668\u7f13\u5b58\u7b56\u7565",permalink:"/blog/http cache"}},i=[{value:"Class Components\u5230hooks\u6700\u91cd\u8981\u7684\u53d8\u5316\u5e94\u8be5\u662f\u5fc3\u667a\u6a21\u578b\u7684\u53d8\u5316",id:"class-components\u5230hooks\u6700\u91cd\u8981\u7684\u53d8\u5316\u5e94\u8be5\u662f\u5fc3\u667a\u6a21\u578b\u7684\u53d8\u5316",children:[]},{value:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",id:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",children:[]},{value:"Capture Value\u6982\u5ff5",id:"capture-value\u6982\u5ff5",children:[]}],u={toc:i};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"class-components\u5230hooks\u6700\u91cd\u8981\u7684\u53d8\u5316\u5e94\u8be5\u662f\u5fc3\u667a\u6a21\u578b\u7684\u53d8\u5316"},"Class Components\u5230hooks\u6700\u91cd\u8981\u7684\u53d8\u5316\u5e94\u8be5\u662f\u5fc3\u667a\u6a21\u578b\u7684\u53d8\u5316"),Object(o.b)("h3",{id:"\u51fd\u6570\u5f0f\u7ec4\u4ef6"},"\u51fd\u6570\u5f0f\u7ec4\u4ef6"),Object(o.b)("h3",{id:"capture-value\u6982\u5ff5"},"Capture Value\u6982\u5ff5"),Object(o.b)("h3",{id:""}))}l.isMDXComponent=!0},115:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,m=s["".concat(c,".").concat(b)]||s[b]||f[b]||a;return r?o.a.createElement(m,i(i({ref:t},l),{},{components:r})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);