import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal'; 
import React, { useState } from 'react';


Modal.setAppElement('#root')
function App() {
  const [modelIsOpen, setModelIsOpen]= useState(false)
  return (
    <div className="App">
      <button onClick={()=>setModelIsOpen(true)}>Open modal</button>
      {/* isOpen={true} is used to show modal */}
      {/* onRequestClose={()=>setModelIsOpen(0)} le ESC key use garda modal close hunxa */}
      {/* shouldCloseOnOverlayClick={false} le chai click garey pachi modal close garney rokxa but ESC key work*/}
      <Modal 
      isOpen={modelIsOpen} 
      shouldCloseOnOverlayClick={false} 
      onRequestClose={()=>setModelIsOpen(false)}
      style={{
        overlay: {
          backgroundColor: 'blue'
        },
        content: {
          background: 'red'
        }
      }}>

        <h1>This is modal</h1>
        <button onClick={()=>setModelIsOpen(false)}>close</button>
      </Modal>
      
    </div>
  );
}

export default App;
