import React ,{useState} from 'react';
import './App.css';
import Navbar from './components/Appbar'
import InfoPanel from './components/InfoPanel'
import FooterNav from './components/FooterNav'

function App() {

  const screenConfig = useState(0);

  return (
    <div className="App">
      <Navbar />
      <InfoPanel  currentScreen = {screenConfig[0]}/>
      <hr />
      <FooterNav screenConfig = {screenConfig}/>
    </div>
  );
}

export default App;
