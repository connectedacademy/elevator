webpackJsonp([26],{659:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=o(529),r=o.n(e),c=o(14),a=o.n(c),d=o(132),A=o.n(d),u=o(2),s=o(126),i=o(627),p=o.n(i);t.default={name:"course-content",mixins:[s.a],components:{JoinBanner:p.a,MarkdownContent:function(){return o.e(31).then(o.bind(null,871))},MarkdownLink:function(){return o.e(30).then(o.bind(null,872))},SoundcloudEmbed:function(){return o.e(28).then(o.bind(null,875))},VideoEmbed:function(){return o.e(27).then(o.bind(null,599))},LikeIndicator:function(){return o.e(21).then(o.bind(null,870))},LiveClass:function(){return o.e(17).then(o.bind(null,890))},Homework:function(){return o.e(20).then(o.bind(null,888))},FourCorners:function(){return o.e(22).then(o.bind(null,886))},FutureContent:function(){return o.e(25).then(o.bind(null,887))},InjectedQuestion:function(){return o.e(23).then(o.bind(null,889))},NextClass:function(){return o.e(24).then(o.bind(null,892))},WebinarMessageTicker:function(){return o.e(18).then(o.bind(null,899))},MediaCarousel:function(){return o.e(19).then(o.bind(null,873))},MediaThumbnails:function(){return o.e(29).then(o.bind(null,874))}},created:function(){this.viewCurrentClass()},watch:{course:function(n){this.viewCurrentClass()}},computed:a()({},o.i(u.b)(["course","currentClass","courseContent"]),{isIntroduction:function(){return this.currentClass&&"intro"===this.currentClass.slug},releasedContent:function(){return A()(this.courseContent,{status:"RELEASED"})},futureContent:function(){return A()(this.courseContent,{status:"FUTURE"})}}),methods:{viewCurrentClass:function(){if(this.course){var n=!0,t=!1,o=void 0;try{for(var e,c=r()(this.course.classes);!(n=(e=c.next()).done);n=!0){var a=e.value;"CURRENT"===a.status&&this.$store.dispatch("getSpec",a.slug)}}catch(n){t=!0,o=n}finally{try{!n&&c.return&&c.return()}finally{if(t)throw o}}}}}}},744:function(n,t,o){t=n.exports=o(398)(),t.push([n.i,".pure-button[data-v-df9076bc]{transition:all .3s ease;border-radius:4px;background:none;background-color:transparent;border:1px solid #29b474;color:#29b474}.pure-button[data-v-df9076bc]:hover{background:none;background-color:#29b474;color:#fff}.pure-button.full-width[data-v-df9076bc]{display:block;margin-bottom:10px}.pure-button.pure-button-primary[data-v-df9076bc]{background-color:#29b474;color:#fff}.pure-button.pure-button-primary[data-v-df9076bc]:hover{background-color:#25a268}.pure-button.pure-button-white[data-v-df9076bc]{background-color:transparent;border-color:#fff;color:#fff}.pure-button.pure-button-white[data-v-df9076bc]:hover{background-color:rgba(0,0,0,.1)}.pure-button.pure-button-success[data-v-df9076bc]{background-color:#29b474;color:#fff}.pure-button.pure-button-success[data-v-df9076bc]:hover{background-color:#25a268}.pure-button.pure-button-twitter[data-v-df9076bc]{border-radius:25px;background-color:#4099ff;border:none;color:#fff;line-height:50px;padding:0 30px}.pure-button.pure-button-twitter[data-v-df9076bc]:hover{background-color:#2088ff}.pure-button.pure-button-subtle[data-v-df9076bc]{background-color:transparent;border-color:#ccc;color:#666}.pure-button.pure-button-subtle[data-v-df9076bc]:hover{background-color:#e1e1e1;color:#444}.pure-button.pure-button-text[data-v-df9076bc]{border-color:transparent}.pure-button.pure-button-homework[data-v-df9076bc]{background-color:transparent;border-color:#fd3c51;color:#fd3c51}.pure-button.pure-button-homework[data-v-df9076bc]:hover{background-color:#fd3c51;color:#fff}body[data-v-df9076bc],html[data-v-df9076bc]{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.pull-left[data-v-df9076bc]{float:left}.pull-right[data-v-df9076bc]{float:right}.clearfix[data-v-df9076bc]{clear:both;float:none}.fa-icon[data-v-df9076bc]{width:auto;height:1em}.no-margin[data-v-df9076bc]{margin:0!important}.no-padding[data-v-df9076bc]{padding:0!important}.background-white[data-v-df9076bc]{background-color:#fff!important}.text-white[data-v-df9076bc]{color:#fff}.fade-enter-active[data-v-df9076bc],.fade-leave-active[data-v-df9076bc]{transition:opacity .2s}.fade-enter[data-v-df9076bc],.fade-leave-to[data-v-df9076bc]{opacity:0}.fade-enter-to[data-v-df9076bc],.fade-leave[data-v-df9076bc]{opacity:1}.main-container[data-v-df9076bc]{border-radius:4px;position:relative}@media (max-width:800px){.main-container[data-v-df9076bc]{border-radius:0}}.main-container.main-container-padded[data-v-df9076bc]{padding:20px}.content-block[data-v-df9076bc]{border-radius:4px;padding:20px;margin:20px 0 0}@media (max-width:800px){.content-block[data-v-df9076bc]{border-radius:0}}.content-block.white-block[data-v-df9076bc]{background-color:#fff}.icon-margin[data-v-df9076bc]{margin:0 5px}.course-content-wrapper[data-v-df9076bc]{margin-bottom:10px}.course-content-wrapper[data-v-df9076bc]:last-child{margin-bottom:0}.course-content-wrapper .course-content-group .course-content[data-v-df9076bc]{border-radius:4px;box-shadow:0 0 10px 5px rgba(0,0,0,.01);-moz-box-shadow:0 0 10px 5px rgba(0,0,0,.01);-webkit-box-shadow:0 0 10px 5px rgba(0,0,0,.01);background-color:#fff;margin:20px 0 0;min-height:100px;padding:0;position:relative}@media (max-width:800px){.course-content-wrapper .course-content-group .course-content[data-v-df9076bc]{border-radius:0;margin:20px 0 0}}.course-content-wrapper .course-content-group .course-content h5.content-subheader[data-v-df9076bc]{margin:0;padding:0;color:#444;font-weight:300}.course-content-wrapper .course-content-group .course-content p.content-description[data-v-df9076bc]{margin:0;padding:0;color:#666;font-size:1em}.course-content-wrapper .course-content-group .course-content a[data-v-df9076bc]{text-decoration:none}.course-content-wrapper .course-content-group .course-content .course-content--header[data-v-df9076bc]{background-color:transparent;overflow:hidden;padding:20px 20px 10px}.course-content-wrapper .course-content-group .course-content .course-content--header h1.content-title[data-v-df9076bc]{margin:0;padding:0;color:#444;font-size:1.3em;font-weight:700}.course-content-wrapper .course-content-group .course-content .course-content--header.block[data-v-df9076bc]{background-color:#29b474;padding:30px;text-align:center}.course-content-wrapper .course-content-group .course-content .course-content--header.block h1.content-title[data-v-df9076bc]{color:#fff;font-size:2em;font-weight:700;margin-bottom:10px}.course-content-wrapper .course-content-group .course-content .course-content--header.block p.content-description[data-v-df9076bc]{color:#fff;margin:0 auto}.course-content-wrapper .course-content-group .course-content .course-content--body[data-v-df9076bc]{overflow:hidden;padding:0 20px 10px}.course-content-wrapper .course-content-group .course-content .course-content--body h1[data-v-df9076bc],.course-content-wrapper .course-content-group .course-content .course-content--body h2[data-v-df9076bc],.course-content-wrapper .course-content-group .course-content .course-content--body h3[data-v-df9076bc],.course-content-wrapper .course-content-group .course-content .course-content--body h4[data-v-df9076bc],.course-content-wrapper .course-content-group .course-content .course-content--body h5[data-v-df9076bc]{font-weight:300}.course-content-wrapper .course-content-group .course-content .course-content--body h2[data-v-df9076bc]{color:#444;font-size:1.3em;font-weight:700}.course-content-wrapper .course-content-group .course-content .course-content--footer[data-v-df9076bc]{padding:20px}.course-content-wrapper .course-content-group.course-content-group--question[data-v-df9076bc]{border-radius:6px;background-color:hsla(0,0%,100%,.15);padding:15px;margin-top:10px}.course-content-wrapper .course-content-group.course-content-group--question .course-content[data-v-df9076bc]{margin:0}","",{version:3,sources:["/root/connectedacademy/src/components/conversation/CourseContent.vue"],names:[],mappings:"AACA,8BACE,wBAA0B,AAC1B,kBAAmB,AACnB,gBAAiB,AACjB,6BAA8B,AAC9B,yBAA0B,AAC1B,aAAe,CAChB,AACD,oCACE,gBAAiB,AACjB,yBAA0B,AAC1B,UAAY,CACb,AACD,yCACE,cAAe,AACf,kBAAoB,CACrB,AACD,kDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,wDACE,wBAA0B,CAC3B,AACD,gDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,sDACE,+BAAkC,CACnC,AACD,kDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,wDACE,wBAA0B,CAC3B,AACD,kDACE,mBAAoB,AACpB,yBAA0B,AAC1B,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,wDACE,wBAA0B,CAC3B,AACD,iDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,uDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,+CACE,wBAA0B,CAC3B,AACD,mDACE,6BAA8B,AAC9B,qBAAsB,AACtB,aAAe,CAChB,AACD,yDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,4CAEE,8CAAoD,AACpD,mCAAoC,AACpC,iCAAmC,CACpC,AACD,4BACE,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,2BACE,WAAY,AACZ,UAAY,CACb,AACD,0BACE,WAAY,AACZ,UAAY,CACb,AACD,4BACE,kBAAqB,CACtB,AACD,6BACE,mBAAsB,CACvB,AACD,mCACE,+BAAkC,CACnC,AACD,6BACE,UAAY,CACb,AACD,wEAEE,sBAAyB,CAC1B,AACD,6DAEE,SAAW,CACZ,AACD,6DAEE,SAAW,CACZ,AACD,iCACE,kBAAmB,AACnB,iBAAmB,CACpB,AACD,yBACA,iCACI,eAAiB,CACpB,CACA,AACD,uDACE,YAAc,CACf,AACD,gCACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,gCACI,eAAiB,CACpB,CACA,AACD,4CACE,qBAAuB,CACxB,AACD,8BACE,YAAc,CACf,AACD,yCACE,kBAAoB,CACrB,AACD,oDACE,eAAiB,CAClB,AACD,+EACE,kBAAmB,AACnB,wCAA0C,AAC1C,6CAA+C,AAC/C,gDAAkD,AAClD,sBAAuB,AACvB,gBAAmB,AACnB,iBAAkB,AAClB,UAAW,AACX,iBAAmB,CACpB,AACD,yBACA,+EACI,gBAAiB,AACjB,eAAmB,CACtB,CACA,AACD,oGACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,qGACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,aAAe,CAChB,AACD,iFACE,oBAAsB,CACvB,AACD,uGACE,6BAA8B,AAC9B,gBAAiB,AACjB,sBAA6B,CAC9B,AACD,wHACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,gBAAiB,AACjB,eAAkB,CACnB,AACD,6GACE,yBAA0B,AAC1B,aAAc,AACd,iBAAmB,CACpB,AACD,8HACE,WAAY,AACZ,cAAe,AACf,gBAAkB,AAClB,kBAAoB,CACrB,AACD,mIACE,WAAY,AACZ,aAAe,CAChB,AACD,qGACE,gBAAiB,AACjB,mBAA4B,CAC7B,AACD,wgBAKE,eAAiB,CAClB,AACD,wGACE,WAAY,AACZ,gBAAiB,AACjB,eAAkB,CACnB,AACD,uGACE,YAAc,CACf,AACD,8FACE,kBAAmB,AACnB,qCAAyC,AACzC,aAAc,AACd,eAAiB,CAClB,AACD,8GACE,QAAU,CACX",file:"CourseContent.vue",sourcesContent:["\n.pure-button[data-v-df9076bc] {\n  transition: all 0.3s ease;\n  border-radius: 4px;\n  background: none;\n  background-color: transparent;\n  border: #29b474 1px solid;\n  color: #29b474;\n}\n.pure-button[data-v-df9076bc]:hover {\n  background: none;\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.full-width[data-v-df9076bc] {\n  display: block;\n  margin-bottom: 10px;\n}\n.pure-button.pure-button-primary[data-v-df9076bc] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-primary[data-v-df9076bc]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-white[data-v-df9076bc] {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.pure-button.pure-button-white[data-v-df9076bc]:hover {\n  background-color: rgba(0,0,0,0.1);\n}\n.pure-button.pure-button-success[data-v-df9076bc] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-success[data-v-df9076bc]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-twitter[data-v-df9076bc] {\n  border-radius: 25px;\n  background-color: #4099ff;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-twitter[data-v-df9076bc]:hover {\n  background-color: #2088ff;\n}\n.pure-button.pure-button-subtle[data-v-df9076bc] {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #666;\n}\n.pure-button.pure-button-subtle[data-v-df9076bc]:hover {\n  background-color: #e1e1e1;\n  color: #444;\n}\n.pure-button.pure-button-text[data-v-df9076bc] {\n  border-color: transparent;\n}\n.pure-button.pure-button-homework[data-v-df9076bc] {\n  background-color: transparent;\n  border-color: #fd3c51;\n  color: #fd3c51;\n}\n.pure-button.pure-button-homework[data-v-df9076bc]:hover {\n  background-color: #fd3c51;\n  color: #fff;\n}\nhtml[data-v-df9076bc],\nbody[data-v-df9076bc] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.pull-left[data-v-df9076bc] {\n  float: left;\n}\n.pull-right[data-v-df9076bc] {\n  float: right;\n}\n.clearfix[data-v-df9076bc] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-df9076bc] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-df9076bc] {\n  margin: 0 !important;\n}\n.no-padding[data-v-df9076bc] {\n  padding: 0 !important;\n}\n.background-white[data-v-df9076bc] {\n  background-color: #fff !important;\n}\n.text-white[data-v-df9076bc] {\n  color: #fff;\n}\n.fade-enter-active[data-v-df9076bc],\n.fade-leave-active[data-v-df9076bc] {\n  transition: opacity 0.2s;\n}\n.fade-enter[data-v-df9076bc],\n.fade-leave-to[data-v-df9076bc] {\n  opacity: 0;\n}\n.fade-enter-to[data-v-df9076bc],\n.fade-leave[data-v-df9076bc] {\n  opacity: 1;\n}\n.main-container[data-v-df9076bc] {\n  border-radius: 4px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-df9076bc] {\n    border-radius: 0;\n}\n}\n.main-container.main-container-padded[data-v-df9076bc] {\n  padding: 20px;\n}\n.content-block[data-v-df9076bc] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 20px 0 0 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-df9076bc] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-df9076bc] {\n  background-color: #fff;\n}\n.icon-margin[data-v-df9076bc] {\n  margin: 0 5px;\n}\n.course-content-wrapper[data-v-df9076bc] {\n  margin-bottom: 10px;\n}\n.course-content-wrapper[data-v-df9076bc]:last-child {\n  margin-bottom: 0;\n}\n.course-content-wrapper .course-content-group .course-content[data-v-df9076bc] {\n  border-radius: 4px;\n  box-shadow: 0 0 10px 5px rgba(0,0,0,0.01);\n  -moz-box-shadow: 0 0 10px 5px rgba(0,0,0,0.01);\n  -webkit-box-shadow: 0 0 10px 5px rgba(0,0,0,0.01);\n  background-color: #fff;\n  margin: 20px 0 0 0;\n  min-height: 100px;\n  padding: 0;\n  position: relative;\n}\n@media (max-width: 800px) {\n.course-content-wrapper .course-content-group .course-content[data-v-df9076bc] {\n    border-radius: 0;\n    margin: 20px 0 0 0;\n}\n}\n.course-content-wrapper .course-content-group .course-content h5.content-subheader[data-v-df9076bc] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  font-weight: 300;\n}\n.course-content-wrapper .course-content-group .course-content p.content-description[data-v-df9076bc] {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  font-size: 1em;\n}\n.course-content-wrapper .course-content-group .course-content a[data-v-df9076bc] {\n  text-decoration: none;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--header[data-v-df9076bc] {\n  background-color: transparent;\n  overflow: hidden;\n  padding: 20px 20px 10px 20px;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--header h1.content-title[data-v-df9076bc] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--header.block[data-v-df9076bc] {\n  background-color: #29b474;\n  padding: 30px;\n  text-align: center;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--header.block h1.content-title[data-v-df9076bc] {\n  color: #fff;\n  font-size: 2em;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--header.block p.content-description[data-v-df9076bc] {\n  color: #fff;\n  margin: 0 auto;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--body[data-v-df9076bc] {\n  overflow: hidden;\n  padding: 0px 20px 10px 20px;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--body h1[data-v-df9076bc],\n.course-content-wrapper .course-content-group .course-content .course-content--body h2[data-v-df9076bc],\n.course-content-wrapper .course-content-group .course-content .course-content--body h3[data-v-df9076bc],\n.course-content-wrapper .course-content-group .course-content .course-content--body h4[data-v-df9076bc],\n.course-content-wrapper .course-content-group .course-content .course-content--body h5[data-v-df9076bc] {\n  font-weight: 300;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--body h2[data-v-df9076bc] {\n  color: #444;\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.course-content-wrapper .course-content-group .course-content .course-content--footer[data-v-df9076bc] {\n  padding: 20px;\n}\n.course-content-wrapper .course-content-group.course-content-group--question[data-v-df9076bc] {\n  border-radius: 6px;\n  background-color: rgba(255,255,255,0.15);\n  padding: 15px;\n  margin-top: 10px;\n}\n.course-content-wrapper .course-content-group.course-content-group--question .course-content[data-v-df9076bc] {\n  margin: 0;\n}"],sourceRoot:""}])},798:function(n,t,o){var e=o(744);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);o(399)("2ac4226b",e,!0)},885:function(n,t,o){o(798);var e=o(8)(o(659),o(946),"data-v-df9076bc",null);n.exports=e.exports},946:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"course-content-wrapper"},[n._l(n.releasedContent,function(t,e){return o("div",{key:e,staticClass:"course-content-group",class:(r={optional:t.optional},r[t.status.toLowerCase()]=!0,r)},["question"===t.content_type?o("injected-question",{attrs:{slug:t.slug}}):t.expectsubmission?o("homework",{attrs:{content:t}}):t.fourcornersintro?o("four-corners"):"class"===t.content_type?o("live-class",{attrs:{content:t,id:"course-content-"+t.slug}}):o("div",{staticClass:"course-content",class:{optional:t.optional},attrs:{id:"course-content-"+t.slug}},[o("like-indicator",{attrs:{"content-slug":t.slug,"class-slug":n.currentClass.slug,haveliked:t.haveliked,likes:t.likes,"has-liked":t.haveliked,"like-count":t.likes},on:{"update:hasLiked":function(n){t.haveliked=n},"update:likeCount":function(n){t.likes=n}}}),o("div",{staticClass:"course-content--header"},[t.title?o("h1",{staticClass:"content-title"},[n._v(n._s(t.title))]):n._e()]),o("div",{staticClass:"course-content--body"},[t.description?o("p",{staticClass:"content-description"},[o("markdown-content",{attrs:{markdown:t.description}})],1):n._e(),t.thumbnails?o("media-thumbnails",{attrs:{thumbnails:t.thumbnails}}):n._e(),t.carousel?o("media-carousel",{attrs:{media:t.carousel}}):n._e(),t.video&&"class"!==t.content_type?o("video-embed",{attrs:{"video-src":t.video,"content-type":t.content_type}}):n._e(),t.soundcloud&&"class"!==t.content_type?o("soundcloud-embed",{attrs:{"soundcloud-src":t.soundcloud}}):n._e(),"webinar"===t.content_type?o("webinar-message-ticker",{attrs:{"class-slug":n.currentClass.slug,"content-slug":t.slug}}):n._e()],1),t.expectsubmission||t.hasContent&&!t.thumbnails?o("div",{staticClass:"course-content--footer"},[t.hasContent&&!t.thumbnails?o("markdown-link",{staticClass:"pull-right",attrs:{"md-content":t}}):n._e(),o("div",{staticClass:"clearfix"})],1):n._e()],1)],1);var r}),n._l(n.futureContent,function(t,e){return o("div",{directives:[{name:"show",rawName:"v-show",value:0===e,expression:"index === 0"}],staticClass:"course-content-group course-content-group--future",class:(r={optional:t.optional},r[t.status.toLowerCase()]=!0,r)},["nextclass"!==t.content_type?o("future-content",{attrs:{content:t}}):n._e(),"nextclass"===t.content_type?o("next-class",{attrs:{content:t}}):n._e()],1);var r})],2)},staticRenderFns:[]}}});
//# sourceMappingURL=26.31725194ab3179584d74.js.map