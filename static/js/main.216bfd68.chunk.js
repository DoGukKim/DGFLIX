(this.webpackJsonpdgflix=this.webpackJsonpdgflix||[]).push([[0],{43:function(e,n,t){e.exports=t(69)},69:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(36),o=t.n(i),l=t(11),u=t(12),c=t(14),s=t(13),p=t(2),m=t(3),g=t(18),d=t(4);function f(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n  font-size: ",";\n  font-weight: 600;\n  color: ",";\n"]);return f=function(){return e},e}function v(){var e=Object(p.a)(["\n  &:not(:last-child) {\n    margin: 0 10px 0 0;\n  }\n  width: 100px;\n  height: 60px;\n  border-bottom: 2px solid ",";\n  transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n"]);return v=function(){return e},e}function b(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n"]);return b=function(){return e},e}function h(){var e=Object(p.a)(["\n  font-size: 30px;\n  font-weight: 600;\n  color: red;\n  letter-spacing: 0.028em;\n"]);return h=function(){return e},e}function y(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 20px;\n"]);return y=function(){return e},e}function E(){var e=Object(p.a)(["\n  width: 100%;\n"]);return E=function(){return e},e}var x=m.b.header(E()),_=m.b.nav(y()),j=m.b.h1(h()),O=m.b.ul(b()),k=m.b.li(v(),(function(e){return e.current?"red":"transparent"})),w=Object(m.b)(g.b)(f(),(function(e){return e.logo?"30px":"16px"}),(function(e){return e.logo?"red":"#fff"})),R=Object(d.g)((function(e){var n=e.location.pathname;return(r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,r.a.createElement(_,null,r.a.createElement(j,null,r.a.createElement(w,{to:"/","aria-label":"Logo",logo:!0},"DGFLIX")),r.a.createElement(O,null,r.a.createElement(k,{current:"/"===n},r.a.createElement(w,{to:"/"},"Movies")),r.a.createElement(k,{current:"/tv"===n},r.a.createElement(w,{to:"/tv"},"TV")),r.a.createElement(k,{current:"/search"===n},r.a.createElement(w,{to:"/search"},"Search")))))))})),T=t(9),S=t.n(T),z=t(16),M=t(1),U=t.n(M),F=t(15);function I(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 30px;\n  margin: 0px 0 0 0;\n  font-size: 14px;\n"]);return I=function(){return e},e}function C(){var e=Object(p.a)(["\n  margin: 0 0 16px 0;\n  font-size: 18px;\n  font-weight: 600;\n"]);return C=function(){return e},e}function q(){var e=Object(p.a)(["\n  padding: 16px 20px;\n"]);return q=function(){return e},e}var P=m.b.section(q()),D=m.b.h3(C()),K=m.b.div(I()),L=function(e){var n=e.title,t=e.children;return(r.a.createElement(P,null,r.a.createElement(D,null,n),r.a.createElement(K,null,t)))};L.PropsTypes={title:U.a.string.isRequired,chlidren:U.a.oneOfType([U.a.arrayOf(U.a.node),U.a.node])};var G=L;function X(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  font-size: 26px;\n"]);return X=function(){return e},e}var N=m.b.div(X()),V=function(){return r.a.createElement(N,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\ud83d\udd51"))};function A(){var e=Object(p.a)(["\n  color: red;\n"]);return A=function(){return e},e}function B(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n"]);return B=function(){return e},e}var J=m.b.div(B()),H=m.b.span(A()),Q=function(e){var n=e.text;return(r.a.createElement(J,null,r.a.createElement(H,null,n)))};Q.PropsTypes={text:U.a.string.isRequired};var W=Q;function Y(){var e=Object(p.a)(["\n  font-size: 12px;\n  color: rgba(225, 225, 225, 0.6);\n"]);return Y=function(){return e},e}function Z(){var e=Object(p.a)([""]);return Z=function(){return e},e}function $(){var e=Object(p.a)(["\n  margin: 6px 0 0;\n"]);return $=function(){return e},e}function ee(){var e=Object(p.a)(["\n  background: url(",")\n    no-repeat center;\n  background-size: cover;\n  border-radius: 0.375em;\n  height: 180px;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    opacity: 0.5;\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(p.a)([""]);return ne=function(){return e},e}var te=m.b.div(ne()),ae=m.b.figure(ee(),(function(e){return"http://image.tmdb.org/t/p/w300".concat(e.bgUrl)})),re=m.b.p($()),ie=m.b.p(Z()),oe=m.b.p(Y()),le=function(e){var n=e.id,t=e.imageUrl,a=e.title,i=e.rating,o=e.year,l=e.isMovie,u=void 0!==l&&l;return(r.a.createElement(g.b,{to:u?"/movie/".concat(n):"/show/".concat(n)},r.a.createElement(te,null,r.a.createElement(ae,{bgUrl:t}),r.a.createElement(re,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50"),i,"/10"),r.a.createElement(ie,null,a.length>15?"".concat(a.substring(0,20),"..."):a),r.a.createElement(oe,null,o))))};le.propsTypes={id:U.a.number.isRequired,imageUrl:U.a.string,title:U.a.string.isRequired,rating:U.a.number,year:U.a.string,isMovie:U.a.bool};var ue=le;function ce(){var e=Object(p.a)(["\n  color: #fff;\n"]);return ce=function(){return e},e}var se=m.b.main(ce()),pe=function(e){var n=e.nowPlaying,t=e.popular,a=e.upcoming,i=e.error,o=e.loading;return(r.a.createElement(r.a.Fragment,null,r.a.createElement(F.b,null,r.a.createElement("title",null,"Movies | DGFLIX")),o?r.a.createElement(V,null):r.a.createElement(se,null,n&&n.length>0&&r.a.createElement(G,{title:"Now Playing"},n.map((function(e){return r.a.createElement(ue,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),a&&a.length>0&&r.a.createElement(G,{title:"Upcoming Movies"},a.map((function(e){return r.a.createElement(ue,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),t&&t.length>0&&r.a.createElement(G,{title:"Popular"},t.map((function(e){return r.a.createElement(ue,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),i&&r.a.createElement(W,{text:i}))))};pe.prototype={nowPlaying:U.a.array,popular:U.a.array,upcoming:U.a.array,error:U.a.string,loading:U.a.bool.isRequired};var me=pe,ge=t(42),de="9734c4d36568d0204a5a22191ecea9df",fe=t.n(ge).a.create({baseURL:"https://api.themoviedb.org/3/"}),ve=function(){return fe.get("movie/now_playing",{params:{api_key:de,language:"ko-KR"}})},be=function(){return fe.get("movie/upcoming",{params:{api_key:de,language:"ko-KR"}})},he=function(){return fe.get("movie/popular",{params:{api_key:de,language:"ko-KR"}})},ye=function(e){return fe.get("movie/".concat(e),{params:{append_to_response:"videos",api_key:de,language:"ko-KR"}})},Ee=function(e){return fe.get("search/movie",{params:{query:encodeURIComponent(e),api_key:de,language:"ko-KR"}})},xe=function(){return fe.get("tv/top_rated",{params:{api_key:de,language:"ko-KR"}})},_e=function(){return fe.get("/tv/popular",{params:{api_key:de,language:"ko-KR"}})},je=function(){return fe.get("tv/airing_today",{params:{api_key:de,language:"ko-KR"}})},Oe=function(e){return fe.get("tv/".concat(e),{params:{append_to_response:"videos",api_key:de,language:"ko-KR"}})},ke=function(e){return fe.get("search/tv",{params:{query:encodeURIComponent(e),api_key:de,language:"ko-KR"}})},we=function(e){Object(c.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(z.a)(S.a.mark((function e(){var n,t,a,r,i,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve();case 3:return n=e.sent,t=n.data.results,e.next=7,be();case 7:return a=e.sent,r=a.data.results,e.next=11,he();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:t,upcoming:r,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can`t find movies information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.nowPlaying,t=e.upcoming,a=e.popular,i=e.error,o=e.loading;return(r.a.createElement(me,{nowPlaying:n,upcoming:t,popular:a,error:i,loading:o}))}}]),t}(r.a.Component);function Re(){var e=Object(p.a)(["\n  color: #fff;\n"]);return Re=function(){return e},e}var Te=m.b.main(Re()),Se=function(e){var n=e.topRated,t=e.popular,a=e.airingToday,i=e.error,o=e.loading;return(r.a.createElement(r.a.Fragment,null,r.a.createElement(F.b,null,r.a.createElement("title",null,"TV Show | DGFLIX")),o?r.a.createElement(V,null):r.a.createElement(Te,null,n&&n.length>0&&r.a.createElement(G,{title:"Top Rated Shows"},n.map((function(e){return r.a.createElement(ue,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),t&&t.length>0&&r.a.createElement(G,{title:"Popular Shows"},t.map((function(e){return r.a.createElement(ue,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(G,{title:"Airing Today"},a.map((function(e){return r.a.createElement(ue,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),i&&r.a.createElement(W,{text:i})),";"))};Se.prototype={topRated:U.a.array,popular:U.a.array,airingToday:U.a.array,error:U.a.string,loading:U.a.bool.isRequired};var ze=Se,Me=function(e){Object(c.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(z.a)(S.a.mark((function e(){var n,t,a,r,i,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe();case 3:return n=e.sent,t=n.data.results,e.next=7,_e();case 7:return a=e.sent,r=a.data.results,e.next=11,je();case 11:i=e.sent,o=i.data.results,this.setState({topRated:t,popular:r,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can`t find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.topRated,t=e.popular,a=e.airingToday,i=e.error,o=e.loading;return(r.a.createElement(ze,{topRated:n,popular:t,airingToday:a,error:i,loading:o}))}}]),t}(r.a.Component);function Ue(){var e=Object(p.a)(["\n  width: 100%;\n  all: unset;\n  font-size: 21px;\n"]);return Ue=function(){return e},e}function Fe(){var e=Object(p.a)(["\n  margin: 20px 0;\n  padding: 0px 20px;\n"]);return Fe=function(){return e},e}function Ie(){var e=Object(p.a)(["\n  color: #fff;\n"]);return Ie=function(){return e},e}var Ce=m.b.main(Ie()),qe=m.b.form(Fe()),Pe=m.b.input(Ue()),De=function(e){var n=e.movieResult,t=e.tvResult,a=e.loading,i=e.error,o=e.searchTerm,l=e.handleSubmit,u=e.updateTerm;return(r.a.createElement(Ce,null,r.a.createElement(F.b,null,r.a.createElement("title",null,"Search | DGFLIX")),r.a.createElement(qe,{onSubmit:l},r.a.createElement(Pe,{placeholder:"Search Movies or TV Shows...",value:o,onChange:u})),a?r.a.createElement(V,null):r.a.createElement(r.a.Fragment,null,n&&n.length>0&&r.a.createElement(G,{title:"Movie Results"},n.map((function(e){return r.a.createElement(ue,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),t&&t.length>0&&r.a.createElement(G,{title:"TV Shows Results"},t.map((function(e){return r.a.createElement(ue,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),i&&r.a.createElement(W,{text:i}),t&&n&&0===t.length&&0===n.length&&r.a.createElement(W,{text:"Nothing Found..!"}))))};De.prototype={movieResult:U.a.array,tvResult:U.a.array,loading:U.a.bool.isRequired,error:U.a.string,searchTerm:U.a.string,handleSubmit:U.a.func.isRequired,updateTerm:U.a.func.isRequired};var Ke=De,Le=function(e){Object(c.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},e.handleSubmit=function(n){n.preventDefault(),""!==e.state.searchTerm&&e.serachByTerm()},e.updateTerm=function(n){var t=n.target.value;e.setState({searchTerm:t})},e.serachByTerm=Object(z.a)(S.a.mark((function n(){var t,a,r,i,o;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.state.searchTerm,e.setState({loading:!0}),n.prev=2,n.next=5,Ee(t);case 5:return a=n.sent,r=a.data.results,n.next=9,ke(t);case 9:i=n.sent,o=i.data.results,e.setState({movieResults:r,tvResults:o}),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),e.setState({error:"Can`t find results"});case 17:return n.prev=17,e.setState({loading:!1}),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[2,14,17,20]])}))),e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,n=e.movieResults,t=e.tvResults,a=e.searchTerm,i=e.loading,o=e.error;return(r.a.createElement(Ke,{movieResult:n,tvResult:t,loading:i,error:o,searchTerm:a,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm}))}}]),t}(r.a.Component);function Ge(){var e=Object(p.a)(["\n  padding: 10px 0 0;\n  width: 80%;\n  font-size: 13px;\n  line-height: 2em;\n  opacity: 0.6;\n"]);return Ge=function(){return e},e}function Xe(){var e=Object(p.a)(["\n  margin: 0 14px;\n"]);return Xe=function(){return e},e}function Ne(){var e=Object(p.a)([""]);return Ne=function(){return e},e}function Ve(){var e=Object(p.a)(["\n  padding: 10px 0 0;\n  font-size: 14px;\n"]);return Ve=function(){return e},e}function Ae(){var e=Object(p.a)(["\n  font-size: 40px;\n  font-weight: 600;\n"]);return Ae=function(){return e},e}function Be(){var e=Object(p.a)(["\n  padding: 0 0 0 13px;\n  width: calc(100% - 460px);\n  height: calc(100% - 160px);\n  color: #fff;\n  z-index: 1;\n"]);return Be=function(){return e},e}function Je(){var e=Object(p.a)(["\n  width: 460px;\n  height: calc(100% - 160px);\n  background: url(",") no-repeat center;\n  background-size: cover;\n  border-radius: 0.375em;\n  z-index: 1;\n"]);return Je=function(){return e},e}function He(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  padding: 0 20px;\n  max-width: 1280px;\n  height: 100%;\n"]);return He=function(){return e},e}function Qe(){var e=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: url(",") no-repeat center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n"]);return Qe=function(){return e},e}function We(){var e=Object(p.a)(["\n  position: relative;\n  height: calc(100vh - 60px);\n"]);return We=function(){return e},e}function Ye(){var e=Object(p.a)([""]);return Ye=function(){return e},e}var Ze=m.b.main(Ye()),$e=m.b.section(We()),en=m.b.div(Qe(),(function(e){return e.bgImage})),nn=m.b.div(He()),tn=m.b.figure(Je(),(function(e){return e.bgImage})),an=m.b.div(Be()),rn=m.b.h3(Ae()),on=m.b.div(Ve()),ln=m.b.span(Ne()),un=m.b.span(Xe()),cn=m.b.p(Ge()),sn=function(e){var n=e.result;e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,null,r.a.createElement("title",null,"Loading | DGFLIX")),r.a.createElement(V,null)):r.a.createElement(Ze,null,r.a.createElement(F.a,null,r.a.createElement("title",null,n.original_title?n.original_title:n.original_name,""," | DGFLIX")),r.a.createElement($e,null,r.a.createElement(en,{bgImage:"http://image.tmdb.org/t/p/original".concat(n.backdrop_path)}),r.a.createElement(nn,null,r.a.createElement(tn,{bgImage:"http://image.tmdb.org/t/p/original".concat(n.poster_path)}),r.a.createElement(an,null,r.a.createElement(rn,null,n.original_title?n.original_title:n.original_name),r.a.createElement(on,null,r.a.createElement(ln,null,n.release_date?n.release_date.substring(0,4):n.first_air_date.substring(0,4)),r.a.createElement(un,null,"\u2022"),r.a.createElement(ln,null,n.runtime?n.runtime:n.episode_run_time[0]," ","min"),r.a.createElement(un,null,"\u2022"),r.a.createElement(ln,null,n.genres&&n.genres.map((function(e,t){return t===n.genres.length-1?e.name:"".concat(e.name," / ")})))),r.a.createElement(cn,null,n.overview)))))};sn.prototype={result:U.a.object,error:U.a.string,loading:U.a.bool.isRequired};var pn=sn,mn=function(e){Object(c.a)(t,e);var n=Object(s.a)(t);function t(e){var a;Object(l.a)(this,t),a=n.call(this,e);var r=e.location.pathname;return a.state={result:null,loading:!0,error:null,isMovie:r.includes("/movie/")},a}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(z.a)(S.a.mark((function e(){var n,t,a,r,i,o,l,u;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,t=n.match.params.id,a=n.history.push,r=this.state.isMovie,i=parseInt(t),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(o=null,e.prev=6,!r){e.next=14;break}return e.next=10,ye(i);case 10:l=e.sent,o=l.data,e.next=18;break;case 14:return e.next=16,Oe(i);case 16:u=e.sent,o=u.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can`t find anythng"});case 23:return e.prev=23,this.setState({loading:!1,result:o}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.result,t=e.loading,a=e.error;return(r.a.createElement(pn,{result:n,loading:t,error:a}))}}]),t}(r.a.Component),gn=function(){return r.a.createElement(g.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,component:we}),r.a.createElement(d.b,{path:"/tv",exact:!0,component:Me}),r.a.createElement(d.b,{path:"/search",exact:!0,component:Le}),r.a.createElement(d.b,{path:"/movie/:id",component:mn}),r.a.createElement(d.b,{path:"/show/:id",component:mn}),r.a.createElement(d.a,{from:"*",to:"/"}))))};function dn(){var e=Object(p.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  background-color: rgba(20, 20, 20 , 1);\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nol,\nul {\n  list-style: none;\n}\nimg {\n  border: none;\n  max-width: 100%;\n  vertical-align: middle;\n}\ntable {\n  border-collapse: collapse;\n  table-layout: fixed;\n  width: 100%;\n}\nfieldset {\n  border: none;\n}\nlegend,\ncaption {\n  display: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: normal;\n  font-size: 100%;\n}\nheader,\nsection,\nfooter,\narticle,\naside,\nfigure,\nvideo,\naudio,\nnav {\n  display: block;\n}\nstrong,\nem {\n  font-weight: normal;\n  font-style: normal;\n}\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"] {\n  cursor: pointer;\n}\n.cf:after,\n.cf:before {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n"]);return dn=function(){return e},e}var fn=Object(m.a)(dn()),vn=function(e){Object(c.a)(t,e);var n=Object(s.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(gn,null),r.a.createElement(fn,null))}}]),t}(a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(vn,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.216bfd68.chunk.js.map