import React from "react";

import Loxodonman from "./portrait_Images/Loxodonman.png";
import Thonak from "./portrait_Images/Thonak.png";
import Quiznos from "./portrait_Images/Quiznos.png";

const dict:{ [key: string]: {image:string,offsets:{x:number,y:number}} } = {
  loxodonman:{image:Loxodonman,offsets:{x:-35,y:-30}},
  thonak: {image:Thonak,offsets:{x:0,y:-10}},
  quiznos: {image:Quiznos,offsets:{x:0,y:0}},
};

export default function Portrait({speakerName}  :{speakerName:string|undefined}){
        
        if (speakerName === undefined ) {return <></>}

        return (<div className="border-solid border-2 border-sky-900 h-24 ">
                <img src={dict[speakerName].image} alt="This is a portrait, or is it" 
                        style={{left: `${dict[speakerName].offsets.x}px`,top:`${dict[speakerName].offsets.y}px`,  position: "relative"}} />
                </div>)
}