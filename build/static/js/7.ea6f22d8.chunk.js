/*! For license information please see 7.ea6f22d8.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[7],{39:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===s)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},40:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return c})),t.d(a,"e",(function(){return i})),t.d(a,"d",(function(){return u})),t.d(a,"a",(function(){return f}));var n,r=t(7),s=t.n(r);function o(e,a){return void 0===e&&(e=""),void 0===a&&(a=n),a?e.split(" ").map((function(e){return a[e]||e})).join(" "):e}function c(e,a){var t={};return Object.keys(e).forEach((function(n){-1===a.indexOf(n)&&(t[n]=e[n])})),t}var l={};function i(e){l[e]||("undefined"!==typeof console&&console.error(e),l[e]=!0)}var m="object"===typeof window&&window.Element||function(){};s.a.oneOfType([s.a.string,s.a.func,function(e,a,t){if(!(e[a]instanceof m))return new Error("Invalid prop `"+a+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},s.a.shape({current:s.a.any})]);var u=s.a.oneOfType([s.a.func,s.a.string,s.a.shape({$$typeof:s.a.symbol,render:s.a.func}),s.a.arrayOf(s.a.oneOfType([s.a.func,s.a.string,s.a.shape({$$typeof:s.a.symbol,render:s.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function f(e){var a=typeof e;return null!=e&&("object"===a||"function"===a)}},42:function(e,a,t){"use strict";var n=t(1),r=t(6),s=t(0),o=t.n(s),c=t(7),l=t.n(c),i=t(39),m=t.n(i),u=t(40),f={tag:u.d,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},d=function(e){var a=e.className,t=e.cssModule,s=e.fluid,c=e.tag,l=Object(r.a)(e,["className","cssModule","fluid","tag"]),i="container";!0===s?i="container-fluid":s&&(i="container-"+s);var f=Object(u.b)(m()(a,i),t);return o.a.createElement(c,Object(n.a)({},l,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},44:function(e,a,t){"use strict";var n=t(1),r=t(6),s=t(0),o=t.n(s),c=t(7),l=t.n(c),i=t(39),m=t.n(i),u=t(40),f=l.a.oneOfType([l.a.number,l.a.string]),d={tag:u.d,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,c=e.tag,l=e.form,i=e.widths,f=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),d=[];i.forEach((function(a,t){var n=e[a];if(delete f[a],n){var r=!t;d.push(r?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var p=Object(u.b)(m()(a,s?"no-gutters":null,l?"form-row":"row",d),t);return o.a.createElement(c,Object(n.a)({},f,{className:p}))};b.propTypes=d,b.defaultProps=p,a.a=b},45:function(e,a,t){"use strict";var n=t(1),r=t(6),s=t(0),o=t.n(s),c=t(7),l=t.n(c),i=t(39),m=t.n(i),u=t(40),f=l.a.oneOfType([l.a.number,l.a.string]),d=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:f,offset:f})]),p={tag:u.d,xs:d,sm:d,md:d,lg:d,xl:d,className:l.a.string,cssModule:l.a.object,widths:l.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,s=e.widths,c=e.tag,l=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];s.forEach((function(a,n){var r=e[a];if(delete l[a],r||""===r){var s=!n;if(Object(u.a)(r)){var o,c=s?"-":"-"+a+"-",f=g(s,a,r.size);i.push(Object(u.b)(m()(((o={})[f]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o)),t))}else{var d=g(s,a,r);i.push(d)}}})),i.length||i.push("col");var f=Object(u.b)(m()(a,i),t);return o.a.createElement(c,Object(n.a)({},l,{className:f}))};v.propTypes=p,v.defaultProps=b,a.a=v},61:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t(9),s=t(11),o=t(10),c=t(0),l=t.n(c),i=t(12),m=t(42),u=t(44),f=t(45),d=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"footer footer-bar footer-light "+this.props.class},l.a.createElement(m.a,{className:"text-center"},l.a.createElement(u.a,{className:"align-items-center"},l.a.createElement(f.a,{sm:"6"},l.a.createElement("div",{className:"text-sm-left"},l.a.createElement("p",{className:"mb-0"},"\xa9 2019-20 Landrick. Develop by ",l.a.createElement(i.b,{to:"#",target:"_blank",className:"text-success"},"Themesbrand"),"."))),l.a.createElement(f.a,{sm:"6",className:"mt-4 mt-sm-0 pt-2 pt-sm-0"},l.a.createElement("ul",{className:"list-unstyled social-icon social text-sm-right mb-0"},l.a.createElement("li",{className:"list-inline-item mb-0"},l.a.createElement(i.b,{to:"#",className:"rounded mr-1"},l.a.createElement("i",{className:"mdi mdi-facebook",title:"Facebook"}))),l.a.createElement("li",{className:"list-inline-item mb-0"},l.a.createElement(i.b,{to:"#",className:"rounded mr-1"},l.a.createElement("i",{className:"mdi mdi-instagram",title:"Instagram"}))),l.a.createElement("li",{className:"list-inline-item mb-0"},l.a.createElement(i.b,{to:"#",className:"rounded mr-1"},l.a.createElement("i",{className:"mdi mdi-twitter",title:"Twitter"}))),l.a.createElement("li",{className:"list-inline-item mb-0"},l.a.createElement(i.b,{to:"#",className:"rounded mr-1"},l.a.createElement("i",{className:"mdi mdi-skype",title:"SKYPE"}))),l.a.createElement("li",{className:"list-inline-item mb-0"},l.a.createElement(i.b,{to:"#",className:"rounded mr-1"},l.a.createElement("i",{className:"mdi mdi-google-plus",title:"GOOGLE +"})))))))))}}]),t}(c.Component);a.default=d}}]);
//# sourceMappingURL=7.ea6f22d8.chunk.js.map