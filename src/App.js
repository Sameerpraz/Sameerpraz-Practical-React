import logo from './logo.svg';
import './App.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomNotify=({close})=>{
  return (
    <div>Something went wrong
    <button onClick={close}>close</button>
    </div>
  )
}

toast.configure()

function App() {
  const notify =()=>{
    // autoClose is used for delaying of time
    toast(<CustomNotify/>, {
      position: toast.POSITION.TOP_LEFT, 
      autoClose:2000
    })
    toast.success('This is Success', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false
    })
    toast.info('This is information', {
      position: toast.POSITION.TOP_RIGHT
    })
    toast.error('This is error', {
      position: toast.POSITION.BOTTOM_LEFT
    })
    toast.warn('This is Sameer', {
      position: toast.POSITION.BOTTOM_CENTER
    })
    toast('This is Sameer', {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }
  return (
    <div className="App">
      <button onClick={notify}>Notify</button>
    </div>
  );
}

export default App;
