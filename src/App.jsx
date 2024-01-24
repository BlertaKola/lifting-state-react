import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import BoxDisplay from './components/BoxDisplay';
import ColorForm from './components/ColorForm';
import Advertisement from './components/Advertisement';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import Navigation from './components/Navigation';


function App() {

  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  const youveGotMail = (newMessage) => {
    setCurrentMsg(newMessage);
  }

  const [boxes, setBoxes] = useState([]);

  return (
    <>
      <MessageForm onNewMessage={youveGotMail} />
      <MessageDisplay message={currentMsg} />
      <ColorForm boxes={boxes} setBoxes={setBoxes}></ColorForm>
      <BoxDisplay boxes={boxes} setBoxes={setBoxes}></BoxDisplay>
      <div style={{width: "950px", backgroundColor: "silver", margin: "0px auto", overflow: "hidden", padding: "20px", marginTop: "100px"}}>
        <Header></Header>
        <div>
          <MainBlock></MainBlock>
          <Navigation></Navigation>
        </div>

      </div>

    </>
  );
}

export default App;

