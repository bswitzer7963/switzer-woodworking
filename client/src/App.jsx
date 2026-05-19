import { useState, useEffect } from 'react';
import NavBar from './components/navbar.jsx';
import MainView from './components/viewtypes/mainView.jsx';
import Footer from './components/footer.jsx';
import './App.css';

function App() {
  const [curState, setCurState] = useState({curView: 'main', spec: null});
  const [curUser, setCurUser] = useState(null);

  let showNav = <NavBar 
    curUser={curUser}
    curState={curState}
    setCurUser={curUser}
    setCurState={curState}
  />
  let showFooter = <Footer
    curState={curState}
    setCurState={curState}
  />
  
  if (curState.curView === 'auth') {
    showNav = null;
    showFooter = null;
  }

  return (
    <div id="app">
      {showNav}
      <ContentBox curUser={curUser} curState={curState} setCurUser={curUser} setCurState={curState}/>
      {showFooter}
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
      return <ForSaleView 
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
