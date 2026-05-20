import { useState, useEffect } from 'react';
import NavBar from './components/navbar.jsx';
import MainView from './components/viewtypes/mainView.jsx';
import Footer from './components/footer.jsx';
import ForSaleView from  './components/viewtypes/forSaleView.jsx';
import AuthView from  './components/viewtypes/authView.jsx';
import AccountView from  './components/viewtypes/accountView.jsx';
import InfoView from  './components/viewtypes/infoView.jsx';
import AdminEditorView from './components/viewtypes/adminEditorView.jsx';

import './App.css';

import DisplayModel from './components/displayModel.jsx';


function App() {
  const [curState, setCurState] = useState({curView: 'main', spec: null});
  const [curUser, setCurUser] = useState(null);

  let showNav = <NavBar 
    curUser={curUser}
    curState={curState}
    setCurUser={setCurUser}
    setCurState={setCurState}
  />
  let showFooter = <Footer
    curState={curState}
    setCurState={setCurState}
  />
  
  if (curState.curView === 'auth') {
    showNav = null;
    showFooter = null;
  }

  return (
    <div id="app">
      {showNav}
      <ContentBox curUser={curUser} curState={curState} setCurUser={setCurUser} setCurState={setCurState}/>
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
        setCurUser={setCurUser}
        setCurState={setCurState}
      />
    case 'for-sale':
      return <ForSaleView 
        curUser={curUser}
        curState={curState}
        setCurUser={setCurUser}
        setCurState={setCurState}
      />
    case 'listing':
      return <ForSaleView 
        curUser={curUser}
        curState={curState}
        setCurUser={setCurUser}
        setCurState={setCurState}
      />
    case 'custom':
      return <editCustomView
        curUser={curUser}
        curState={curState}
        setCurUser={setCurUser}
        setCurState={setCurState}
      />
    case 'account':
      return <AccountView 
        curUser={curUser}
        setCurState={setCurState}
      />
    case 'auth':
      return <AuthView 
        curUser={curUser}
        curState={curState}
        setCurUser={setCurUser}
        setCurState={setCurState}
      />
    case 'info':
      return <InfoView
        curState={curState}
        />
    case 'emmet-dash':
      return <MainView 
        curUser={curUser}
        curState={curState}
        setCurUser={setCurUser}
        setCurState={setCurState}
      />
    case 'image-proc-debug':
      return <AdminEditorView/>
    default:
      throw new Error("Unrecognized Viewtype", curState.curView);
  }
}

export default App
