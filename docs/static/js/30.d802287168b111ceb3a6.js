webpackJsonp([30],{623:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(356),t=e.n(o),r=e(357),d=e.n(r);e(20),e(3);n.default={name:"markdown-content",props:["markdown"],computed:{renderedMarkdown:function(){return(new t.a).use(d.a,{bio:function(a){if(!a)return"loading...";var n=a.split("|"),e=n[0].trim(),o=n[1].trim();if(n.length>2){var t=n[2].trim(),r=n[3].trim();return'\n              <div class="md-bio md-bio--with-bio">\n                <img class="md-bio--image" src="'+o+'" />\n                <div class="md-bio--content">\n                  <h5 class="md-bio--caption">'+e+'</h5>\n                  <p class="md-bio--bio">'+t+'</p>\n                  <a href="'+r+'" target="_blank" class="md-bio--link">'+r+"</a>\n                </div>\n              </div>\n              "}return'\n              <div class="md-bio">\n                <img class="md-bio--image" src="'+o+'" />\n                <h5 class="md-bio--caption">'+e+"</h5>\n              </div>\n              "}}).render(this.markdown.replace("@","\n\n@"))}}}},724:function(a,n,e){n=a.exports=e(318)(),n.push([a.i,".pure-button[data-v-7ae66d2a]{transition:all .3s ease;border-radius:4px;background-color:transparent;border:1px solid #29b474;color:#29b474;display:inline-block;font-family:inherit;font-size:100%;outline:0;padding:.5em 1em;text-align:center;text-decoration:none}.pure-button[data-v-7ae66d2a]:hover{background-color:#29b474;color:#fff;cursor:pointer}.pure-button.full-width[data-v-7ae66d2a]{display:block;margin-bottom:10px}.pure-button.pure-button-primary[data-v-7ae66d2a]{background-color:#29b474;color:#fff}.pure-button.pure-button-primary[data-v-7ae66d2a]:hover{background-color:#25a268}.pure-button.pure-button-white[data-v-7ae66d2a]{background-color:transparent;border-color:#fff;color:#fff}.pure-button.pure-button-white[data-v-7ae66d2a]:hover{background-color:rgba(0,0,0,.1)}.pure-button.pure-button-success[data-v-7ae66d2a]{background-color:#29b474;color:#fff}.pure-button.pure-button-success[data-v-7ae66d2a]:hover{background-color:#25a268}.pure-button.pure-button-twitter[data-v-7ae66d2a]{border-radius:25px;background-color:#4099ff;border:none;color:#fff;line-height:50px;padding:0 30px}.pure-button.pure-button-twitter[data-v-7ae66d2a]:hover{background-color:#2088ff}.pure-button.pure-button-subtle[data-v-7ae66d2a]{background-color:transparent;border-color:#ccc;color:#666}.pure-button.pure-button-subtle[data-v-7ae66d2a]:hover{background-color:#e1e1e1;color:#444}.pure-button.pure-button-text[data-v-7ae66d2a]{border-color:transparent}.pure-button.pure-button-homework[data-v-7ae66d2a]{background-color:transparent;border-color:#fd3c51;color:#fd3c51}.pure-button.pure-button-homework[data-v-7ae66d2a]:hover{background-color:#fd3c51;color:#fff}body[data-v-7ae66d2a],html[data-v-7ae66d2a]{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.hidden[data-v-7ae66d2a]{display:none}.pull-left[data-v-7ae66d2a]{float:left}.pull-right[data-v-7ae66d2a]{float:right}.clearfix[data-v-7ae66d2a]{clear:both;float:none}.fa-icon[data-v-7ae66d2a]{width:auto;height:1em}.no-margin[data-v-7ae66d2a]{margin:0!important}.no-padding[data-v-7ae66d2a]{padding:0!important}.background-white[data-v-7ae66d2a]{background-color:#fff!important}.text-white[data-v-7ae66d2a]{color:#fff}.fade-enter-active[data-v-7ae66d2a],.fade-leave-active[data-v-7ae66d2a]{transition:opacity .2s}.fade-enter[data-v-7ae66d2a],.fade-leave-to[data-v-7ae66d2a]{opacity:0}.fade-enter-to[data-v-7ae66d2a],.fade-leave[data-v-7ae66d2a]{opacity:1}.main-container[data-v-7ae66d2a]{border-radius:4px;position:relative}@media (max-width:800px){.main-container[data-v-7ae66d2a]{border-radius:0}}.main-container.main-container-padded[data-v-7ae66d2a]{padding:20px}.content-block[data-v-7ae66d2a]{border-radius:4px;padding:20px;margin:20px 0 0}@media (max-width:800px){.content-block[data-v-7ae66d2a]{border-radius:0}}.content-block.white-block[data-v-7ae66d2a]{background-color:#fff}.icon-margin[data-v-7ae66d2a]{margin:0 5px}.rendered-markdown h1[data-v-7ae66d2a]{margin:0;padding:0;color:#444;margin-bottom:5px}.rendered-markdown a[data-v-7ae66d2a],.rendered-markdown h1[data-v-7ae66d2a],.rendered-markdown h2[data-v-7ae66d2a],.rendered-markdown h3[data-v-7ae66d2a],.rendered-markdown h4[data-v-7ae66d2a],.rendered-markdown h5[data-v-7ae66d2a],.rendered-markdown li[data-v-7ae66d2a],.rendered-markdown p[data-v-7ae66d2a]{color:#444}","",{version:3,sources:["/root/connectedacademy/src/components/MarkdownContent.vue"],names:[],mappings:"AACA,8BACE,wBAA0B,AAC1B,kBAAmB,AACnB,6BAA8B,AAC9B,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,oBAAqB,AACrB,eAAgB,AAChB,UAAW,AACX,iBAAmB,AACnB,kBAAmB,AACnB,oBAAsB,CACvB,AACD,oCACE,yBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,yCACE,cAAe,AACf,kBAAoB,CACrB,AACD,kDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,wDACE,wBAA0B,CAC3B,AACD,gDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,sDACE,+BAAkC,CACnC,AACD,kDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,wDACE,wBAA0B,CAC3B,AACD,kDACE,mBAAoB,AACpB,yBAA0B,AAC1B,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,wDACE,wBAA0B,CAC3B,AACD,iDACE,6BAA8B,AAC9B,kBAAmB,AACnB,UAAY,CACb,AACD,uDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,+CACE,wBAA0B,CAC3B,AACD,mDACE,6BAA8B,AAC9B,qBAAsB,AACtB,aAAe,CAChB,AACD,yDACE,yBAA0B,AAC1B,UAAY,CACb,AACD,4CAEE,8CAAoD,AACpD,mCAAoC,AACpC,iCAAmC,CACpC,AACD,yBACE,YAAc,CACf,AACD,4BACE,UAAY,CACb,AACD,6BACE,WAAa,CACd,AACD,2BACE,WAAY,AACZ,UAAY,CACb,AACD,0BACE,WAAY,AACZ,UAAY,CACb,AACD,4BACE,kBAAqB,CACtB,AACD,6BACE,mBAAsB,CACvB,AACD,mCACE,+BAAkC,CACnC,AACD,6BACE,UAAY,CACb,AACD,wEAEE,sBAAyB,CAC1B,AACD,6DAEE,SAAW,CACZ,AACD,6DAEE,SAAW,CACZ,AACD,iCACE,kBAAmB,AACnB,iBAAmB,CACpB,AACD,yBACA,iCACI,eAAiB,CACpB,CACA,AACD,uDACE,YAAc,CACf,AACD,gCACE,kBAAmB,AACnB,aAAc,AACd,eAAmB,CACpB,AACD,yBACA,gCACI,eAAiB,CACpB,CACA,AACD,4CACE,qBAAuB,CACxB,AACD,8BACE,YAAc,CACf,AACD,uCACE,SAAU,AACV,UAAW,AACX,WAAY,AACZ,iBAAmB,CACpB,AACD,sTAQE,UAAY,CACb",file:"MarkdownContent.vue",sourcesContent:["\n.pure-button[data-v-7ae66d2a] {\n  transition: all 0.3s ease;\n  border-radius: 4px;\n  background-color: transparent;\n  border: #29b474 1px solid;\n  color: #29b474;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 100%;\n  outline: 0;\n  padding: 0.5em 1em;\n  text-align: center;\n  text-decoration: none;\n}\n.pure-button[data-v-7ae66d2a]:hover {\n  background-color: #29b474;\n  color: #fff;\n  cursor: pointer;\n}\n.pure-button.full-width[data-v-7ae66d2a] {\n  display: block;\n  margin-bottom: 10px;\n}\n.pure-button.pure-button-primary[data-v-7ae66d2a] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-primary[data-v-7ae66d2a]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-white[data-v-7ae66d2a] {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.pure-button.pure-button-white[data-v-7ae66d2a]:hover {\n  background-color: rgba(0,0,0,0.1);\n}\n.pure-button.pure-button-success[data-v-7ae66d2a] {\n  background-color: #29b474;\n  color: #fff;\n}\n.pure-button.pure-button-success[data-v-7ae66d2a]:hover {\n  background-color: #25a268;\n}\n.pure-button.pure-button-twitter[data-v-7ae66d2a] {\n  border-radius: 25px;\n  background-color: #4099ff;\n  border: none;\n  color: #fff;\n  line-height: 50px;\n  padding: 0 30px;\n}\n.pure-button.pure-button-twitter[data-v-7ae66d2a]:hover {\n  background-color: #2088ff;\n}\n.pure-button.pure-button-subtle[data-v-7ae66d2a] {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #666;\n}\n.pure-button.pure-button-subtle[data-v-7ae66d2a]:hover {\n  background-color: #e1e1e1;\n  color: #444;\n}\n.pure-button.pure-button-text[data-v-7ae66d2a] {\n  border-color: transparent;\n}\n.pure-button.pure-button-homework[data-v-7ae66d2a] {\n  background-color: transparent;\n  border-color: #fd3c51;\n  color: #fd3c51;\n}\n.pure-button.pure-button-homework[data-v-7ae66d2a]:hover {\n  background-color: #fd3c51;\n  color: #fff;\n}\nhtml[data-v-7ae66d2a],\nbody[data-v-7ae66d2a] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hidden[data-v-7ae66d2a] {\n  display: none;\n}\n.pull-left[data-v-7ae66d2a] {\n  float: left;\n}\n.pull-right[data-v-7ae66d2a] {\n  float: right;\n}\n.clearfix[data-v-7ae66d2a] {\n  clear: both;\n  float: none;\n}\n.fa-icon[data-v-7ae66d2a] {\n  width: auto;\n  height: 1em;\n}\n.no-margin[data-v-7ae66d2a] {\n  margin: 0 !important;\n}\n.no-padding[data-v-7ae66d2a] {\n  padding: 0 !important;\n}\n.background-white[data-v-7ae66d2a] {\n  background-color: #fff !important;\n}\n.text-white[data-v-7ae66d2a] {\n  color: #fff;\n}\n.fade-enter-active[data-v-7ae66d2a],\n.fade-leave-active[data-v-7ae66d2a] {\n  transition: opacity 0.2s;\n}\n.fade-enter[data-v-7ae66d2a],\n.fade-leave-to[data-v-7ae66d2a] {\n  opacity: 0;\n}\n.fade-enter-to[data-v-7ae66d2a],\n.fade-leave[data-v-7ae66d2a] {\n  opacity: 1;\n}\n.main-container[data-v-7ae66d2a] {\n  border-radius: 4px;\n  position: relative;\n}\n@media (max-width: 800px) {\n.main-container[data-v-7ae66d2a] {\n    border-radius: 0;\n}\n}\n.main-container.main-container-padded[data-v-7ae66d2a] {\n  padding: 20px;\n}\n.content-block[data-v-7ae66d2a] {\n  border-radius: 4px;\n  padding: 20px;\n  margin: 20px 0 0 0;\n}\n@media (max-width: 800px) {\n.content-block[data-v-7ae66d2a] {\n    border-radius: 0;\n}\n}\n.content-block.white-block[data-v-7ae66d2a] {\n  background-color: #fff;\n}\n.icon-margin[data-v-7ae66d2a] {\n  margin: 0 5px;\n}\n.rendered-markdown h1[data-v-7ae66d2a] {\n  margin: 0;\n  padding: 0;\n  color: #444;\n  margin-bottom: 5px;\n}\n.rendered-markdown h1[data-v-7ae66d2a],\n.rendered-markdown h2[data-v-7ae66d2a],\n.rendered-markdown h3[data-v-7ae66d2a],\n.rendered-markdown h4[data-v-7ae66d2a],\n.rendered-markdown h5[data-v-7ae66d2a],\n.rendered-markdown p[data-v-7ae66d2a],\n.rendered-markdown a[data-v-7ae66d2a],\n.rendered-markdown li[data-v-7ae66d2a] {\n  color: #444;\n}"],sourceRoot:""}])},780:function(a,n,e){var o=e(724);"string"==typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);e(319)("6b847814",o,!0)},862:function(a,n,e){e(780);var o=e(15)(e(623),e(932),"data-v-7ae66d2a",null);a.exports=o.exports},932:function(a,n){a.exports={render:function(){var a=this,n=a.$createElement;a._self._c;return a._m(0)},staticRenderFns:[function(){var a=this,n=a.$createElement;return(a._self._c||n)("div",{staticClass:"rendered-markdown",domProps:{innerHTML:a._s(a.renderedMarkdown)}})}]}}});