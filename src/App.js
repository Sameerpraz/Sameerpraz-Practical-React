import React, { useState } from 'react';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker';
import DatePicker from "react-datepicker";


function App () {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
  <div className='App'>
	  {/* <DatePicker 
		selected={selectedDate} 
		onChange={date => setSelectedDate(date)}
		dateFormat='dd/MM/yyyy'
		maxDate={new Date()} 
		minDate={new Date()}
		/> */}
{/* filter date */}
		<DatePicker
		selected={selectedDate} 
		onChange={date => setSelectedDate(date)}
		dateFormat='dd/MM/yyyy'
		filterDate={date=>date.getDay()!== 6 && date.getDay()!==0}
		isClearable='true'
		showMonthDropdown
		showYearDropdown
		/>
  </div> 
  )
}

export default App;
