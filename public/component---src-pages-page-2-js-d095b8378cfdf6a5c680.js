(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(148),o=a(157),l=a(151);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(149);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(155),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},152:function(e){e.exports={data:{site:{siteMetadata:{title:"The Queen's Speech",description:"Take your English to the next level with private lessons, or let us help your business with our translations",author:"Danilo Miranda"}}}}},156:function(e){e.exports={data:{site:{siteMetadata:{title:"The Queen's Speech"}}}}},157:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(148),c=(a(153),function(){return i.a.createElement("div",{className:"menu-wrapper"},i.a.createElement("div",{className:"hero-container"},i.a.createElement("div",{className:"slogan-container"},i.a.createElement("h1",null,"The go to option for schooling and translation services"),i.a.createElement("h2",null,"We got you covered with English classes or translation services."),i.a.createElement("a",{href:"#services"},"See our services")),i.a.createElement("img",{className:"company-logo",src:"icons/main_logo.png"})),i.a.createElement("div",{className:"scroll-wrapper"},i.a.createElement("img",{className:"scroll-arrow",src:"icons/navigation_arrow.png"})))}),u=function(e){e.siteTitle;return i.a.createElement("div",{className:"hero-header header-img"},i.a.createElement("header",{className:"nav-menu-container"},i.a.createElement("ul",{className:"nav-menu"},i.a.createElement("li",null,"Contact us"),i.a.createElement("li",null,i.a.createElement(s.a,{to:"#about-us"},"About")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/blog"},"Blog")))),i.a.createElement(c,null))};u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var m=u,d=(a(154),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto"}},i.a.createElement("main",null,t)))},data:n})});d.propTypes={children:l.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-page-2-js-d095b8378cfdf6a5c680.js.map