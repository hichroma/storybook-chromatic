module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist",r(r.s=14)}([function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("babel-runtime/core-js/promise")},function(e,t){e.exports=require("babel-runtime/helpers/extends")},function(e,t){e.exports=require("babel-runtime/helpers/toConsumableArray")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("denodeify")},function(e,t){e.exports=require("babel-runtime/helpers/classCallCheck")},function(e,t){e.exports=require("babel-runtime/helpers/createClass")},function(e,t){e.exports=require("babel-runtime/helpers/slicedToArray")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=process.env,o=n.CHROMATIC_SERVER_PORT,a=void 0===o?3004:o,i=n.CHROMATIC_INDEX_URL,u=void 0===i?"https://index.chromaticqa.com":i,s=n.CHROMATIC_TUNNEL_URL,c=void 0===s?"https://tunnel.chromaticqa.com":s,l=n.CHROMATIC_CREATE_TUNNEL,d=void 0===l?"true":l,f=n.CHROMATIC_APP_CODE,p=n.LOGGLY_CUSTOMER_TOKEN,m=void 0===p?"b5e26204-cdc5-4c78-a9cc-c69eb7fabad3":p;t.CHROMATIC_SERVER_PORT=a,t.CHROMATIC_INDEX_URL=u,t.CHROMATIC_TUNNEL_URL=c,t.CHROMATIC_CREATE_TUNNEL=d,t.CHROMATIC_APP_CODE=f,t.LOGGLY_CUSTOMER_TOKEN=m},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=O(r(4)),a=O(r(0)),i=O(r(3)),u=O(r(15)),s=O(r(1)),c=(n=(0,s.default)(a.default.mark(function e(t,r){var n,o,s,l,d,f,p;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.runQuery(I,r);case 2:if(n=e.sent,o=n.app.build,P("build:"+(0,u.default)(o)),s=o.status,l=o.inProgressCount,d=o.snapshotCount,f=o.changeCount,p=o.errorCount,"BUILD_IN_PROGRESS"!==s){e.next=11;break}return l!==L&&(L=l,U(l+"/"+N(d,"snapshot")+" remain to test. ("+N(f,"change")+", "+N(p,"error")+")")),e.next=10,new i.default(function(e){return setTimeout(e,S)});case 10:return e.abrupt("return",c(t,r));case 11:return e.abrupt("return",o);case 12:case"end":return e.stop()}},e,this)})),function(e,t){return n.apply(this,arguments)}),l=O(r(7)),d=r(16),f=O(r(2)),p=O(r(17)),m=O(r(18)),h=r(19),v=r(20),b=O(r(21)),y=O(r(24)),_=r(25),w=O(_),g=O(r(26)),x=r(28),k=O(r(31)),C=r(33),T=r(34),E=r(13),R=O(r(35)),A=O(r(39));function O(e){return e&&e.__esModule?e:{default:e}}var S=1e3,I="\n  query TesterBuildQuery($buildNumber: Int!) {\n    app {\n      build(number: $buildNumber) {\n        id\n        status\n        autoAcceptChanges\n        inProgressCount: snapshotCount(statuses: [SNAPSHOT_IN_PROGRESS])\n        snapshotCount\n        changeCount\n        errorCount: snapshotCount(statuses: [SNAPSHOT_CAPTURE_ERROR])\n      }\n    }\n  }\n",P=(0,f.default)("storybook-chromatic:tester");function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.noPrefix,n=void 0!==r&&r,o=t.level,a=void 0===o?"log":o;process.env.DISABLE_LOGGING||(n?console[a](e):console[a]("Chromatic Tester: "+e))}function N(e,t,r){var n=1===e?t:t+"s";return n.endsWith("ys")&&(n=n.replace(/ys$/,"ies")),r?n:e+" "+n}var L=void 0;t.default=function(){var e=(0,s.default)(a.default.mark(function e(t){var r,n,i,s,f,O,S,I,L,B,q,D,M,j,H,G,V,W,Q,Y,F,$,J,K,z,X,Z,ee,te,re,ne,oe,ae,ie,ue,se,ce,le,de,fe,pe,me,he,ve,be,ye,_e,we,ge=t.appCode,xe=t.scriptName,ke=t.commandName,Ce=t.noStart,Te=void 0!==Ce&&Ce,Ee=t.url,Re=t.dirname,Ae=t.only,Oe=t.fromCI,Se=void 0!==Oe&&Oe,Ie=t.autoAcceptChanges,Pe=void 0!==Ie&&Ie,Ue=t.exitZeroOnChanges,Ne=void 0!==Ue&&Ue,Le=t.verbose,Be=void 0!==Le&&Le,qe=t.interactive,De=void 0===qe||qe,Me=t.indexUrl,je=void 0===Me?E.CHROMATIC_INDEX_URL:Me,He=t.tunnelUrl,Ge=void 0===He?E.CHROMATIC_TUNNEL_URL:He,Ve=t.createTunnel,We=void 0===Ve||Ve,Qe=t.originalArgv,Ye=void 0!==Qe&&Qe,Fe=t.sessionId,$e=void 0===Fe?(0,h.v4)():Fe;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((0,R.default)({sessionId:$e}),P("Creating build with session id: "+$e),P("Connecting to index:"+je+" and "+(We?"using tunnel:"+Ge:"not creating a tunnel")),r=new k.default({uri:je+"/graphql",headers:{"x-chromatic-session-id":$e}}),n=process.env,i=n.TRAVIS_EVENT_TYPE,s=n.TRAVIS_PULL_REQUEST_SLUG,f=n.TRAVIS_REPO_SLUG,"pull_request"===i&&s===f&&U("WARNING: Running Chromatic on a Travis PR build from an internal branch.\n\nIt is recommended to run Chromatic on the push builds from Travis where possible.\nWe advise turning on push builds and disabling Chromatic for internal PR builds.\nRead more: http://docs.chromaticqa.com/setup_ci#travis\n",{noPrefix:!0,level:"warn"}),ge){e.next=8;break}throw new Error("You must provide an app code  -- visit https://www.chromaticqa.com to get your code.\nPass your app code with the `CHROMATIC_APP_CODE` environment variable or the `--app-code` flag.");case 8:if(xe||ke||Te){e.next=10;break}throw new Error("Either scriptName, commandName or noStart is required");case 10:return e.prev=10,e.next=13,r.runQuery("\n  mutation TesterCreateAppTokenMutation($appCode: String!) {\n    createAppToken(code: $appCode)\n  }\n",{appCode:ge});case 13:O=e.sent,S=O.createAppToken,r.setJwtToken(S),e.next=23;break;case 18:if(e.prev=18,e.t0=e.catch(10),!(e.t0[0]&&e.t0[0].message&&e.t0[0].message.match("No app with code"))){e.next=22;break}throw new Error("Incorrect app code '"+ge+"' -- visit https://www.chromaticqa.com to get your code");case 22:throw e.t0;case 23:return e.next=25,(0,C.getCommit)();case 25:return I=e.sent,L=I.commit,B=I.committedAt,q=I.committerEmail,D=I.committerName,e.next=32,(0,C.getBranch)();case 32:if(M=e.sent,!(j="pull_request"===process.env.TRAVIS_EVENT_TYPE)){e.next=39;break}if(L=process.env.TRAVIS_PULL_REQUEST_SHA,M=process.env.TRAVIS_PULL_REQUEST_BRANCH,L&&M){e.next=39;break}throw new Error("`TRAVIS_EVENT_TYPE` environment variable set to 'pull_request', \nbut `TRAVIS_PULL_REQUEST_SHA` and `TRAVIS_PULL_REQUEST_BRANCH` are not both set.\n\nRead more here: https://docs.chromaticqa.com/setup_ci#travis");case 39:return"HEAD"!==M&&M||"HEAD"!==(M=(0,m.default)().branch)&&M||(M=process.env.HEAD||process.env.GERRIT_BRANCH||process.env.CI_BRANCH||M||"HEAD"),P("git info: "+(0,u.default)({commit:L,committedAt:B,branch:M})),e.next=43,(0,C.getBaselineCommits)(r);case 43:if(H=e.sent,P("Found baselineCommits: "+H),G=void 0,V=void 0,W=void 0,Q=5,e.prev=49,Y=void 0,F=void 0,!Re){e.next=61;break}return U("Uploading your built storybook..."),e.next=56,(0,A.default)({client:r,dirname:Re});case 56:Y=e.sent,P("uploading to s3, got "+Y),U("Uploaded your build, verifying"),e.next=91;break;case 61:if(Te){e.next=69;break}return U("Starting storybook"),e.next=65,(0,w.default)({scriptName:xe,commandName:ke,url:Ee});case 65:G=e.sent,U("Started storybook at "+Ee),e.next=75;break;case 69:if(!Ee){e.next=75;break}return e.next=72,(0,_.checkResponse)(Ee);case 72:if(e.sent){e.next=74;break}throw new Error("No server responding at "+Ee+" -- make sure you've started it.");case 74:U("Detected storybook at "+Ee);case 75:if($=(0,v.parse)(Ee,!0),J=$.port,K=$.pathname,z=$.query,X=$.hash,Y=Ee,!We){e.next=89;break}return U("Opening tunnel to Chromatic capture servers"),e.next=81,(0,g.default)({tunnelUrl:Ge,port:J});case 81:V=e.sent,P("Opened tunnel to "+V.url),(Z=(0,v.parse)(V.cachedUrl||V.url)).pathname=K,Z.query=z,Z.hash=X,F=Z.format(),V.cachedUrl?((ee=(0,v.parse)(V.url,!0)).query=(0,o.default)({},ee.query,{path:(0,v.format)({pathname:K,query:z})}),ee.hash=X,ee.search=null,Y=ee.format()):Y=F;case 89:P("Connecting to "+Y+" (cachedUrl "+F+")"),U("Uploading and verifying build (this may take a few minutes depending on your connection)");case 91:if(te=function(){return!0},!Ae){e.next=98;break}if(re=Ae.match(/(.*):([^:]*)/)){e.next=96;break}throw new Error('--only argument must provided in the from "componentName:storyName"');case 96:U("Running only story '"+re[2]+"' of component '"+re[1]+"'"),te=function(e){var t=e.name,r=e.componentName,n=e.component.name;return t===re[2]&&(r||n)===re[1]};case 98:return e.next=100,(0,b.default)(Y,{verbose:Be});case 100:if(e.t1=te,0!==(ne=e.sent.filter(e.t1)).length){e.next=104;break}throw new Error("Cannot run a build with no stories. Please add some stories!");case 104:return U("Found "+N(ne.length,"story")),W=Se||!!process.env.CI||!!process.env.REPOSITORY_URL,oe=(0,y.default)(),ae=oe.storybookVersion,ie=oe.viewLayer,P("Detected build fromCI:"+W),P("Detected package version:"+T.version+", storybook version:"+ae+", view layer: "+ie),e.next=111,r.runQuery("\n  mutation TesterCreateBuildMutation($input: CreateBuildInput!, $isolatorUrl: String!) {\n    createBuild(input: $input, isolatorUrl: $isolatorUrl) {\n      id\n      number\n      specCount\n      snapshotCount\n      componentCount\n      webUrl\n    }\n  }\n",{input:{cachedUrl:F,autoAcceptChanges:Pe,branch:M,commit:L,committedAt:B,baselineCommits:H,runtimeSpecs:ne,fromCI:W,isTravisPrBuild:j,packageVersion:T.version,storybookVersion:ae,viewLayer:ie,committerEmail:q,committerName:D},isolatorUrl:Y});case 111:return ue=e.sent,se=ue.createBuild,ce=se.number,le=se.snapshotCount,de=se.specCount,fe=se.componentCount,pe=se.webUrl,me="View it online at "+pe,U("Started Build "+ce+" ("+N(fe,"component")+", "+N(de,"story")+", "+N(le,"snapshot")+").\n\n"+me+"."),e.next=122,c(r,{buildNumber:ce});case 122:he=e.sent,ve=he.status,be=he.autoAcceptChanges,ye=he.changeCount,_e=he.errorCount,e.t2=ve,e.next="BUILD_PASSED"===e.t2?130:"BUILD_ACCEPTED"===e.t2?133:"BUILD_PENDING"===e.t2?133:"BUILD_DENIED"===e.t2?133:"BUILD_FAILED"===e.t2?137:"BUILD_TIMED_OUT"===e.t2?140:"BUILD_ERROR"===e.t2?140:143;break;case 130:return U("Build "+ce+" passed! "+me+"."),Q=0,e.abrupt("break",144);case 133:return U("Build "+ce+" has "+N(ye,"change")+". "+me+"."),0!==(Q=Ne||be?0:1)&&U("Pass --exit-zero-on-changes if you want this command to exit successfully in this case.\n  Alternatively, pass --auto-accept-changes if you want changed builds to pass on this branch.\n  Read more: http://docs.chromaticqa.com/test"),e.abrupt("break",144);case 137:return U("Build "+ce+" has "+N(_e,"error")+". "+me+"."),Q=2,e.abrupt("break",144);case 140:return U("Build "+ce+" has failed to run. Our apologies. Please try again."),Q=3,e.abrupt("break",144);case 143:throw new Error("Unexpected build status: "+ve);case 144:e.next=155;break;case 146:if(e.prev=146,e.t3=e.catch(49),!(e.t3.length&&e.t3[0]&&e.t3[0].message&&e.t3[0].message.match(/Cannot run a build with no specs./))){e.next=153;break}U(e.t3[0].message),Q=255,e.next=155;break;case 153:throw P("Got error %O",e.t3),e.t3;case 155:if(e.prev=155,V&&V.close(),!G){e.next=160;break}return e.next=160,(0,l.default)(p.default)(G.pid,"SIGHUP");case 160:return e.finish(155);case 161:if((0,x.checkPackageJson)()||!Ye||W||!De){e.next=167;break}return we=("CHROMATIC_APP_CODE="+ge+" chromatic test "+Ye.slice(2).join(" ")).replace(/--app-code[= ]\S+/,"").trim(),e.next=165,(0,d.confirm)("\nYou have not added Chromatic's test script to your `package.json`. Would you like me to do it for you?");case 165:e.sent?((0,x.addScriptToPackageJson)("chromatic",we),U("\nAdded script `chromatic`. You can now run it here or in CI with `npm run chromatic` (or `yarn chromatic`)\n\nNOTE: I wrote your app code to the `CHROMATIC_APP_CODE` environment variable. The app code cannot be used to read snapshot data, it can only be used to create new builds. If you would still prefer not to check it into source control, you can remove it from `package.json` and set it via an environment variable instead.",{noPrefix:!0})):U('\nNo problem. You can add it later with:\n{\n  "scripts": {\n    "chromatic": "'+we+'"\n  }\n}',{noPrefix:!0});case 167:return e.abrupt("return",Q);case 168:case"end":return e.stop()}},e,this,[[10,18],[49,146,155,161]])}));return function(t){return e.apply(this,arguments)}}()},function(e,t){e.exports=require("babel-runtime/core-js/json/stringify")},function(e,t){e.exports=require("node-ask")},function(e,t){e.exports=require("tree-kill")},function(e,t){e.exports=require("env-ci")},function(e,t){e.exports=require("uuid")},function(e,t){e.exports=require("url")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(0)),o=l(r(3)),a=l(r(22)),i=l(r(1)),u=l(r(8)),s=l(r(9)),c=r(23);function l(e){return e&&e.__esModule?e:{default:e}}function d(e){Object.defineProperty(e.window,"matchMedia",{value:function(){return{matches:!0,addListener:function(){},removeListener:function(){}}}});var t=function(){function e(){(0,u.default)(this,e),this.store={}}return(0,s.default)(e,[{key:"getItem",value:function(e){return this.store[e]}},{key:"removeItem",value:function(e){delete this.store[e]}},{key:"setItem",value:function(e,t){this.store[e]=t.toString()}},{key:"clear",value:function(){this.store={}}}]),e}();Object.defineProperty(e.window,"localStorage",{value:new t});var r,n=function(){function e(){(0,u.default)(this,e)}return(0,s.default)(e,[{key:"addEventListener",value:function(){}},{key:"removeEventLister",value:function(){}},{key:"postMessage",value:function(){}},{key:"terminate",value:function(){}}]),e}();Object.defineProperty(e.window,"Worker",n),Object.defineProperty(e.window,"crypto",{value:{getRandomValues:function(){return 0}}}),Object.defineProperty(e.window.navigator,"mimeTypes",{value:function(){return[]}}),(r=e.window).HTMLCanvasElement.prototype.getContext=function(){return{fillRect:function(){return{}},clearRect:function(){return{}},getImageData:function(e,t,r,n){return{data:new Array(r*n*4)}},putImageData:function(){return{}},createImageData:function(){return[]},setTransform:function(){return{}},drawImage:function(){return{}},save:function(){return{}},fillText:function(){return{}},restore:function(){return{}},beginPath:function(){return{}},moveTo:function(){return{}},lineTo:function(){return{}},closePath:function(){return{}},stroke:function(){return{}},translate:function(){return{}},scale:function(){return{}},rotate:function(){return{}},arc:function(){return{}},fill:function(){return{}},measureText:function(){return{width:0}},transform:function(){return{}},rect:function(){return{}},clip:function(){return{}}}},r.HTMLCanvasElement.prototype.toDataURL=function(){return""}}t.default=function(){var e=(0,i.default)(n.default.mark(function e(t){var r,i,u,s=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).verbose,l=void 0!==s&&s;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],i=new c.VirtualConsole,(0,a.default)(console).forEach(function(e){i.on(e,function(t){return r.push({logType:e,log:t})})}),i.on("jsdomError",function(e){return r.push({logType:"error",log:e})}),l&&i.sendTo(console),e.next=7,c.JSDOM.fromURL(t,{userAgent:"Chromatic",runScripts:"dangerously",resources:"usable",virtualConsole:i,pretendToBeVisual:!0});case 7:return d(u=e.sent),e.abrupt("return",new o.default(function(e,n){return u.window.document.addEventListener("DOMContentLoaded",function(){try{var o="=========================";if(!u.window.__chromaticRuntimeSpecs__&&!u.window.__STORYBOOK_CLIENT_API__)throw console.error("Didn't find 'window.__chromaticRuntimeSpecs__' at "+t+".\nHave you installed the Chromatic widget or addon correctly?\n"),!l&&r.length&&(console.error("Your app's output:\n"+o+"\n"),r.forEach(function(e){var t=e.logType,r=e.log;return console[t](r)}),console.error("\n"+o+"\n")),new Error("Didn't find 'window.__chromaticRuntimeSpecs__' at "+t+".");if(r.find(function(e){return"error"===e.logType})&&(console.error("\nYour app logged the following to the error console:\n"+o),r.filter(function(e){return"error"===e.logType}).forEach(function(e){var t=e.logType,r=e.log;return console[t](r)}),console.error("\n"+o+"\nThis may lead to some stories not working right or getting detected by Chromatic\nWe suggest you fix the errors, but we will continue anyway..\n")),!u.window.__chromaticRuntimeSpecs__)throw new Error("Didn't find Chromatic addon in your storybook.\n        \nDid you add it with `import 'storybook-chromatic'` in your `.storybook/config.js`?\n\nRead more: http://docs.chromaticqa.com");var a=u.window.__chromaticRuntimeSpecs__();u.window.close(),e(a)}catch(e){u.window.close(),n(e)}})}));case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},function(e,t){e.exports=require("babel-runtime/core-js/object/keys")},function(e,t){e.exports=require("jsdom")},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray2=__webpack_require__(10),_slicedToArray3=_interopRequireDefault(_slicedToArray2);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.default=getStorybookInfo;var viewLayers=["react","angular","vue","polymer","mithril","marko","html","svelte","riot","ember"],require2=eval("require");function getStorybookInfo(){var e=process.env.CHROMATIC_STORYBOOK_VERSION;if(e){var t=e.split("@"),r=(0,_slicedToArray3.default)(t,2),n=r[0],o=r[1];if(!n||!o)throw new Error('CHROMATIC_STORYBOOK_VERSION misspecified -- use "viewLayer@version"');return{viewLayer:n,storybookVersion:o}}for(;viewLayers.length>0;){var a=viewLayers.shift();try{return{viewLayer:a,storybookVersion:require2("@storybook/"+a+"/package.json").version}}catch(e){}}throw new Error("Couldn't discover storybook version. Try upgrading the storybook-chromatic package?")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkResponse=void 0;var n,o,a=h(r(5)),i=h(r(4)),u=h(r(3)),s=h(r(0)),c=h(r(1)),l=t.checkResponse=(n=(0,c.default)(s.default.mark(function e(t){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.default)(t);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,this,[[0,6]])})),function(e){return n.apply(this,arguments)}),d=(o=(0,c.default)(s.default.mark(function e(t,r){var n;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Date.now()+b,e.abrupt("return",new u.default(function(e,o){var a,i=(a=(0,c.default)(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Date.now()>n)){t.next=4;break}return u=!0,o(new Error("No server responding at "+r+" within "+b/1e3+" seconds.")),t.abrupt("return");case 4:return t.next=6,l(r);case 6:if(!t.sent){t.next=10;break}return u=!0,e(),t.abrupt("return");case 10:setTimeout(i,v);case 11:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)}),u=!1;if(i(),t){var d="";t.stderr.on("data",function(e){d+=e.toString()}),t.stdout.on("data",function(e){d+=e.toString()}),t.on("close",function(){u||o(new Error("Script failed to start: "+d+"\n"))})}}));case 2:case"end":return e.stop()}},e,this)})),function(e,t){return o.apply(this,arguments)}),f=r(11),p=h(r(12)),m=h(r(6));function h(e){return e&&e.__esModule?e:{default:e}}var v=1e3,b=3e5;t.default=function(){var e=(0,c.default)(s.default.mark(function e(t){var r,n,o,u,c,p=t.scriptName,h=t.commandName,v=t.url;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=(0,i.default)({},process.env,{NODE_ENV:"development",BROWSER:"none"}),n=void 0,!p){e.next=13;break}return e.next=5,l(v);case 5:if(!e.sent){e.next=7;break}throw new Error("Detected process already running at "+v+"\nIf you are sure this is your server, pass `--do-not-start` to skip this step.");case 7:o=process.env.npm_execpath,u="string"==typeof o&&/\.m?js/.test(m.default.extname(o)),c=u?process.execPath:o||"npm",n=(0,f.spawn)(c,[].concat((0,a.default)(u?[o]:[]),["run",p]),{env:r}),e.next=16;break;case 13:if(h){e.next=15;break}throw new Error("You must pass commandName or scriptName");case 15:n=(0,f.spawn)(h,{env:r,shell:!0});case 16:return e.next=18,d(n,v);case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(0)),o=s(r(1)),a=s(r(27)),i=s(r(2)),u=s(r(7));function s(e){return e&&e.__esModule?e:{default:e}}var c=(0,i.default)("storybook-chromatic:tester:tunnel");t.default=function(){var e=(0,o.default)(n.default.mark(function e(t){var r,o=t.tunnelUrl,i=t.port;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}throw new Error("Need to pass a port into `openTunnel`");case 2:return e.next=4,(0,u.default)(a.default)(i,{local_host:"localhost",host:o});case 4:return(r=e.sent).on("url",function(e){return c("Got tunnel url: %s",e)}),r.on("request",function(e){return c("Got request: %O",e)}),r.tunnel_cluster.on("error",function(e){return c("Got tunnel cluster error: %O",e)}),e.abrupt("return",r);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},function(e,t){e.exports=require("@chromaui/localtunnel")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(29));t.checkPackageJson=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).appDir,t=void 0===e?process.cwd():e,r=(0,a.readFileSync)(o.default.resolve(t,"./package.json"));return(0,n.default)(r.scripts||{}).find(function(e){return e.match("chromatic test")})},t.addScriptToPackageJson=function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).appDir,n=void 0===r?process.cwd():r,i=o.default.resolve(n,"./package.json"),u=(0,a.readFileSync)(i);if(u[e])throw new Error("Script named '"+e+"' already exists in package.json");u.scripts||(u.scripts={});u.scripts[e]=t,(0,a.writeFileSync)(i,u,{spaces:2})};var o=i(r(6)),a=r(30);function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=require("babel-runtime/core-js/object/values")},function(e,t){e.exports=require("jsonfile")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(0)),o=c(r(1)),a=c(r(4)),i=c(r(8)),u=c(r(9)),s=r(32);function c(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){var r=t.uri,n=t.jwtToken,o=t.headers;(0,i.default)(this,e),this.apolloFetch=(0,s.createApolloFetch)({uri:r}),this.headers=o,n&&this.setJwtToken(n)}return(0,u.default)(e,[{key:"setJwtToken",value:function(e){var t=this;this.apolloFetch.use(function(r,n){var o=r.options;e&&(o.headers=(0,a.default)({},o.headers,t.headers,{authorization:"bearer "+e})),n()})}},{key:"runQuery",value:function(){var e=(0,o.default)(n.default.mark(function e(t,r){var o,a,i;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apolloFetch({query:t,variables:r});case 2:if(o=e.sent,a=o.data,!(i=o.errors)){e.next=7;break}throw i;case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}],[{key:"runQuery",value:function(){var t=(0,o.default)(n.default.mark(function t(r,o,a){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new e(r).runQuery(o,a));case 1:case"end":return t.stop()}},t,this)}));return function(e,r,n){return t.apply(this,arguments)}}()}]),e}();t.default=l},function(e,t){e.exports=require("apollo-fetch")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBaselineCommits=t.getBranch=t.getCommit=t.FETCH_N_INITIAL_BUILD_COMMITS=void 0;var n,o,a,i,u,s,c,l,d=k(r(5)),f=k(r(10)),p=k(r(0)),m=k(r(1)),h=(n=(0,m.default)(p.default.mark(function e(t){var r,n;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",(0,x.execSync)(t).toString().trim());case 4:if(e.prev=4,e.t0=e.catch(0),r=e.t0.message,!(n=void 0===r?"":r).match("Not a git repository")){e.next=9;break}throw new Error("Unable to execute git command '"+t+"'.\n\nChromatic only works in git projects.\nContact us at support@hichroma.com if you need to use Chromatic outside of one.\n");case 9:if(!n.match("does not have any commits yet")){e.next=11;break}throw new Error("Unable to execute git command '"+t+"'.\n\nChromatic requires that you have created a commit before it can be run.\n");case 11:throw e.t0;case 12:case"end":return e.stop()}},e,this,[[0,4]])})),function(e){return n.apply(this,arguments)}),v=t.getCommit=(o=(0,m.default)(p.default.mark(function e(){var t,r,n,o,a,i;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h('git log -n 1 --format="%H,%ct,%ce,%cn"');case 2:return t=e.sent.split(","),r=(0,f.default)(t,4),n=r[0],o=r[1],a=r[2],i=r[3],e.abrupt("return",{commit:n,committedAt:1e3*o,committerEmail:a,committerName:i});case 9:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)}),b=t.getBranch=(a=(0,m.default)(p.default.mark(function e(){return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h("git rev-parse --abbrev-ref HEAD"));case 1:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)}),y=(i=(0,m.default)(p.default.mark(function e(t){return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h('git cat-file -e "'+t+'^{commit}"');case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,this,[[0,6]])})),function(e){return i.apply(this,arguments)}),_=(u=(0,m.default)(p.default.mark(function e(t,r){var n,o,a=r.firstCommittedAtSeconds,i=r.commitsWithBuilds,u=r.commitsWithoutBuilds;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="git rev-list HEAD       "+(a?"--since "+a:"")+"       -n "+(t+u.length)+" --not "+A(i),C("running "+n),e.next=4,h(n);case 4:return e.t0=function(e){return!!e},o=e.sent.split("\n").filter(e.t0),C("command output: "+o),e.abrupt("return",o.filter(function(e){return!i.includes(e)}).filter(function(e){return!u.includes(e)}).slice(0,t));case 8:case"end":return e.stop()}},e,this)})),function(e,t){return u.apply(this,arguments)}),w=(s=(0,m.default)(p.default.mark(function e(t){var r,n,o;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return",t);case 2:return r=t.map(function(e){return'"'+e+'^@"'}),n="git rev-list "+A(t)+" --not "+A(r),C("running "+n),e.next=7,h(n);case 7:return e.t0=function(e){return!!e},o=e.sent.split("\n").filter(e.t0),C("command output: "+o),e.abrupt("return",o);case 11:case"end":return e.stop()}},e,this)})),function(e){return s.apply(this,arguments)}),g=(c=(0,m.default)(p.default.mark(function e(t,r,n){var o,a,i,u,s=n.firstCommittedAtSeconds,c=n.commitsWithBuilds,l=n.commitsWithoutBuilds;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return C("step: checking "+r+" up to "+s),C("step: commitsWithBuilds: "+c),C("step: commitsWithoutBuilds: "+l),e.next=5,_(r,{firstCommittedAtSeconds:s,commitsWithBuilds:c,commitsWithoutBuilds:l});case 5:if(o=e.sent,C("step: candidateCommits: "+o),0!==o.length){e.next=10;break}return C("step: no candidateCommits; we are done"),e.abrupt("return",c);case 10:return e.next=12,t.runQuery(R,{commits:o});case 12:return a=e.sent,i=a.app.hasBuildsWithCommits,C("step: newCommitsWithBuilds: "+i),u=o.filter(function(e){return!i.find(function(t){return t===e})}),e.abrupt("return",g(t,2*r,{firstCommittedAtSeconds:s,commitsWithBuilds:[].concat((0,d.default)(c),(0,d.default)(i)),commitsWithoutBuilds:[].concat((0,d.default)(l),(0,d.default)(u))}));case 17:case"end":return e.stop()}},e,this)})),function(e,t,r){return c.apply(this,arguments)}),x=(t.getBaselineCommits=(l=(0,m.default)(p.default.mark(function e(t){var r,n,o,a,i,u,s,c,l,f;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return r=e.sent,e.next=5,v();case 5:return n=e.sent,o=n.committedAt,e.next=9,t.runQuery(E,{branch:r});case 9:if(a=e.sent,i=a.app,u=i.firstBuild,s=i.lastBuild,C("App firstBuild: "+u+", lastBuild: "+s),u){e.next=17;break}return C("App has no builds, returning []"),e.abrupt("return",[]);case 17:if(c=[],l=[],!("HEAD"!==r&&s&&s.committedAt<=o)){e.next=28;break}return e.next=22,y(s.commit);case 22:if(!e.sent){e.next=26;break}c.push(s.commit),e.next=28;break;case 26:C("Last build commit not in index, blindly appending to baselines"),l.push(s.commit);case 28:return e.next=30,g(t,T,{firstCommittedAtSeconds:u.committedAt&&u.committedAt/1e3,commitsWithBuilds:c,commitsWithoutBuilds:[]});case 30:return f=e.sent,C("Final commitsWithBuilds: "+f),e.t0=[],e.t1=l,e.t2=d.default,e.next=37,w(f);case 37:return e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.abrupt("return",e.t0.concat.call(e.t0,e.t1,e.t4));case 40:case"end":return e.stop()}},e,this)})),function(e){return l.apply(this,arguments)}),r(11));function k(e){return e&&e.__esModule?e:{default:e}}var C=(0,k(r(2)).default)("storybook-chromatic:tester:git"),T=t.FETCH_N_INITIAL_BUILD_COMMITS=20,E="\n  query TesterFirstCommittedAtQuery($branch: String!) {\n    app {\n      firstBuild(sortByCommittedAt: true) {\n        committedAt\n      }\n      lastBuild(branch: $branch, sortByCommittedAt: true) {\n        commit\n        committedAt\n      }\n    }\n  }\n",R="\n  query TesterHasBuildsWithCommitsQuery($commits: [String!]!) {\n    app {\n      hasBuildsWithCommits(commits: $commits)\n    }\n  }\n";function A(e){return e.map(function(e){return e.trim()}).join(" ")}},function(e){e.exports={name:"storybook-chromatic",version:"1.2.1-dev",description:"Visual Testing for Storybook",browser:"./dist/assets/storybook-addon.js",main:"./dist/assets/null-server.js",scripts:{prebuild:"rm -rf ./dist","build:bin":"../../node_modules/.bin/babel -s -d ./dist ./src -D --only 'assets,bin'","build:webpack":"../../node_modules/.bin/webpack",build:"../../node_modules/.bin/npm-run-all --serial -l build:**",prepare:"npm run build",dev:"../../node_modules/.bin/npm-run-all --parallel -l 'build:** -- --watch'"},bin:{chromatic:"./dist/bin/chromatic.js"},dependencies:{"@chromaui/localtunnel":"1.9.1-chromatic.3","apollo-fetch":"^0.6.0","babel-runtime":"^6.26.0",commander:"^2.9.0",debug:"^3.0.1",denodeify:"^1.2.1","env-ci":"^2.1.0","isomorphic-fetch":"^2.2.1",jsdom:"^11.5.1",jsonfile:"^4.0.0",loggly:"^1.1.1","node-ask":"^1.0.1","strip-color":"^0.1.0","tree-kill":"^1.1.0",uuid:"^3.3.2"},peerDependencies:{"@storybook/addons":"3.* || 4.*","@storybook/core":"3.* || 4.*"},devDependencies:{"babel-cli":"^6.26.0","npm-run-all":"^4.0.2","prettier-eslint":"^7.1.0",tmp:"^0.0.33",webpack:"^3.10.0","webpack-cli":"^3.1.1","webpack-node-externals":"^1.6.0"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.sessionId;if(process.env.DISABLE_LOGGING)return;var r=o.default.createClient({token:u.LOGGLY_CUSTOMER_TOKEN,subdomain:"hichroma",tags:["storybook-chromatic"],json:!0}),s=!!process.env.DEBUG;n.default.enable("*,-babel"),n.default.log=function(){var e=a.format.apply(void 0,arguments);r.log({sessionId:t,msg:(0,i.default)(e)}),s&&process.stderr.write(e+"\n")}};var n=s(r(2)),o=s(r(36)),a=r(37),i=s(r(38)),u=r(13);function s(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=require("loggly")},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("strip-color")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(r(3)),o=d(r(0)),a=d(r(1)),i=d(r(5)),u=d(r(2)),s=r(40),c=d(r(12)),l=r(6);function d(e){return e&&e.__esModule?e:{default:e}}var f=(0,u.default)("storybook-chromatic:tester:upload");function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".";return(0,s.readdirSync)((0,l.join)(e,t)).map(function(e){return(0,l.join)(t,e)}).map(function(t){return(0,s.statSync)((0,l.join)(e,t)).isDirectory()?p(e,t):[t]}).reduce(function(e,t){return[].concat((0,i.default)(e),(0,i.default)(t))},[])}t.default=function(){var e=(0,a.default)(o.default.mark(function e(t){var r,i,u,d,m,h,v=this,b=t.client,y=t.dirname;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f("uploading '"+y+"' to s3"),r=p(y),e.next=4,b.runQuery("\n  mutation TesterGetUploadUrlsMutation($paths: [String!]!) {\n    getUploadUrls(paths: $paths) {\n      domain\n      urls {\n        path\n        url\n        contentType\n      }\n    }\n  }\n",{paths:r});case 4:return i=e.sent,u=i.getUploadUrls,d=u.domain,m=u.urls,h=[],m.forEach(function(e){var t=e.path,r=e.url,n=e.contentType,i=(0,l.join)(y,t);f("uploading '"+i+"' to '"+r+"' with content type '"+n+"'"),h.push((0,a.default)(o.default.mark(function e(){var a;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.default)(r,{method:"PUT",body:(0,s.createReadStream)(i),headers:{"content-type":n,"content-length":(0,s.statSync)(i).size}});case 2:if((a=e.sent).ok){e.next=6;break}throw f("Uploading '"+t+"' failed: %O",a),new Error("Failed to upload "+t);case 6:case"end":return e.stop()}},e,v)}))())}),e.next=12,n.default.all(h);case 12:return e.abrupt("return",d+"/iframe.html");case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},function(e,t){e.exports=require("fs")}]);
//# sourceMappingURL=tester.js.map