import { MachineConfig, send, Action, assign, actions} from "xstate";
import "./styles.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useMachine, asEffect } from "@xstate/react";
import { inspect } from "@xstate/inspect";

const {cancel} = actions

function say(text: string): Action<SDSContext, SDSEvent> {
    return send((_context: SDSContext) => ({ type: "SPEAK", value: text }))
}

function listen(): Action<SDSContext, SDSEvent> {
    return send('LISTEN')
}

function help(prompt: string, name: string): MachineConfig<SDSContext, any, SDSEvent>{
    return ({entry: say(prompt),
             on: {ENDSPEECH: name+".hist" }})
}

function speech(prompt: string): MachineConfig<SDSContext, any, SDSEvent>{
    return ({entry: say(prompt),
             on: {ENDSPEECH: "ask"
            }})
}

function promptAndAsk(prompt: string, prompt_a:string): MachineConfig<SDSContext, any, SDSEvent> {
    return ({
        initial: "prompt",
        states: {
            prompt: {
                entry: say(prompt),
                on: { ENDSPEECH: "ask" }
            },
            hist : {type: "history"},
            maxspeech: {
                ...speech(prompt_a)
            },
            ask: {
                entry: [listen(), send('MAXSPEECH', {delay: 6000})]
            },
        }})
}


const grammar: { [index: string]: { pokemon?: string, place?: string} } = {

    //name of example pokemon 
    "Pikachu": { pokemon: "Pikachu" },
    "Slowking": { pokemon: "Slowking" },
    "Mister Mime": { pokemon: "Mister Mime" },


    //region or real life country 
    "Uppsala" : { place: "Uppsala, Sweden" },
    "Göteborg" : { place: "Göteborg, Sweden" },
    "Stockholm" : { place: "Stockholm, Sweden" }


}


const grammar2 : { [index: string]: boolean }= { 

                  "yes": true,
                  "Yes": true,
				  "Of course": true,
                  "of course": true, 
                  "okay": true,
                  "Okay": true,
                  "Yup": true,
                  "yup": true,
                  "Ja": true,
                  "ja": true,
                  "No": false,
				  "no" : false,
                  "Nej": false,
                  "nej": false,
				  "No way": false,
				  "no way" : false
}

const grammar3 ={ "count": 0 }
const grammar4 ={ "attack_count": 0 , "defend_count": 0 }
const grammar5 = { "attack_count": 0 , "defend_count": 0 }
const grammar_attack: { [index: string]: { battle?: string} } = {
    "attack" : { battle: "Attack"},
    "Attack" : { battle: "Attack"} }
    

const grammar_defend: {[index: string]: {battle?: string}} = {
    "defense" : { battle: "Defend"},
    "Defense" : { battle: "Defend"},
    "Defend" : { battle: "Defend"},
    "defend" : { battle: "Defend"}}


const help_commands = { "help": "Help", "Help": "Help" }


export const dmMachine: MachineConfig<SDSContext, any, SDSEvent> = ({
    initial: 'init',
    states: {
        init: {
            on: {
                CLICK: 'welcome'
            }
        },
		welcome: {
            initial: "prompt",
            on: {
                RECOGNISED: [{
                    target: "query",
                    cond: (context) => !(context.recResult in help_commands),
                    actions: [assign((context) => { return { option: context.recResult } }),assign((context) => { grammar3["count"]=0}),cancel("maxsp")],
                },

                {target: "welcome_help",
                cond: (context) => context.recResult in help_commands}], 
                

                MAXSPEECH: [{
                    target:".maxspeech",
                    cond: (context) => grammar3["count"] <= 2,
                    actions: assign((context) => { grammar3["count"]=grammar3["count"]+1 } )
                    },
                    {target: "#root.dm.init", 
                    cond: (context) => grammar3["count"] > 2, 
                    actions:assign((context) => { grammar3["count"]=0})}]
            },

            states: {        
                prompt: {
                entry: say("Welcome to the world of Pokemon. Select your level. Easy or hard."),
                on: { ENDSPEECH: "ask" }
            },

            hist: {type: "history"},

            maxspeech: {
                ...speech("Please, respond by selecting a level.")
        },  

            ask: {
                entry: [listen(), send('MAXSPEECH', {delay: 6000})]
            }
        }   
    }, 
    
        welcome_help:{
            ...help("This is Pokemon. Please, select your level.", "welcome")
            
        },

		query: {
            invoke: {
                id: "rasa",
                src: (context, event) => nluRequest(context.option),
                onDone: {
                    target: "menu",
                    actions: [assign((context, event) => { return  {option: event.data.intent.name} }),
                    (context: SDSContext, event: any) => console.log(event.data), cancel("maxsp")]
                    //actions: assign({ intent: (context: SDSContext, event: any) =>{ return event.data }})

                },
                onError: {
                    target: "welcome",
                    actions: [(context, event) => console.log(event.data), cancel("maxsp")]
                }
            }
        },
      
        menu: {
            initial: "prompt",
            on: {
                ENDSPEECH: [
                    { target: "level_easy", cond: (context) => context.option === "level_easy" },
                    { target: "level_hard", cond: (context) => context.option === "level_hard" }
                ]
            },

            states: {
                prompt: {
                    entry: send((context) => ({
                        type: "SPEAK",
                        value: `You chose ${context.option}. Great choice.`
                    })),
        },

                 nomatch: {
                    entry: say("Sorry, please repeat again."),
                    on: { ENDSPEECH: "prompt" }
        } 
            }       
        },

        level_hard: {
            initial: "prompt",
            on: { ENDSPEECH: "pokemon" },
            states: {
                prompt: {
                    entry: send((context) => ({
                        type: "SPEAK",
                        value: `Time to get a pokemon.`
                    }))
                }}
                    },
        
        
        
         level_easy: {
            initial: "prompt",
            on: { ENDSPEECH: "pokemon" },
            states: {
                prompt: {
                    entry: send((context) => ({
                        type: "SPEAK",
                        value: `Time to get a pokemon.`
                    }))
                }}
        },

        pokemon: {
            initial: "prompt",
            on: {
                RECOGNISED: [{
                    target: "place",
                    cond: (context) => "pokemon" in (grammar[context.recResult] || {}),
                    actions: [assign((context) => { return { pokemon: grammar[context.recResult].pokemon } }),assign((context) => { grammar3["count"]=0}), cancel("maxsp")],
                    

                },

                { target: ".nomatch" ,
                 cond: (context) => !(context.recResult in help_commands),
                 actions: cancel("maxsp")},

                 {target: "pokemon_help",
                 cond: (context) => context.recResult in help_commands}],
                 
                 MAXSPEECH: [{target:".maxspeech",
                 cond: (context) => grammar3["count"] <= 2,
                actions: assign((context) => { grammar3["count"]=grammar3["count"]+1 } )
                },{target: "#root.dm.init", 
                cond: (context) => grammar3["count"] > 2, 
                actions:assign((context) => { grammar3["count"]=0})}] 
            },

            states: {
                prompt: {
                    entry: say("Which Pokemon do you want?"),
                    on: { ENDSPEECH: "ask" }
                },
                hist: {type: "history"},
                ask: {
                    entry: [listen(), send('MAXSPEECH', {delay: 6000, id: "maxsp"})]
                },
                maxspeech: {
                    ...speech("Please respond, which pokemon do you want?")
                },
                nomatch: {
                    entry: say("Sorry, I don't know that Pokemon."),
                    on: { ENDSPEECH:  "prompt" }
                
                }
             }
        },

        pokemon_help:{
            ...help("Please, tell me the name of the pokemon you want.","pokemon")
        },

        place: {
            initial: "prompt",
            on: {
	            RECOGNISED: [{
	                cond: (context) => "place" in (grammar[context.recResult] || {}),
		             actions: [assign((context) => { return { place: grammar[context.recResult].place } }),assign((context) => { grammar3["count"]=0}),cancel("maxsp")],
		            target: "fight"

		        },	
		        { target: ".nomatch" ,
                cond: (context) => !(context.recResult in help_commands),
                actions: cancel("maxsp")},
                {target: "place_help",
                cond: (context) => context.recResult in help_commands}],
                MAXSPEECH: [{target:".maxspeech",
                cond: (context) => grammar3["count"] <= 2,
                actions: assign((context) => { grammar3["count"]=grammar3["count"]+1 } )
                },{target: "#root.dm.init", 
                cond: (context) => grammar3["count"] > 2, 
                actions:assign((context) => { grammar3["count"]=0})}] 
	        },

            states: {
                prompt: {
                    entry: send((context) => ({
                        type: "SPEAK",
                        value: `Excellent! ${context.pokemon} is your pokemon now. What region do you want to go to?`
                    })),
		            on: { ENDSPEECH: "ask" }
                },
                hist: {type: "history"},
		        ask: {
		            entry: [listen(), send('MAXSPEECH', {delay: 6000, id: "maxsp"})]
	            },
                maxspeech: {
                 ...speech("Please, respond. Which region do you want to go to?")
              },
		        nomatch: {
		            entry: say("Sorry, I don't know which region or place you are talking about."),
		            on: { ENDSPEECH: "prompt" }
	            }	     
            }
        },

        place_help:{
            ...help("Please, tell me where you want to go.","place")
        },
        
	    fight: {
		        initial: "prompt",
		        on: {
	                RECOGNISED: [{
			            cond: (((context) => grammar2[context.recResult] === true)&&((context) => context.option === "level_easy")),
                        target: "battle1",
                        actions: [assign((context) => { grammar3["count"]=0}),cancel("maxsp")]},
                        {
                        cond: (((context) => grammar2[context.recResult] === true)&&((context) => context.option === "level_hard")),
                        target: "battle2",
                        actions: [assign((context) => { grammar3["count"]=0}),cancel("maxsp")]},
                        
						{
						cond: (context) => grammar2[context.recResult] === false,
						target: "place",
                        actions: [assign((context) => { grammar3["count"]=0}),cancel("maxsp")]

		            },

	                { target: ".nomatch",
                    cond: (context) => !(context.recResult in help_commands),
                    actions: cancel("maxsp")},
                    {target: "fight_easy_help",
                    cond: (context) => context.recResult in help_commands}],
                    
                    MAXSPEECH: [{target:".maxspeech",
                    cond: (context) => grammar3["count"] <= 2,
                    actions: assign((context) => { grammar3["count"]=grammar3["count"]+1 } )
                    },
                    {target: "#root.dm.init", 
                    cond: (context) => grammar3["count"] > 2, 
                    actions:assign((context) => { grammar3["count"]=0})}] 
		        },

		        states: {
		            prompt: {
			            entry: send((context) => ({
			                type: "SPEAK",
						    value: `${context.place} is full of wild Pokemon! Do you want to try and catch a Pokemon?`
			            })),
			            on: { ENDSPEECH: "ask" }
		            },

                    hist: {type: "history"},
		            
                    ask: {
		                entry: [listen(), send('MAXSPEECH', {delay: 6000, id: "maxsp"})]
		            },
                    
                    maxspeech: {
                      ...speech("Please, respond.")
                    },
		            
                    nomatch: {
			            entry: say("Please, answer the question."),
		                on: { ENDSPEECH: "prompt" }
		            }
		        }	     
            },
            
            fight_easy_help:{
                ...help("Please, answer the question with yes or no.","fight")
            },
            
            battle1: {
                initial: "prompt",
                on: {
                    RECOGNISED: [
                     // { 
                     //     cond: ((((context) => grammar4["attack_count"] === 2 ) && ((context) => grammar4['defend_count'] === 0)) || ((((context)=> grammar4['attack_count'] === 0)) && ((context)=> grammar4['defend_count']===2))),
                     //     target: "lose",
                     //     actions: [assign((context) => { grammar3["count"]=0}),cancel("maxsp")]} ,
                     { 
                         cond: ((context) => grammar4["attack_count"] > 1 ),
                         target: "win",
                         actions: [assign((context) => { grammar3["count"]=0}),cancel("maxsp")]} ,
                     { 
                         cond: ((context) => grammar4['defend_count'] > 1 ),
                         target: "lose",
                         actions: [assign((context) => { grammar3["count"]=0}),cancel("maxsp")]} ,
                     // {
                     //     cond: (((context) => grammar4['attack_count']=== 1) && ((context) => grammar4['defend_count']===1)),
                     //     target: "win",
                     //     actions: [assign((context) => { grammar3["count"]=0}),cancel("maxsp")]},   
                     {
                         cond: (context) => "battle" in (grammar_attack[context.recResult] || {}),    
                         target: "battle1",
                         actions: [assign((context) => { grammar4["attack_count"]=grammar4['attack_count']+1}),cancel("maxsp")] 
                     },
                     {
                         cond: (context) => "battle" in (grammar_defend[context.recResult] || {}),    
                         target: "battle1",
                         actions: [assign((context) => { grammar4["defend_count"]=grammar4['defend_count']+1}),cancel("maxsp")]
                     },

                     { target: ".nomatch",
                     cond: (context) => !(context.recResult in help_commands),
                     actions: cancel("maxsp")},
                     
                     {target: "battle1_help",
                     cond: (context) => context.recResult in help_commands}],

                     MAXSPEECH: [{target:".maxspeech",
                     cond: (context) => grammar3["count"] <= 2,
                     actions: assign((context) => { grammar3["count"]=grammar3["count"]+1 } )
                     },
                     {target: "#root.dm.init", 
                     cond: (context) => grammar3["count"] > 2, 
                     actions:assign((context) => { grammar3["count"]=0})}]  
                 },
                 states: {
                     prompt: {
                         entry: send((context) => ({
                             type: "SPEAK",
                             value: ` Let's fight! Do you want to attack or defend?.`
                         })),
                         on: { ENDSPEECH: "ask" }
                     },

                     hist: {type: "history"},
                     
                     ask: {
                         entry: [listen(), send('MAXSPEECH', {delay: 6000, id: "maxsp"})]
                     },

                     maxspeech: {
                          ...speech("Please, respond or lose all chances of capturing this Pokemon. Attack or defend?")},
                     
                     nomatch: {
                         entry: say("Please, repeat it again."),
                         on: { ENDSPEECH: "prompt" }
                     }
                 }
             },

             battle1_help:{
                ...help("Select your action! Attack or defend!","battle1")
            },

            battle2: {
		           initial: "prompt",
	               on: {
		               RECOGNISED: [
						// { 
                        //     cond: ((((context) => grammar4["attack_count"] === 2 ) && ((context) => grammar4['defend_count'] === 0)) || ((((context)=> grammar4['attack_count'] === 0)) && ((context)=> grammar4['defend_count']===2))),
                        //     target: "lose",
                        //     actions: [assign((context) => { grammar3["count"]=0}),cancel("maxsp")]} ,
                        { 
                            cond: ((context) => grammar4["attack_count"] >= 2 ),
                            target: "lose",
                            actions: [assign((context) => { grammar3["count"]=0}),cancel("maxsp")]} ,
                        { 
                            cond: ((context) => grammar4['defend_count'] >= 3 ),
                            target: "win",
                            actions: [assign((context) => { grammar3["count"]=0}),cancel("maxsp")]} ,
                        // {
                        //     cond: (((context) => grammar4['attack_count']=== 1) && ((context) => grammar4['defend_count']===1)),
                        //     target: "win",
                        //     actions: [assign((context) => { grammar3["count"]=0}),cancel("maxsp")]},   
                        {
                            cond: (context) => "battle" in (grammar_attack[context.recResult] || {}),    
                            target: "battle2",
                            actions: [assign((context) => { grammar4["attack_count"]=grammar4['attack_count']+1}),cancel("maxsp")] 
		                },
                        {
                            cond: (context) => "battle" in (grammar_defend[context.recResult] || {}),    
                            target: "battle2",
                            actions: [assign((context) => { grammar4["defend_count"]=grammar4['defend_count']+1}),cancel("maxsp")]
                        },

		                { target: ".nomatch",
                        cond: (context) => !(context.recResult in help_commands),
                        actions: cancel("maxsp")},
                        
                        {target: "battle2_help",
                        cond: (context) => context.recResult in help_commands}],

                        MAXSPEECH: [{target:".maxspeech",
                        cond: (context) => grammar3["count"] <= 2,
                        actions: assign((context) => { grammar3["count"]=grammar3["count"]+1 } )
                        },
                        {target: "#root.dm.init", 
                        cond: (context) => grammar3["count"] > 2, 
                        actions:assign((context) => { grammar3["count"]=0})}]  
		            },
		            states: {
		                prompt: {
			                entry: send((context) => ({
			                    type: "SPEAK",
								value: ` Let's fight! Do you want to attack or defend?.`
                            })),
                            on: { ENDSPEECH: "ask" }
		                },

                        hist: {type: "history"},
		                
                        ask: {
			                entry: [listen(), send('MAXSPEECH', {delay: 6000, id: "maxsp"})]
		                },

                        maxspeech: {
                             ...speech("Please, respond or lose all chances of capturing this Pokemon. Attack or defend?")},
		                
                        nomatch: {
			                entry: say("Please, repeat it again."),
			                on: { ENDSPEECH: "prompt" }
		                }
                    }
	            },

                battle2_help:{
                    ...help("Select your action! Attack or defend!","battle2")
                },

                lose: {
                    initial: "prompt",
                        on: { ENDSPEECH: "init" },
                            states: {
                                prompt: { entry: say("You lost! Failed to catch the wild Pokemon!")
                                }}	},
                win: {
                    initial: "prompt",
                        on: { ENDSPEECH: "init" },
                        states: {
                        prompt: { entry: say("Congratualtions, you caught a wild Pokemon!")}
                            }
                        }	    
                } } 
            )


			/* RASA API
 *  */
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const rasaurl = "https://appointment--app.herokuapp.com/model/parse"
const nluRequest = (text: string) =>
    fetch(new Request(proxyurl + rasaurl, {
        method: "POST",
        headers: { "Origin": "http://localhost:3000/react-xstate-colourchanger" }, // only required with proxy
        body: `{"text": "${text}"}`
    }))
        .then(data => data.json());
