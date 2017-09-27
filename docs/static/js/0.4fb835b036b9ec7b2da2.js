webpackJsonp([0],{138:function(n,a,t){t(693);var o=t(10)(t(582),t(866),"data-v-0893fa1d",null);n.exports=o.exports},582:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"authentication-flow",computed:{isVisible:function(){return this.$store.state.auth.visible}},methods:{attemptAuth:function(){this.$store.commit("attemptAuth")}}}},634:function(n,a,t){a=n.exports=t(343)(),a.push([n.i,".hidden[data-v-0893fa1d],[v-cloak][data-v-0893fa1d]{display:none}.pull-left[data-v-0893fa1d]{float:left}.pull-right[data-v-0893fa1d]{float:right}.clearfix[data-v-0893fa1d]{clear:both;float:none}.fa-icon[data-v-0893fa1d]{width:auto;height:1em}.no-margin[data-v-0893fa1d]{margin:0!important}.no-padding[data-v-0893fa1d]{padding:0!important}.background-white[data-v-0893fa1d]{background-color:#fff!important}.main-container[data-v-0893fa1d]{border-radius:4px;position:relative}@media (max-width:800px){.main-container[data-v-0893fa1d]{border-radius:0}}.main-container.main-container-padded[data-v-0893fa1d]{padding:20px}.content-block[data-v-0893fa1d]{border-radius:4px;padding:20px;margin:20px 0 0}@media (max-width:800px){.content-block[data-v-0893fa1d]{border-radius:0}}.content-block.white-block[data-v-0893fa1d]{background-color:#fff}.pure-button[data-v-0893fa1d]{transition:all .3s ease;border-radius:4px;background-color:transparent;border:1px solid #29b474;color:#29b474;display:inline-block;font-family:inherit;font-size:100%;outline:0;padding:.5em 1em;text-align:center;text-decoration:none}.pure-button[data-v-0893fa1d]:hover{background-color:#29b474;color:#fff;cursor:pointer}.pure-button.full-width[data-v-0893fa1d]{display:block;margin-bottom:10px}.pure-button.pure-button-primary[data-v-0893fa1d]{background-color:#29b474;color:#fff}.pure-button.pure-button-primary[data-v-0893fa1d]:hover{background-color:#25a268}.pure-button.pure-button-white[data-v-0893fa1d]{background-color:transparent;border-color:#fff;color:#fff}.pure-button.pure-button-white[data-v-0893fa1d]:hover{background-color:rgba(0,0,0,.1)}.pure-button.pure-button-success[data-v-0893fa1d]{background-color:#29b474;color:#fff}.pure-button.pure-button-success[data-v-0893fa1d]:hover{background-color:#25a268}.pure-button.pure-button-continue[data-v-0893fa1d]{border-radius:25px;background-color:#29b474;border:none;color:#fff;line-height:50px;padding:0 30px}.pure-button.pure-button-continue[data-v-0893fa1d]:hover{background-color:#25a268}.pure-button.pure-button-youtube[data-v-0893fa1d]{border-radius:25px;background-color:#c4302b;border:none;color:#fff;line-height:50px;padding:0 30px}.pure-button.pure-button-youtube[data-v-0893fa1d]:hover{background-color:#b02b27}.pure-button.pure-button-soundcloud[data-v-0893fa1d]{border-radius:25px;background-color:#f70;border:none;color:#fff;line-height:50px;padding:0 30px}.pure-button.pure-button-soundcloud[data-v-0893fa1d]:hover{background-color:#e66b00}.pure-button.pure-button-twitter[data-v-0893fa1d]{border-radius:25px;background-color:#4099ff;border:none;color:#fff;line-height:50px;padding:0 30px}.pure-button.pure-button-twitter[data-v-0893fa1d]:hover{background-color:#2088ff}.pure-button.pure-button-subtle[data-v-0893fa1d]{background-color:transparent;border-color:#ccc;color:#666}.pure-button.pure-button-subtle[data-v-0893fa1d]:hover{background-color:#e1e1e1;color:#444}.pure-button.pure-button-text[data-v-0893fa1d]{border-color:transparent}.pure-button.pure-button-homework[data-v-0893fa1d]{background-color:transparent;border-color:#fd3c51;color:#fd3c51}.pure-button.pure-button-homework[data-v-0893fa1d]:hover{background-color:#fd3c51;color:#fff}.slide-up-enter-active[data-v-0893fa1d],.slide-up-leave-active[data-v-0893fa1d]{transition:all .3s ease}.slide-up-enter[data-v-0893fa1d],.slide-up-leave-to[data-v-0893fa1d]{-webkit-transform:translateY(40px);transform:translateY(40px);opacity:0}.auth-modal[data-v-0893fa1d]{transition:all .3s ease;display:block;max-width:320px;position:fixed;z-index:57;top:80px;left:50%;margin-left:-160px}.auth-modal .auth-modal--header[data-v-0893fa1d]{height:40px;line-height:40px;text-align:center}.auth-modal .auth-modal--header h1[data-v-0893fa1d]{margin:0;padding:0;color:#fff;font-size:1.2em}.auth-modal .auth-modal--container[data-v-0893fa1d]{border-radius:12px;background-color:#fff;padding:20px 30px;text-align:center}.auth-modal .auth-modal--container p[data-v-0893fa1d]{margin:0 0 20px}","",{version:3,sources:["/root/connectedacademy/src/components/authentication/AuthenticationFlow.vue"],names:[],mappings:"AAqDA,oDAEE,YAAc,CACf,AACD,4BACE,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,2BACE,WAAY,AACZ,UAAY,CACb,AACD,0BACE,WAAY,AACZ,UAAY,CACb,AACD,4BACE,kBAAqB,CACtB,AACD,6BACE,mBAAsB,CACvB,AACD,mCACE,+BAAkC,CACnC,AACD,iCACE,kBAAmB,AACnB,iBAAmB,CACpB,AACD,yBACA,iCACI,eAAiB,CACpB,CACA,AACD,uDACE,YAAc,CACf,AACD,gCACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,gCACI,eAAiB,CACpB,CACA,AACD,4CACE,qBAAuB,CACxB,AACD,8BACE,wBAA0B,AAC1B,kBAAmB,AACnB,6BAA8B,AAC9B,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,oBAAqB,AACrB,eAAgB,AAChB,UAAW,AACX,iBAAmB,AACnB,kBAAmB,AACnB,oBAAsB,CACvB,AACD,oCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,yCACE,cAAe,AACf,kBAAoB,CACrB,AACD,kDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,wDACE,wBAA0B,CAC3B,AACD,gDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,sDACE,+BAAkC,CACnC,AACD,kDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,wDACE,wBAA0B,CAC3B,AACD,mDACE,mBAAoB,AACpB,yBAA0B,AAC1B,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,yDACE,wBAA0B,CAC3B,AACD,kDACE,mBAAoB,AACpB,yBAA0B,AAC1B,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,wDACE,wBAA0B,CAC3B,AACD,qDACE,mBAAoB,AACpB,sBAAuB,AACvB,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,2DACE,wBAA0B,CAC3B,AACD,kDACE,mBAAoB,AACpB,yBAA0B,AAC1B,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,wDACE,wBAA0B,CAC3B,AACD,iDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,uDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,+CACE,wBAA0B,CAC3B,AACD,mDACE,6BAA8B,AAC9B,qBAAsB,AACtB,aAAe,CAChB,AACD,yDACE,yBAA0B,AAC1B,UAAY,CACb,AAID,gFACE,uBAA0B,CAC3B,AACD,qEAEE,mCAAoC,AACpC,2BAA4B,AAC5B,SAAW,CACZ,AACD,6BACE,wBAA0B,AAC1B,cAAe,AACf,gBAAiB,AACjB,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,SAAU,AACV,kBAAoB,CACrB,AACD,iDACE,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CACpB,AACD,oDACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,oDACE,mBAAoB,AACpB,sBAAuB,AACvB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,sDACE,eAAmB,CACpB",file:"AuthenticationFlow.vue",sourcesContent:["\n.hidden[data-v-0893fa1d],\n[v-cloak][data-v-0893fa1d] {\n  display: none;\n}\n.pull-left[data-v-0893fa1d] {\n  float: left;\n}\n.pull-right[data-v-0893fa1d] {\n  float: right;\n}\n.clearfix[data-v-0893fa1d] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-0893fa1d] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-0893fa1d] {\n  margin: 0 !important;\n}\n.no-padding[data-v-0893fa1d] {\n  padding: 0 !important;\n}\n.background-white[data-v-0893fa1d] {\n  background-color: #fff !important;\n}\n.main-container[data-v-0893fa1d] {\n  border-radius: 4px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-0893fa1d] {\n    border-radius: 0;\n}\n}\n.main-container.main-container-padded[data-v-0893fa1d] {\n  padding: 20px;\n}\n.content-block[data-v-0893fa1d] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 20px 0 0 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-0893fa1d] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-0893fa1d] {\n  background-color: #fff;\n}\n.hidden[data-v-0893fa1d],\n[v-cloak][data-v-0893fa1d] {\n  display: none;\n}\n.pull-left[data-v-0893fa1d] {\n  float: left;\n}\n.pull-right[data-v-0893fa1d] {\n  float: right;\n}\n.clearfix[data-v-0893fa1d] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-0893fa1d] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-0893fa1d] {\n  margin: 0 !important;\n}\n.no-padding[data-v-0893fa1d] {\n  padding: 0 !important;\n}\n.background-white[data-v-0893fa1d] {\n  background-color: #fff !important;\n}\n.main-container[data-v-0893fa1d] {\n  border-radius: 4px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-0893fa1d] {\n    border-radius: 0;\n}\n}\n.main-container.main-container-padded[data-v-0893fa1d] {\n  padding: 20px;\n}\n.content-block[data-v-0893fa1d] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 20px 0 0 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-0893fa1d] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-0893fa1d] {\n  background-color: #fff;\n}\n.pure-button[data-v-0893fa1d] {\n  transition: all 0.3s ease;\n  border-radius: 4px;\n  background-color: transparent;\n  border: #29b474 1px solid;\n  color: #29b474;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 100%;\n  outline: 0;\n  padding: 0.5em 1em;\n  text-align: center;\n  text-decoration: none;\n}\n.pure-button[data-v-0893fa1d]:hover {\n  background-color: #29b474;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.full-width[data-v-0893fa1d] {\n  display: block;\n  margin-bottom: 10px;\n}\n.pure-button.pure-button-primary[data-v-0893fa1d] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-primary[data-v-0893fa1d]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-white[data-v-0893fa1d] {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.pure-button.pure-button-white[data-v-0893fa1d]:hover {\n  background-color: rgba(0,0,0,0.1);\n}\n.pure-button.pure-button-success[data-v-0893fa1d] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-success[data-v-0893fa1d]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-continue[data-v-0893fa1d] {\n  border-radius: 25px;\n  background-color: #29b474;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-continue[data-v-0893fa1d]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-youtube[data-v-0893fa1d] {\n  border-radius: 25px;\n  background-color: #c4302b;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-youtube[data-v-0893fa1d]:hover {\n  background-color: #b02b27;\n}\n.pure-button.pure-button-soundcloud[data-v-0893fa1d] {\n  border-radius: 25px;\n  background-color: #f70;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-soundcloud[data-v-0893fa1d]:hover {\n  background-color: #e66b00;\n}\n.pure-button.pure-button-twitter[data-v-0893fa1d] {\n  border-radius: 25px;\n  background-color: #4099ff;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-twitter[data-v-0893fa1d]:hover {\n  background-color: #2088ff;\n}\n.pure-button.pure-button-subtle[data-v-0893fa1d] {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #666;\n}\n.pure-button.pure-button-subtle[data-v-0893fa1d]:hover {\n  background-color: #e1e1e1;\n  color: #444;\n}\n.pure-button.pure-button-text[data-v-0893fa1d] {\n  border-color: transparent;\n}\n.pure-button.pure-button-homework[data-v-0893fa1d] {\n  background-color: transparent;\n  border-color: #fd3c51;\n  color: #fd3c51;\n}\n.pure-button.pure-button-homework[data-v-0893fa1d]:hover {\n  background-color: #fd3c51;\n  color: #fff;\n}\n.slide-up-enter-active[data-v-0893fa1d] {\n  transition: all 0.3s ease;\n}\n.slide-up-leave-active[data-v-0893fa1d] {\n  transition: all 0.3s ease;\n}\n.slide-up-enter[data-v-0893fa1d],\n.slide-up-leave-to[data-v-0893fa1d] {\n  -webkit-transform: translateY(40px);\n  transform: translateY(40px);\n  opacity: 0;\n}\n.auth-modal[data-v-0893fa1d] {\n  transition: all 0.3s ease;\n  display: block;\n  max-width: 320px;\n  position: fixed;\n  z-index: 57;\n  top: 80px;\n  left: 50%;\n  margin-left: -160px;\n}\n.auth-modal .auth-modal--header[data-v-0893fa1d] {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n}\n.auth-modal .auth-modal--header h1[data-v-0893fa1d] {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n  font-size: 1.2em;\n}\n.auth-modal .auth-modal--container[data-v-0893fa1d] {\n  border-radius: 12px;\n  background-color: #fff;\n  padding: 20px 30px;\n  text-align: center;\n}\n.auth-modal .auth-modal--container p[data-v-0893fa1d] {\n  margin: 0 0 20px 0;\n}"],sourceRoot:""}])},693:function(n,a,t){var o=t(634);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(344)("d152fdc8",o,!0)},866:function(n,a){n.exports={render:function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("transition",{attrs:{name:"slide-up"}},[n.isVisible?t("div",{staticClass:"auth-modal"},[t("div",{staticClass:"auth-modal--header"},[t("h1",[n._v(n._s(n.$t("auth.authenticate")))])]),t("div",{staticClass:"auth-modal--container"},[t("p",[n._v("Click the button below to authenticate with Twitter, this will give you full access to the course.")]),t("button",{staticClass:"pure-button pure-button-twitter",attrs:{name:"twitter-login-button"},on:{"~click":function(a){n.attemptAuth(a)}}},[n._v(n._s(n.$t("auth.login_with_twitter")))])])]):n._e()])},staticRenderFns:[]}}});