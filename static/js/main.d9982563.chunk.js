(this["webpackJsonpxstate-react-typescript-template"]=this["webpackJsonpxstate-react-typescript-template"]||[]).push([[0],{23:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var o=n(27),a=n(6),c=(n(23),n(8),n(24)),i=n(20),s=n(2),r=n(44),p=n(43);const m=n(12).a.cancel;function l(t){return Object(s.q)((e=>({type:"SPEAK",value:t})))}function d(){return Object(s.q)("LISTEN")}function u(t,e){return{entry:l(t),on:{ENDSPEECH:e+".hist"}}}function y(t){return{entry:l(t),on:{ENDSPEECH:"ask"}}}const h={John:{person:"John Smith"},Smith:{person:"Smith Wood"},Tom:{person:"Tom Cruise"},David:{person:"David Johansson"},Emma:{person:"Emma Watson"},Eric:{person:"Eric Kim"},Alex:{person:"Alex Eriksson"},"on monday":{day:"Monday"},"on Monday":{day:"Monday"},"on tuesday":{day:"Tuesday"},"on Tuesday":{day:"Tuesday"},"on wednesday":{day:"Wednesday"},"on Wednesday":{day:"Wednesday"},"on thursday":{day:"Thursday"},"on Thursday":{day:"Thursday"},"on Friday":{day:"Friday"},"on friday":{day:"Friday"},"on saturday":{day:"Saturday"},"on Saturday":{day:"saturday"},"at one":{time:"01:00"},"at two":{time:"02:00"},"at three":{time:"03:00"},"at four":{time:"04:00"},"at five":{time:"05:00"},"at six":{time:"06:00"},"at seven":{time:"07:00"},"at eight":{time:"08:00"},"at nine":{time:"09:00"},"at ten":{time:"10:00"},"at eleven":{time:"11:00"},"at twelve":{time:"12:00"},"at thirteen":{time:"13:00"},"at fourteen":{time:"14:00"},"at fifteen":{time:"15:00"},"at sixteen":{time:"16:00"},"at seventeen":{time:"17:00"},"at eighteen":{time:"18:00"},"at nineteen":{time:"19:00"},"at twenty":{time:"20:00"},"at twenty one":{time:"21:00"},"at twenty two":{time:"22:00"},"at twenty three":{time:"23:00"},"at twenty four":{time:"00:00"}},E={yes:!0,Yes:!0,"Of course":!0,"of course":!0,okay:!0,Okay:!0,No:!1,no:!1,"No way":!1,"no way":!1},b={count:0},g={help:"Help",Help:"Help"},O={initial:"init",states:{init:{on:{CLICK:"welcome"}},welcome:{initial:"prompt",on:{RECOGNISED:[{target:"query",cond:t=>!(t.recResult in g),actions:[Object(s.b)((t=>({option:t.recResult}))),Object(s.b)((t=>{b.count=0})),m("maxsp")]},{target:"welcome_help",cond:t=>t.recResult in g}],MAXSPEECH:[{target:".maxspeech",cond:t=>b.count<=2,actions:Object(s.b)((t=>{b.count=b.count+1}))},{target:"#root.dm.init",cond:t=>b.count>2,actions:Object(s.b)((t=>{b.count=0}))}]},states:{prompt:{entry:l("What would you like to do?"),on:{ENDSPEECH:"ask"}},hist:{type:"history"},maxspeech:Object(a.a)({},y("Please respond. What would you like to do?")),ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:6e3})]}}},welcome_help:Object(a.a)({},u("Tell me what you want to do.","welcome")),query:{invoke:{id:"rasa",src:(t,e)=>j(t.option),onDone:{target:"menu",actions:[Object(s.b)(((t,e)=>({option:e.data.intent.name}))),(t,e)=>console.log(e.data),m("maxsp")]},onError:{target:"welcome",actions:[(t,e)=>console.log(e.data),m("maxsp")]}}},menu:{initial:"prompt",on:{ENDSPEECH:[{target:"todo",cond:t=>"todo"===t.option},{target:"timer",cond:t=>"timer"===t.option},{target:"appointment",cond:t=>"appointment"===t.option}]},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:"OK. You chose ".concat(t.option,".")})))},nomatch:{entry:l("Sorry, please repeat again."),on:{ENDSPEECH:"prompt"}}}},todo:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:'Let"s create a to do item!'})))}}},timer:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:'Let"s create a timer!'})))}}},appointment:{initial:"prompt",on:{ENDSPEECH:"who"},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:"Let's create an appointment!"})))}}},who:{initial:"prompt",on:{RECOGNISED:[{target:"day",cond:t=>"person"in(h[t.recResult]||{}),actions:[Object(s.b)((t=>({person:h[t.recResult].person}))),Object(s.b)((t=>{b.count=0})),m("maxsp")]},{target:".nomatch",cond:t=>!(t.recResult in g),actions:m("maxsp")},{target:"who_help",cond:t=>t.recResult in g}],MAXSPEECH:[{target:".maxspeech",cond:t=>b.count<=2,actions:Object(s.b)((t=>{b.count=b.count+1}))},{target:"#root.dm.init",cond:t=>b.count>2,actions:Object(s.b)((t=>{b.count=0}))}]},states:{prompt:{entry:l("Who are you meeting with?"),on:{ENDSPEECH:"ask"}},hist:{type:"history"},ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:6e3,id:"maxsp"})]},maxspeech:Object(a.a)({},y("Please respond, Who are you meeting with?")),nomatch:{entry:l("Sorry I don't know them"),on:{ENDSPEECH:"prompt"}}}},who_help:Object(a.a)({},u("Please tell me the name of the person you are meeting with.","who")),day:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"day"in(h[t.recResult]||{}),actions:[Object(s.b)((t=>({day:h[t.recResult].day}))),Object(s.b)((t=>{b.count=0})),m("maxsp")],target:"wholeday"},{target:".nomatch",cond:t=>!(t.recResult in g),actions:m("maxsp")},{target:"day_help",cond:t=>t.recResult in g}],MAXSPEECH:[{target:".maxspeech",cond:t=>b.count<=2,actions:Object(s.b)((t=>{b.count=b.count+1}))},{target:"#root.dm.init",cond:t=>b.count>2,actions:Object(s.b)((t=>{b.count=0}))}]},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:"OK. You are meeting ".concat(t.person," for the meeting. On which day is your meeting?")}))),on:{ENDSPEECH:"ask"}},hist:{type:"history"},ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:6e3,id:"maxsp"})]},maxspeech:Object(a.a)({},y("Please respond. Which day is your meeting?")),nomatch:{entry:l("Sorry I don't know which day are you talking about"),on:{ENDSPEECH:"prompt"}}}},day_help:Object(a.a)({},u("Please tell me which day your meeting is.","day")),wholeday:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===E[t.recResult],target:"timefixed",actions:[Object(s.b)((t=>{b.count=0})),m("maxsp")]},{cond:t=>!1===E[t.recResult],target:"settime",actions:[Object(s.b)((t=>{b.count=0})),m("maxsp")]},{target:".nomatch",cond:t=>!(t.recResult in g),actions:m("maxsp")},{target:"wholeday_help",cond:t=>t.recResult in g}],MAXSPEECH:[{target:".maxspeech",cond:t=>b.count<=2,actions:Object(s.b)((t=>{b.count=b.count+1}))},{target:"#root.dm.init",cond:t=>b.count>2,actions:Object(s.b)((t=>{b.count=0}))}]},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:"Good. On ".concat(t.day,". Will it take the whole day?")}))),on:{ENDSPEECH:"ask"}},hist:{type:"history"},ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:6e3,id:"maxsp"})]},maxspeech:Object(a.a)({},y("Please respond.")),nomatch:{entry:l("Please answer the question."),on:{ENDSPEECH:"prompt"}}}},wholeday_help:Object(a.a)({},u("Please answer the question with yer or no.","wholeday")),timefixed:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===E[t.recResult],target:"Finished",actions:[Object(s.b)((t=>{b.count=0})),m("maxsp")]},{cond:t=>!1===E[t.recResult],target:"who",actions:[Object(s.b)((t=>{b.count=0})),m("maxsp")]},{target:".nomatch",cond:t=>!(t.recResult in g),actions:m("maxsp")},{target:"timefixed_help",cond:t=>t.recResult in g}],MAXSPEECH:[{target:".maxspeech",cond:t=>b.count<=2,actions:Object(s.b)((t=>{b.count=b.count+1}))},{target:"#root.dm.init",cond:t=>b.count>2,actions:Object(s.b)((t=>{b.count=0}))}]},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:"Good. Do you want to me create an appointment with ".concat(t.person," on ").concat(t.day,"for the whole day?")}))),on:{ENDSPEECH:"ask"}},hist:{type:"history"},ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:6e3,id:"maxsp"})]},maxspeech:Object(a.a)({},y("Please respond. Confirm the meeting schedule.")),nomatch:{entry:l("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},timefixed_help:Object(a.a)({},u("Confirm the meeting please.","timefixed")),settime:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"time"in(h[t.recResult]||{}),actions:[Object(s.b)((t=>({time:h[t.recResult].time}))),Object(s.b)((t=>{b.count=0}))],target:"confirm_time"},{target:".nomatch",cond:t=>!(t.recResult in g),actions:m("maxsp")},{target:"settime_help",cond:t=>t.recResult in g}],MAXSPEECH:[{target:".maxspeech",cond:t=>b.count<=2,actions:Object(s.b)((t=>{b.count=b.count+1}))},{target:"#root.dm.init",cond:t=>b.count>2,actions:Object(s.b)((t=>{b.count=0}))}]},states:{prompt:{entry:l("What time is your meeting"),on:{ENDSPEECH:"ask"}},hist:{type:"history"},ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:6e3,id:"maxsp"})]},maxspeech:Object(a.a)({},y("Please respond. What time is your meeting?")),nomatch:{entry:l("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},settime_help:Object(a.a)({},u("Please tell me what time your meeting is.","settime")),confirm_time:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===E[t.recResult],target:"Finished",actions:Object(s.b)((t=>{b.count=0}))},{cond:t=>!1===E[t.recResult],target:"who",actions:[Object(s.b)((t=>{b.count=0})),m("maxsp")]},{target:".nomatch",cond:t=>!(t.recResult in g),actions:m("maxsp")},{target:"confirm_time_help",cond:t=>t.recResult in g}],MAXSPEECH:[{target:".maxspeech",cond:t=>b.count<=2,actions:Object(s.b)((t=>{b.count=b.count+1}))},{target:"#root.dm.init",cond:t=>b.count>2,actions:Object(s.b)((t=>{b.count=0}))}]},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:"Good. Do you want to me create an appointment with ".concat(t.person," on ").concat(t.day," at ").concat(t.time,"?")}))),on:{ENDSPEECH:"ask"}},hist:{type:"history"},ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:6e3,id:"maxsp"})]},maxspeech:Object(a.a)({},y("Please confirm the meeting schedule.")),nomatch:{entry:l("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},confirm_time_help:Object(a.a)({},u("Please confirm the meeting schedule","confirm_time")),Finished:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:l("Your appointment has been created!")}}}}},j=t=>fetch(new Request("https://cors-anywhere.herokuapp.com/https://appointment--app.herokuapp.com/model/parse",{method:"POST",headers:{Origin:"http://localhost:3000/react-xstate-colourchanger"},body:'{"text": "'.concat(t,'"}')})).then((t=>t.json()));var S=n(22),P=n(13);Object(p.a)({url:"https://statecharts.io/inspect",iframe:!1});const w=Object(i.a)({id:"root",type:"parallel",states:{dm:Object(a.a)({},O),asrtts:{initial:"idle",states:{idle:{on:{LISTEN:"recognising",SPEAK:{target:"speaking",actions:Object(s.b)(((t,e)=>({ttsAgenda:e.value})))}}},recognising:{initial:"progress",entry:"recStart",exit:"recStop",on:{ASRRESULT:{actions:["recLogResult",Object(s.b)(((t,e)=>({recResult:e.value})))],target:".match"},RECOGNISED:"idle",MAXSPEECH:"idle"},states:{progress:{},match:{entry:Object(s.q)("RECOGNISED")}}},speaking:{entry:"ttsStart",on:{ENDSPEECH:"idle"}}}}}},{actions:{recLogResult:t=>{console.log("<< ASR: "+t.recResult)},test:()=>{console.log("test")},logIntent:t=>{console.log("<< NLU intent: "+t.nluData.intent.name)}}}),C=t=>{switch(!0){case t.state.matches({asrtts:"recognising"}):return Object(P.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover",style:{animation:"glowing 20s linear"}},t),{},{children:"Listening..."}));case t.state.matches({asrtts:"speaking"}):return Object(P.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover",style:{animation:"bordering 1s infinite"}},t),{},{children:"Speaking..."}));default:return Object(P.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover"},t),{},{children:"Click to start"}))}};function x(){const t=Object(S.useSpeechSynthesis)({onEnd:()=>{l("ENDSPEECH")}}),e=t.speak,n=t.cancel,a=(t.speaking,Object(S.useSpeechRecognition)({onResult:t=>{l({type:"ASRRESULT",value:t})}})),c=a.listen,i=(a.listening,a.stop),s=Object(r.b)(w,{devTools:!0,actions:{recStart:Object(r.a)((()=>{console.log("Ready to receive a color command."),c({interimResults:!1,continuous:!0})})),recStop:Object(r.a)((()=>{console.log("Recognition stopped."),i()})),changeColour:Object(r.a)((t=>{console.log("Repainting..."),document.body.style.background=t.recResult})),ttsStart:Object(r.a)(((t,n)=>{console.log("Speaking..."),e({text:t.ttsAgenda})})),ttsCancel:Object(r.a)(((t,e)=>{console.log("TTS STOP..."),n()}))}}),p=Object(o.a)(s,3),m=p[0],l=p[1];p[2];return Object(P.jsx)("div",{className:"App",children:Object(P.jsx)(C,{state:m,onClick:()=>l("CLICK")})})}const R=document.getElementById("root");c.render(Object(P.jsx)(x,{}),R)}},[[40,1,2]]]);
//# sourceMappingURL=main.d9982563.chunk.js.map