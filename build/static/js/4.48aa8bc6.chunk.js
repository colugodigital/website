/*! For license information please see 4.48aa8bc6.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[4],{39:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===s)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},40:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return d}));var n,r=a(7),s=a.n(r);function i(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function o(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}var l={};function c(e){l[e]||("undefined"!==typeof console&&console.error(e),l[e]=!0)}var m="object"===typeof window&&window.Element||function(){};s.a.oneOfType([s.a.string,s.a.func,function(e,t,a){if(!(e[t]instanceof m))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")},s.a.shape({current:s.a.any})]);var u=s.a.oneOfType([s.a.func,s.a.string,s.a.shape({$$typeof:s.a.symbol,render:s.a.func}),s.a.arrayOf(s.a.oneOfType([s.a.func,s.a.string,s.a.shape({$$typeof:s.a.symbol,render:s.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function d(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},42:function(e,t,a){"use strict";var n=a(1),r=a(6),s=a(0),i=a.n(s),o=a(7),l=a.n(o),c=a(39),m=a.n(c),u=a(40),d={tag:u.d,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.fluid,o=e.tag,l=Object(r.a)(e,["className","cssModule","fluid","tag"]),c="container";!0===s?c="container-fluid":s&&(c="container-"+s);var d=Object(u.b)(m()(t,c),a);return i.a.createElement(o,Object(n.a)({},l,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},43:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},44:function(e,t,a){"use strict";var n=a(1),r=a(6),s=a(0),i=a.n(s),o=a(7),l=a.n(o),c=a(39),m=a.n(c),u=a(40),d=l.a.oneOfType([l.a.number,l.a.string]),f={tag:u.d,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,o=e.tag,l=e.form,c=e.widths,d=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];c.forEach((function(t,a){var n=e[t];if(delete d[t],n){var r=!a;f.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var p=Object(u.b)(m()(t,s?"no-gutters":null,l?"form-row":"row",f),a);return i.a.createElement(o,Object(n.a)({},d,{className:p}))};g.propTypes=f,g.defaultProps=p,t.a=g},45:function(e,t,a){"use strict";var n=a(1),r=a(6),s=a(0),i=a.n(s),o=a(7),l=a.n(o),c=a(39),m=a.n(c),u=a(40),d=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:d,offset:d})]),p={tag:u.d,xs:f,sm:f,md:f,lg:f,xl:f,className:l.a.string,cssModule:l.a.object,widths:l.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,s=e.widths,o=e.tag,l=Object(r.a)(e,["className","cssModule","widths","tag"]),c=[];s.forEach((function(t,n){var r=e[t];if(delete l[t],r||""===r){var s=!n;if(Object(u.a)(r)){var i,o=s?"-":"-"+t+"-",d=b(s,t,r.size);c.push(Object(u.b)(m()(((i={})[d]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i)),a))}else{var f=b(s,t,r);c.push(f)}}})),c.length||c.push("col");var d=Object(u.b)(m()(t,c),a);return i.a.createElement(o,Object(n.a)({},l,{className:d}))};h.propTypes=p,h.defaultProps=g,t.a=h},48:function(e,t,a){e.exports=a.p+"static/media/twitteralt.671881e3.svg"},49:function(e,t,a){e.exports=a.p+"static/media/github.21d620ef.svg"},50:function(e,t,a){e.exports=a.p+"static/media/reddit.a016b6cb.svg"},51:function(e,t,a){e.exports=a.p+"static/media/medium.20471776.svg"},52:function(e,t,a){e.exports=a.p+"static/media/rocketchat.279e7dad.svg"},53:function(e,t,a){e.exports=a.p+"static/media/rocket-chat.ec8b32b7.svg"},70:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(9),s=a(11),i=a(10),o=a(0),l=a.n(o),c=a(42),m=a(44),u=a(45),d=a(1),f=a(6),p=a(43),g=a(4),b=a(7),h=a.n(b),v=a(39),E=a.n(v),N=a(40),y={children:h.a.node,inline:h.a.bool,tag:N.d,innerRef:h.a.oneOfType([h.a.object,h.a.func,h.a.string]),className:h.a.string,cssModule:h.a.object},k=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(p.a)(a)),a.submit=a.submit.bind(Object(p.a)(a)),a}Object(g.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.inline,r=e.tag,s=e.innerRef,i=Object(f.a)(e,["className","cssModule","inline","tag","innerRef"]),o=Object(N.b)(E()(t,!!n&&"form-inline"),a);return l.a.createElement(r,Object(d.a)({},i,{ref:s,className:o}))},t}(o.Component);k.propTypes=y,k.defaultProps={tag:"form"};var x=k,w=h.a.oneOfType([h.a.number,h.a.string]),j=h.a.oneOfType([h.a.string,h.a.number,h.a.shape({size:w,order:w,offset:w})]),O={children:h.a.node,hidden:h.a.bool,check:h.a.bool,size:h.a.string,for:h.a.string,tag:N.d,className:h.a.string,cssModule:h.a.object,xs:j,sm:j,md:j,lg:j,xl:j,widths:h.a.array},z={tag:"label",widths:["xs","sm","md","lg","xl"]},M=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},T=function(e){var t=e.className,a=e.cssModule,n=e.hidden,r=e.widths,s=e.tag,i=e.check,o=e.size,c=e.for,m=Object(f.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),u=[];r.forEach((function(t,n){var r=e[t];if(delete m[t],r||""===r){var s,i=!n;if(Object(N.a)(r)){var o,l=i?"-":"-"+t+"-";s=M(i,t,r.size),u.push(Object(N.b)(E()(((o={})[s]=r.size||""===r.size,o["order"+l+r.order]=r.order||0===r.order,o["offset"+l+r.offset]=r.offset||0===r.offset,o))),a)}else s=M(i,t,r),u.push(s)}}));var p=Object(N.b)(E()(t,!!n&&"sr-only",!!i&&"form-check-label",!!o&&"col-form-label-"+o,u,!!u.length&&"col-form-label"),a);return l.a.createElement(s,Object(d.a)({htmlFor:c},m,{className:p}))};T.propTypes=O,T.defaultProps=z;var R=T,L={children:h.a.node,type:h.a.string,size:h.a.string,bsSize:h.a.string,valid:h.a.bool,invalid:h.a.bool,tag:N.d,innerRef:h.a.oneOfType([h.a.object,h.a.func,h.a.string]),plaintext:h.a.bool,addon:h.a.bool,className:h.a.string,cssModule:h.a.object},P=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(p.a)(a)),a.focus=a.focus.bind(Object(p.a)(a)),a}Object(g.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.type,r=e.bsSize,s=e.valid,i=e.invalid,o=e.tag,c=e.addon,m=e.plaintext,u=e.innerRef,p=Object(f.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(n)>-1,b=new RegExp("\\D","g"),h=o||("select"===n||"textarea"===n?n:"input"),v="form-control";m?(v+="-plaintext",h=o||"input"):"file"===n?v+="-file":g&&(v=c?null:"form-check-input"),p.size&&b.test(p.size)&&(Object(N.e)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=p.size,delete p.size);var y=Object(N.b)(E()(t,i&&"is-invalid",s&&"is-valid",!!r&&"form-control-"+r,v),a);return("input"===h||o&&"function"===typeof o)&&(p.type=n),p.children&&!m&&"select"!==n&&"string"===typeof h&&"select"!==h&&(Object(N.e)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete p.children),l.a.createElement(h,Object(d.a)({},p,{ref:u,className:y}))},t}(l.a.Component);P.propTypes=L,P.defaultProps={type:"text"};var I=P,S=a(12),C=a(48),F=a.n(C),_=a(49),A=a.n(_),$=a(50),G=a.n($),D=a(51),J=a.n(D),U=a(52),V=a.n(U),q=(a(53),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={grid1:[{title:"About us",link:"/page-aboutus"},{title:"Services",link:"/page-services"},{title:"Team",link:"/page-team"},{title:"Pricing",link:"/page-pricing"},{title:"Project",link:"/page-work"},{title:"Careers",link:"/page-jobs"},{title:"Blog",link:"/page-blog"},{title:"Login",link:"/page-cover-login"}],grid2:[{title:"Terms of Services",link:"/page-terms"},{title:"Privacy Policy",link:"/page-privacy"},{title:"Documentation",link:"/documentation"},{title:"Changelog",link:"/changelog"},{title:"Components",link:"/components"}]},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section pt-0"},l.a.createElement(c.a,null,l.a.createElement(m.a,{className:"mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center footerSimple"},l.a.createElement(u.a,{xs:"12",className:"text-center"},l.a.createElement("div",{className:"bg-overlay bg-overlay-gradient2 bg-footer"}),l.a.createElement("div",{className:"productstitle"},l.a.createElement("h2",{className:"title mb-4"},"Follow Us")),l.a.createElement("div",{className:"section-title"},l.a.createElement("div",{className:"mt-2"},l.a.createElement("ul",{className:"list-unstyled mb-0 mt-4"},l.a.createElement("a",{href:"https://github.com/FraktalNetwork",target:"_blank"},"  ",l.a.createElement("img",{src:A.a,className:"footerIcon"})),l.a.createElement("a",{href:"https://twitter.com/FraktalNetwork",target:"_blank"},"  ",l.a.createElement("img",{src:F.a,className:"footerIcon footerIconMiddle"})),l.a.createElement("a",{href:"https://www.reddit.com/r/FraktalNetwork/",target:"_blank"},"  ",l.a.createElement("img",{src:G.a,className:"footerIcon footerIconMiddle"})),l.a.createElement("a",{href:"https://medium.com/@fraktal",target:"_blank"},"  ",l.a.createElement("img",{src:J.a,className:"footerIcon footerIconMiddle"})),l.a.createElement("a",{href:"https://community.fraktal.network",target:"_blank"},"  ",l.a.createElement("img",{src:V.a,className:"footerIcon footerIconMiddle"})))),l.a.createElement("br",null),l.a.createElement("p",{className:"text-muted para-desc mx-auto"},"Copyright 2020 Fraktal Network. All Rights Reserved."))))),l.a.createElement("footer",{className:this.props.isLight?"footer bg-light":"footer"},l.a.createElement(c.a,null,l.a.createElement(m.a,null,l.a.createElement(u.a,{lg:"4",xs:"12",className:"mb-0 mb-md-4 pb-0 pb-md-2",name:"footercolumn"},l.a.createElement(S.b,{className:this.props.isLight?"logo-footer text-dark":"logo-footer",to:"#"},"Landrick",l.a.createElement("span",{className:"text-primary"},".")),l.a.createElement("p",{className:this.props.isLight?"mt-4 text-muted":"mt-4"},"Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect."),l.a.createElement("ul",{className:"list-unstyled social-icon social mb-0 mt-4"},l.a.createElement("li",{className:"list-inline-item mr-1"},l.a.createElement(S.b,{to:"",className:"rounded"},l.a.createElement("i",{className:"mdi mdi-facebook",title:"Facebook"}))),l.a.createElement("li",{className:"list-inline-item mr-1"},l.a.createElement(S.b,{to:"",className:"rounded"},l.a.createElement("i",{className:"mdi mdi-instagram",title:"Instagram"}))),l.a.createElement("li",{className:"list-inline-item mr-1"},l.a.createElement(S.b,{to:"",className:"rounded"},l.a.createElement("i",{className:"mdi mdi-twitter",title:"Twitter"}))))),l.a.createElement(u.a,{lg:"2",md:"4",xs:"12",className:"mt-4 mt-sm-0 pt-2 pt-sm-0",name:"footercolumn"},l.a.createElement("h4",{className:this.props.isLight?"text-dark footer-head":"text-light footer-head"},"Company"),l.a.createElement("ul",{className:"list-unstyled footer-list mt-4"},this.state.grid1.map((function(t,a){return l.a.createElement("li",{key:a},l.a.createElement(S.b,{to:t.link,className:e.props.isLight?"text-muted":"text-foot"},l.a.createElement("i",{className:"mdi mdi-chevron-right mr-1"})," ",t.title))})))),l.a.createElement(u.a,{lg:"3",md:"4",xs:"12",className:"mt-4 mt-sm-0 pt-2 pt-sm-0",name:"footercolumn"},l.a.createElement("h4",{className:this.props.isLight?"text-dark footer-head":"text-light footer-head"},"Usefull Links"),l.a.createElement("ul",{className:"list-unstyled footer-list mt-4"},this.state.grid2.map((function(t,a){return l.a.createElement("li",{key:a},l.a.createElement(S.b,{to:t.link,className:e.props.isLight?"text-muted":"text-foot"},l.a.createElement("i",{className:"mdi mdi-chevron-right mr-1"})," ",t.title))})))),l.a.createElement(u.a,{lg:"3",md:"4",xs:"12",className:"mt-4 mt-sm-0 pt-2 pt-sm-0",name:"footercolumn"},l.a.createElement("h4",{className:this.props.isLight?"text-dark footer-head":"text-light footer-head"},"Newsletter"),l.a.createElement("p",{className:"mt-4"},"Sign up and receive the latest tips via email."),l.a.createElement(x,null,l.a.createElement(m.a,null,l.a.createElement(u.a,{lg:"12"},l.a.createElement("div",{className:this.props.isLight?"foot-subscribe foot-white form-group position-relative":"foot-subscribe form-group position-relative"},l.a.createElement(R,{className:this.props.isLight?"text-muted":""},"Write your email ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("i",{className:"mdi mdi-email ml-3 icons"}),l.a.createElement(I,{type:"email",name:"email",id:"emailsubscribe",className:this.props.isLight?"form-control bg-light border pl-5 rounded":"form-control pl-5 rounded",placeholder:"Your email : ",required:!0}))),l.a.createElement(u.a,{lg:"12"},l.a.createElement(I,{type:"submit",id:"submitsubscribe",name:"send",className:"btn btn-primary rounded w-100",value:"Subscribe"}))))))))))}}]),a}(o.Component));t.default=q}}]);
//# sourceMappingURL=4.48aa8bc6.chunk.js.map