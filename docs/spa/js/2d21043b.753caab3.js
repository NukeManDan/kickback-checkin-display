(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d21043b"],{b6c4:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",[t.isInitial?i("form",{staticClass:"absolute-center",attrs:{enctype:"multipart/form-data",novalidate:""}},[i("q-card",{staticClass:"text-white",staticStyle:{background:"#6e76ff"}},[i("q-card-section",[i("div",{staticClass:"text-h5 text-center q-pb-md text-italic"},[t._v("Kickback Event Check-In")]),i("eventSecretDialog",{staticClass:"justify-center q-mb-md",on:{new_secret:t.checkSecret}}),t.isLoading?i("div",{staticClass:"text-center"},[i("q-spinner-pie",{staticClass:"q-mt-lg",attrs:{color:"primary",size:"13%"}}),i("p",{staticClass:"text-italic q-pa-sm",staticStyle:{"font-size":"150%"}},[t._v("Verifying Secret...")])],1):t._e()],1)],1)],1):t._e(),t.isInitial||t.isFailedCheck?t._e():i("div",{staticClass:"text-white flex absolute-center q-py-xl"},[i("q-card",{staticStyle:{"max-width":"90vw",background:"#6e76ff"},attrs:{align:"center"}},[i("q-card-section",[i("div",{staticClass:"text-h5 text-center q-pb-md text-italic"},[t._v("Kickback Event Check-In")])]),i("img",{staticClass:"q-px-sm",staticStyle:{"border-radius":"20px"},attrs:{src:t.qrSrc}}),i("h3",{staticClass:"q-px-lg",staticStyle:{"letter-spacing":"5px"}},[t._v(t._s(t.token))]),i("q-linear-progress",{attrs:{size:"50px",value:t.timeProgress,color:"accent"}})],1)],1),t.isFailedCheck?i("div",{staticClass:"flex absolute-center object-center text-center"},[i("q-card",{staticClass:"bg-warning",staticStyle:{width:"80%"}},[i("h2",[t._v("Unable to Find Event")]),i("h5",[i("em",[t._v("Please Re-enter the Event Secret")])]),i("eventSecretDialog",{staticClass:"justify-center q-mb-xl",on:{new_secret:t.checkSecret}})],1)],1):t._e()])},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[i("q-btn",{attrs:{"no-caps":"",icon:"phonelink_lock",label:"Set Event Secret",color:"accent"},on:{click:function(e){t.persistent=!0}}}),i("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:t.persistent,callback:function(e){t.persistent=e},expression:"persistent"}},[i("q-card",{staticClass:"text-white",staticStyle:{width:"90vw"}},[i("q-card-section",{staticStyle:{background:"#6e76ff"}},[i("div",{staticClass:"text-center"},[i("div",{staticStyle:{"font-size":"30px"}},[t._v("Set the "),i("b",[t._v("Event Check-in Secret")])]),i("br"),i("div",{staticStyle:{"font-size":"20px"}},[t._v("This is found in your "),i("b",[t._v(" admin page ")]),i("br"),t._v("\n            ONLY viewable by the "),i("b",[t._v(" event organizer! ")])])])]),i("q-card-section",{staticClass:"q-mt-md"},[i("q-input",{staticClass:"text-center",attrs:{label:"Event Secret",type:t.isPwd?"password":"text",rounded:"",standout:"bg-primary text-white"},scopedSlots:t._u([{key:"prepend",fn:function(){return[i("q-icon",{attrs:{name:"phonelink_lock"}})]},proxy:!0},{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.secret,callback:function(e){t.secret=e},expression:"secret"}})],1),i("q-card-actions",{attrs:{align:"around"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"text-negative q-ml-sm",attrs:{flat:"",label:"Cancel"},on:{click:this.cancel}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"text-positive q-mr-sm",attrs:{flat:"",label:"Set"},on:{click:this.SetSecret}})],1)],1)],1)],1)},a=[],c={name:"eventSecretDialog",data:function(){return{persistent:!1,isPwd:!0,secret:this.$event_secret}},methods:{cancel:function(){this.secret=this.$event_secret},SetSecret:function(){this.$event_secret=this.secret,this.$emit("new_secret",this.secret)}}},o=c,l=i("2877"),u=i("eebe"),d=i.n(u),p=i("9c40"),h=i("24e8"),v=i("f09f"),f=i("a370"),m=i("27f9"),S=i("0016"),b=i("4b7e"),g=i("7f67"),C=Object(l["a"])(o,r,a,!1,null,null,null),k=C.exports;d()(C,"components",{QBtn:p["a"],QDialog:h["a"],QCard:v["a"],QCardSection:f["a"],QInput:m["a"],QIcon:S["a"],QCardActions:b["a"]}),d()(C,"directives",{ClosePopup:g["a"]});var q=i("d055"),w=i.n(q),x=i("ba7a"),_={name:"CheckIn",data:function(){return{event_secret:"",token:"",stepTime:5,stepWindow:1,interval:0,timeRemaining:0,timeProgress:0,currentStatus:"STATUS_INITIAL",qrText:"",qrSrc:null}},beforeDestroy:function(){clearInterval(this.interval),this.reset()},mounted:function(){x["authenticator"].options={step:this.stepTime,window:this.stepWindow}},computed:{timeLabel:function(){return this.timeRemaining+" seconds"},verifiedColor:function(){return this.verifiedCID?"background: green":"background: yellow"},isInitial:function(){return"STATUS_INITIAL"===this.currentStatus},isLoading:function(){return"STATUS_LOADING"===this.currentStatus},isSuccess:function(){return"STATUS_SUCCESS"===this.currentStatus},isFailedCheck:function(){return"STATUS_FAILED_CHECK"===this.currentStatus}},methods:{counter:function(){var t=this;this.interval=setInterval((function(){if(t.timeRemaining=x["authenticator"].timeRemaining(),t.timeProgress=t.timeRemaining/t.stepTime,t.timeRemaining===t.stepTime)return t.qrText=t.getToken(),void t.generateQrCode()}),1e3)},setSecret:function(){console.log(x["authenticator"].options)},checkSecret:function(t){console.log("TODO!!! Need to get Kickback backend to see if this is valid and return event info for it if so. "),console.log("*** \n This is the secret set for the QR:\n\n"+t+"\n\n"),this.event_secret=t,this.qrText=this.getToken(),this.counter(),this.generateQrCode(),this.currentStatus="STATUS_SUCCESS"},getToken:function(){return this.token=x["authenticator"].generate(this.event_secret)},createObjectUrl:function(t,e){var i=this;t?console.warn("generateQrCode:ERROR",t):e.toBlob((function(t){i.qrSrc=window.URL.createObjectURL(t)}))},generateQrCode:function(){this.qrText&&(window.URL.revokeObjectURL(this.qrSrc),w.a.toCanvas(this.qrText,{},this.createObjectUrl))},reset:function(){window.URL.revokeObjectURL(this.qrSrc),this.qrSrc=null,this.qrText=""}},components:{eventSecretDialog:k}},T=_,y=i("9989"),I=i("163c"),Q=i("6b1d"),R=i("58a8"),U=Object(l["a"])(T,n,s,!1,null,"a7a47868",null);e["default"]=U.exports;d()(U,"components",{QPage:y["a"],QCard:v["a"],QCardSection:f["a"],QSpinnerPie:I["a"],QLinearProgress:Q["a"],QBadge:R["a"]})}}]);