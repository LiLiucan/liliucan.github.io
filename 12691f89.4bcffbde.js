(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(n),f=r,s=b["".concat(o,".").concat(f)]||b[f]||O[f]||c;return n?a.a.createElement(s,l(l({ref:t},u),{},{components:n})):a.a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(123)),o={slug:"IOC",title:"\u63a7\u5236\u53cd\u8f6c",author:"LiLiucan",author_title:"Web Developer",author_url:"https://github.com/liliucan",author_image_url:"https://avatars2.githubusercontent.com/u/7759699?s=60&v=4",tags:["\u57fa\u7840\u6982\u5ff5"]},l={permalink:"/blog/IOC",source:"@site/blog/2020-03-08-IOC.md",description:"\u5bf9\u4e8e\u63a7\u5236\u53cd\u8f6c\u7684\u7406\u89e3\uff0c\u4e3b\u8981\u5728\u4e8e\u201c\u53cd\u8f6c\u201d\u3002",date:"2020-03-08T00:00:00.000Z",tags:[{label:"\u57fa\u7840\u6982\u5ff5",permalink:"/blog/tags/\u57fa\u7840\u6982\u5ff5"}],title:"\u63a7\u5236\u53cd\u8f6c",readingTime:.23,truncated:!1,prevItem:{title:"\u524d\u7aef\u5e38\u7528\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/blog/design pattern"},nextItem:{title:"\u5e93\u3001\u8fd0\u884c\u65f6\u548c\u5f00\u53d1\u6846\u67b6\u7684\u533a\u522b",permalink:"/blog/diffrence bettween library rutime and framework"}},i=[],u={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5bf9\u4e8e\u63a7\u5236\u53cd\u8f6c\u7684\u7406\u89e3\uff0c\u4e3b\u8981\u5728\u4e8e\u201c\u53cd\u8f6c\u201d\u3002\n\u53cd\u8f6c\u7684\u662f\u4ec0\u4e48\uff1f\u662f\u4f9d\u8d56\u3002\u4e5f\u5c31\u662f\u7ba1\u7406\u4f9d\u8d56\u7684\u65b9\u5f0f\u4e0d\u540c\u3002\n\u4e00\u822c\u7ba1\u7406\u4f9d\u8d56\u53ef\u4ee5\u901a\u8fc7\u624b\u52a8\u7684\u65b9\u5f0f\u3002\n\u63a7\u5236\u88ab\u53cd\u8f6c\u4e4b\u540e\uff0c\u83b7\u5f97\u4f9d\u8d56\u5bf9\u8c61\u7684\u8fc7\u7a0b\u7531\u81ea\u8eab\u7ba1\u7406\u53d8\u4e3a\u4e86\u7531IOC\u5bb9\u5668\u4e3b\u52a8\u6ce8\u5165\u3002\n\u7ecf\u5178\u6848\u4f8b\u5c31\u662fSpring\u3002"),Object(c.b)("p",null,"\u5176\u5b9eReact\u4e5f\u7528\u5230\u4e86IOC\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4e0d\u4f7f\u7528IOC\u5927\u6982\u5e94\u8be5\u8fd9\u4e48\u5199\uff1a")),Object(c.b)("p",null,"// \ud83d\udd34 React \u5e76\u4e0d\u77e5\u9053 Layout \u548c Article \u7684\u5b58\u5728\u3002"),Object(c.b)("p",null,"// \u56e0\u4e3a\u4f60\u5728\u8c03\u7528\u5b83\u4eec\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"ReactDOM.render(\n  Layout({ children: Article() }),\n  domContainer\n)\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528IOC\uff0c\u4e5f\u5c31\u662fReact\u6700\u7ec8\u9009\u62e9\u7684\u65b9\u5f0f\uff1a")),Object(c.b)("p",null,"// \u2705 React\u77e5\u9053 Layout \u548c Article \u7684\u5b58\u5728\u3002"),Object(c.b)("p",null,"// React \u6765\u8c03\u7528\u5b83\u4eec\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"ReactDOM.render(\n  <Layout><Article /></Layout>,\n  domContainer\n)\n")))}p.isMDXComponent=!0}}]);