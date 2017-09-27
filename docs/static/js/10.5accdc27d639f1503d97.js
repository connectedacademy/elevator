webpackJsonp([10],{673:function(o,n,t){t(770);var r=t(0)(t(727),t(861),"data-v-25b27813",null);o.exports=r.exports},727:function(o,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"soundcloud-embed",props:["soundcloudSrc","autoLoad"],data:function(){return{src:void 0,theSrc:void 0}},mounted:function(){var o=this;this.src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+this.soundcloudSrc,this.autoLoad&&setTimeout(function(){o.theSrc=o.src},1e3)},methods:{loadEmbed:function(){this.theSrc=this.src}}}},750:function(o,n,t){n=o.exports=t(666)(),n.push([o.i,".hidden[data-v-25b27813],[v-cloak][data-v-25b27813]{display:none}.pull-left[data-v-25b27813]{float:left}.pull-right[data-v-25b27813]{float:right}.clearfix[data-v-25b27813]{clear:both;float:none}.fa-icon[data-v-25b27813]{width:auto;height:1em}.no-margin[data-v-25b27813]{margin:0!important}.no-padding[data-v-25b27813]{padding:0!important}.background-white[data-v-25b27813]{background-color:#fff!important}.main-container[data-v-25b27813]{border-radius:4px;position:relative}@media (max-width:800px){.main-container[data-v-25b27813]{border-radius:0}}.main-container.main-container-padded[data-v-25b27813]{padding:20px}.content-block[data-v-25b27813]{border-radius:4px;padding:20px;margin:20px 0 0}@media (max-width:800px){.content-block[data-v-25b27813]{border-radius:0}}.content-block.white-block[data-v-25b27813]{background-color:#fff}.pure-button[data-v-25b27813]{transition:all .3s ease;border-radius:4px;background-color:transparent;border:1px solid #29b474;color:#29b474;display:inline-block;font-family:inherit;font-size:100%;outline:0;padding:.5em 1em;text-align:center;text-decoration:none}.pure-button[data-v-25b27813]:hover{background-color:#29b474;color:#fff;cursor:pointer}.pure-button.full-width[data-v-25b27813]{display:block;margin-bottom:10px}.pure-button.pure-button-primary[data-v-25b27813]{background-color:#29b474;color:#fff}.pure-button.pure-button-primary[data-v-25b27813]:hover{background-color:#25a268}.pure-button.pure-button-white[data-v-25b27813]{background-color:transparent;border-color:#fff;color:#fff}.pure-button.pure-button-white[data-v-25b27813]:hover{background-color:rgba(0,0,0,.1)}.pure-button.pure-button-success[data-v-25b27813]{background-color:#29b474;color:#fff}.pure-button.pure-button-success[data-v-25b27813]:hover{background-color:#25a268}.pure-button.pure-button-continue[data-v-25b27813]{border-radius:25px;background-color:#29b474;border:none;color:#fff;line-height:50px;padding:0 30px}.pure-button.pure-button-continue[data-v-25b27813]:hover{background-color:#25a268}.pure-button.pure-button-youtube[data-v-25b27813]{border-radius:25px;background-color:#c4302b;border:none;color:#fff;line-height:50px;padding:0 30px}.pure-button.pure-button-youtube[data-v-25b27813]:hover{background-color:#b02b27}.pure-button.pure-button-soundcloud[data-v-25b27813]{border-radius:25px;background-color:#f70;border:none;color:#fff;line-height:50px;padding:0 30px}.pure-button.pure-button-soundcloud[data-v-25b27813]:hover{background-color:#e66b00}.pure-button.pure-button-twitter[data-v-25b27813]{border-radius:25px;background-color:#4099ff;border:none;color:#fff;line-height:50px;padding:0 30px}.pure-button.pure-button-twitter[data-v-25b27813]:hover{background-color:#2088ff}.pure-button.pure-button-subtle[data-v-25b27813]{background-color:transparent;border-color:#ccc;color:#666}.pure-button.pure-button-subtle[data-v-25b27813]:hover{background-color:#e1e1e1;color:#444}.pure-button.pure-button-text[data-v-25b27813]{border-color:transparent}.pure-button.pure-button-homework[data-v-25b27813]{background-color:transparent;border-color:#fd3c51;color:#fd3c51}.pure-button.pure-button-homework[data-v-25b27813]:hover{background-color:#fd3c51;color:#fff}.soundcloud-wrapper .loading-wrapper[data-v-25b27813]{margin-top:25px;margin-bottom:10px;padding:58px 20px;text-align:center}.soundcloud-wrapper .soundcloud-container[data-v-25b27813]{margin-top:20px;position:relative}","",{version:3,sources:["/root/connectedacademy/src/components/SoundcloudEmbed.vue"],names:[],mappings:"AACA,oDAEE,YAAc,CACf,AACD,4BACE,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,2BACE,WAAY,AACZ,UAAY,CACb,AACD,0BACE,WAAY,AACZ,UAAY,CACb,AACD,4BACE,kBAAqB,CACtB,AACD,6BACE,mBAAsB,CACvB,AACD,mCACE,+BAAkC,CACnC,AACD,iCACE,kBAAmB,AACnB,iBAAmB,CACpB,AACD,yBACA,iCACI,eAAiB,CACpB,CACA,AACD,uDACE,YAAc,CACf,AACD,gCACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,gCACI,eAAiB,CACpB,CACA,AACD,4CACE,qBAAuB,CACxB,AACD,8BACE,wBAA0B,AAC1B,kBAAmB,AACnB,6BAA8B,AAC9B,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,oBAAqB,AACrB,eAAgB,AAChB,UAAW,AACX,iBAAmB,AACnB,kBAAmB,AACnB,oBAAsB,CACvB,AACD,oCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,yCACE,cAAe,AACf,kBAAoB,CACrB,AACD,kDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,wDACE,wBAA0B,CAC3B,AACD,gDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,sDACE,+BAAkC,CACnC,AACD,kDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,wDACE,wBAA0B,CAC3B,AACD,mDACE,mBAAoB,AACpB,yBAA0B,AAC1B,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,yDACE,wBAA0B,CAC3B,AACD,kDACE,mBAAoB,AACpB,yBAA0B,AAC1B,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,wDACE,wBAA0B,CAC3B,AACD,qDACE,mBAAoB,AACpB,sBAAuB,AACvB,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,2DACE,wBAA0B,CAC3B,AACD,kDACE,mBAAoB,AACpB,yBAA0B,AAC1B,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,wDACE,wBAA0B,CAC3B,AACD,iDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,uDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,+CACE,wBAA0B,CAC3B,AACD,mDACE,6BAA8B,AAC9B,qBAAsB,AACtB,aAAe,CAChB,AACD,yDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,sDACE,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,2DACE,gBAAiB,AACjB,iBAAmB,CACpB",file:"SoundcloudEmbed.vue",sourcesContent:["\n.hidden[data-v-25b27813],\n[v-cloak][data-v-25b27813] {\n  display: none;\n}\n.pull-left[data-v-25b27813] {\n  float: left;\n}\n.pull-right[data-v-25b27813] {\n  float: right;\n}\n.clearfix[data-v-25b27813] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-25b27813] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-25b27813] {\n  margin: 0 !important;\n}\n.no-padding[data-v-25b27813] {\n  padding: 0 !important;\n}\n.background-white[data-v-25b27813] {\n  background-color: #fff !important;\n}\n.main-container[data-v-25b27813] {\n  border-radius: 4px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-25b27813] {\n    border-radius: 0;\n}\n}\n.main-container.main-container-padded[data-v-25b27813] {\n  padding: 20px;\n}\n.content-block[data-v-25b27813] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 20px 0 0 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-25b27813] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-25b27813] {\n  background-color: #fff;\n}\n.pure-button[data-v-25b27813] {\n  transition: all 0.3s ease;\n  border-radius: 4px;\n  background-color: transparent;\n  border: #29b474 1px solid;\n  color: #29b474;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 100%;\n  outline: 0;\n  padding: 0.5em 1em;\n  text-align: center;\n  text-decoration: none;\n}\n.pure-button[data-v-25b27813]:hover {\n  background-color: #29b474;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.full-width[data-v-25b27813] {\n  display: block;\n  margin-bottom: 10px;\n}\n.pure-button.pure-button-primary[data-v-25b27813] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-primary[data-v-25b27813]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-white[data-v-25b27813] {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.pure-button.pure-button-white[data-v-25b27813]:hover {\n  background-color: rgba(0,0,0,0.1);\n}\n.pure-button.pure-button-success[data-v-25b27813] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-success[data-v-25b27813]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-continue[data-v-25b27813] {\n  border-radius: 25px;\n  background-color: #29b474;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-continue[data-v-25b27813]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-youtube[data-v-25b27813] {\n  border-radius: 25px;\n  background-color: #c4302b;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-youtube[data-v-25b27813]:hover {\n  background-color: #b02b27;\n}\n.pure-button.pure-button-soundcloud[data-v-25b27813] {\n  border-radius: 25px;\n  background-color: #f70;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-soundcloud[data-v-25b27813]:hover {\n  background-color: #e66b00;\n}\n.pure-button.pure-button-twitter[data-v-25b27813] {\n  border-radius: 25px;\n  background-color: #4099ff;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-twitter[data-v-25b27813]:hover {\n  background-color: #2088ff;\n}\n.pure-button.pure-button-subtle[data-v-25b27813] {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #666;\n}\n.pure-button.pure-button-subtle[data-v-25b27813]:hover {\n  background-color: #e1e1e1;\n  color: #444;\n}\n.pure-button.pure-button-text[data-v-25b27813] {\n  border-color: transparent;\n}\n.pure-button.pure-button-homework[data-v-25b27813] {\n  background-color: transparent;\n  border-color: #fd3c51;\n  color: #fd3c51;\n}\n.pure-button.pure-button-homework[data-v-25b27813]:hover {\n  background-color: #fd3c51;\n  color: #fff;\n}\n.soundcloud-wrapper .loading-wrapper[data-v-25b27813] {\n  margin-top: 25px;\n  margin-bottom: 10px;\n  padding: 58px 20px;\n  text-align: center;\n}\n.soundcloud-wrapper .soundcloud-container[data-v-25b27813] {\n  margin-top: 20px;\n  position: relative;\n}"],sourceRoot:""}])},770:function(o,n,t){var r=t(750);"string"==typeof r&&(r=[[o.i,r,""]]),r.locals&&(o.exports=r.locals);t(667)("ea2e7ce6",r,!0)},861:function(o,n){o.exports={render:function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{staticClass:"soundcloud-wrapper"},[o.theSrc?o._e():t("div",{staticClass:"loading-wrapper"},[t("div",{staticClass:"pure-button pure-button-soundcloud",on:{click:o.loadEmbed}},[o._v("Click to Load")])]),o.theSrc?t("div",{staticClass:"soundcloud-container"},[o._m(0)]):o._e()])},staticRenderFns:[function(){var o=this,n=o.$createElement;return(o._self._c||n)("iframe",{attrs:{src:o.theSrc,width:"100%",height:"166",scrolling:"no",frameborder:"no"}})}]}}});