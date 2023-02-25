import { useState } from 'react'
import './App.css'
import UserForm from './UserForm';
import Map from './Map';

function App() {
  const [didSubmit, setDidSubmit] = useState(false);

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
          <UserForm></UserForm>
          <button onClick={handleClick}>Find my stars</button>
        </div>
        : 
        <div>
          <Map></Map>
          <button onClick={handleClick}>Search again</button>
        </div>
        }
      </div>
    </div>
  )
}

export default App
