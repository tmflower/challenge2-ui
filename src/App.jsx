import { useState } from 'react'
import './App.css'
import UserForm from './UserForm';
import Map from './Map';

function App() {
  const [didSubmit, setDidSubmit] = useState(false);
  const [matches, setMatches] = useState(null);

  const handleClick = () => {
    setDidSubmit(!didSubmit);
  }

  return (
    <div className="App">   
      <h1>Find Your Favorite Stars!</h1>
      <p>🤔 Does this mean you're a stalker? Maybe a little...</p>   
      <div className="card">
        {!didSubmit ?
        <div>
          <UserForm setDidSubmit={setDidSubmit} setMatches={setMatches}></UserForm>
        </div>
        : 
        <div>
          <Map matches={matches} setMatches={setMatches}></Map>
          <button onClick={handleClick}>Search again</button>
        </div>
        }
      </div>
    </div>
  )
}

export default App
