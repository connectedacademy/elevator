webpackJsonp([16],{129:function(t,e,n){"use strict";var i=n(0),o=n(2);e.a={getSubmissions:function(t,e,n){i.default.http.get(o.b+"/admin/content/"+t.theClass+"/"+t.slug).then(function(t){e(t.body)},function(t){n(t)})},getCourseUsers:function(t,e,n){i.default.http.get(o.b+"/admin/users").then(function(t){e(t.body)},function(t){n(t)})}}},130:function(t,e,n){"use strict";var i=n(0),o=n(2);e.a={getQuestionResponses:function(t,e,n){i.default.http.get(o.b+"/analytics/answers").then(function(t){e(t.body)},function(t){n(t)})}}},131:function(t,e,n){"use strict";var i=n(0),o=n(2);e.a={checkAuth:function(t,e){i.default.http.get(o.b+"/auth/me").then(function(e){t(e.body)},function(t){e(t)})},logout:function(t,e){i.default.http.get(o.b+"/auth/logout").then(function(e){t(e.body)},function(t){e(t)})},register:function(t,e,n){i.default.http.options={credentials:!0,responseType:"json"},i.default.http.post(o.b+"/auth/register",t).then(function(t){e(t.body)},function(t){n(t)})},fetchQuestions:function(t,e){i.default.http.get(o.b+"/auth/registrationquestions").then(function(e){t(e.body)},function(t){e(t)})}}},132:function(t,e,n){"use strict";var i=n(0),o=n(2);e.a={getTeacherCode:function(t,e,n){i.default.http.get(o.b+"/classroom/mycode/"+t.theClass+"/"+t.slug).then(function(t){e(t.body)},function(t){n(t)})},registerAttendance:function(t,e,n){i.default.http.options={credentials:!0,responseType:"json"},i.default.http.post(o.b+"/classroom/inclass",t).then(function(t){e(t.body)},function(t){n(t)})},getClassroomUsers:function(t,e,n){i.default.http.get(o.b+"/classroom/users/"+t.theClass+"/"+t.slug).then(function(t){e(t.body)},function(t){n(t)})},getClassroomStatus:function(t,e,n){i.default.http.get(o.b+"/classroom/getclass/"+t.theClass+"/"+t.slug).then(function(t){e(t.body)},function(t){n(t)})}}},133:function(t,e,n){"use strict";var i=n(0),o=n(2);e.a={getSchedule:function(t,e,n){i.default.http.get(o.b+"/course/schedule?time="+t).then(function(t){e(t.body)},function(t){n(t)})},getSpecPreload:function(t,e,n,s){i.default.http.get(o.b+"/course/specpreload/"+e+"/2?time="+t).then(function(t){n(t.body)},function(t){s(t)})},getSpec:function(t,e,n,s){i.default.http.get(o.b+"/course/spec/"+e+"?time="+t).then(function(t){n(t.body)},function(t){s(t)})},getHubs:function(t,e,n){i.default.http.get(o.b+"/course/hubs").then(function(t){e(t.body)},function(t){n(t)})},getLikeCount:function(t,e,n){i.default.http.get(o.b+"/messages/likes/"+t.class+"/"+t.content).then(function(t){e(t.body)},function(t){n(t)})}}},134:function(t,e,n){"use strict";var i=n(0),o=n(2);e.a={getFeedbackItem:function(t,e,n){i.default.http.get(o.b+"/discussion/submission/"+t.id).then(function(t){e(t.body)},function(t){n(t)})},getDiscussion:function(t,e,n){i.default.http.get(o.b+"/discussion/messages/"+t.id).then(function(t){e(t.body)},function(t){n(t)})},getFeedbackItems:function(t,e,n){i.default.http.get(o.b+"/discussion/list/"+t.class+"/"+t.content).then(function(t){e(t.body)},function(t){n(t)})},getAvailableFeedbackItems:function(t,e,n){i.default.http.get(o.b+"/discussion/available/"+t.class+"/"+t.content).then(function(t){e(t.body)},function(t){n(t)})},postFeedbackMessage:function(t,e,n){i.default.http.options={credentials:!0,responseType:"json"},i.default.http.post(o.b+"/discussion/create/"+t.id,t).then(function(t){e(t)},function(t){n(t)})},getUserSubmissions:function(t,e,n){i.default.http.options={credentials:!0,responseType:"json"},i.default.http.get(o.b+"/discussion/user/"+t.classSlug+"/"+t.contentSlug+"/"+t.userId).then(function(t){e(t)},function(t){n(t)})}}},135:function(t,e,n){"use strict";var i=n(0),o=n(2);e.a={likeContent:function(t,e,n){i.default.http.post(o.b+"/course/like/"+t.class+"/"+t.content).then(function(t){e(t.body)},function(t){n(t)})},unlikeContent:function(t,e,n){i.default.http.post(o.b+"/course/unlike/"+t.class+"/"+t.content).then(function(t){e(t.body)},function(t){n(t)})}}},136:function(t,e,n){"use strict";var i=n(0);n(2);e.a={fetchMarkdown:function(t,e,n){i.default.http.get(""+t,{credentials:!1,responseType:"text"}).then(function(t){e(t.body)},function(t){n(t)})}}},137:function(t,e,n){"use strict";var i=n(0),o=n(2),s=n(3),r=n(14);e.a={subscribeToSocket:function(){i.default.$log.info("Subscribing to socket"),i.default.io.socket.on("user",function(t){i.default.$log.info("SOCKET - user"),i.default.$log.info(t)}),i.default.io.socket.get("/v1/auth/me",function(t,e){i.default.$log.info("SOCKET RESPONSE - me"),i.default.$log.info(t)})},cancelBatchRequests:function(){cancel()},getSegmentSummary:function(t,e,n){i.default.http.get(o.b+"/messages/summarybatch/"+t.theClass+"/"+t.theContent+"/"+t.startSegment+"/"+t.endSegment+"/5?whitelist=true").then(function(t){e(t.data)},function(t){n(t)})},getSegmentSummarySocket:function(t,e,n){r.a.commit(s.b,t.startSegment+" - "+t.endSegment),i.default.io.socket.get("/v1/messages/subscribe/"+t.theClass+"/"+t.theContent+"/"+t.startSegment+"/"+t.endSegment+"?whitelist=true",function(t,n){e(t),i.default.$log.info("SOCKET RESPONSE - subscribe"),i.default.$log.info(t)})},getContentMessages:function(t,e,n){i.default.io.socket.get("/v1/messages/content/"+t.theClass+"/"+t.theContent+"?whitelist=true&limit=100",function(t,n){e(t)})},getMessages:function(t,e,n){i.default.http.get(o.b+"/messages/list/"+t.theClass+"/"+t.theContent+"/"+t.startSegment+"/"+t.endSegment+"?whitelist=true").then(function(t){e(t.body)},function(t){n(t)})},getSubtitles:function(t,e,n,o){i.default.http.get(e,{credentials:!1,responseType:"json"}).then(function(e){n({slug:t,response:e.body})},function(e){o({slug:t,response:e})})},getMedia:function(t,e,n,o){i.default.http.get(e,{credentials:!1,responseType:"json"}).then(function(e){n({slug:t,response:e.body})},function(e){o({slug:t,response:e})})},sendMessage:function(t,e,n){i.default.http.options={credentials:!0,responseType:"json"},i.default.http.post(o.b+"/messages/create",t).then(function(n){e(n,t)},function(t){n(t)})}}},138:function(t,e,n){"use strict";var i=n(0),o=n(2);e.a={getQuestion:function(t,e,n){i.default.http.get(o.b+"/analytics/question/"+t.theClass+"/"+t.slug).then(function(t){e(t.body)},function(t){n(t)})},postAnswer:function(t,e,n){i.default.http.options={credentials:!0,responseType:"json"},i.default.http.post(o.b+"/analytics/answer/response",t).then(function(t){e(t.body)},function(t){n(t)})}}},139:function(t,e,n){"use strict";var i=n(0),o=n(2);e.a={getVisualisation:function(t,e,n){i.default.http.get(o.b+"/messages/visualisation/"+t.class+"/"+t.content+"?whitelist=true").then(function(t){e(t.body)},function(t){n(t)})}}},14:function(t,e,n){"use strict";var i=n(0),o=n(5),s=n(56),r=n.n(s),u=n(143),a=n(144),c=n(153),l=n(149),f=n(151),d=n(145),g=n(146),h=n(148),m=n(147),p=n(150),v=n(152);i.default.use(o.a);var b=r()().format();e.a=new o.a.Store({actions:u,modules:{layout:l.a,navigation:f.a,auth:d.a,composer:g.a,course:h.a,conversation:m.a,lightbox:p.a,video:v.a},state:{debug:!1,timetravel:!1,fauxTime:b,scrollPosition:0,savedScrollPosition:0,pendingScrollPosition:0,offsetScrollPosition:0,autoPlaying:!1,scrollPoints:{},currentSection:void 0},getters:a,mutations:c})},140:function(t,e,n){"use strict";e.a={common:{enable_debug_mode:"Enable Debug Mode",disable_debug_mode:"Disable Debug Mode",toggle_column:"Toggle Column",optional:"Optional",confirm:"Confirm",loading:"Loading",cancel:"Cancel",read_more:"Read More",explore_content:"Continue reading",age:"Your age",current_language:"Current language",current_service:"Current service",current_hub:"Current hub",continue:"Continue",next_page:"Next Page",previous_page:"Previous Page",choose_one:"Choose one",participate:"Participate",scroll_down_for_live_class:"Scroll down for the live class"},nav:{home:"Home",home_description:"Just go back to the home page.",take_part:"Take Part",take_part_description:"Take part in the course, experience the 'Live class' and join the conversation as it unfolds.",schedule:"Schedule",schedule_description:"View the schedule for upcoming content and when it will be relased by your hub.",about:"About",about_description:"Learn more about the Connected Academy platform and how we are changing how education is delivered.",terms:"Terms",terms_description:"Read the terms an conditions of using the Connected Academy platform."},auth:{login:"Login",logout:"Logout",login_with_twitter:"Login with Twitter",login_to_participate:"Login to Participate",register:"Register",welcome_to_registration:"Welcome to registration",attempt_registration:"Register",read_the_following:"Please read the following",answer_the_following:"Please answer the following",enter_your_email:"Your email",enter_your_age:"Your age",select_your_language:"Select your language",authenticate:"Authenticate",authenticating:"Authenticating...",i_agree_to_terms_and_conditions:"I agree with the terms & conditions",form:{your_name:"Your Name",name_placeholder:"e.g. John Smith",your_organisation:"Your Organisation",organisation_placeholder:"e.g. Newcastle University"}},composer:{compose_message:"Compose message",compose_message_active:"Write your message",message_placeholder:"Make a note here...",duration:"{currentTime}s"},course:{load_course:"Load Course",load_hubs:"Load Hubs",current_course_language:"Current course language",course_info:"Course Info",view_current_class:"View current class"},submission:{view_submissions:"View Submissions",make_a_submission:"Make a Submission"},like:{like_content:"Like Content",confirm:"Okay, got it"},demo:{unavailable_title:"Unavailable",unavailable_description:"You are in a demo mode so this is not available right now."}}},141:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n(96),s=n(5),r=n(93),u=n.n(r),a=n(52),c=(n.n(a),n(97)),l=n.n(c),f=n(94),d=n.n(f),g=n(91),h=n.n(g),m=n(92),p=n.n(m),v=n(98),b=(n.n(v),n(19)),S=n.n(b),_=n(95),E=n.n(_),y=n(89),C=n(14),w=n(90),T=this;n.i(v.sync)(C.a,w.a),i.default.component("icon",S.a),i.default.use(o.a),i.default.use(s.a),i.default.use(u.a,i.default.config);var A={logLevel:"error",stringifyArguments:!1,showLogLevel:!1,dev:!1};i.default.use(l.a,A),i.default.use(d.a),i.default.use(p.a),i.default.use(h.a,{id:"UA-44963053-16",router:w.a}),i.default.config.productionTip=!1,i.default.http.options={credentials:!0,responseType:"json"},i.default.http.interceptors.push(function(t,e){e(function(t){403===t.status&&(T.$log.info("Session invalid"),C.a.dispatch("logout"))})}),i.default.config.lang="en",i.default.config.fallbackLang="en",C.a.dispatch("getCourse"),new i.default({el:"#app",store:C.a,router:w.a,template:"<App/>",components:{App:E.a,Lang:y.default}})},142:function(t,e,n){"use strict";var i=n(3);n(5);e.a={methods:{dismissOverlay:function(){this.$store.commit(i.e),this.$store.commit(i.f),this.$store.commit(i.g),this.$store.commit(i.h),this.$store.commit(i.i),this.$store.getters.activeSegment?this.$store.commit(i.j,void 0):this.$store.commit(i.k,void 0)}}}},143:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"setScrollPosition",function(){return u}),n.d(e,"saveScrollPosition",function(){return a}),n.d(e,"resetState",function(){return c});var i=n(0),o=n(14),s=n(107),r=n.n(s),u=function(t,e){var n=t.commit;if(n("setScrollPosition",e),0!==o.a.state.scrollPoints.length){var i=o.a.state.offsetScrollPosition,s=r()(o.a.state.scrollPoints,{content_type:"class"});s&&i>s.top&&i<s.bottom?n("setCurrentSection",s):n("setCurrentSection",void 0)}},a=function(t){(0,t.commit)("setSavedScrollPosition",o.a.state.scrollPosition)},c=function(t){var e=t.commit;i.default.$log.info("Reseting store.state..."),e("resetScrollPoints"),e("setScrollPosition",0)};e.default=u},144:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"fauxTime",function(){return o}),n.d(e,"pageStyle",function(){return s}),n.d(e,"scrollPosition",function(){return r}),n.d(e,"scrollPoints",function(){return u}),n.d(e,"offsetScrollPosition",function(){return a}),n.d(e,"currentTime",function(){return c}),n.d(e,"pendingScrollPosition",function(){return l}),n.d(e,"currentSection",function(){return f}),n.d(e,"autoPlaying",function(){return d});var i=n(14),o=function(t){return t.fauxTime},s=function(t){return{authenticating:"registration"===t.route.name,authenticated:t.auth.isAuthenticated}},r=function(t){return t.scrollPosition},u=function(t){return t.scrollPoints},a=function(t){return t.offsetScrollPosition},c=function(t){var e=i.a.getters.currentSectionScrollPosition;return e?e<0?0:e/31.6:0},l=function(t){return t.pendingScrollPosition},f=function(t){return t.currentSection},d=function(t){return t.autoPlaying}},145:function(t,e,n){"use strict";var i,o,s=n(8),r=n.n(s),u=n(0),a=n(3),c=n(20),l={visible:!1,isAuthenticated:!1,isAuthenticating:!1,session:{},user:void 0,admin:void 0},f=(i={user:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated},isRegistered:function(t){return!!t.user&&t.user.registration}},r()(i,"user",function(t){return t.user}),r()(i,"admin",function(t){return t.admin}),i),d={checkAuth:function(t){var e=t.commit;u.default.$log.info("Checking auth..."),c.a.auth.checkAuth(function(t){return e(a.L,{response:t})},function(t){return e(a.M,{response:t})})},logout:function(t){var e=t.commit;c.a.auth.logout(function(t){return e(a.N,{response:t})},function(t){return e(a.O,{response:t})})}},g=(o={},r()(o,a.c,function(t){l.visible=!0}),r()(o,a.e,function(t){l.visible=!1}),r()(o,a.L,function(t,e){var n=e.response;u.default.$log.info("Auth success"),u.default.$log.info(n),l.isAuthenticated=!0,l.user=n.user,l.admin=n.admin}),r()(o,a.M,function(t,e){e.response;u.default.$log.info("Auth failure"),l.isAuthenticated=!1}),r()(o,a.N,function(t,e){e.response;l.visible=!1,l.isAuthenticated=!1,l.user=void 0}),r()(o,a.O,function(t,e){e.response}),r()(o,"isAuthenticating",function(t,e){t.commit;l.isAuthenticating=e}),r()(o,"setSession",function(t,e){t.commit;l.session=e}),r()(o,"attemptAuth",function(t,e){t.commit;l.user=e,document.location="https://api.connectedacademy.io/v1/auth/login"}),o);e.a={state:l,getters:f,actions:d,mutations:g}},146:function(t,e,n){"use strict";var i,o=n(8),s=n.n(o),r=(n(0),n(3)),u=(n(20),{visible:!0,hidden:!1}),a={mediaHidden:function(){return u.hidden}},c={},l=(i={},s()(i,r.I,function(t){u.visible=!0,u.hidden=!1}),s()(i,r.J,function(t){u.visible=!1,u.hidden=!1}),s()(i,r.K,function(t){u.visible=!1,u.hidden=!0}),s()(i,r.n,function(t,e){e.response,e.postData}),s()(i,r.o,function(t,e){e.response;alert("Message failed to send")}),i);e.a={state:u,getters:a,actions:c,mutations:l}},147:function(t,e,n){"use strict";var i,o=n(8),s=n.n(o),r=n(0),u=n(3),a=n(20),c=n(14),l=n(124),f=n.n(l),d=n(110),g=n.n(d),h=n(64),m=n.n(h),p={visualisation:[],media:[],activeSegment:void 0,peekSegment:void 0,activeSegmentMessages:[],subscribedTo:void 0,likeModalVisible:!1,demoModalVisible:!1},v={subscribedTo:function(){return p.subscribedTo},activeSegment:function(){return p.activeSegment},peekSegment:function(){return p.peekSegment},activeSegmentMessages:function(){return p.activeSegmentMessages},likeModalVisible:function(){return p.likeModalVisible},demoModalVisible:function(){return p.demoModalVisible},modalVisible:function(){return c.a.state.conversation.likeModalVisible||c.a.state.conversation.demoModalVisible},media:function(){return r.default.$log.info("Media from state"),p.media},visualisation:function(){return r.default.$log.info("Visualisation from state"),p.visualisation},videoIsActive:function(){return void 0!==c.a.state.currentSection&&void 0!==c.a.state.currentSection.duration},currentActiveSection:function(){0!==c.a.state.scrollPoints.length&&m()(c.a.state.scrollPoints,function(t,e){if(g()(c.a.state.scrollPosition,t.sectionTop,t.bottom))return t})},currentSectionScrollPosition:function(){return c.a.state.currentSection?c.a.state.offsetScrollPosition-c.a.state.currentSection.top:0},currentSegmentGroup:function(){return c.a.state.currentSection?f.a.floor(c.a.getters.currentSectionScrollPosition/158):-1},currentSegment:function(){return c.a.state.currentSection?f.a.floor(c.a.getters.currentSectionScrollPosition/31.6):0}},b={getMedia:function(t,e){var n=t.commit;a.a.message.getMedia(e.slug,e.path,function(t){return n(u.s,{response:t})},function(t){return n(u.t,{response:t})})}},S=(i={},s()(i,u.u,function(t,e){var n=e.response;p.visualisation=n.data}),s()(i,u.v,function(t,e){e.response;r.default.$log.info("error"),p.visualisation=[]}),s()(i,u.s,function(t,e){var n=e.response;p.media=n.response}),s()(i,u.t,function(t,e){e.response;r.default.$log.info("error"),p.media=[]}),s()(i,u.w,function(t,e){var n=e.response;parseInt(.2*parseInt(n.scope.startsegment)),parseInt(.2*parseInt(n.scope.endsegment));for(var i in n.data){var o=parseInt(.2*parseInt(i)),s=n.data[i];s.segmentGroup=o,r.default.set(p.messages,o,s)}}),s()(i,u.j,function(t,e){p.activeSegment=e}),s()(i,u.k,function(t,e){p.peekSegment=e}),s()(i,u.b,function(t,e){p.subscribedTo=e}),s()(i,u.x,function(t,e){p.activeSegmentMessages=e}),s()(i,u.p,function(t,e){p.activeSegmentMessages.push(e)}),s()(i,u.y,function(t){p.likeModalVisible=!0}),s()(i,u.f,function(t){p.likeModalVisible=!1}),s()(i,u.z,function(t){p.demoModalVisible=!0}),s()(i,u.g,function(t){p.demoModalVisible=!1}),i);e.a={state:p,getters:v,actions:b,mutations:S}},148:function(t,e,n){"use strict";var i,o=n(8),s=n.n(o),r=n(0),u=n(3),a=n(20),c=n(14),l=n(56),f=n.n(l),d=n(284),g=n.n(d),h=n(106),m=n.n(h),p=n(291),v=n.n(p),b={current_class:void 0,current_lang:"en",course:{},hubs:{}},S={course:function(){return b.course},hubs:function(){return b.hubs},currentClass:function(){return b.current_class},courseContent:function(){if(void 0!==b.current_class)return r.default.$log.info(b.current_class.content),m()(b.current_class.content,function(t){return!g()(["title"],t.content_type)})}},_={getCourse:function(t){var e=t.commit,n=c.a.state.fauxTime.replace("+",encodeURIComponent("+"));a.a.course.getSchedule(n,function(t){return e(u.A,{response:t})},function(t){return e(u.B,{response:t})})},getSpecPreload:function(t,e){var n=t.commit,i=c.a.getters.fauxTime.replace("+",encodeURIComponent("+"));b.current_class={slug:e,loading:!0},a.a.course.getSpecPreload(i,e,function(t){return n(u.C,{response:t})},function(t){return n(u.D,{response:t})})},getSpec:function(t,e){var n=t.commit,i=c.a.getters.fauxTime.replace("+",encodeURIComponent("+"));b.current_class={slug:e,loading:!0},a.a.course.getSpec(i,e,function(t){return n(u.C,{response:t})},function(t){return n(u.D,{response:t})})},getHubs:function(t){var e=t.commit;a.a.course.getHubs(a.a.course,function(t){return e(u.E,{response:t})},function(t){return e(u.F,{response:t})})}},E=(i={},s()(i,u.A,function(t,e){var n=e.response;if(c.a.state.timetravel&&n.classes&&n.classes.length&&n.classes[0].release_at){var i=n.classes[0].release_at;if(i){var o=f()(i).add(1,"days").format();c.a.commit("setFauxTime",o)}}b.course=n}),s()(i,u.B,function(t,e){e.response;b.course={}}),s()(i,u.C,function(t,e){var n=e.response;void 0===c.a.state.current_class?b.current_class=n.spec:b.current_class=v()(b.current_class,n.spec),c.a.state.auth.user=n.user,c.a.state.auth.user&&(c.a.state.auth.isAuthenticated=!0,c.a.state.auth.user.registration={})}),s()(i,u.D,function(t,e){e.response;b.current_class={}}),s()(i,u.E,function(t,e){var n=e.response;b.hubs=n}),s()(i,u.F,function(t,e){e.response;b.hubs={}}),s()(i,u.G,function(t,e){b.current_class=e}),s()(i,u.H,function(t,e){b.current_lang=e}),i);e.a={state:b,getters:S,actions:_,mutations:E}},149:function(t,e,n){"use strict";var i={columns:{main:{state:"wide"}}},o={},s={setColumnState:function(t,e){t.commit;i.columns.main.state=e},toggleColumnState:function(t){t.commit;"narrow"===i.columns.main.state?i.columns.main.state="wide":i.columns.main.state="narrow"}},r={};e.a={state:i,getters:o,actions:s,mutations:r}},150:function(t,e,n){"use strict";var i=n(8),o=n.n(i),s={visible:!1,currentMedia:void 0},r={currentLightboxMedia:function(){return s.currentMedia},lightboxVisible:function(){return s.visible}},u={},a=o()({},"SET_LIGHTBOX_MEDIA",function(t,e){s.currentMedia=e,s.visible=void 0!==e});e.a={state:s,getters:r,actions:u,mutations:a}},151:function(t,e,n){"use strict";var i,o=n(8),s=n.n(o),r=n(3),u=n(64),a=n.n(u),c={overlayVisible:!1,visible:!0,minimized:!1,burger:{state:"default"},leftDrawer:{visible:!1},rightDrawer:{visible:!1},pageStyles:void 0},l={navigation:function(){return c},navigationVisible:function(){return c.visible},pageStyles:function(){return c.pageStyles}},f={setHeaderHeight:function(){commit()}},d=(i={},s()(i,r.m,function(t,e){c.pageStyles=e}),s()(i,r.l,function(t,e){a()(e,function(t,e){c[e]=t})}),s()(i,r.P,function(t){c.leftDrawer.visible=!c.leftDrawer.visible,c.overlayVisible=c.leftDrawer.visible,c.burger.state=c.leftDrawer.visible?"close":"default"}),s()(i,r.Q,function(t){c.rightDrawer.visible=!c.rightDrawer.visible,c.overlayVisible=c.rightDrawer.visible}),s()(i,r.h,function(t){c.leftDrawer.visible=!1,c.overlayVisible=!1,c.burger.state="default"}),s()(i,r.i,function(t){c.rightDrawer.visible=!1,c.overlayVisible=!1}),i);e.a={state:c,getters:l,actions:f,mutations:d}},152:function(t,e,n){"use strict";var i,o=n(8),s=n.n(o),r={playing:!1,position:0,duration:void 0},u={videoPlaying:function(){return r.playing},videoPosition:function(){return r.position},videoDuration:function(){return r.duration}},a={},c=(i={},s()(i,"PAUSE_MEDIA",function(t){r.playing=!1}),s()(i,"PLAY_MEDIA",function(t){r.playing=!0}),i);e.a={state:r,getters:u,actions:a,mutations:c}},153:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"setFauxTime",function(){return o}),n.d(e,"setScrollPosition",function(){return s}),n.d(e,"setPendingScrollPosition",function(){return r}),n.d(e,"TOGGLE_DEBUG_MODE",function(){return u}),n.d(e,"TOGGLE_TIMETRAVEL_MODE",function(){return a}),n.d(e,"setAutoPlaying",function(){return c}),n.d(e,"setSavedScrollPosition",function(){return l}),n.d(e,"resetScrollPoints",function(){return f}),n.d(e,"setScrollPoint",function(){return d}),n.d(e,"setCurrentSection",function(){return g});var i=n(0),o=(n(3),function(t,e){t.fauxTime=e}),s=function(t,e){t.scrollPosition=e,t.offsetScrollPosition=t.scrollPosition+(window.innerHeight-200)},r=function(t,e){t.pendingScrollPosition=e},u=function(t){t.debug=!t.debug},a=function(t){t.timetravel=!t.timetravel},c=function(t,e){t.autoPlaying=e},l=function(t,e){t.savedScrollPosition=e},f=function(t){t.scrollPoints={}},d=function(t,e){i.default.set(t.scrollPoints,e.slug,e)},g=function(t,e){t.currentSection=e}},154:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in o||(i.default.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(i.default.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?o[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),o[e]=n}},icons:o}},155:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(31),o=n.n(i),s=n(5),r=n(306),u=n.n(r),a=n(305),c=n.n(a),l=n(142);e.default={name:"app",mixins:[l.a],watch:{activeSegment:function(t){document.body.className=t?"disable-scroll":"allow-scroll"}},data:function(){return{navTitle:"Connected Academy"}},computed:o()({},n.i(s.b)(["activeSegment","pageStyles","navigation","modalVisible"]),{overlayVisible:function(){return this.$store.state.navigation.overlayVisible||this.$store.state.auth.visible||this.$store.state.conversation.activeSegment||this.$store.state.conversation.peekSegment||this.modalVisible}}),components:{Navigation:u.a,BurgerMenu:c.a,LeftDrawer:function(){return n.e(13).then(n.bind(null,330))},RightDrawer:function(){return n.e(10).then(n.bind(null,331))},AuthenticationFlow:function(){return n.e(0).then(n.bind(null,126))},ActionPanel:function(){return n.e(8).then(n.bind(null,320))},MediaLightbox:function(){return n.e(12).then(n.bind(null,329))},DemoModal:function(){return n.e(14).then(n.bind(null,328))}}}},156:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"animated-logo",methods:{goHome:function(){this.$router.push("/"),this.$store.commit("PAUSE_MEDIA"),setTimeout(function(){window.scroll(0,0)},500)}}}},157:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),o=n.n(i),s=n(31),r=n.n(s),u=n(5);e.default=o()({name:"burger-menu",computed:r()({},n.i(u.b)(["navigation"])),methods:{toggleLeftDrawer:function(){this.$ga.event("burger-menu","click","left-drawer-toggled",!0),this.$store.commit("TOGGLE_LEFT_DRAWER")}}},"computed",{state:function(){return this.$store.state.navigation.burger.state}})},158:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(31),o=n.n(i),s=n(5),r=n(3),u=n(304),a=n.n(u),c=n(307),l=n.n(c),f=n(99);n(178),n(177);e.default={name:"navigation",mixins:[f.a],components:{AnimatedLogo:a.a,ProfileIcon:l.a},computed:o()({},n.i(s.b)(["isRegistered","navigation"]),{hidden:function(){return!this.$store.state.navigation.visible},navTitle:function(){return this.$store.getters.currentClass&&this.$store.getters.currentClass.title&&this.navigation.minimized?""+this.$store.getters.currentClass.title:"Connected Academy"},showDebugToggle:function(){return this.$route.query.debug}}),methods:{toggleDebugMode:function(){this.$store.commit(r.d)},scrollTop:function(){window.scroll(0,0)}}}},159:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"profile-icon",computed:{profile:function(){return"url('"+this.$store.state.auth.user.profile+"')"}},methods:{showProfile:function(){this.$ga.event("profile-button","click","profile-viewed",!0),this.$store.commit("TOGGLE_RIGHT_DRAWER")}}}},179:function(t,e){},180:function(t,e){},181:function(t,e){},182:function(t,e){},183:function(t,e){},184:function(t,e){},19:function(t,e,n){n(179);var i=n(15)(n(154),n(308),null,null);t.exports=i.exports},2:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o});var i="https://api.connectedacademy.io/v1",o="3b3b0aa8045ca036d24515344ae0d60b"},20:function(t,e,n){"use strict";var i=(n(0),n(2),n(131)),o=n(129),s=n(130),r=n(135),u=n(136),a=n(133),c=n(137),l=n(139),f=n(134),d=n(138),g=n(132);e.a={auth:i.a,admin:o.a,analytics:s.a,like:r.a,markdown:u.a,course:a.a,message:c.a,visualisation:l.a,feedback:f.a,question:d.a,classroom:g.a}},3:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"e",function(){return o}),n.d(e,"L",function(){return s}),n.d(e,"M",function(){return r}),n.d(e,"N",function(){return u}),n.d(e,"O",function(){return a}),n.d(e,"A",function(){return c}),n.d(e,"B",function(){return l}),n.d(e,"E",function(){return f}),n.d(e,"F",function(){return d}),n.d(e,"C",function(){return g}),n.d(e,"D",function(){return h}),n.d(e,"G",function(){return m}),n.d(e,"H",function(){return p}),n.d(e,"w",function(){return v}),n.d(e,"n",function(){return b}),n.d(e,"o",function(){return S}),n.d(e,"p",function(){return _}),n.d(e,"x",function(){return E}),n.d(e,"b",function(){return y}),n.d(e,"a",function(){return C}),n.d(e,"s",function(){return w}),n.d(e,"t",function(){return T}),n.d(e,"u",function(){return A}),n.d(e,"v",function(){return M}),n.d(e,"y",function(){return P}),n.d(e,"f",function(){return k}),n.d(e,"z",function(){return I}),n.d(e,"g",function(){return D}),n.d(e,"l",function(){return L}),n.d(e,"d",function(){return x}),n.d(e,"P",function(){return $}),n.d(e,"Q",function(){return O}),n.d(e,"h",function(){return R}),n.d(e,"i",function(){return G}),n.d(e,"I",function(){return U}),n.d(e,"J",function(){return H}),n.d(e,"K",function(){return V}),n.d(e,"r",function(){return F}),n.d(e,"q",function(){return j}),n.d(e,"j",function(){return N}),n.d(e,"k",function(){return z}),n.d(e,"m",function(){return B});var i="SHOW_AUTH",o="DISMISS_AUTH",s="CHECK_AUTH_SUCCESS",r="CHECK_AUTH_FAILURE",u="LOGOUT_SUCCESS",a="LOGOUT_FAILURE",c="GET_SCHEDULE_SUCCESS",l="GET_SCHEDULE_FAILURE",f="GET_HUBS_SUCCESS",d="GET_HUBS_FAILURE",g="GET_SPEC_SUCCESS",h="GET_SPEC_FAILURE",m="SET_CURRENT_CLASS",p="SET_COURSE_LANG",v="GET_MESSAGES_SUCCESS",b="SEND_MESSAGE_SUCCESS",S="SEND_MESSAGE_FAILURE",_="PUSH_SEGMENT_MESSAGE",E="SET_SEGMENT_MESSAGES",y="SET_SUBSCRIBED_TO",C="SET_LIGHTBOX_MEDIA",w="GET_MEDIA_SUCCESS",T="GET_MEDIA_FAILURE",A="GET_VISUALISATION_SUCCESS",M="GET_VISUALISATION_FAILURE",P="SHOW_LIKE_MODAL",k="DISMISS_LIKE_MODAL",I="SHOW_DEMO_MODAL",D="DISMISS_DEMO_MODAL",L="SET_NAV_STATE",x="TOGGLE_DEBUG_MODE",$="TOGGLE_LEFT_DRAWER",O="TOGGLE_RIGHT_DRAWER",R="DISMISS_LEFT_DRAWER",G="DISMISS_RIGHT_DRAWER",U="SHOW_MEDIA",H="PEEK_MEDIA",V="HIDE_MEDIA",F="PLAY_MEDIA",j="PAUSE_MEDIA",N="SET_ACTIVE_SEGMENT",z="SET_PEEK_SEGMENT",B="SET_PAGE_STYLE"},302:function(t,e,n){function i(t){return n(o(t))}function o(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var s={"./locale":88,"./locale.js":88};i.keys=function(){return Object.keys(s)},i.resolve=o,t.exports=i,i.id=302},304:function(t,e,n){n(184);var i=n(15)(n(156),n(313),"data-v-4c7fb104",null);t.exports=i.exports},305:function(t,e,n){n(182);var i=n(15)(n(157),n(311),"data-v-36e09aaf",null);t.exports=i.exports},306:function(t,e,n){n(181);var i=n(15)(n(158),n(310),"data-v-2bda014f",null);t.exports=i.exports},307:function(t,e,n){n(180);var i=n(15)(n(159),n(309),"data-v-2574b5d2",null);t.exports=i.exports},308:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return n("path",t._b({},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return n("polygon",t._b({},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}},309:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-icon",on:{click:t.showProfile}},[n("div",{staticClass:"profile-image",style:{"background-image":t.profile}})])},staticRenderFns:[]}},310:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation",class:{registered:t.isRegistered,hidden:t.hidden,minimized:t.navigation.minimized}},[n("animated-logo",{on:{click:t.scrollTop}}),t.showDebugToggle?n("div",{attrs:{id:"debug-button"},on:{click:t.toggleDebugMode}},[n("icon",{attrs:{name:"wrench"}})],1):t._e(),t.isRegistered?n("profile-icon"):t._e(),n("div",{attrs:{id:"login-button"},on:{click:t.showAuth}},[n("icon",{attrs:{name:"user"}})],1)],1)},staticRenderFns:[]}},311:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"burger-menu",class:{active:"close"===t.state},on:{click:t.toggleLeftDrawer}},[n("svg",{class:{cross:"close"===t.state},attrs:{viewBox:"0 0 800 600"}},[n("g",[n("path",{attrs:{d:"M180,220 C300,220 520,220 540,220 C740,220 680,580 520,380 C440,300 300,160 300,160",id:"top"}}),n("path",{attrs:{d:"M180,220 C300,220 520,220 540,220 C740,220 680,580 520,380 C440,300 300,160 300,160",id:"bottom",transform:"translate(480, 300) scale(1, -1) translate(-480, -300)"}})])])])},staticRenderFns:[]}},312:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.pageStyles,attrs:{id:"app"}},[n("demo-modal"),n("authentication-flow"),n("media-lightbox"),n("burger-menu"),n("left-drawer"),n("right-drawer"),n("div",{staticClass:"main-page",style:{"padding-top":this.$store.getters.navigationVisible?"0":"0px"}},[n("navigation"),n("div",{staticClass:"page-header",class:{minimized:t.navigation.minimized}}),n("transition",{attrs:{name:"fade",appear:"appear",mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1)],1),n("div",{class:{visible:t.overlayVisible},attrs:{id:"content-overlay"},on:{click:t.dismissOverlay}})],1)},staticRenderFns:[]}},313:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animated-logo",on:{click:t.goHome}},[n("div",{attrs:{id:"logo-text"}},[t._v("Connected Academy")])])},staticRenderFns:[]}},317:function(t,e){},89:function(t,e,n){"use strict";var i=n(0),o=(n(5),n(52)),s=n.n(o),r=n(140);i.default.use(s.a),i.default.locale("en",r.a)},90:function(t,e,n){"use strict";var i=n(0),o=n(314),s=function(){return n.e(7).then(n.bind(null,324))},r=function(){return n.e(3).then(n.bind(null,325))},u=function(){return n.e(2).then(n.bind(null,322))},a=function(){return n.e(5).then(n.bind(null,323))},c=function(){return n.e(1).then(n.bind(null,326))},l=function(){return n.e(9).then(n.bind(null,321))},f=function(){return n.e(4).then(n.bind(null,327))},d=function(){return n.e(6).then(n.bind(null,332))},g=function(){return n.e(11).then(n.bind(null,333))};i.default.use(o.a),e.a=new o.a({routes:[{name:"course-redirect",path:"/course/:classSlug/:contentSlug/:segmentId",redirect:function(t){var e=(t.hash,t.params);t.query;return"undefined"===e.classSlug||"undefined"===e.contentSlug||"undefined"===e.segmentId?{path:"/"}:{path:"/",query:{class:e.classSlug,content:e.contentSlug,segment:e.segmentId}}}},{name:"course",path:"/",component:u},{name:"class",path:"/course/:classSlug",component:u},{name:"registration",path:"/registration",component:r},{name:"feedback",path:"/feedback/browse/:classSlug/:contentSlug",component:c},{name:"view_feedback",path:"/feedback/:id",component:l},{name:"fourcorners",path:"/fourcorners",component:f},{name:"markdown",path:"/markdown/:url",component:a},{name:"schedule",path:"/schedule",component:g},{name:"about",path:"/about",component:d},{name:"admin",path:"/admin",component:s},{path:"*",redirect:"/"}]})},95:function(t,e,n){n(183);var i=n(15)(n(155),n(312),null,null);t.exports=i.exports},99:function(t,e,n){"use strict";var i=n(3);n(5);e.a={methods:{showAuth:function(){this.$store.commit(i.c)}}}}},[141]);