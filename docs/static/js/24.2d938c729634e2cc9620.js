webpackJsonp([24],{615:function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=t(28),e=t.n(a),r=t(4),d=t(47),c=t.n(d);o.default={name:"future-content",props:["content"],computed:e()({},t.i(r.b)(["fauxTime","currentClass"]),{releaseIn:function(){return c()(this.content.release_at).from(this.fauxTime,!0)},releaseAt:function(){return c()(this.content.release_at).format("MMMM Do YYYY, HH:mm")},time:function(){return c()(this.fauxTime).format("MMMM Do YYYY, HH:mm")}}),methods:{jumpForwardInTime:function(){this.$log.info("this.content"),this.$log.info(this.content);var n=c()(this.content.release_at);n=n.add(2,"hours").format(),this.$store.commit("setFauxTime",n),this.$store.dispatch("getSpec",this.currentClass.slug)}}}},672:function(n,o,t){o=n.exports=t(288)(),o.push([n.i,".pure-button[data-v-28db7dfa]{transition:all .3s ease;border-radius:4px;background-color:transparent;border:1px solid #29b474;color:#29b474;display:inline-block;font-family:inherit;font-size:100%;padding:.5em 1em;text-decoration:none}.pure-button[data-v-28db7dfa]:hover{background-color:#29b474;color:#fff}.pure-button.full-width[data-v-28db7dfa]{display:block;margin-bottom:10px}.pure-button.pure-button-primary[data-v-28db7dfa]{background-color:#29b474;color:#fff}.pure-button.pure-button-primary[data-v-28db7dfa]:hover{background-color:#25a268}.pure-button.pure-button-white[data-v-28db7dfa]{background-color:transparent;border-color:#fff;color:#fff}.pure-button.pure-button-white[data-v-28db7dfa]:hover{background-color:rgba(0,0,0,.1)}.pure-button.pure-button-success[data-v-28db7dfa]{background-color:#29b474;color:#fff}.pure-button.pure-button-success[data-v-28db7dfa]:hover{background-color:#25a268}.pure-button.pure-button-twitter[data-v-28db7dfa]{border-radius:25px;background-color:#4099ff;border:none;color:#fff;line-height:50px;padding:0 30px}.pure-button.pure-button-twitter[data-v-28db7dfa]:hover{background-color:#2088ff}.pure-button.pure-button-subtle[data-v-28db7dfa]{background-color:transparent;border-color:#ccc;color:#666}.pure-button.pure-button-subtle[data-v-28db7dfa]:hover{background-color:#e1e1e1;color:#444}.pure-button.pure-button-text[data-v-28db7dfa]{border-color:transparent}.pure-button.pure-button-homework[data-v-28db7dfa]{background-color:transparent;border-color:#fd3c51;color:#fd3c51}.pure-button.pure-button-homework[data-v-28db7dfa]:hover{background-color:#fd3c51;color:#fff}body[data-v-28db7dfa],html[data-v-28db7dfa]{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.pull-left[data-v-28db7dfa]{float:left}.pull-right[data-v-28db7dfa]{float:right}.clearfix[data-v-28db7dfa]{clear:both;float:none}.fa-icon[data-v-28db7dfa]{width:auto;height:1em}.no-margin[data-v-28db7dfa]{margin:0!important}.no-padding[data-v-28db7dfa]{padding:0!important}.background-white[data-v-28db7dfa]{background-color:#fff!important}.text-white[data-v-28db7dfa]{color:#fff}.fade-enter-active[data-v-28db7dfa],.fade-leave-active[data-v-28db7dfa]{transition:opacity .2s}.fade-enter[data-v-28db7dfa],.fade-leave-to[data-v-28db7dfa]{opacity:0}.fade-enter-to[data-v-28db7dfa],.fade-leave[data-v-28db7dfa]{opacity:1}.main-container[data-v-28db7dfa]{border-radius:4px;position:relative}@media (max-width:800px){.main-container[data-v-28db7dfa]{border-radius:0}}.main-container.main-container-padded[data-v-28db7dfa]{padding:20px}.content-block[data-v-28db7dfa]{border-radius:4px;padding:20px;margin:20px 0 0}@media (max-width:800px){.content-block[data-v-28db7dfa]{border-radius:0}}.content-block.white-block[data-v-28db7dfa]{background-color:#fff}.icon-margin[data-v-28db7dfa]{margin:0 5px}.course-content-wrapper[data-v-28db7dfa]{margin-bottom:10px}.course-content-wrapper[data-v-28db7dfa]:last-child{margin-bottom:0}.course-content-wrapper .course-content-group .course-content[data-v-28db7dfa]{border-radius:4px;box-shadow:0 0 10px 5px rgba(0,0,0,.01);-moz-box-shadow:0 0 10px 5px rgba(0,0,0,.01);-webkit-box-shadow:0 0 10px 5px rgba(0,0,0,.01);background-color:#fff;margin:20px 0 0;min-height:100px;padding:0;position:relative}@media (max-width:800px){.course-content-wrapper .course-content-group .course-content[data-v-28db7dfa]{border-radius:0;margin:20px 0 0}}.course-content-wrapper .course-content-group .course-content h5.content-subheader[data-v-28db7dfa]{margin:0;padding:0;color:#444;font-weight:300}.course-content-wrapper .course-content-group .course-content p.content-description[data-v-28db7dfa]{margin:0;padding:0;color:#666;font-size:1em}.course-content-wrapper .course-content-group .course-content a[data-v-28db7dfa]{text-decoration:none}.course-content-wrapper .course-content-group .course-content .course-content--header[data-v-28db7dfa]{background-color:transparent;overflow:hidden;padding:20px 20px 10px}.course-content-wrapper .course-content-group .course-content .course-content--header h1.content-title[data-v-28db7dfa]{margin:0;padding:0;color:#444;font-size:1.3em;font-weight:700}.course-content-wrapper .course-content-group .course-content .course-content--header.block[data-v-28db7dfa]{background-color:#29b474;padding:30px;text-align:center}.course-content-wrapper .course-content-group .course-content .course-content--header.block h1.content-title[data-v-28db7dfa]{color:#fff;font-size:2em;font-weight:700;margin-bottom:10px}.course-content-wrapper .course-content-group .course-content .course-content--header.block p.content-description[data-v-28db7dfa]{color:#fff;margin:0 auto}.course-content-wrapper .course-content-group .course-content .course-content--body[data-v-28db7dfa]{overflow:hidden;padding:0 20px 10px}.course-content-wrapper .course-content-group .course-content .course-content--body h1[data-v-28db7dfa],.course-content-wrapper .course-content-group .course-content .course-content--body h2[data-v-28db7dfa],.course-content-wrapper .course-content-group .course-content .course-content--body h3[data-v-28db7dfa],.course-content-wrapper .course-content-group .course-content .course-content--body h4[data-v-28db7dfa],.course-content-wrapper .course-content-group .course-content .course-content--body h5[data-v-28db7dfa]{font-weight:300}.course-content-wrapper .course-content-group .course-content .course-content--body h2[data-v-28db7dfa]{color:#444;font-size:1.3em;font-weight:700}.course-content-wrapper .course-content-group .course-content .course-content--footer[data-v-28db7dfa]{padding:20px}.course-content-wrapper .course-content-group.course-content-group--question[data-v-28db7dfa]{border-radius:6px;background-color:hsla(0,0%,100%,.15);padding:15px;margin-top:10px}.course-content-wrapper .course-content-group.course-content-group--question .course-content[data-v-28db7dfa]{margin:0}.course-content[data-v-28db7dfa]{position:relative}.course-content .course-content--header[data-v-28db7dfa]{background-color:#fd853c!important;text-align:center}.course-content .course-content--header h1.content-title[data-v-28db7dfa]{color:#fff;text-transform:capitalize}.course-content .course-content--header h2.content-subtitle[data-v-28db7dfa]{color:#fff;font-weight:400}.course-content .course-content--body[data-v-28db7dfa]{background-color:transparent;padding:20px 40px!important;text-align:center}.course-content .course-content--body h1[data-v-28db7dfa],.course-content .course-content--body h2[data-v-28db7dfa],.course-content .course-content--body h5[data-v-28db7dfa]{margin:0;padding:0;color:#fff;padding:5px}.course-content .course-content--body h5[data-v-28db7dfa]{opacity:.5}.course-content .pure-button[data-v-28db7dfa]{background-color:transparent;border:1px solid #fff;color:#fff;margin:10px auto 5px}.course-content .pure-button[data-v-28db7dfa]:hover{background-color:#fff;color:#fd853c}","",{version:3,sources:["/root/connectedacademy/src/components/conversation/FutureContent.vue"],names:[],mappings:"AAmJA,8BACE,wBAA0B,AAC1B,kBAAmB,AACnB,6BAA8B,AAC9B,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,oBAAqB,AACrB,eAAgB,AAChB,iBAAmB,AACnB,oBAAsB,CACvB,AACD,oCACE,yBAA0B,AAC1B,UAAY,CACb,AACD,yCACE,cAAe,AACf,kBAAoB,CACrB,AACD,kDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,wDACE,wBAA0B,CAC3B,AACD,gDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,sDACE,+BAAkC,CACnC,AACD,kDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,wDACE,wBAA0B,CAC3B,AACD,kDACE,mBAAoB,AACpB,yBAA0B,AAC1B,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,wDACE,wBAA0B,CAC3B,AACD,iDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,uDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,+CACE,wBAA0B,CAC3B,AACD,mDACE,6BAA8B,AAC9B,qBAAsB,AACtB,aAAe,CAChB,AACD,yDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,4CAEE,8CAAoD,AACpD,mCAAoC,AACpC,iCAAmC,CACpC,AACD,4BACE,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,2BACE,WAAY,AACZ,UAAY,CACb,AACD,0BACE,WAAY,AACZ,UAAY,CACb,AACD,4BACE,kBAAqB,CACtB,AACD,6BACE,mBAAsB,CACvB,AACD,mCACE,+BAAkC,CACnC,AACD,6BACE,UAAY,CACb,AACD,wEAEE,sBAAyB,CAC1B,AACD,6DAEE,SAAW,CACZ,AACD,6DAEE,SAAW,CACZ,AACD,iCACE,kBAAmB,AACnB,iBAAmB,CACpB,AACD,yBACA,iCACI,eAAiB,CACpB,CACA,AACD,uDACE,YAAc,CACf,AACD,gCACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,gCACI,eAAiB,CACpB,CACA,AACD,4CACE,qBAAuB,CACxB,AACD,8BACE,YAAc,CACf,AACD,yCACE,kBAAoB,CACrB,AACD,oDACE,eAAiB,CAClB,AACD,+EACE,kBAAmB,AACnB,wCAA0C,AAC1C,6CAA+C,AAC/C,gDAAkD,AAClD,sBAAuB,AACvB,gBAAmB,AACnB,iBAAkB,AAClB,UAAW,AACX,iBAAmB,CACpB,AACD,yBACA,+EACI,gBAAiB,AACjB,eAAmB,CACtB,CACA,AACD,oGACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,qGACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,aAAe,CAChB,AACD,iFACE,oBAAsB,CACvB,AACD,uGACE,6BAA8B,AAC9B,gBAAiB,AACjB,sBAA6B,CAC9B,AACD,wHACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,gBAAiB,AACjB,eAAkB,CACnB,AACD,6GACE,yBAA0B,AAC1B,aAAc,AACd,iBAAmB,CACpB,AACD,8HACE,WAAY,AACZ,cAAe,AACf,gBAAkB,AAClB,kBAAoB,CACrB,AACD,mIACE,WAAY,AACZ,aAAe,CAChB,AACD,qGACE,gBAAiB,AACjB,mBAA4B,CAC7B,AACD,wgBAKE,eAAiB,CAClB,AACD,wGACE,WAAY,AACZ,gBAAiB,AACjB,eAAkB,CACnB,AACD,uGACE,YAAc,CACf,AACD,8FACE,kBAAmB,AACnB,qCAAyC,AACzC,aAAc,AACd,eAAiB,CAClB,AACD,8GACE,QAAU,CACX,AACD,iCACE,iBAAmB,CACpB,AACD,yDACE,mCAAqC,AACrC,iBAAmB,CACpB,AACD,0EACE,WAAY,AACZ,yBAA2B,CAC5B,AACD,6EACE,WAAY,AACZ,eAAoB,CACrB,AACD,uDACE,6BAA8B,AAC9B,4BAA8B,AAC9B,iBAAmB,CACpB,AACD,8KAGE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,WAAa,CACd,AACD,0DACE,UAAa,CACd,AACD,8CACE,6BAA8B,AAC9B,sBAAuB,AACvB,WAAY,AACZ,oBAA2B,CAC5B,AACD,oDACE,sBAAuB,AACvB,aAAe,CAChB",file:"FutureContent.vue",sourcesContent:["\n.pure-button[data-v-28db7dfa] {\n  transition: all 0.3s ease;\n  border-radius: 4px;\n  background-color: transparent;\n  border: #29b474 1px solid;\n  color: #29b474;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 100%;\n  padding: 0.5em 1em;\n  text-decoration: none;\n}\n.pure-button[data-v-28db7dfa]:hover {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.full-width[data-v-28db7dfa] {\n  display: block;\n  margin-bottom: 10px;\n}\n.pure-button.pure-button-primary[data-v-28db7dfa] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-primary[data-v-28db7dfa]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-white[data-v-28db7dfa] {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.pure-button.pure-button-white[data-v-28db7dfa]:hover {\n  background-color: rgba(0,0,0,0.1);\n}\n.pure-button.pure-button-success[data-v-28db7dfa] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-success[data-v-28db7dfa]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-twitter[data-v-28db7dfa] {\n  border-radius: 25px;\n  background-color: #4099ff;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-twitter[data-v-28db7dfa]:hover {\n  background-color: #2088ff;\n}\n.pure-button.pure-button-subtle[data-v-28db7dfa] {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #666;\n}\n.pure-button.pure-button-subtle[data-v-28db7dfa]:hover {\n  background-color: #e1e1e1;\n  color: #444;\n}\n.pure-button.pure-button-text[data-v-28db7dfa] {\n  border-color: transparent;\n}\n.pure-button.pure-button-homework[data-v-28db7dfa] {\n  background-color: transparent;\n  border-color: #fd3c51;\n  color: #fd3c51;\n}\n.pure-button.pure-button-homework[data-v-28db7dfa]:hover {\n  background-color: #fd3c51;\n  color: #fff;\n}\nhtml[data-v-28db7dfa],\nbody[data-v-28db7dfa] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.pull-left[data-v-28db7dfa] {\n  float: left;\n}\n.pull-right[data-v-28db7dfa] {\n  float: right;\n}\n.clearfix[data-v-28db7dfa] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-28db7dfa] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-28db7dfa] {\n  margin: 0 !important;\n}\n.no-padding[data-v-28db7dfa] {\n  padding: 0 !important;\n}\n.background-white[data-v-28db7dfa] {\n  background-color: #fff !important;\n}\n.text-white[data-v-28db7dfa] {\n  color: #fff;\n}\n.fade-enter-active[data-v-28db7dfa],\n.fade-leave-active[data-v-28db7dfa] {\n  transition: opacity 0.2s;\n}\n.fade-enter[data-v-28db7dfa],\n.fade-leave-to[data-v-28db7dfa] {\n  opacity: 0;\n}\n.fade-enter-to[data-v-28db7dfa],\n.fade-leave[data-v-28db7dfa] {\n  opacity: 1;\n}\n.main-container[data-v-28db7dfa] {\n  border-radius: 4px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-28db7dfa] {\n    border-radius: 0;\n}\n}\n.main-container.main-container-padded[data-v-28db7dfa] {\n  padding: 20px;\n}\n.content-block[data-v-28db7dfa] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 20px 0 0 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-28db7dfa] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-28db7dfa] {\n  background-color: #fff;\n}\n.icon-margin[data-v-28db7dfa] {\n  margin: 0 5px;\n}\n.pure-button[data-v-28db7dfa] {\n  transition: all 0.3s ease;\n  border-radius: 4px;\n  background-color: transparent;\n  border: #29b474 1px solid;\n  color: #29b474;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 100%;\n  padding: 0.5em 1em;\n  text-decoration: none;\n}\n.pure-button[data-v-28db7dfa]:hover {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.full-width[data-v-28db7dfa] {\n  display: block;\n  margin-bottom: 10px;\n}\n.pure-button.pure-button-primary[data-v-28db7dfa] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-primary[data-v-28db7dfa]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-white[data-v-28db7dfa] {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.pure-button.pure-button-white[data-v-28db7dfa]:hover {\n  background-color: rgba(0,0,0,0.1);\n}\n.pure-button.pure-button-success[data-v-28db7dfa] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-success[data-v-28db7dfa]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-twitter[data-v-28db7dfa] {\n  border-radius: 25px;\n  background-color: #4099ff;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-twitter[data-v-28db7dfa]:hover {\n  background-color: #2088ff;\n}\n.pure-button.pure-button-subtle[data-v-28db7dfa] {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #666;\n}\n.pure-button.pure-button-subtle[data-v-28db7dfa]:hover {\n  background-color: #e1e1e1;\n  color: #444;\n}\n.pure-button.pure-button-text[data-v-28db7dfa] {\n  border-color: transparent;\n}\n.pure-button.pure-button-homework[data-v-28db7dfa] {\n  background-color: transparent;\n  border-color: #fd3c51;\n  color: #fd3c51;\n}\n.pure-button.pure-button-homework[data-v-28db7dfa]:hover {\n  background-color: #fd3c51;\n  color: #fff;\n}\nhtml[data-v-28db7dfa],\nbody[data-v-28db7dfa] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.pull-left[data-v-28db7dfa] {\n  float: left;\n}\n.pull-right[data-v-28db7dfa] {\n  float: right;\n}\n.clearfix[data-v-28db7dfa] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-28db7dfa] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-28db7dfa] {\n  margin: 0 !important;\n}\n.no-padding[data-v-28db7dfa] {\n  padding: 0 !important;\n}\n.background-white[data-v-28db7dfa] {\n  background-color: #fff !important;\n}\n.text-white[data-v-28db7dfa] {\n  color: #fff;\n}\n.fade-enter-active[data-v-28db7dfa],\n.fade-leave-active[data-v-28db7dfa] {\n  transition: opacity 0.2s;\n}\n.fade-enter[data-v-28db7dfa],\n.fade-leave-to[data-v-28db7dfa] {\n  opacity: 0;\n}\n.fade-enter-to[data-v-28db7dfa],\n.fade-leave[data-v-28db7dfa] {\n  opacity: 1;\n}\n.main-container[data-v-28db7dfa] {\n  border-radius: 4px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-28db7dfa] {\n    border-radius: 0;\n}\n}\n.main-container.main-container-padded[data-v-28db7dfa] {\n  padding: 20px;\n}\n.content-block[data-v-28db7dfa] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 20px 0 0 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-28db7dfa] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-28db7dfa] {\n  background-color: #fff;\n}\n.icon-margin[data-v-28db7dfa] {\n  margin: 0 5px;\n}\n.course-content-wrapper[data-v-28db7dfa] {\n  margin-bottom: 10px;\n}\n.course-content-wrapper[data-v-28db7dfa]:last-child {\n  margin-bottom: 0;\n}\n.course-content-wrapper .course-content-group .course-content[data-v-28db7dfa] {\n  border-radius: 4px;\n  box-shadow: 0 0 10px 5px rgba(0,0,0,0.01);\n  -moz-box-shadow: 0 0 10px 5px rgba(0,0,0,0.01);\n  -webkit-box-shadow: 0 0 10px 5px rgba(0,0,0,0.01);\n  background-color: #fff;\n  margin: 20px 0 0 0;\n  min-height: 100px;\n  padding: 0;\n  position: relative;\n}\n@media (max-width: 800px) {\n.course-content-wrapper .course-content-group .course-content[data-v-28db7dfa] {\n    border-radius: 0;\n    margin: 20px 0 0 0;\n}\n}\n.course-content-wrapper .course-content-group .course-content h5.content-subheader[data-v-28db7dfa] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  font-weight: 300;\n}\n.course-content-wrapper .course-content-group .course-content p.content-description[data-v-28db7dfa] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  font-size: 1em;\n}\n.course-content-wrapper .course-content-group .course-content a[data-v-28db7dfa] {\n  text-decoration: none;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--header[data-v-28db7dfa] {\n  background-color: transparent;\n  overflow: hidden;\n  padding: 20px 20px 10px 20px;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--header h1.content-title[data-v-28db7dfa] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--header.block[data-v-28db7dfa] {\n  background-color: #29b474;\n  padding: 30px;\n  text-align: center;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--header.block h1.content-title[data-v-28db7dfa] {\n  color: #fff;\n  font-size: 2em;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--header.block p.content-description[data-v-28db7dfa] {\n  color: #fff;\n  margin: 0 auto;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--body[data-v-28db7dfa] {\n  overflow: hidden;\n  padding: 0px 20px 10px 20px;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--body h1[data-v-28db7dfa],\n.course-content-wrapper .course-content-group .course-content .course-content--body h2[data-v-28db7dfa],\n.course-content-wrapper .course-content-group .course-content .course-content--body h3[data-v-28db7dfa],\n.course-content-wrapper .course-content-group .course-content .course-content--body h4[data-v-28db7dfa],\n.course-content-wrapper .course-content-group .course-content .course-content--body h5[data-v-28db7dfa] {\n  font-weight: 300;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--body h2[data-v-28db7dfa] {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--footer[data-v-28db7dfa] {\n  padding: 20px;\n}\n.course-content-wrapper .course-content-group.course-content-group--question[data-v-28db7dfa] {\n  border-radius: 6px;\n  background-color: rgba(255,255,255,0.15);\n  padding: 15px;\n  margin-top: 10px;\n}\n.course-content-wrapper .course-content-group.course-content-group--question .course-content[data-v-28db7dfa] {\n  margin: 0;\n}\n.course-content[data-v-28db7dfa] {\n  position: relative;\n}\n.course-content .course-content--header[data-v-28db7dfa] {\n  background-color: #fd853c !important;\n  text-align: center;\n}\n.course-content .course-content--header h1.content-title[data-v-28db7dfa] {\n  color: #fff;\n  text-transform: capitalize;\n}\n.course-content .course-content--header h2.content-subtitle[data-v-28db7dfa] {\n  color: #fff;\n  font-weight: normal;\n}\n.course-content .course-content--body[data-v-28db7dfa] {\n  background-color: transparent;\n  padding: 20px 40px !important;\n  text-align: center;\n}\n.course-content .course-content--body h1[data-v-28db7dfa],\n.course-content .course-content--body h2[data-v-28db7dfa],\n.course-content .course-content--body h5[data-v-28db7dfa] {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n  padding: 5px;\n}\n.course-content .course-content--body h5[data-v-28db7dfa] {\n  opacity: 0.5;\n}\n.course-content .pure-button[data-v-28db7dfa] {\n  background-color: transparent;\n  border: #fff 1px solid;\n  color: #fff;\n  margin: 10px auto 5px auto;\n}\n.course-content .pure-button[data-v-28db7dfa]:hover {\n  background-color: #fff;\n  color: #fd853c;\n}"],sourceRoot:""}])},728:function(n,o,t){var a=t(672);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t(289)("5b037ba0",a,!0)},850:function(n,o,t){t(728);var a=t(9)(t(615),t(882),"data-v-28db7dfa",null);n.exports=a.exports},882:function(n,o){n.exports={render:function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",{staticClass:"course-content"},[t("div",{staticClass:"course-content--header block"},[t("h1",{staticClass:"content-title"},[n._v(n._s(n.content.slug+" coming soon"))]),t("h2",{staticClass:"content-subtitle"},[n._v(n._s(n.releaseAt))]),t("div",{staticClass:"pure-button",attrs:{name:"circle"},on:{click:n.jumpForwardInTime}},[n._v("Release Now")])])])},staticRenderFns:[]}}});
//# sourceMappingURL=24.2d938c729634e2cc9620.js.map