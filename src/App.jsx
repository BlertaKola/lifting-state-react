import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import BoxDisplay from './components/BoxDisplay';
import ColorForm from './components/ColorForm';

    
function App() {

    const [currentMsg, setCurrentMsg] = useState("There are no messages");
    const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
    
    const [boxes, setBoxes] = useState([]);


    return (
        <>
            <MessageForm onNewMessage={ youveGotMail } />
            <MessageDisplay message={ currentMsg } />
            <ColorForm boxes={boxes} setBoxes={setBoxes}></ColorForm>
            <BoxDisplay boxes={boxes} setBoxes={setBoxes}></BoxDisplay>

        </>
    );
}
    
export default App;

