(this["webpackJsonpxstate-react-typescript-template"]=this["webpackJsonpxstate-react-typescript-template"]||[]).push([[0],{24:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(23),o=n(11),i=(n(24),n(7),n(20)),s=n(41),r=n(4),c=n(40),m=n(39);function p(t){return Object(r.k)((e=>({type:"SPEAK",value:t})))}function l(){return Object(r.k)("LISTEN")}const y={John:{person:"John Appleseed"},Smith:{person:"Smith John"},Tom:{person:"Tom Smith"},David:{person:"David Smith"},Emma:{person:"Emma James"},Eric:{person:"Eric James"},"on Monday":{day:"Monday"},"on Tuesday":{day:"Tuesday"},"on Wednesday":{day:"Wednesday"},"on Thursday":{day:"Thursday"},"on Friday":{day:"Friday"},"on Saturday":{day:"Saturday"},"on Sunday":{day:"Sunday"},"at one":{time:"01:00"},"at two":{time:"02:00"},"at three":{time:"03:00"},"at four":{time:"04:00"},"at five":{time:"05:00"},"at six":{time:"06:00"},"at seven":{time:"07:00"},"at eight":{time:"08:00"},"at nine":{time:"09:00"},"at ten":{time:"10:00"},"at eleven":{time:"11:00"},"at twelve":{time:"12:00"},"at thirteen":{time:"13:00"},"at fourteen":{time:"14:00"},"at fifteen":{time:"15:00"},"at sixteen":{time:"16:00"},"at seventeen":{time:"17:00"},"at eighteen":{time:"18:00"},"at nineteen":{time:"19:00"},"at twenty":{time:"20:00"},"at twenty one":{time:"21:00"},"at twenty two":{time:"22:00"},"at twenty three":{time:"23:00"},"at twenty four":{time:"00:00"}},d={yes:!0,"of course":!0,Absolutely:!0,"Sounds great":!0,"yeah sure":!0,no:!1,"No way":!1},u={initial:"init",states:{init:{on:{CLICK:"welcome"}},welcome:{initial:"prompt",on:{ENDSPEECH:"who"},states:{prompt:{entry:p("Let's create an appointment")}}},who:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"person"in(y[t.recResult]||{}),actions:Object(r.b)((t=>({person:y[t.recResult].person}))),target:"day"},{target:".nomatch"}]},states:{prompt:{entry:p("Who are you meeting with?"),on:{ENDSPEECH:"ask"}},ask:{entry:l()},nomatch:{entry:p("Sorry I don't know them"),on:{ENDSPEECH:"prompt"}}}},day:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"day"in(y[t.recResult]||{}),actions:Object(r.b)((t=>({day:y[t.recResult].day}))),target:"wholeday"},{target:".nomatch"}]},states:{prompt:{entry:Object(r.k)((t=>({type:"SPEAK",value:"OK. ".concat(t.person,". On which day is your meeting?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:l()},nomatch:{entry:p("Sorry I don't know which day are you talking about"),on:{ENDSPEECH:"prompt"}}}},wholeday:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===d[t.recResult],target:"timefixed"},{cond:t=>!1===d[t.recResult],target:"settime"},{target:".nomatch"}]},states:{prompt:{entry:Object(r.k)((t=>({type:"SPEAK",value:"Good. Appointment is on ".concat(t.day,". Will it take the whole day?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:l()},nomatch:{entry:p("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},timefixed:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===d[t.recResult],target:"Finished"},{cond:t=>!1===d[t.recResult],target:"who"},{target:".nomatch"}]},states:{prompt:{entry:Object(r.k)((t=>({type:"SPEAK",value:"Good. Do you want to me create an appointment with ".concat(t.person," on ").concat(t.day,"for the whole day?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:l()},nomatch:{entry:p("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},settime:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"time"in(y[t.recResult]||{}),actions:Object(r.b)((t=>({time:y[t.recResult].time}))),target:"withtime"},{target:".nomatch"}]},states:{prompt:{entry:p("What time is your meeting"),on:{ENDSPEECH:"ask"}},ask:{entry:l()},nomatch:{entry:p("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},withtime:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===d[t.recResult],target:"Finished"},{cond:t=>!1===d[t.recResult],target:"who"},{target:".nomatch"}]},states:{prompt:{entry:Object(r.k)((t=>({type:"SPEAK",value:"Good. Do you want to me create an appointment with ".concat(t.person," on ").concat(t.day," at ").concat(t.time,"?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:l()},nomatch:{entry:p("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},Finished:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:p("Your appointment has been created!")}}}}};var E=n(19),h=n(12);Object(m.a)({url:"https://statecharts.io/inspect",iframe:!1});const g=Object(s.a)({id:"root",type:"parallel",states:{dm:Object(o.a)({},u),asrtts:{initial:"idle",states:{idle:{on:{LISTEN:"recognising",SPEAK:{target:"speaking",actions:Object(r.b)(((t,e)=>({ttsAgenda:e.value})))}}},recognising:{initial:"progress",entry:"recStart",exit:"recStop",on:{ASRRESULT:{actions:["recLogResult",Object(r.b)(((t,e)=>({recResult:e.value})))],target:".match"},RECOGNISED:"idle"},states:{progress:{},match:{entry:Object(r.k)("RECOGNISED")}}},speaking:{entry:"ttsStart",on:{ENDSPEECH:"idle"}}}}}},{actions:{recLogResult:t=>{console.log("<< ASR: "+t.recResult)},test:()=>{console.log("test")},logIntent:t=>{console.log("<< NLU intent: "+t.nluData.intent.name)}}}),S=t=>{switch(!0){case t.state.matches({asrtts:"recognising"}):return Object(h.jsx)("button",Object(o.a)(Object(o.a)({type:"button",className:"glow-on-hover",style:{animation:"glowing 20s linear"}},t),{},{children:"Listening..."}));case t.state.matches({asrtts:"speaking"}):return Object(h.jsx)("button",Object(o.a)(Object(o.a)({type:"button",className:"glow-on-hover",style:{animation:"bordering 1s infinite"}},t),{},{children:"Speaking..."}));default:return Object(h.jsx)("button",Object(o.a)(Object(o.a)({type:"button",className:"glow-on-hover"},t),{},{children:"Click to start"}))}};function b(){const t=Object(E.useSpeechSynthesis)({onEnd:()=>{l("ENDSPEECH")}}),e=t.speak,n=t.cancel,o=(t.speaking,Object(E.useSpeechRecognition)({onResult:t=>{l({type:"ASRRESULT",value:t})}})),i=o.listen,s=(o.listening,o.stop),r=Object(c.b)(g,{devTools:!0,actions:{recStart:Object(c.a)((()=>{console.log("Ready to receive a color command."),i({interimResults:!1,continuous:!0})})),recStop:Object(c.a)((()=>{console.log("Recognition stopped."),s()})),changeColour:Object(c.a)((t=>{console.log("Repainting..."),document.body.style.background=t.recResult})),ttsStart:Object(c.a)(((t,n)=>{console.log("Speaking..."),e({text:t.ttsAgenda})})),ttsCancel:Object(c.a)(((t,e)=>{console.log("TTS STOP..."),n()}))}}),m=Object(a.a)(r,3),p=m[0],l=m[1];m[2];return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(S,{state:p,onClick:()=>l("CLICK")})})}const O=document.getElementById("root");i.render(Object(h.jsx)(b,{}),O)}},[[35,1,2]]]);
//# sourceMappingURL=main.05275099.chunk.js.map