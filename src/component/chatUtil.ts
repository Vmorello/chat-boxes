export interface dialogInfotype {
    letters: string
    tailwind:  string[]
}

export function parseList(sentences: string[]) : dialogInfotype[]{
     let dialogGroup: dialogInfotype[] = []

    for (let i = 0; i < sentences.length; i++) {
        dialogGroup.push(parse(sentences[i]))
    }

    return dialogGroup
}

export function parse(sentence: string): dialogInfotype {
    const triggerCharacter: string = "@"

    let wiggling: string = ""
    let bold: string = ""
    // let font: string = ""
    // let color: string = ""

    let letters: string  = ""
    let tailwind: string[]  = []

    const words = sentence.split(" ")
    const baseTailwind = "min-w-2 text-2xl max-h-4 pr-2 "
    
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] === triggerCharacter) {
            switch(words[i][1]){
                case "~": { 
                    if (wiggling.length === 0)
                        {wiggling = "animate-bounce "}
                    else 
                        {wiggling = ""}
                    break}
                case "*":{
                    if (bold.length === 0)
                        {bold = "font-bold"}
                    else 
                        {bold = ""}
                    break
                }
                // case "f":{
                //     switch(sentence[i+2]):{
                //         if (this.bold.length == 0)
                //             {this.bold = "font-bold"}
                //         else 
                //             {this.bold = ""}
                //         i++
                //         break
                //     }
                //     i++
                //     i++
                //     break
                // }
                default: { 
                    console.log("I found @ but didnt understand what to do with it")
                    break; 
                    } 
            }
        }
        else {
            letters = letters.concat(words[i]+" ")
            tailwind.push(baseTailwind + wiggling + bold)
        }
    }
    return ({
        "letters":letters,
        "tailwind":tailwind,
    })
}



// console.log(parse("hello this is a @~test@~!"))

