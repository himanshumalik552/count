
import './App.css';
import './ourclient/ourclient.css'
import OurClient from './ourclient/OurClient';
import './grorapid.css'
import CountUpComponent from './countup/CountUpComponent';
function App() {
  return (
    <>
    <div className="bg_home"></div>
    <div className="bg_home bg2_home"></div>
    <div className="bg_home bg3_home"></div>
      <CountUpComponent />
     <OurClient/>
     </>
  );
}

export default App;
