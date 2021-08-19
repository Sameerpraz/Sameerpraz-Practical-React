import './App.css';
import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

function App() {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpire] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')
  return (
  <div className={App}>
		<Cards 
			number={number}
			name={name}
			expiry={expiry}
			cvc={cvc}
			focused={focus}
		/>

      <form>
        <input 
			type='tel' 
			name='number' 
			placeholder="Enter Card Number" 
			value={number} 
			onChange={e=>setNumber(e.target.value)}
			onFocus={e=>setFocus(e.target.name)}
        />
		<input 
			type='tel' 
			name='name' 
			placeholder="Enter Card Number" 
			value={name} 
			onChange={e=>setName(e.target.value)}
			onFocus={e=>setFocus(e.target.name)}
        />
		<input 
			type='text' 
			name='expiry' 
			placeholder="MM/YY Expiry" 
			value={expiry} 
			onChange={e=>setExpire(e.target.value)}
			onFocus={e=>setFocus(e.target.name)}
        />
		<input 
			type='tel' 
			name='cvc' 
			placeholder="Enter CVC" 
			value={cvc} 
			onChange={e=>setCvc(e.target.value)}
			onFocus={e=>setFocus(e.target.name)}
        />
      </form>
    </div> 
    
  )
}

export default App;
