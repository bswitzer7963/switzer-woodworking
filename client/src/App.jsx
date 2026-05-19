import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [curState, setCurState] = useState('home');
  const [curUser, setCurUser] = useState(null);

  return (
    <div id="app">
      <NavBar curUser={curUser} curState={curState} setCurUser={curUser} setCurState={curState}/>
      <ContentBox curUser={curUser} curState={curState} setCurUser={curUser} setCurState={curState}/>
    </div>
  )
}

export default App
