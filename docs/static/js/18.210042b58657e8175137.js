webpackJsonp([18],{570:function(o,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"soundcloud-embed",props:["soundcloudSrc"],data:function(){return{src:void 0,theSrc:void 0}},mounted:function(){var o=this;setTimeout(function(){o.src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+o.soundcloudSrc},2500)},methods:{loadEmbed:function(){this.theSrc=this.src}}}},646:function(o,n,t){n=o.exports=t(288)(),n.push([o.i,".soundcloud-wrapper .loading-wrapper[data-v-25b27813]{background-color:#f2f2f2;margin-top:25px;margin-bottom:10px;padding:58px 20px;text-align:center}.soundcloud-wrapper .soundcloud-container[data-v-25b27813]{margin-top:20px;position:relative}","",{version:3,sources:["/root/connectedacademy/src/components/SoundcloudEmbed.vue"],names:[],mappings:"AACA,sDACE,yBAA0B,AAC1B,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,2DACE,gBAAiB,AACjB,iBAAmB,CACpB",file:"SoundcloudEmbed.vue",sourcesContent:["\n.soundcloud-wrapper .loading-wrapper[data-v-25b27813] {\n  background-color: #f2f2f2;\n  margin-top: 25px;\n  margin-bottom: 10px;\n  padding: 58px 20px;\n  text-align: center;\n}\n.soundcloud-wrapper .soundcloud-container[data-v-25b27813] {\n  margin-top: 20px;\n  position: relative;\n}"],sourceRoot:""}])},707:function(o,n,t){var e=t(646);"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);t(289)("ea2e7ce6",e,!0)},836:function(o,n,t){t(707);var e=t(9)(t(570),t(880),"data-v-25b27813",null);o.exports=e.exports},880:function(o,n){o.exports={render:function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{staticClass:"soundcloud-wrapper"},[o.theSrc?o._e():t("div",{staticClass:"loading-wrapper"},[t("div",{staticClass:"pure-button pure-button-success",on:{click:o.loadEmbed}},[o._v("Click to load")])]),o.theSrc?t("div",{staticClass:"soundcloud-container"},[o._m(0)]):o._e()])},staticRenderFns:[function(){var o=this,n=o.$createElement;return(o._self._c||n)("iframe",{attrs:{src:o.theSrc,width:"100%",height:"166",scrolling:"no",frameborder:"no"}})}]}}});