import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [curState, setCurState] = useState({curView: 'main', spec: specType});
  const [curUser, setCurUser] = useState(null);

  return (
    <div id="app">
      <NavBar curUser={curUser} curState={curState} setCurUser={curUser} setCurState={curState}/>
      <ContentBox curUser={curUser} curState={curState} setCurUser={curUser} setCurState={curState}/>
    </div>
  )
}

function ContentBox({curState, setCurState, curUser, setCurUser}) {
  switch(curState.curView) {
    case 'main':
      return <MainView 
        curUser={curUser}
        curState={curState}
        setCurUser={curUser}
        setCurState={curState}
      />
    case 'listings':
      return <MainView 
        curUser={curUser}
        curState={curState}
        setCurUser={curUser}
        setCurState={curState}
      />
    case 'custom':
      return <MainView 
        curUser={curUser}
        curState={curState}
        setCurUser={curUser}
        setCurState={curState}
      />
    case 'account':
      return <MainView 
        curUser={curUser}
        curState={curState}
        setCurUser={curUser}
        setCurState={curState}
      />
    case 'auth':
      return <MainView 
        curUser={curUser}
        curState={curState}
        setCurUser={curUser}
        setCurState={curState}
      />
    case 'info':
      return <MainView 
        curUser={curUser}
        curState={curState}
        setCurUser={curUser}
        setCurState={curState}
      />
    case 'emmet-dash':
      return <MainView 
        curUser={curUser}
        curState={curState}
        setCurUser={curUser}
        setCurState={curState}
      />
    default:
      throw new Error("Unrecognized Viewtype", curState.curView);
  }
}
export default App
