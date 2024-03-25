
import React, { useEffect, useRef, useState } from 'react';
import Portrait from './portrait'
import {scriptProps} from './script'

interface chatProps {
    dialogInfo: {
      letters:string,
      tailwind: string[],
    }[]
    speed:  number,
    xPosition: number , yPosition:number,
    speakerName:string|undefined
    onEnd:() => void,
}

export default function ChatBox({
    dialogInfo,
    speed, 
    xPosition, yPosition,
    speakerName, 
    onEnd,
    }:chatProps) {

  const [visibilityIndex, setVisibilityIndex] = useState(0)
  const [lineNumberIndex, setLineNumberIndex] = useState(0)
  const stop = useRef(false)
  
  useEffect(() => {
    stop.current = (visibilityIndex === dialogInfo[lineNumberIndex].letters.length);
  })

  useEffect(() => { // timing 
    const interval = setInterval(() => {
      if(stop.current) clearInterval(interval)
      else setVisibilityIndex((preVal) => preVal + 1)
    }, speed);

    return () => {
      clearInterval(interval)
    }
  }, [lineNumberIndex,speed])


  const canvasOnclickSwitch = () =>{
    if (lineNumberIndex+1 < dialogInfo.length){
        setLineNumberIndex((preVal) => preVal + 1)
        setVisibilityIndex(() => 0)
    } else {
        onEnd()
        setVisibilityIndex(0)
        setLineNumberIndex(0)
    }
  } 
  console.log(dialogInfo[lineNumberIndex].letters.slice(0, visibilityIndex).split(" "))

  return  <div style={{left: `${xPosition}px`,top: `${yPosition}px`, position: "absolute"}} className='flex border-double border-4 border-sky-900 '>
            <div className="flex justify h-24 w-96 flex-wrap" onClick={canvasOnclickSwitch}> 
                  {dialogInfo[lineNumberIndex].letters.slice(0, visibilityIndex).split(" ").map((word,index) => {
                      return <div className={`${dialogInfo[lineNumberIndex].tailwind[index]}`}>{word
                        // word.split("").map(letter=> <>{letter}</>)
                      }</div>
                    })}
            </div>
            <Portrait speakerName={speakerName} />
          </div>

}

// className={`${dialogInfo[lineNumberIndex].tailwind[index]}`}

