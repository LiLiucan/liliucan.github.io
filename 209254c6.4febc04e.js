(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(r),s=n,d=b["".concat(c,".").concat(s)]||b[s]||f[s]||o;return r?a.a.createElement(d,u(u({ref:t},l),{},{components:r})):a.a.createElement(d,u({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},139:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/redux-flow-240fb42e5b06ef7b31d1073579e971ca.webp"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(112)),c={slug:"Redux",title:"\u5bf9Redux\u7684\u4e00\u70b9\u7406\u89e3",author:"LiLiucan",author_title:"Web Developer",author_url:"https://github.com/liliucan",author_image_url:"https://avatars2.githubusercontent.com/u/7759699?s=60&v=4",tags:["\u524d\u7aef"]},u={permalink:"/blog/Redux",source:"@site/blog/2020-03-05-redux.md",description:"Redux\u662f\u4e00\u79cd\u67b6\u6784\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u4e00\u4e2a\u89c4\u8303\u6216\u8005\u7ea6\u5b9a\u3002\u5176\u6838\u5fc3\u5c31\u662f\u5355\u5411\u6570\u636e\u6d41\u3002",date:"2020-03-05T00:00:00.000Z",tags:[{label:"\u524d\u7aef",permalink:"/blog/tags/\u524d\u7aef"}],title:"\u5bf9Redux\u7684\u4e00\u70b9\u7406\u89e3",readingTime:.09,truncated:!1,prevItem:{title:"\u6d4f\u89c8\u5668\u7f13\u5b58\u7b56\u7565",permalink:"/blog/http cache"},nextItem:{title:"http\u534f\u8bae\u6f14\u8fdb",permalink:"/blog/http revolutions"}},i=[],l={toc:i};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"redux\u662f\u4e00\u79cd\u67b6\u6784\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u4e00\u4e2a\u89c4\u8303\u6216\u8005\u7ea6\u5b9a\u3002\u5176\u6838\u5fc3\u5c31\u662f\u5355\u5411\u6570\u636e\u6d41\u3002"},"Redux\u662f\u4e00\u79cd\u67b6\u6784\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u662f\u4e00\u4e2a\u89c4\u8303\u6216\u8005\u7ea6\u5b9a\u3002\u5176\u6838\u5fc3\u5c31\u662f\u5355\u5411\u6570\u636e\u6d41\u3002"),Object(o.b)("h4",{id:"redux\u4e3b\u8981\u89e3\u51b3\u4e24\u4e2a\u95ee\u9898\uff1a"},"Redux\u4e3b\u8981\u89e3\u51b3\u4e24\u4e2a\u95ee\u9898\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",Object(n.a)({parentName:"li"},{id:"\u96c6\u4e2d\u5f0f\u72b6\u6001\u7ba1\u7406"}),"\u96c6\u4e2d\u5f0f\u72b6\u6001\u7ba1\u7406"),"Redux\u67b6\u6784\u7684\u4e09\u4e2a\u4e3b\u8981\u90e8\u5206\uff1aStore\u3001Reducer\u3001Action\u3002")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Docusaurus with Keytar",src:r(139).default})),Object(o.b)("p",null,"\u96c6\u4e2d\u5f0f\u72b6\u6001\u7ba1\u7406\u7684\u597d\u5904\uff1a\u5c06\u590d\u6742\u7684\u5e94\u7528\u72b6\u6001\u64cd\u4f5c\u5c01\u88c5\u8d77\u6765\uff0c\u66b4\u9732\u63a5\u53e3\u4f9b\u5916\u90e8\u8c03\u7528\uff0c\u53ef\u4ee5\u505a\u5230\u72b6\u6001\u7ba1\u7406\u903b\u8f91\u4e0e\u5176\u4ed6\u4e1a\u52a1\u903b\u8f91\u7684\u89e3\u8026\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",Object(n.a)({parentName:"li"},{id:"\u7ec4\u4ef6\u95f4\u901a\u4fe1\uff08\u8de8\u5c42\u7ea7\u3001\u540c\u5c42\u7ea7\uff09"}),"\u7ec4\u4ef6\u95f4\u901a\u4fe1\uff08\u8de8\u5c42\u7ea7\u3001\u540c\u5c42\u7ea7\uff09"))),Object(o.b)("p",null,"\u4ee5React\u4e3a\u4f8b\uff0c\u7ec4\u4ef6\u95f4\u901a\u4fe1\u90e8\u5206\u5b9e\u9645\u4e0a\u662f\u901a\u8fc7\u5bf9React Context Api\u7684\u4e00\u5c42\u5c01\u88c5"))}p.isMDXComponent=!0}}]);