(this["webpackJsonpxstate-react-typescript-template"]=this["webpackJsonpxstate-react-typescript-template"]||[]).push([[0],{23:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var o=n(27),a=n(6),c=(n(23),n(8),n(24)),i=n(20),s=n(2),r=n(44),p=n(43);const l=n(12).a.cancel;function m(t){return Object(s.q)((e=>({type:"SPEAK",value:t})))}function d(){return Object(s.q)("LISTEN")}function h(t,e){return{entry:m(t),on:{ENDSPEECH:e+".hist"}}}function u(t){return{entry:m(t),on:{ENDSPEECH:"ask"}}}const y={John:{person:"John Appleseed"},Smith:{person:"Smith John"},Tom:{person:"Tom Smith"},David:{person:"David Smith"},Emma:{person:"Emma James"},Eric:{person:"Eric James"},Alex:{person:"Alex James"},"on Monday":{day:"Monday"},"on Tuesday":{day:"Tuesday"},"on Wednesday":{day:"Wednesday"},"on Thursday":{day:"Thursday"},"on Friday":{day:"Friday"},"on Saturday":{day:"Saturday"},"on Sunday":{day:"Sunday"},"at one":{time:"01:00"},"at two":{time:"02:00"},"at three":{time:"03:00"},"at four":{time:"04:00"},"at five":{time:"05:00"},"at six":{time:"06:00"},"at seven":{time:"07:00"},"at eight":{time:"08:00"},"at nine":{time:"09:00"},"at ten":{time:"10:00"},"at eleven":{time:"11:00"},"at twelve":{time:"12:00"},"at thirteen":{time:"13:00"},"at fourteen":{time:"14:00"},"at fifteen":{time:"15:00"},"at sixteen":{time:"16:00"},"at seventeen":{time:"17:00"},"at eighteen":{time:"18:00"},"at nineteen":{time:"19:00"},"at twenty":{time:"20:00"},"at twenty one":{time:"21:00"},"at twenty two":{time:"22:00"},"at twenty three":{time:"23:00"},"at twenty four":{time:"00:00"}},E={yes:!0,"of course":!0,Absolutely:!0,"Sounds great":!0,"yeah sure":!0,no:!1,"No way":!1},b={help:"h",Help:"H"},g={count:0},O={initial:"init",states:{init:{on:{CLICK:"welcome"}},welcome:{initial:"prompt",on:{RECOGNISED:[{target:"query",cond:t=>!(t.recResult in b),actions:Object(s.b)((t=>({option:t.recResult})))},{target:"help1",cond:t=>t.recResult in b}],MAXSPEECH:[{target:"welcome.maxspeech1",cond:t=>g.count<=2,actions:Object(s.b)((t=>{g.count=g.count+1}))},{target:"#root.dm.init",cond:t=>g.count>2,actions:Object(s.b)((t=>{g.count=0}))}]},states:{prompt:{entry:m("What would you like to do?"),on:{ENDSPEECH:"ask"}},hist:{type:"history"},maxspeech1:Object(a.a)({},u("Please respond. What would you like to do?")),ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:3e3})]}}},help1:Object(a.a)({},h("Please tell me what would you like to do.","welcome")),query:{invoke:{id:"rasa",src:(t,e)=>S(t.option),onDone:{target:"menu",actions:[Object(s.b)(((t,e)=>({option:e.data.intent.name}))),(t,e)=>console.log(e.data)]},onError:{target:"welcome",actions:(t,e)=>console.log(e.data)}}},menu:{initial:"prompt",on:{ENDSPEECH:[{target:"todo",cond:t=>"todo"===t.option},{target:"timer",cond:t=>"timer"===t.option},{target:"appointment",cond:t=>"appointment"===t.option}]},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:"OK. I see\uff0cyou chose ".concat(t.option,".")})))}}},todo:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:'Let"s create a to do item'})))}}},timer:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:'Let"s create a timer'})))}}},appointment:{initial:"prompt",on:{ENDSPEECH:"who"},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:'Let"s create an appointment'})))}}},who:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"person"in(y[t.recResult]||{}),actions:Object(s.b)((t=>({person:y[t.recResult].person}))),target:"day"},{target:".nomatch",cond:t=>!(t.recResult in b),actions:l("maxsp")},{target:"help2",cond:t=>t.recResult in b}],MAXSPEECH:[{target:"who.maxspeech2",cond:t=>g.count<=2,actions:Object(s.b)((t=>{g.count=g.count+1}))},{target:"#root.dm.init",cond:t=>g.count>2,actions:Object(s.b)((t=>{g.count=0}))}]},states:{prompt:{entry:m("Who are you meeting with?"),on:{ENDSPEECH:"ask"}},hist:{type:"history"},ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:5e3,id:"maxsp"})]},maxspeech2:Object(a.a)({},u("Please respond. Who are you meeting with?")),nomatch:{entry:m("Sorry I don't know them"),on:{ENDSPEECH:"prompt"}}}},help2:Object(a.a)({},h("Please tell me the name of the person you are meeting with.","who")),day:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"day"in(y[t.recResult]||{}),actions:Object(s.b)((t=>({day:y[t.recResult].day}))),target:"wholeday"},{target:".nomatch",cond:t=>!(t.recResult in b),actions:l("maxsp")},{target:"help3",cond:t=>t.recResult in b}],MAXSPEECH:[{target:"day.maxspeech3",cond:t=>g.count<=2,actions:Object(s.b)((t=>{g.count=g.count+1}))},{target:"#root.dm.init",cond:t=>g.count>2,actions:Object(s.b)((t=>{g.count=0}))}]},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:"OK. ".concat(t.person,". On which day is your meeting?")}))),on:{ENDSPEECH:"ask"}},hist:{type:"history"},ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:5e3,id:"maxsp"})]},maxspeech3:Object(a.a)({},u("Please respond. Tell me the day.")),nomatch:{entry:m("Sorry I don't know which day are you talking about"),on:{ENDSPEECH:"prompt"}}}},help3:Object(a.a)({},h("Please tell me the day.","day")),wholeday:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===E[t.recResult],target:"notime"},{cond:t=>!1===E[t.recResult],target:"whattime"},{target:".nomatch",cond:t=>!(t.recResult in b),actions:l("maxsp")},{target:"help4",cond:t=>t.recResult in b}],MAXSPEECH:[{target:"wholeday.maxspeech4",cond:t=>g.count<=2,actions:Object(s.b)((t=>{g.count=g.count+1}))},{target:"#root.dm.init",cond:t=>g.count>2,actions:Object(s.b)((t=>{g.count=0}))}]},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:"Good.on ".concat(t.day,". Will it take the whole day?")}))),on:{ENDSPEECH:"ask"}},hist:{type:"history"},ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:3e3,id:"maxsp"})]},maxspeech4:Object(a.a)({},u("Please respond. Would it take the whole day?")),nomatch:{entry:m("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},help4:Object(a.a)({},h("Tell me if it would take whole day for the meeting","wholeday")),notime:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===E[t.recResult],target:"Finished"},{cond:t=>!1===E[t.recResult],target:"who"},{target:".nomatch",cond:t=>!(t.recResult in b),actions:l("maxsp")},{target:"help5",cond:t=>t.recResult in b}],MAXSPEECH:[{target:"notime.maxspeech5",cond:t=>g.count<=2,actions:Object(s.b)((t=>{g.count=g.count+1}))},{target:"#root.dm.init",cond:t=>g.count>2,actions:Object(s.b)((t=>{g.count=0}))}]},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:"Good. Do you want to me create an appointment with ".concat(t.person," on ").concat(t.day,"for the whole day?")}))),on:{ENDSPEECH:"ask"}},hist:{type:"history"},ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:5e3,id:"maxsp"})]},maxspeech5:Object(a.a)({},u("Please respond. please confirm the meeting schedule.")),nomatch:{entry:m("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},help5:Object(a.a)({},h("Please confirm the meeting schedule","notime")),whattime:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"time"in(y[t.recResult]||{}),actions:Object(s.b)((t=>({time:y[t.recResult].time}))),target:"withtime"},{target:".nomatch",cond:t=>!(t.recResult in b),actions:l("maxsp")},{target:"help6",cond:t=>t.recResult in b}],MAXSPEECH:[{target:"whattime.maxspeech6",cond:t=>g.count<=2,actions:Object(s.b)((t=>{g.count=g.count+1}))},{target:"#root.dm.init",cond:t=>g.count>2,actions:Object(s.b)((t=>{g.count=0}))}]},states:{prompt:{entry:m("What time is your meeting?"),on:{ENDSPEECH:"ask"}},hist:{type:"history"},ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:5e3,id:"maxsp"})]},maxspeech6:Object(a.a)({},u("Please respond. Set a time")),nomatch:{entry:m("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},help6:Object(a.a)({},h("Please tell me what time the meeting is held","whattime")),withtime:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===E[t.recResult],target:"Finished"},{cond:t=>!1===E[t.recResult],target:"who"},{target:".nomatch",cond:t=>!(t.recResult in b),actions:l("maxsp")},{target:"help7",cond:t=>t.recResult in b}],MAXSPEECH:[{target:"withtime.maxspeech7",cond:t=>g.count<=2,actions:Object(s.b)((t=>{g.count=g.count+1}))},{target:"#root.dm.init",cond:t=>g.count>2,actions:Object(s.b)((t=>{g.count=0}))}]},states:{prompt:{entry:Object(s.q)((t=>({type:"SPEAK",value:"Good. Do you want to me make an appointment with ".concat(t.person," on ").concat(t.day," at ").concat(t.time,"?")}))),on:{ENDSPEECH:"ask"}},hist:{type:"history"},ask:{entry:[d(),Object(s.q)("MAXSPEECH",{delay:5e3,id:"maxsp"})]},maxspeech7:Object(a.a)({},u("Please respond. Confirm the meeting.")),nomatch:{entry:m("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},help7:Object(a.a)({},h("Please confirm the meeting information.","withtime")),Finished:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:m("Your appointment has been created!")}}}}},S=t=>fetch(new Request("https://cors-anywhere.herokuapp.com/https://appointment--app.herokuapp.com/model/parse",{method:"POST",headers:{Origin:"http://localhost:3000/react-xstate-colourchanger"},body:'{"text": "'.concat(t,'"}')})).then((t=>t.json()));var j=n(22),P=n(13);Object(p.a)({url:"https://statecharts.io/inspect",iframe:!1});const w=Object(i.a)({id:"root",type:"parallel",states:{dm:Object(a.a)({},O),asrtts:{initial:"idle",states:{idle:{on:{LISTEN:"recognising",SPEAK:{target:"speaking",actions:Object(s.b)(((t,e)=>({ttsAgenda:e.value})))}}},recognising:{initial:"progress",entry:"recStart",exit:"recStop",on:{ASRRESULT:{actions:["recLogResult",Object(s.b)(((t,e)=>({recResult:e.value})))],target:".match"},RECOGNISED:"idle"},states:{progress:{},match:{entry:Object(s.q)("RECOGNISED")}}},speaking:{entry:"ttsStart",on:{ENDSPEECH:"idle"}}}}}},{actions:{recLogResult:t=>{console.log("<< ASR: "+t.recResult)},test:()=>{console.log("test")},logIntent:t=>{console.log("<< NLU intent: "+t.nluData.intent.name)}}}),C=t=>{switch(!0){case t.state.matches({asrtts:"recognising"}):return Object(P.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover",style:{animation:"glowing 20s linear"}},t),{},{children:"Listening..."}));case t.state.matches({asrtts:"speaking"}):return Object(P.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover",style:{animation:"bordering 1s infinite"}},t),{},{children:"Speaking..."}));default:return Object(P.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover"},t),{},{children:"Click to start"}))}};function R(){const t=Object(j.useSpeechSynthesis)({onEnd:()=>{m("ENDSPEECH")}}),e=t.speak,n=t.cancel,a=(t.speaking,Object(j.useSpeechRecognition)({onResult:t=>{m({type:"ASRRESULT",value:t})}})),c=a.listen,i=(a.listening,a.stop),s=Object(r.b)(w,{devTools:!0,actions:{recStart:Object(r.a)((()=>{console.log("Ready to receive a appointment command."),c({interimResults:!1,continuous:!0})})),recStop:Object(r.a)((()=>{console.log("Recognition stopped."),i()})),changeColour:Object(r.a)((t=>{console.log("Repainting..."),document.body.style.background=t.recResult})),ttsStart:Object(r.a)(((t,n)=>{console.log("Speaking..."),e({text:t.ttsAgenda})})),ttsCancel:Object(r.a)(((t,e)=>{console.log("TTS STOP..."),n()}))}}),p=Object(o.a)(s,3),l=p[0],m=p[1];p[2];return Object(P.jsx)("div",{className:"App",children:Object(P.jsx)(C,{state:l,onClick:()=>m("CLICK")})})}const x=document.getElementById("root");c.render(Object(P.jsx)(R,{}),x)}},[[40,1,2]]]);
//# sourceMappingURL=main.1940b08b.chunk.js.map