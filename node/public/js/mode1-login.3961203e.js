(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mode1-login"],{"0efc":function(t,e,s){},"1f58":function(t,e,s){},"34e9":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sms flex"},[s("Navbar",{attrs:{title:t.title}},[s("span",{staticClass:"arrow-back iconfont icon-ios-arrow-back",attrs:{slot:"left"},on:{click:function(e){return t.$router.back()}},slot:"left"})]),s("ul",{staticClass:"sms-card flex"},[t._m(0),t._m(1),s("li",{staticClass:"sms-button",class:{"button-bg1":1==t.skin,"button-bg2":2==t.skin,"button-bg3":3==t.skin}},[t._v("登录")])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"iconfont icon-shouji"}),s("input",{attrs:{type:"text",placeholder:"请输入手机号码"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"iconfont icon-dui1"}),s("input",{attrs:{type:"text",placeholder:"请输入验证码"}}),s("span",{staticClass:"code iconfont icon-rocket"})])}],i={data:function(){return{title:"验证码登录",skin:""}},mounted:function(){this.skin=this.$store.state.mode1.Login_skin,console.log(this.skin)}},o=i,r=(s("72fc"),s("2877")),c=Object(r["a"])(o,n,a,!1,null,"4d39cac8",null);e["default"]=c.exports},3846:function(t,e,s){s("9e1e")&&"g"!=/./g.flags&&s("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:s("0bfb")})},"3a2b":function(t,e,s){t.exports=s.p+"img/bg_1.f5784c2d.jpg"},"416e":function(t,e,s){"use strict";var n=s("c04a"),a=s.n(n);a.a},"5c7c":function(t,e,s){t.exports=s.p+"img/bg_3.1803f357.jpg"},"6b54":function(t,e,s){"use strict";s("3846");var n=s("cb7c"),a=s("0bfb"),i=s("9e1e"),o="toString",r=/./[o],c=function(t){s("2aba")(RegExp.prototype,o,t,!0)};s("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?c(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?a.call(t):void 0)}):r.name!=o&&c(function(){return r.call(this)})},"6be3":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-bg flex",class:t.bgUp?"login-bg-up":"login-bg-middle",style:{backgroundColor:1==t.skin?"#000":""}},[n("div",{staticClass:"login-logo"},[t._v("公司LOGO")]),1==t.skin?n("img",{attrs:{src:s("3a2b")}}):t._e(),2==t.skin?n("img",{attrs:{src:s("e716")}}):t._e(),3==t.skin?n("img",{attrs:{src:s("5c7c")}}):t._e(),n("div",{staticClass:"login-card flex",class:{"card-color1":1==t.skin,"card-color2":2==t.skin,"card-color3":3==t.skin}},[n("ul",[n("li",{staticClass:"card-li flex",class:{error:t.errors.has("checkPhone")}},[n("span",{staticClass:"login-icon login-icon-phone"}),n("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[1][3,4,5,7,8][0-9]{9}$/},expression:"{ required: true, regex: /^[1][3,4,5,7,8][0-9]{9}$/ }"},{name:"model",rawName:"v-model",value:t.userPhone,expression:"userPhone"}],attrs:{oninput:"if(value.length>11)value=value.slice(0,11)",name:"checkPhone",placeholder:"请输入手机号码",type:"text"},domProps:{value:t.userPhone},on:{input:function(e){e.target.composing||(t.userPhone=e.target.value)}}})]),n("li",{staticClass:"card-li flex",class:{error:t.errors.has("checkPassword")}},[n("span",{staticClass:"login-icon login-icon-password"}),n("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[\w_-]{6,16}$/},expression:"{ required: true, regex: /^[\\w_-]{6,16}$/}"},{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],attrs:{minlength:"6",maxlength:"16",name:"checkPassword",placeholder:"请输入密码",type:"password"},domProps:{value:t.userPwd},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.userPwd=e.target.value)}}})])]),n("ul",{staticClass:"login-button flex"},[n("li",{staticClass:"button-register",class:{"button-color1":1==t.skin,"button-color2":2==t.skin,"button-color3":3==t.skin},on:{click:function(e){return t.$router.push("/login/register")}}},[t._v("注册")]),n("li",{staticClass:"button-login",class:{"button-color1":1==t.skin,"button-color2":2==t.skin,"button-color3":3==t.skin},on:{click:t.login}},[t._v("登录")]),n("li",{staticClass:"button-more",class:{"button-color1":1==t.skin,"button-color2":2==t.skin,"button-color3":3==t.skin},on:{click:function(e){t.show=!0}}},[t._v("更多")])])])]),n("div",{staticClass:"change_skin"},[n("span",{on:{click:t.changeSkin}},[t._v("--换皮肤--")]),n("span",{on:{click:t.changeBg}},[t._v("排版--")])]),n("van-popup",{staticClass:"login-popup",attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("p",{on:{click:function(e){return t.$router.push("/login/password")}}},[t._v("找回密码")]),n("p",{on:{click:function(e){return t.$router.push("/login/sms")}}},[t._v("验证码登录")])])],1)},a=[],i=(s("a481"),s("6b54"),s("f499")),o=s.n(i),r={data:function(){return{userPhone:"",userPwd:"",skin:3,bgUp:!0,show:!1}},mounted:function(){var t=JSON.parse(localStorage.getItem("Login_skin")),e=JSON.parse(localStorage.getItem("Login_bgUp"));JSON.parse(localStorage.getItem("Login_data"));this.bgUp=e.bgUp,this.skin=t,this.$validator.validate()},computed:{},methods:{changeSkin:function(){this.skin++,this.skin>3&&(this.skin=1),localStorage.setItem("Login_skin",o()(this.skin))},changeBg:function(){this.bgUp=!this.bgUp,localStorage.setItem("Login_bgUp",o()({bgUp:this.bgUp}))},login:function(){var t=this;this.errors.any()?this.$dialog.alert({message:"登录失败，请确认密码或账号是否正确！"}):(this.$toast.loading({duration:0,mask:!0,message:"登陆中..."}),this.axios.post("/users/login",{userPhone:this.userPhone,userPwd:this.userPwd.toString()}).then(function(e){t.$toast.clear();var s=e.data;0==s.status?(localStorage.setItem("Login_data",o()({userPhone:t.userPhone,userPwd:t.userPwd})),t.$router.replace("/personal")):t.$toast(s.msg)}).catch(function(e){t.$toast.clear(),t.$toast("登录异常失败，请检查网络是否中断..")}))}}},c=r,l=(s("8689"),s("2877")),u=Object(l["a"])(c,n,a,!1,null,"70f472d6",null);e["default"]=u.exports},"72fc":function(t,e,s){"use strict";var n=s("0efc"),a=s.n(n);a.a},8689:function(t,e,s){"use strict";var n=s("1f58"),a=s.n(n);a.a},"9bb1":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register flex"},[s("Navbar",{attrs:{title:t.title}},[s("span",{staticClass:"arrow-back iconfont icon-ios-arrow-back",attrs:{slot:"left"},on:{click:function(e){return t.$router.back()}},slot:"left"})]),s("ul",{staticClass:"register-card flex"},[s("li",{class:{error:t.errors.has("checkPhone")}},[s("span",{staticClass:"iconfont icon-shouji"}),s("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[1][3,4,5,7,8][0-9]{9}$/},expression:"{ required: true, regex: /^[1][3,4,5,7,8][0-9]{9}$/ }"},{name:"model",rawName:"v-model",value:t.userPhone,expression:"userPhone"}],attrs:{oninput:"if(value.length>11)value=value.slice(0,11)",name:"checkPhone",placeholder:"请输入手机号码",type:"text"},domProps:{value:t.userPhone},on:{input:function(e){e.target.composing||(t.userPhone=e.target.value)}}})]),s("li",[s("span",{staticClass:"iconfont icon-dui1"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userCode,expression:"userCode"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.userCode},on:{input:function(e){e.target.composing||(t.userCode=e.target.value)}}}),s("span",{staticClass:"code iconfont icon-rocket"})]),s("li",{class:{error:t.errors.has("checkPassword")}},[s("span",{staticClass:"iconfont icon-mima3"}),s("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[\w_-]{6,16}$/},expression:"{ required: true, regex: /^[\\w_-]{6,16}$/}"},{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],attrs:{minlength:"6",maxlength:"16",name:"checkPassword",placeholder:"请输入密码",type:"password"},domProps:{value:t.userPwd},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.userPwd=e.target.value)}}})]),s("li",{class:{error:t.errors.has("checkPasswordAgain")||t.userPwd!==t.userPwdAgain}},[s("span",{staticClass:"iconfont icon-mima1"}),s("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[\w_-]{6,16}$/},expression:"{ required: true, regex: /^[\\w_-]{6,16}$/}"},{name:"model",rawName:"v-model",value:t.userPwdAgain,expression:"userPwdAgain"}],attrs:{minlength:"6",maxlength:"16",name:"checkPasswordAgain",placeholder:"请输入密码",type:"password"},domProps:{value:t.userPwdAgain},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.userPwdAgain=e.target.value)}}})]),s("li",{staticClass:"register-button",class:{"button-bg1":1==t.skin,"button-bg2":2==t.skin,"button-bg3":3==t.skin},on:{click:t.register,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register(e)}}},[t._v("立即注册")])])],1)},a=[],i={data:function(){return{title:"注册",skin:"",userPhone:"",userCode:"",userPwd:"",userPwdAgain:""}},mounted:function(){this.skin=this.$store.state.mode1.Login_skin,this.$validator.validate(),console.log(this.skin)},methods:{register:function(){var t=this;this.errors.any()||this.userPwd!==this.userPwdAgain?this.$dialog.alert({message:"请确认所填信息是否全部正确"}):(this.$toast.loading({duration:0,mask:!0}),this.axios.post("api/users/register",{userPhone:this.userPhone,userPwd:this.userPwd}).then(function(e){var s=e.data;t.$toast.clear(),0==s.status?t.$dialog.alert({message:"亲！恭喜您注册成功。"}):t.$toast(s.msg)}).catch(function(e){t.$toast.clear(),t.$toast("服务器繁忙，请稍后再试.....")}))}}},o=i,r=(s("416e"),s("2877")),c=Object(r["a"])(o,n,a,!1,null,"73a46de2",null);e["default"]=c.exports},a21f:function(t,e,s){var n=s("584a"),a=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},ae6c:function(t,e,s){"use strict";var n=s("b494"),a=s.n(n);a.a},b494:function(t,e,s){},c04a:function(t,e,s){},e05c:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"password flex"},[s("Navbar",{attrs:{title:t.title}},[s("span",{staticClass:"arrow-back iconfont icon-ios-arrow-back",attrs:{slot:"left"},on:{click:function(e){return t.$router.back()}},slot:"left"})]),s("ul",{staticClass:"password-card flex"},[t._m(0),t._m(1),t._m(2),t._m(3),s("li",{staticClass:"password-button",class:{"button-bg1":1==t.skin,"button-bg2":2==t.skin,"button-bg3":3==t.skin}},[t._v("确认")])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"iconfont icon-shouji"}),s("input",{attrs:{type:"text",placeholder:"请输入手机号码"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"iconfont icon-dui1"}),s("input",{attrs:{type:"text",placeholder:"请输入验证码"}}),s("span",{staticClass:"code iconfont icon-rocket"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"iconfont icon-mima3"}),s("input",{attrs:{type:"text",placeholder:"请输入6-16位新密码"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"iconfont icon-mima1"}),s("input",{attrs:{type:"text",placeholder:"请确认密码"}})])}],i={data:function(){return{title:"找回密码",skin:""}},mounted:function(){this.skin=this.$store.state.mode1.Login_skin}},o=i,r=(s("ae6c"),s("2877")),c=Object(r["a"])(o,n,a,!1,null,"557a90f6",null);e["default"]=c.exports},e716:function(t,e,s){t.exports=s.p+"img/bg_2.931815ac.png"},f499:function(t,e,s){t.exports=s("a21f")}}]);
//# sourceMappingURL=mode1-login.3961203e.js.map