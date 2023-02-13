import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Users from './components/Users';

function App() {
  let [showHeader, setshowHeader] = useState(true); 

  return (
    <div className="App">


      {showHeader ? <Header />: ""} 

      <button onClick={() => setshowHeader( !showHeader )}>{showHeader ? "Hide" : "Show"} header</button> 
     

      <Users />
    </div>
  );
}

export default App;
