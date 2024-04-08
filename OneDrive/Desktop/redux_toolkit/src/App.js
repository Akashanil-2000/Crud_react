import './App.css';
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { decrement, increment } from './feature/counterSlice';

function App() {
  const {count1}=useSelector((state)=>state.counter)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <h1>Initial value:{count1}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
