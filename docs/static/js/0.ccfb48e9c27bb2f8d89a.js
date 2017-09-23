webpackJsonp([0],{116:function(a,t,n){n(714);var o=n(9)(n(607),n(868),"data-v-0893fa1d",null);a.exports=o.exports},607:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"authentication-flow",computed:{isVisible:function(){return this.$store.state.auth.visible}},methods:{attemptAuth:function(){this.$store.commit("attemptAuth")}}}},658:function(a,t,n){t=a.exports=n(288)(),t.push([a.i,".pure-button[data-v-0893fa1d]{transition:all .3s ease;border-radius:4px;background-color:transparent;border:1px solid #29b474;color:#29b474;display:inline-block;font-family:inherit;font-size:100%;padding:.5em 1em;text-decoration:none}.pure-button[data-v-0893fa1d]:hover{background-color:#29b474;color:#fff}.pure-button.full-width[data-v-0893fa1d]{display:block;margin-bottom:10px}.pure-button.pure-button-primary[data-v-0893fa1d]{background-color:#29b474;color:#fff}.pure-button.pure-button-primary[data-v-0893fa1d]:hover{background-color:#25a268}.pure-button.pure-button-white[data-v-0893fa1d]{background-color:transparent;border-color:#fff;color:#fff}.pure-button.pure-button-white[data-v-0893fa1d]:hover{background-color:rgba(0,0,0,.1)}.pure-button.pure-button-success[data-v-0893fa1d]{background-color:#29b474;color:#fff}.pure-button.pure-button-success[data-v-0893fa1d]:hover{background-color:#25a268}.pure-button.pure-button-twitter[data-v-0893fa1d]{border-radius:25px;background-color:#4099ff;border:none;color:#fff;line-height:50px;padding:0 30px}.pure-button.pure-button-twitter[data-v-0893fa1d]:hover{background-color:#2088ff}.pure-button.pure-button-subtle[data-v-0893fa1d]{background-color:transparent;border-color:#ccc;color:#666}.pure-button.pure-button-subtle[data-v-0893fa1d]:hover{background-color:#e1e1e1;color:#444}.pure-button.pure-button-text[data-v-0893fa1d]{border-color:transparent}.pure-button.pure-button-homework[data-v-0893fa1d]{background-color:transparent;border-color:#fd3c51;color:#fd3c51}.pure-button.pure-button-homework[data-v-0893fa1d]:hover{background-color:#fd3c51;color:#fff}body[data-v-0893fa1d],html[data-v-0893fa1d]{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.pull-left[data-v-0893fa1d]{float:left}.pull-right[data-v-0893fa1d]{float:right}.clearfix[data-v-0893fa1d]{clear:both;float:none}.fa-icon[data-v-0893fa1d]{width:auto;height:1em}.no-margin[data-v-0893fa1d]{margin:0!important}.no-padding[data-v-0893fa1d]{padding:0!important}.background-white[data-v-0893fa1d]{background-color:#fff!important}.text-white[data-v-0893fa1d]{color:#fff}.fade-enter-active[data-v-0893fa1d],.fade-leave-active[data-v-0893fa1d]{transition:opacity .2s}.fade-enter[data-v-0893fa1d],.fade-leave-to[data-v-0893fa1d]{opacity:0}.fade-enter-to[data-v-0893fa1d],.fade-leave[data-v-0893fa1d]{opacity:1}.main-container[data-v-0893fa1d]{border-radius:4px;position:relative}@media (max-width:800px){.main-container[data-v-0893fa1d]{border-radius:0}}.main-container.main-container-padded[data-v-0893fa1d]{padding:20px}.content-block[data-v-0893fa1d]{border-radius:4px;padding:20px;margin:20px 0 0}@media (max-width:800px){.content-block[data-v-0893fa1d]{border-radius:0}}.content-block.white-block[data-v-0893fa1d]{background-color:#fff}.icon-margin[data-v-0893fa1d]{margin:0 5px}.slide-up-enter-active[data-v-0893fa1d],.slide-up-leave-active[data-v-0893fa1d]{transition:all .3s ease}.slide-up-enter[data-v-0893fa1d],.slide-up-leave-to[data-v-0893fa1d]{-webkit-transform:translateY(40px);transform:translateY(40px);opacity:0}.auth-modal[data-v-0893fa1d]{transition:all .3s ease;display:block;max-width:320px;position:fixed;z-index:57;top:80px;left:50%;margin-left:-160px}.auth-modal .auth-modal--header[data-v-0893fa1d]{height:40px;line-height:40px;text-align:center}.auth-modal .auth-modal--header h1[data-v-0893fa1d]{margin:0;padding:0;color:#fff;font-size:1.2em}.auth-modal .auth-modal--container[data-v-0893fa1d]{border-radius:12px;background-color:#fff;padding:20px 30px;text-align:center}.auth-modal .auth-modal--container p[data-v-0893fa1d]{margin:0 0 20px}","",{version:3,sources:["/root/connectedacademy/src/components/authentication/AuthenticationFlow.vue"],names:[],mappings:"AACA,8BACE,wBAA0B,AAC1B,kBAAmB,AACnB,6BAA8B,AAC9B,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,oBAAqB,AACrB,eAAgB,AAChB,iBAAmB,AACnB,oBAAsB,CACvB,AACD,oCACE,yBAA0B,AAC1B,UAAY,CACb,AACD,yCACE,cAAe,AACf,kBAAoB,CACrB,AACD,kDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,wDACE,wBAA0B,CAC3B,AACD,gDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,sDACE,+BAAkC,CACnC,AACD,kDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,wDACE,wBAA0B,CAC3B,AACD,kDACE,mBAAoB,AACpB,yBAA0B,AAC1B,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,wDACE,wBAA0B,CAC3B,AACD,iDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,uDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,+CACE,wBAA0B,CAC3B,AACD,mDACE,6BAA8B,AAC9B,qBAAsB,AACtB,aAAe,CAChB,AACD,yDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,4CAEE,8CAAoD,AACpD,mCAAoC,AACpC,iCAAmC,CACpC,AACD,4BACE,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,2BACE,WAAY,AACZ,UAAY,CACb,AACD,0BACE,WAAY,AACZ,UAAY,CACb,AACD,4BACE,kBAAqB,CACtB,AACD,6BACE,mBAAsB,CACvB,AACD,mCACE,+BAAkC,CACnC,AACD,6BACE,UAAY,CACb,AACD,wEAEE,sBAAyB,CAC1B,AACD,6DAEE,SAAW,CACZ,AACD,6DAEE,SAAW,CACZ,AACD,iCACE,kBAAmB,AACnB,iBAAmB,CACpB,AACD,yBACA,iCACI,eAAiB,CACpB,CACA,AACD,uDACE,YAAc,CACf,AACD,gCACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,gCACI,eAAiB,CACpB,CACA,AACD,4CACE,qBAAuB,CACxB,AACD,8BACE,YAAc,CACf,AAID,gFACE,uBAA0B,CAC3B,AACD,qEAEE,mCAAoC,AACpC,2BAA4B,AAC5B,SAAW,CACZ,AACD,6BACE,wBAA0B,AAC1B,cAAe,AACf,gBAAiB,AACjB,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,SAAU,AACV,kBAAoB,CACrB,AACD,iDACE,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CACpB,AACD,oDACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,oDACE,mBAAoB,AACpB,sBAAuB,AACvB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,sDACE,eAAmB,CACpB",file:"AuthenticationFlow.vue",sourcesContent:["\n.pure-button[data-v-0893fa1d] {\n  transition: all 0.3s ease;\n  border-radius: 4px;\n  background-color: transparent;\n  border: #29b474 1px solid;\n  color: #29b474;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 100%;\n  padding: 0.5em 1em;\n  text-decoration: none;\n}\n.pure-button[data-v-0893fa1d]:hover {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.full-width[data-v-0893fa1d] {\n  display: block;\n  margin-bottom: 10px;\n}\n.pure-button.pure-button-primary[data-v-0893fa1d] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-primary[data-v-0893fa1d]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-white[data-v-0893fa1d] {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.pure-button.pure-button-white[data-v-0893fa1d]:hover {\n  background-color: rgba(0,0,0,0.1);\n}\n.pure-button.pure-button-success[data-v-0893fa1d] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-success[data-v-0893fa1d]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-twitter[data-v-0893fa1d] {\n  border-radius: 25px;\n  background-color: #4099ff;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-twitter[data-v-0893fa1d]:hover {\n  background-color: #2088ff;\n}\n.pure-button.pure-button-subtle[data-v-0893fa1d] {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #666;\n}\n.pure-button.pure-button-subtle[data-v-0893fa1d]:hover {\n  background-color: #e1e1e1;\n  color: #444;\n}\n.pure-button.pure-button-text[data-v-0893fa1d] {\n  border-color: transparent;\n}\n.pure-button.pure-button-homework[data-v-0893fa1d] {\n  background-color: transparent;\n  border-color: #fd3c51;\n  color: #fd3c51;\n}\n.pure-button.pure-button-homework[data-v-0893fa1d]:hover {\n  background-color: #fd3c51;\n  color: #fff;\n}\nhtml[data-v-0893fa1d],\nbody[data-v-0893fa1d] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.pull-left[data-v-0893fa1d] {\n  float: left;\n}\n.pull-right[data-v-0893fa1d] {\n  float: right;\n}\n.clearfix[data-v-0893fa1d] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-0893fa1d] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-0893fa1d] {\n  margin: 0 !important;\n}\n.no-padding[data-v-0893fa1d] {\n  padding: 0 !important;\n}\n.background-white[data-v-0893fa1d] {\n  background-color: #fff !important;\n}\n.text-white[data-v-0893fa1d] {\n  color: #fff;\n}\n.fade-enter-active[data-v-0893fa1d],\n.fade-leave-active[data-v-0893fa1d] {\n  transition: opacity 0.2s;\n}\n.fade-enter[data-v-0893fa1d],\n.fade-leave-to[data-v-0893fa1d] {\n  opacity: 0;\n}\n.fade-enter-to[data-v-0893fa1d],\n.fade-leave[data-v-0893fa1d] {\n  opacity: 1;\n}\n.main-container[data-v-0893fa1d] {\n  border-radius: 4px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-0893fa1d] {\n    border-radius: 0;\n}\n}\n.main-container.main-container-padded[data-v-0893fa1d] {\n  padding: 20px;\n}\n.content-block[data-v-0893fa1d] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 20px 0 0 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-0893fa1d] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-0893fa1d] {\n  background-color: #fff;\n}\n.icon-margin[data-v-0893fa1d] {\n  margin: 0 5px;\n}\n.slide-up-enter-active[data-v-0893fa1d] {\n  transition: all 0.3s ease;\n}\n.slide-up-leave-active[data-v-0893fa1d] {\n  transition: all 0.3s ease;\n}\n.slide-up-enter[data-v-0893fa1d],\n.slide-up-leave-to[data-v-0893fa1d] {\n  -webkit-transform: translateY(40px);\n  transform: translateY(40px);\n  opacity: 0;\n}\n.auth-modal[data-v-0893fa1d] {\n  transition: all 0.3s ease;\n  display: block;\n  max-width: 320px;\n  position: fixed;\n  z-index: 57;\n  top: 80px;\n  left: 50%;\n  margin-left: -160px;\n}\n.auth-modal .auth-modal--header[data-v-0893fa1d] {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n}\n.auth-modal .auth-modal--header h1[data-v-0893fa1d] {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n  font-size: 1.2em;\n}\n.auth-modal .auth-modal--container[data-v-0893fa1d] {\n  border-radius: 12px;\n  background-color: #fff;\n  padding: 20px 30px;\n  text-align: center;\n}\n.auth-modal .auth-modal--container p[data-v-0893fa1d] {\n  margin: 0 0 20px 0;\n}"],sourceRoot:""}])},714:function(a,t,n){var o=n(658);"string"==typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);n(289)("d152fdc8",o,!0)},868:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("transition",{attrs:{name:"slide-up"}},[a.isVisible?n("div",{staticClass:"auth-modal"},[n("div",{staticClass:"auth-modal--header"},[n("h1",[a._v(a._s(a.$t("auth.authenticate")))])]),n("div",{staticClass:"auth-modal--container"},[n("p",[a._v("Click the button below to authenticate with Twitter, this will give you full access to the course.")]),n("button",{staticClass:"pure-button pure-button-twitter",on:{"~click":function(t){a.attemptAuth(t)}}},[a._v(a._s(a.$t("auth.login_with_twitter")))])])]):a._e()])},staticRenderFns:[]}}});
//# sourceMappingURL=0.ccfb48e9c27bb2f8d89a.js.map