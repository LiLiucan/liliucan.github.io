(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{119:function(t,e,r){"use strict";r.d(e,"a",(function(){return b})),r.d(e,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=a.a.createContext({}),p=function(t){var e=a.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},b=function(t){var e=p(t.components);return a.a.createElement(u.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},s=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),b=p(r),s=n,m=b["".concat(c,".").concat(s)]||b[s]||h[s]||o;return r?a.a.createElement(m,l(l({ref:e},u),{},{components:r})):a.a.createElement(m,l({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,c=new Array(o);c[0]=s;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:n,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},72:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return c})),r.d(e,"toc",(function(){return l})),r.d(e,"default",(function(){return u}));var n=r(3),a=(r(0),r(119));const o={slug:"http revolutions",title:"http\u534f\u8bae\u6f14\u8fdb",author:"LiLiucan",author_title:"Web Developer",author_url:"https://github.com/liliucan",author_image_url:"https://avatars2.githubusercontent.com/u/7759699?s=60&v=4",tags:["\u524d\u7aef"]},c={permalink:"/blog/http revolutions",source:"@site/blog/2020-03-05-http-revolutions.md",description:"http1.x\u7684\u7f3a\u9677",date:"2020-03-05T00:00:00.000Z",tags:[{label:"\u524d\u7aef",permalink:"/blog/tags/\u524d\u7aef"}],title:"http\u534f\u8bae\u6f14\u8fdb",readingTime:.18,truncated:!1,prevItem:{title:"React Hooks",permalink:"/blog/React"},nextItem:{title:"\u6d4f\u89c8\u5668\u7f13\u5b58\u7b56\u7565",permalink:"/blog/http cache"}},l=[{value:"http1.x\u7684\u7f3a\u9677",id:"http1x\u7684\u7f3a\u9677",children:[]},{value:"http2.0",id:"http20",children:[]},{value:"http3.0",id:"http30",children:[]}],i={toc:l};function u({components:t,...e}){return Object(a.b)("wrapper",Object(n.a)({},i,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"http1x\u7684\u7f3a\u9677"},"http1.x\u7684\u7f3a\u9677"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e32\u884c\u8bf7\u6c42\u3001\u961f\u5934\u963b\u585e\u5f15\u53d1\u7684\u9ad8\u5ef6\u8fdf"),Object(a.b)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\u7279\u6027\u5e26\u6765\u7684\u5de8\u5927http\u5934\u90e8"),Object(a.b)("li",{parentName:"ul"},"\u660e\u6587\u4f20\u8f93\u5f15\u8d77\u7684\u4e0d\u5b89\u5168\u6027")),Object(a.b)("h3",{id:"http20"},"http2.0"),Object(a.b)("h4",{id:"\u6539\u8fdb"},"\u6539\u8fdb"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u5206\u5e27\u3001header\u538b\u7f29\u51cf\u5c11\u4f20\u8f93\u5185\u5bb9"),Object(a.b)("li",{parentName:"ul"},"\u591a\u8def\u590d\u7528\u5f15\u5165\u5e76\u884c\u901a\u4fe1"),Object(a.b)("li",{parentName:"ul"},"Servce Push \u670d\u52a1\u7aef\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u6d88\u606f\uff0c\u51cf\u5c11\u5ba2\u6237\u7aef\u4e0d\u5fc5\u8981\u7684\u8bf7\u6c42"),Object(a.b)("li",{parentName:"ul"},"\u5b9e\u9645\u4e0a\u7684http2.0\u6807\u51c6\u5f3a\u5236\u4f7f\u7528https\u534f\u8bae\uff0c\u4fdd\u8bc1\u5b89\u5168\u6027")),Object(a.b)("h4",{id:"\u7f3a\u9677"},"\u7f3a\u9677"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"TCP\u4ee5\u53caTCP + TLS\u5efa\u7acb\u65f6\u7684\u5ef6\u65f6"),Object(a.b)("li",{parentName:"ul"},"TCP\u961f\u5934\u963b\u585e")),Object(a.b)("h3",{id:"http30"},"http3.0"),Object(a.b)("h4",{id:"\u6539\u8fdb-1"},"\u6539\u8fdb"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528UDP\u66ff\u6362TCP\uff0c\u6d88\u9664\u5efa\u7acb\u8fde\u63a5\u8017\u65f6\uff0c\u5f7b\u5e95\u89e3\u51b3TCP\u961f\u5934\u963b\u585e\u7684\u95ee\u9898\uff0c\u5b9e\u73b0\u4f20\u8f93\u5c42\u7684\u591a\u8def\u590d\u7528")))}u.isMDXComponent=!0}}]);