import React, { useState } from 'react';
import ChatBox from './component/chatBox'
import {scriptProps, getScript} from './component/script'
// import {parse, dialogInfotype} from './component/chatUtil'

function App() {

  const [speechIndex, setSpeechIndex] = useState(0)
  const onEnd = () => {setSpeechIndex(previous => previous +1 )}

  const script: scriptProps[] = getScript()

  return (
    <div className="App">
      <header className="App-header"/>

      <ChatBox dialogInfo={script[speechIndex].dialogInfo} 
                speed={script[speechIndex].speed} 
                xPosition={script[speechIndex].xPosition} 
                yPosition={script[speechIndex].yPosition} 
                speakerName={script[speechIndex].speakerName}
         onEnd={onEnd}/>

    
    </div>
  );
}

export default App;
