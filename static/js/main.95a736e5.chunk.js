(this.webpackJsonprestchallengeproject=this.webpackJsonprestchallengeproject||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(18),a(8)),i=a(9),s=a(11),m=a(10),u=a(12),p=(a(19),a(4)),d=a(3),E=(a(23),a(2)),f=r.a.createElement(E.a,{style:{height:"1.3rem",width:"1.3rem",marginRight:"1rem"},icon:"moon"}),v=function(){return r.a.createElement("nav",{className:"Navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement("h1",null,"Where in the World"),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},f,r.a.createElement("p",null,"Dark Mode")))))},h=(a(26),function(){return r.a.createElement("section",{id:"app-cover"},r.a.createElement("div",{id:"select-box"},r.a.createElement("input",{type:"checkbox",id:"options-view-button"}),r.a.createElement("div",{id:"select-button",className:"brd"},r.a.createElement("div",{id:"selected-value"},r.a.createElement("span",null,"Filter by Region")),r.a.createElement("div",{id:"chevrons"},r.a.createElement(E.a,{className:"icon",icon:"chevron-down"}))),r.a.createElement("div",{id:"options"},r.a.createElement("div",{className:"option"},r.a.createElement("input",{className:"s-c top",type:"radio",name:"platform",value:"Africa"}),r.a.createElement("input",{className:"s-c bottom",type:"radio",name:"platform",value:"Africa"}),r.a.createElement("span",{className:"label"},"Africa"),r.a.createElement("span",{className:"opt-val"},"Africa")),r.a.createElement("div",{className:"option"},r.a.createElement("input",{className:"s-c top",type:"radio",name:"platform",value:"America"}),r.a.createElement("input",{className:"s-c bottom",type:"radio",name:"platform",value:"America"}),r.a.createElement("span",{className:"label"},"America"),r.a.createElement("span",{className:"opt-val"},"America")),r.a.createElement("div",{className:"option"},r.a.createElement("input",{className:"s-c top",type:"radio",name:"platform",value:"Asia"}),r.a.createElement("input",{className:"s-c bottom",type:"radio",name:"platform",value:"Asia"}),r.a.createElement("span",{className:"label"},"Asia"),r.a.createElement("span",{className:"opt-val"},"Asia")),r.a.createElement("div",{className:"option"},r.a.createElement("input",{className:"s-c top",type:"radio",name:"platform",value:"Europe"}),r.a.createElement("input",{className:"s-c bottom",type:"radio",name:"platform",value:"Europe"}),r.a.createElement("span",{className:"label"},"Europe"),r.a.createElement("span",{className:"opt-val"},"Europe")),r.a.createElement("div",{className:"option"},r.a.createElement("input",{className:"s-c top",type:"radio",name:"platform",value:"Oceania"}),r.a.createElement("input",{className:"s-c bottom",type:"radio",name:"platform",value:"Oceania"}),r.a.createElement("span",{className:"label"},"Oceania"),r.a.createElement("span",{className:"opt-val"},"Oceania")),r.a.createElement("div",{id:"option-bg"}))))}),y=(a(27),function(e){var t=e.textChange;return r.a.createElement("div",{className:"input-body",style:{background:"#fff"}},r.a.createElement(E.a,{style:{marginRight:"1rem"},icon:"search"}),r.a.createElement("input",{className:"search-input",type:"text",name:"name",placeholder:"Search for Country...",onChange:t}))}),g=(a(28),a(29),function(e){var t=e.country,a=e.onCountrySelection,n=t.name,c=t.population,o=t.region,l=t.capital,i=t.flag;return r.a.createElement("div",{className:"Card",style:{width:"235px",background:"#fff"},onClick:function(e){return a(t)}},r.a.createElement("img",{alt:"country Image",style:{width:"100%"},src:i}),r.a.createElement("div",{style:{padding:"2rem"}},r.a.createElement("h2",{style:{marginBottom:"1rem"}},n),r.a.createElement("p",null,"Population:".concat(c)),r.a.createElement("p",null,"Region:".concat(o)),r.a.createElement("p",null,"Capital:".concat(l))))}),N=function(e){var t=e.FilteredCountries,a=e.onCountrySelection;return r.a.createElement("div",{className:"container card-display"},t.map((function(e){return r.a.createElement(g,{key:e.numericCode,country:e,onCountrySelection:a})})))};p.b.add(d.d,d.e,d.a,d.c,d.b);var b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState({searchText:e.target.value})},a.onCountrySelection=function(e){a.setState({selectedCountry:e})},a.FilteredCountries=function(){return a.state.CountriesData.filter((function(e){return e.name.toLowerCase().includes(a.state.searchText.toLowerCase())}))},a.state={selectedCountry:{},searchText:"",CountriesData:[],isError:!1,filteredSelection:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then((function(t){if(200===t.status)return t.json();throw e.setState({isError:!0}),new Error("countries data not recieved...")})).then((function(t){console.log(t),e.setState({CountriesData:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{style:{hieght:"100vh",background:"#fafafa"}},r.a.createElement(v,null),r.a.createElement("div",{className:"container",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:"3rem",paddingBottom:"3rem"}},r.a.createElement(y,{textChange:this.onChange}),r.a.createElement(h,null)),r.a.createElement(N,{FilteredCountries:this.FilteredCountries(),onCountrySelection:this.onCountrySelection}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.95a736e5.chunk.js.map