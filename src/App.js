import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logged } from './actions';



function App() {
  const counter = useSelector( state=>state.counter);
  const isLogged = useSelector( state=>state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick = {()=>dispatch(increment(5))}>+</button>
      <button onClick = {()=>dispatch(decrement(5))}>-</button>
      <br />
      <button onClick = { ()=>{dispatch(logged())} }>Wanna see magic ? Click me</button>
      {isLogged ? <h3> Welcome</h3>: <h3>You are not logged in</h3>} 
    </div>
  );
}

export default App;
