(this["webpackJsonpxstate-react-typescript-template"]=this["webpackJsonpxstate-react-typescript-template"]||[]).push([[0],{20:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var o=n(24),a=n(10),i=(n(20),n(7),n(21)),r=n(41),s=n(4),c=n(40),p=n(39);function m(t){return Object(s.k)((e=>({type:"SPEAK",value:t})))}function l(){return Object(s.k)("LISTEN")}const y={John:{person:"John Appleseed"},Smith:{person:"Smith John"},Tom:{person:"Tom Smith"},David:{person:"David Smith"},Emma:{person:"Emma James"},Eric:{person:"Eric James"},"on Monday":{day:"Monday"},"on Tuesday":{day:"Tuesday"},"on Wednesday":{day:"Wednesday"},"on Thursday":{day:"Thursday"},"on Friday":{day:"Friday"},"on Saturday":{day:"Saturday"},"on Sunday":{day:"Sunday"},"at one":{time:"01:00"},"at two":{time:"02:00"},"at three":{time:"03:00"},"at four":{time:"04:00"},"at five":{time:"05:00"},"at six":{time:"06:00"},"at seven":{time:"07:00"},"at eight":{time:"08:00"},"at nine":{time:"09:00"},"at ten":{time:"10:00"},"at eleven":{time:"11:00"},"at twelve":{time:"12:00"},"at thirteen":{time:"13:00"},"at fourteen":{time:"14:00"},"at fifteen":{time:"15:00"},"at sixteen":{time:"16:00"},"at seventeen":{time:"17:00"},"at eighteen":{time:"18:00"},"at nineteen":{time:"19:00"},"at twenty":{time:"20:00"},"at twenty one":{time:"21:00"},"at twenty two":{time:"22:00"},"at twenty three":{time:"23:00"},"at twenty four":{time:"00:00"}},d={yes:!0,"of course":!0,Absolutely:!0,"Sounds great":!0,"yeah sure":!0,no:!1,"No way":!1};const E={initial:"init",states:{init:{on:{CLICK:"welcome"}},welcome:Object(a.a)({on:{RECOGNISED:{target:"query",actions:Object(s.b)((t=>({option:t.recResult})))}}},(u="What would you like to do?",{initial:"prompt",states:{prompt:{entry:m(u),on:{ENDSPEECH:"ask"}},ask:{entry:Object(s.k)("LISTEN")}}})),query:{invoke:{id:"rasa",src:(t,e)=>h(t.option),onDone:{target:"menu",actions:[Object(s.b)(((t,e)=>({option:e.data.intent.name}))),(t,e)=>console.log(e.data)]},onError:{target:"welcome",actions:(t,e)=>console.log(e.data)}}},menu:{initial:"prompt",on:{ENDSPEECH:[{target:"todo",cond:t=>"todo"===t.option},{target:"timer",cond:t=>"timer"===t.option},{target:"appointment",cond:t=>"appointment"===t.option}]},states:{prompt:{entry:Object(s.k)((t=>({type:"SPEAK",value:"OK. I understand."})))}}},todo:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:Object(s.k)((t=>({type:"SPEAK",value:"Let's create a to do item"})))}}},timer:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:Object(s.k)((t=>({type:"SPEAK",value:"Let's create a timer"})))}}},appointment:{initial:"prompt",on:{ENDSPEECH:"who"},states:{prompt:{entry:Object(s.k)((t=>({type:"SPEAK",value:"Let's create an appointment"})))}}},who:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"person"in(y[t.recResult]||{}),actions:Object(s.b)((t=>({person:y[t.recResult].person}))),target:"day"},{target:".nomatch"}]},states:{prompt:{entry:m("Who are you meeting with?"),on:{ENDSPEECH:"ask"}},ask:{entry:l()},nomatch:{entry:m("Sorry I don't know them"),on:{ENDSPEECH:"prompt"}}}},day:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"day"in(y[t.recResult]||{}),actions:Object(s.b)((t=>({day:y[t.recResult].day}))),target:"wholeday"},{target:".nomatch"}]},states:{prompt:{entry:Object(s.k)((t=>({type:"SPEAK",value:"OK. ".concat(t.person,". On which day is your meeting?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:l()},nomatch:{entry:m("Sorry I don't know which day are you talking about"),on:{ENDSPEECH:"prompt"}}}},wholeday:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===d[t.recResult],target:"timefixed"},{cond:t=>!1===d[t.recResult],target:"settime"},{target:".nomatch"}]},states:{prompt:{entry:Object(s.k)((t=>({type:"SPEAK",value:"Good. Appointment is on ".concat(t.day,". Will it take the whole day?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:l()},nomatch:{entry:m("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},timefixed:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===d[t.recResult],target:"Finished"},{cond:t=>!1===d[t.recResult],target:"who"},{target:".nomatch"}]},states:{prompt:{entry:Object(s.k)((t=>({type:"SPEAK",value:"Good. Do you want to me create an appointment with ".concat(t.person," on ").concat(t.day,"for the whole day?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:l()},nomatch:{entry:m("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},settime:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"time"in(y[t.recResult]||{}),actions:Object(s.b)((t=>({time:y[t.recResult].time}))),target:"withtime"},{target:".nomatch"}]},states:{prompt:{entry:m("What time is your meeting"),on:{ENDSPEECH:"ask"}},ask:{entry:l()},nomatch:{entry:m("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},withtime:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===d[t.recResult],target:"Finished"},{cond:t=>!1===d[t.recResult],target:"who"},{target:".nomatch"}]},states:{prompt:{entry:Object(s.k)((t=>({type:"SPEAK",value:"Good. Do you want to me create an appointment with ".concat(t.person," on ").concat(t.day," at ").concat(t.time,"?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:l()},nomatch:{entry:m("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},Finished:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:m("Your appointment has been created!")}}}}};var u;const h=t=>fetch(new Request("https://cors-anywhere.herokuapp.com/https://appointment--app.herokuapp.com/model/parse",{method:"POST",headers:{Origin:"http://localhost:3000/react-xstate-colourchanger"},body:'{"text": "'.concat(t,'"}')})).then((t=>t.json()));var g=n(19),S=n(12);Object(p.a)({url:"https://statecharts.io/inspect",iframe:!1});const b=Object(r.a)({id:"root",type:"parallel",states:{dm:Object(a.a)({},E),asrtts:{initial:"idle",states:{idle:{on:{LISTEN:"recognising",SPEAK:{target:"speaking",actions:Object(s.b)(((t,e)=>({ttsAgenda:e.value})))}}},recognising:{initial:"progress",entry:"recStart",exit:"recStop",on:{ASRRESULT:{actions:["recLogResult",Object(s.b)(((t,e)=>({recResult:e.value})))],target:".match"},RECOGNISED:"idle"},states:{progress:{},match:{entry:Object(s.k)("RECOGNISED")}}},speaking:{entry:"ttsStart",on:{ENDSPEECH:"idle"}}}}}},{actions:{recLogResult:t=>{console.log("<< ASR: "+t.recResult)},test:()=>{console.log("test")},logIntent:t=>{console.log("<< NLU intent: "+t.nluData.intent.name)}}}),O=t=>{switch(!0){case t.state.matches({asrtts:"recognising"}):return Object(S.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover",style:{animation:"glowing 20s linear"}},t),{},{children:"Listening..."}));case t.state.matches({asrtts:"speaking"}):return Object(S.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover",style:{animation:"bordering 1s infinite"}},t),{},{children:"Speaking..."}));default:return Object(S.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover"},t),{},{children:"Click to start"}))}};function j(){const t=Object(g.useSpeechSynthesis)({onEnd:()=>{l("ENDSPEECH")}}),e=t.speak,n=t.cancel,a=(t.speaking,Object(g.useSpeechRecognition)({onResult:t=>{l({type:"ASRRESULT",value:t})}})),i=a.listen,r=(a.listening,a.stop),s=Object(c.b)(b,{devTools:!0,actions:{recStart:Object(c.a)((()=>{console.log("Ready to receive a appointment command."),i({interimResults:!1,continuous:!0})})),recStop:Object(c.a)((()=>{console.log("Recognition stopped."),r()})),changeColour:Object(c.a)((t=>{console.log("Repainting..."),document.body.style.background=t.recResult})),ttsStart:Object(c.a)(((t,n)=>{console.log("Speaking..."),e({text:t.ttsAgenda})})),ttsCancel:Object(c.a)(((t,e)=>{console.log("TTS STOP..."),n()}))}}),p=Object(o.a)(s,3),m=p[0],l=p[1];p[2];return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(O,{state:m,onClick:()=>l("CLICK")})})}const k=document.getElementById("root");i.render(Object(S.jsx)(j,{}),k)}},[[35,1,2]]]);
//# sourceMappingURL=main.5ef1de71.chunk.js.map