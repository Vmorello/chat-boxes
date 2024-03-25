import { dialogInfotype, parse, parseList} from "./chatUtil"

export interface scriptProps {
    dialogInfo: dialogInfotype[]
    speed:  number,
    xPosition: number , yPosition:number,
    speakerName:string|undefined
}

export function getScript():scriptProps[] {

    let script:scriptProps[] = []

    for (let i = 0; i < preScript.length; i++) {
        script.push({
            dialogInfo: parseList(preScript[i].preFormatDialog),
            speed: preScript[i].speed,
            xPosition: preScript[i].xPosition,
            yPosition: preScript[i].yPosition,
            speakerName: preScript[i].speakerName
        })
    }

    console.log(script)

    return script
}

// loxodonman:
  // thonak: 
  // quiznos:

  const slow_speed =100

  const loxodon = {speed:64,x:400,y:200}
  const thonak = {speed:50,x:200,y:420}
  const quiznos = {speed:20,x:80,y:720}
  const  other = {speed:50,x:100,y:220}

  

const preScript = [ 
    {preFormatDialog:["The land of Icewind Dale, a cold and snowly land", "Figures arrive from the south to this land in the north", "A loxodon, a so called elephant man & a goliath are distinct in the white background"], speed: other.speed, speakerName:undefined,xPosition: other.x , yPosition:other.y,}, 
    {preFormatDialog:["Looks like I made it", "The breeze is ", "refreshing"], speed: loxodon.speed, speakerName:"loxodonman",xPosition: loxodon.x , yPosition:loxodon.y,}, 
    {preFormatDialog:["Sup, @* big man @*","Come here often?"], speed: thonak.speed, speakerName:"thonak",xPosition: thonak.x , yPosition:thonak.y,}, 
    {preFormatDialog:["I cannot say I have ever been here.", "How do you do, mister goliath"], speed: loxodon.speed, speakerName:"loxodonman",xPosition: loxodon.x , yPosition:loxodon.y,}, 
    {preFormatDialog:["Better everyday","You know, you kinda remind me of someone.", "Oh yeah, @* Me @*"], speed: thonak.speed, speakerName:"thonak",xPosition: thonak.x , yPosition:thonak.y,}, 
    {preFormatDialog:["I remind you of yourself?", "What gives you that impression,", "We just met"], speed: loxodon.speed, speakerName:"loxodonman",xPosition: loxodon.x , yPosition:loxodon.y,}, 
    {preFormatDialog:["Seeing how big you are and that axe you're holding", "Seems like someone who would what to be the strongest", "Makes me think you got a letter promising just that","Am I right or did @~ I hit the bullseye @~"], speed: thonak.speed, speakerName:"thonak",xPosition: thonak.x , yPosition:thonak.y,}, 
    {preFormatDialog:["@* Intresting @*"], speed: slow_speed, speakerName:"loxodonman",xPosition: loxodon.x , yPosition:loxodon.y,}, 
    {preFormatDialog:["I will say that I have a letter with a promise in it", "But it is not about being the strongest, I do not have to prove that to anyone"], speed: loxodon.speed, speakerName:"loxodonman",xPosition: loxodon.x , yPosition:loxodon.y,}, 
    {preFormatDialog:["Oh thats good, cause you know we would have had to throw down if you did", "I'm @* Thonak @*","Mind if we share this road to Bryn Shander","I havent seen anyone as @~ ugly as me @~ to walk into town with me",], speed: thonak.speed, speakerName:"thonak",xPosition: thonak.x , yPosition:thonak.y,}, 
    {preFormatDialog:["@* Ha @* and you look like a rat's behind", "Well met Thonak", "I would be glad to join you", "Just to confirm we are going to the same place"], speed: loxodon.speed, speakerName:"loxodonman",xPosition: loxodon.x , yPosition:loxodon.y,}, 
    {preFormatDialog:["Oh yeah!","....", "Looks right man,","you got a name?"], speed: thonak.speed, speakerName:"thonak",xPosition: thonak.x , yPosition:thonak.y,}, 
    {preFormatDialog:["I'm ...", "just a ... ", "just a @* Loxodon man @*", "I haven't been more than that for while now"], speed: slow_speed, speakerName:"loxodonman",xPosition: loxodon.x , yPosition:loxodon.y,}, 
    {preFormatDialog:["oh kay buddy","Loxodanman it is, @~ let's go @~", "let me tell you about the time I tackled a yeti~", "@~ ~~~~ @~"], speed: thonak.speed, speakerName:"thonak",xPosition: thonak.x , yPosition:thonak.y,}, 
    {preFormatDialog:["Those guys do look very very strong","You'll be bodyguard 1 and bodyguard 2","I was promised, I was promised!"], speed: quiznos.speed, speakerName:"quiznos",xPosition: quiznos.x , yPosition:quiznos.y,}, 
  
]


// const preTextboxDialogGroup = ["I got @~ @* a lot @~ @* to say and i want to make sure that @~ all @~ is done when i am finished here.I got @~ @* a lot @~ @* to say! ","Hey there girl","can I offer you a @~ pickle? @~", "@* Ha! @* never gets olds"]
    