webpackJsonp([1],{"9M+g":function(t,e){},CMyp:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex",attrs:{id:"app"}},[e("b-container",{attrs:{fluid:""}},[e("router-view"),this._v(" "),e("footer",{staticClass:"m-2 mt-5 text-center text-muted footer"},[this._v("\n      © 2020, All rights reversed, made with ❤ by Maoundis\n    ")])],1)],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("CMyp")},null,null).exports,o=a("YaEn"),r=a("Tqaz");a("Jmt5"),a("9M+g");s.default.config.productionTip=!1,s.default.use(r.a),s.default.use(r.b),new s.default({el:"#app",router:o.a,components:{App:n},template:"<App/>"})},Oac0:function(t,e){var a=window.localStorage.getItem("password_pin");t.exports={password_pin:a||""}},YaEn:function(t,e,a){"use strict";(function(t){var s=a("7+uW"),i=a("/ocq"),n=a("lO7g"),o=a("wcl4");s.default.use(i.a),e.a=new i.a({mode:"history",base:t,routes:[{path:"/",name:"Home",component:n.a},{path:"/list_file",name:"ListFile",component:o.a}]})}).call(e,"/")},lO7g:function(t,e,a){"use strict";var s=a("g32h"),i=a("Oac0"),n={name:"Home",data:function(){return{passwordmu:"",show_paswd:!1}},methods:{save_password:function(){this.passwordmu.length<8?window.location.reload():(window.localStorage.setItem("password_pin",Object(s.md5)(this.passwordmu.trim())),window.location="/list_file")}},computed:{icon_state:function(){return Object(s.md5)(this.passwordmu)===i.password_pin&&(window.sessionStorage.setItem("islogin",1),window.location="/list_file"),Object(s.md5)(this.passwordmu)===i.password_pin?"unlock":"lock"},ic_pass:function(){return this.show_paswd?"eye-fill":"eye-slash-fill"},so_pass:function(){return this.show_paswd?"text":"password"},cek_password:function(){return Object(s.md5)(this.passwordmu)===i.password_pin},islogin:function(){return""!==i.password_pin}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"my-5 justify-content-center"},[a("b-col",{attrs:{md:"6"}},[a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"light"}},[t.islogin?a("div",[a("b-icon",{staticClass:"mb-4",attrs:{icon:t.icon_state,"font-scale":"5"}}),t._v(" "),a("b-input-group",[a("b-form-input",{attrs:{type:t.so_pass,placeholder:"Enter Your Password",state:t.cek_password,autocomplete:"off"},model:{value:t.passwordmu,callback:function(e){t.passwordmu=e},expression:"passwordmu"}}),t._v(" "),a("b-input-group-append",[a("b-button",{attrs:{variant:"outline-dark"},on:{click:function(e){t.show_paswd=!t.show_paswd}}},[a("b-icon",{attrs:{icon:t.ic_pass}})],1)],1)],1)],1):a("div",[a("p",{staticClass:"text-muted"},[t._v("kamu belum login, silahkan masukkan password baru yang terdiri dari 8 karakter")]),t._v(" "),a("b-input-group",{staticClass:"mb-3"},[a("b-form-input",{attrs:{type:t.so_pass,placeholder:"Enter New Password",autocomplete:"off"},model:{value:t.passwordmu,callback:function(e){t.passwordmu=e},expression:"passwordmu"}}),t._v(" "),a("b-input-group-append",[a("b-button",{attrs:{variant:"outline-dark"},on:{click:function(e){t.show_paswd=!t.show_paswd}}},[a("b-icon",{attrs:{icon:t.ic_pass}})],1)],1)],1),t._v(" "),a("b-button",{attrs:{variant:"dark"},on:{click:t.save_password}},[t._v("save password")])],1)])],1)],1)},staticRenderFns:[]},r=a("VU/8")(n,o,!1,null,null,null);e.a=r.exports},wcl4:function(t,e,a){"use strict";var s=a("mvHQ"),i=a.n(s),n=a("//Fk"),o=a.n(n),r=a("BO1k"),l=a.n(r),c=a("Scsl"),d=a.n(c),u=a("Oac0");function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=[];if(null!==window.localStorage.getItem("list_file")){var a=!0,s=!1,n=void 0;try{for(var o,r=l()(JSON.parse(window.localStorage.getItem("list_file")));!(a=(o=r.next()).done);a=!0){var c=o.value;if(c.includes(t))try{e.push(JSON.parse(atob(window.localStorage.getItem(c).replace("____"+u.password_pin,""))))}catch(t){window.localStorage.removeItem(c),window.localStorage.setItem("list_file",i()(JSON.parse(window.localStorage.getItem("list_file")).slice(c)))}}}catch(t){s=!0,n=t}finally{try{!a&&r.return&&r.return()}finally{if(s)throw n}}}return e}1!==parseInt(window.sessionStorage.getItem("islogin"))&&"/list_file"===window.location.pathname&&(window.location="/");var f={name:"ListFile",data:function(){return{filter:"",deskripsi:"tidak ada deskripsi",dfiles:p(this.filter||"")}},methods:{tambah_file:function(){document.querySelector("input[type=file].d-none").click()},save_filex:function(t){var e,a,s=this;(e=t.target.files[0],a=this.deskripsi,new o.a(function(t){var s=new FileReader;s.onload=function(s){var n=null===(n=e.name.match(new RegExp("(?<=.)(w+)")))?"":n[0],o=JSON.parse(window.localStorage.getItem("list_file")||"[]");o.includes(e.name)||o.push(e.name),window.localStorage.setItem("list_file",i()(o)),window.localStorage.setItem(e.name,btoa(i()({nam:e.name,uku:d()(e.size),ext:n,con:s.target.result,mod:(new Date).toDateString(),des:a}))+"____"+u.password_pin),t(!0)},s.readAsDataURL(e)})).then(function(t){s.dfiles=p(s.filter)})},hapus_file:function(t){window.localStorage.removeItem(t),window.localStorage.setItem("list_file",i()(JSON.parse(window.localStorage.getItem("list_file")).slice(t))),this.dfiles=p(this.filter)},leaveya:function(){window.sessionStorage.removeItem("islogin"),window.location="/"}},watch:{filter:function(t){this.dfiles=p(t)}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"my-5 justify-content-enter"},[a("b-col",{staticClass:"align-self-center",attrs:{md:"10"}},[a("b-input-group",{staticClass:"mb-3"},[a("b-input-group-prepend",[a("b-input-group-text",[a("b-icon-search")],1)],1),t._v(" "),a("b-form-input",{attrs:{type:"text",placeholder:"search .."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t._v(" "),a("b-card",{staticClass:"mb-5"},[t.dfiles.length?a("div",{staticClass:"mb-5"},[t._l(t.dfiles,function(e,s){return a("b-list-group",{key:e.nam,staticClass:"mb-2"},[a("b-list-group-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"des"+s,expression:"'des'+index"}],staticClass:"d-flex justify-content-between align-items-center",attrs:{button:""}},[t._v("\n            "+t._s(e.nam)+"\n            \n            "),a("div",{staticClass:"float-right"},[a("b-link",{staticClass:"text-danger",on:{click:function(a){return t.hapus_file(e.nam)}}},[a("b-icon",{attrs:{icon:"trash-fill"}})],1),t._v(" "),a("b-link",{attrs:{href:e.con,download:e.nam}},[a("b-icon",{attrs:{icon:"file-arrow-down-fill"}})],1)],1)]),t._v(" "),a("b-collapse",{staticClass:"mt-2",attrs:{id:"des"+s}},[a("b-card",[a("div",{staticClass:"d-flex align-items-center"},[t._v("\n                size"),a("b-badge",{staticClass:"ml-2 float-right",attrs:{variant:"dark"}},[t._v(t._s(e.uku))])],1),t._v(" "),a("div",{staticClass:"d-flex align-items-center"},[t._v("\n                description"),a("b-badge",{staticClass:"ml-2 float-right",attrs:{variant:"dark"}},[t._v(t._s(e.des))])],1),t._v(" "),a("div",{staticClass:"d-flex align-items-center"},[t._v("\n                added on"),a("b-badge",{staticClass:"ml-2 float-right",attrs:{variant:"dark"}},[t._v(t._s(e.mod))])],1)])],1)],1)}),t._v(" "),a("small",{staticClass:"float-right mt-1 text-muted"},[t._v("total: "+t._s(t.dfiles.length))])],2):a("div",[a("small",{staticClass:"text-muted"},[t._v("empty files")])]),t._v(" "),a("input",{staticClass:"d-none",attrs:{type:"file"},on:{change:t.save_filex}}),t._v(" "),a("b-input-group",{staticClass:"mt-1"},[a("b-form-input",{attrs:{type:"text",placeholder:"deskripsi .."},model:{value:t.deskripsi,callback:function(e){t.deskripsi=e},expression:"deskripsi"}}),t._v(" "),a("b-input-group-append",[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"dark",title:"add file"},on:{click:t.tambah_file}},[a("b-icon",{attrs:{icon:"plus"}})],1)],1)],1)],1),t._v(" "),a("b-button",{attrs:{variant:"danger"},on:{click:t.leaveya}},[t._v("leave")])],1)],1)},staticRenderFns:[]},w=a("VU/8")(f,m,!1,null,null,null);e.a=w.exports}},["NHnr"]);
//# sourceMappingURL=app.480e92fdfd1b62091b6b.js.map