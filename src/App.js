import logo from './logo.svg';
import './App.css';
import React, { forwardRef } from 'react';
import 'tippy.js/dist/tippy.css'
import Tippy from '@tippy.js/react';

// using child 

const CustomChild = forwardRef((props, ref)=>{
  return (
    <div ref={ref}>
    <div>First Component</div>
    <div>Second Component</div>
    </div>
  )

})

function App() {
  return (
    <div className="App">
      <div>
        {/* removing of arrow and delaying */}
        {/* by default tooltip is shown in bottom. We can customize it by defining placement in div tag */}
      <Tippy arrow={false} placement='right' delay={1000} content='Hello Sameer'>
        <button>hover</button>
      </Tippy>
      </div>
      <div style={{paddingBottom: '10px'}}>
      <Tippy content={<span style={{color:'orange'}}>Hello Sameer</span>}>
        <button>hover</button>
      </Tippy>


       <Tippy content={<span style={{color:'orange'}}>Hello Sameer</span>}> 
         <CustomChild>hover</CustomChild>
       </Tippy> 
      </div>
      </div> 
    
  );
}

export default App;
