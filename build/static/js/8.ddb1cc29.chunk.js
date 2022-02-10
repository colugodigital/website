/*! For license information please see 8.ddb1cc29.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[8],{39:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===i)for(var c in a)t.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},40:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return c})),t.d(n,"e",(function(){return u})),t.d(n,"d",(function(){return d})),t.d(n,"a",(function(){return m}));var a,r=t(7),i=t.n(r);function l(e,n){return void 0===e&&(e=""),void 0===n&&(n=a),n?e.split(" ").map((function(e){return n[e]||e})).join(" "):e}function c(e,n){var t={};return Object.keys(e).forEach((function(a){-1===n.indexOf(a)&&(t[a]=e[a])})),t}var s={};function u(e){s[e]||("undefined"!==typeof console&&console.error(e),s[e]=!0)}var o="object"===typeof window&&window.Element||function(){};i.a.oneOfType([i.a.string,i.a.func,function(e,n,t){if(!(e[n]instanceof o))return new Error("Invalid prop `"+n+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]);var d=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function m(e){var n=typeof e;return null!=e&&("object"===n||"function"===n)}},42:function(e,n,t){"use strict";var a=t(1),r=t(6),i=t(0),l=t.n(i),c=t(7),s=t.n(c),u=t(39),o=t.n(u),d=t(40),m={tag:d.d,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},p=function(e){var n=e.className,t=e.cssModule,i=e.fluid,c=e.tag,s=Object(r.a)(e,["className","cssModule","fluid","tag"]),u="container";!0===i?u="container-fluid":i&&(u="container-"+i);var m=Object(d.b)(o()(n,u),t);return l.a.createElement(c,Object(a.a)({},s,{className:m}))};p.propTypes=m,p.defaultProps={tag:"div"},n.a=p},71:function(e,n,t){"use strict";function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}t.r(n);var i=t(8),l=t(9),c=t(16),s=t(11),u=t(10),o=t(0),d=t.n(o),m=t(12),p=t(5),f=t(42),b=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var l;return Object(i.a)(this,t),(l=n.call(this,e)).activateParentDropdown=function(e){var n=e.parentElement;if(n){n.classList.add("active");var t=n.parentElement;if(t.classList.add("active"),t){var a=t.parentElement;if(a.classList.add("active"),a){var r=a.parentElement;if(r.classList.add("active"),r)r.parentElement.classList.add("active")}}}},l.openBlock=function(e){l.setState({navLinks:l.state.navLinks.map((function(n){return n.id===e?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n,{isOpenSubMenu:!n.isOpenSubMenu}):n}))})},l.openNestedBlock=function(e,n){var t=l.state.navLinks;t.map((function(t){return t.id===e&&t.child.map((function(e){return e.id===n?e.isOpenNestedSubMenu=!e.isOpenNestedSubMenu:e.isOpenNestedSubMenu=!1}))})),l.setState({navLinks:t})},l.state={isOpen:!1,navLinks:[{id:1,title:"About",link:"./about"},{id:2,title:"Services",link:"./community"},{id:3,title:"Contact",link:"./products"}]},l.toggleLine=l.toggleLine.bind(Object(c.a)(l)),l.openBlock.bind(Object(c.a)(l)),l.openNestedBlock.bind(Object(c.a)(l)),l}return Object(l.a)(t,[{key:"toggleLine",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"componentDidMount",value:function(){for(var e=null,n=document.getElementById("top-menu").getElementsByTagName("a"),t=0;t<n.length;++t)if(this.props.location.pathname===n[t].pathname){e=n[t];break}e&&this.activateParentDropdown(e)}},{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement("header",{id:"topnav",className:"defaultscroll sticky"},d.a.createElement(f.a,null,d.a.createElement("div",{className:"menu-extras"},d.a.createElement("div",{className:"menu-item"},d.a.createElement(m.b,{to:"#",onClick:this.toggleLine,className:this.state.isOpen?"navbar-toggle open":"navbar-toggle"},d.a.createElement("div",{className:"lines"},d.a.createElement("span",null),d.a.createElement("span",null),d.a.createElement("span",null))))),d.a.createElement("div",{id:"navigation",style:{display:this.state.isOpen?"block":"none"}},d.a.createElement("ul",{className:"navigation-menu",id:"top-menu"},this.state.navLinks.map((function(n,t){return n.child||n.child2?d.a.createElement("li",{className:"has-submenu",key:t},d.a.createElement("a",{href:n.link,onClick:function(t){t.preventDefault(),e.openBlock(n.id)}},n.title),d.a.createElement("span",{className:"menu-arrow"}),n.isMegaMenu?d.a.createElement("ul",{className:n.isOpenSubMenu?"submenu megamenu open":"submenu megamenu"},d.a.createElement("li",null,d.a.createElement("ul",null,n.child.map((function(e,n){return d.a.createElement("li",{key:n},d.a.createElement("a",{href:e.link},e.title,e.isNew?d.a.createElement("span",{className:"badge badge-danger rounded ml-2"},"v2.0"):null))})))),d.a.createElement("li",null,d.a.createElement("ul",null,n.child2.map((function(e,n){return d.a.createElement("li",{key:n},d.a.createElement("a",{href:e.link},e.title,e.isOnePage?d.a.createElement("span",{className:"badge badge-warning rounded ml-2"},"Onepage"):null))}))))):d.a.createElement("ul",{className:n.isOpenSubMenu?"submenu open":"submenu"},n.child.map((function(t,a){return t.nestedChild?d.a.createElement("li",{className:"has-submenu",key:a},d.a.createElement("a",{href:t.link,onClick:function(a){a.preventDefault(),e.openNestedBlock(n.id,t.id)}}," ",t.title," ",t.isAdded?d.a.createElement("span",{className:"badge badge-primary rounded"},"Added"):null),d.a.createElement("span",{className:"submenu-arrow"}),d.a.createElement("ul",{className:t.isOpenNestedSubMenu?"submenu open":"submenu"},t.nestedChild.map((function(e,n){return d.a.createElement("li",{key:n},d.a.createElement(m.b,{to:e.link},e.title," ",e.isAdded?d.a.createElement("span",{className:"badge badge-primary rounded"},"Added"):null))})))):d.a.createElement("li",{key:a},d.a.createElement("a",{href:t.link},t.title))})))):d.a.createElement("li",{key:t},d.a.createElement("a",{href:n.link},n.title))}))),d.a.createElement("div",{className:"buy-menu-btn d-none"},d.a.createElement(m.b,{to:"#",target:"_blank",className:"btn btn-primary"},"Buy Now"))))))}}]),t}(o.Component);n.default=Object(p.f)(b)}}]);
//# sourceMappingURL=8.ddb1cc29.chunk.js.map