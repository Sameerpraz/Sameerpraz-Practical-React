import './App.css';
import React, {useState} from 'react';
import { ChromePicker } from 'react-color';

function App() {
  const [color, setColor] = useState("#FFFFFF")
  const [showColorPicker, setShowColorPicker] = useState(false)
  
  return (
    <div>
      <button 
        onClick={()=>setShowColorPicker(showColorPicker=>!showColorPicker)}
      >
        {showColorPicker ? 'close':'open'}
      </button>
      {showColorPicker && (
        <ChromePicker 
          color={color}
          onChange={updateColor=>setColor(updateColor.hex)}
        />
      )}
      <h1>The hex value for the color you have picked is: {color}</h1>
      
    </div> 
    
  )
}

export default App;
