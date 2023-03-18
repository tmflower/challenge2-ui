import { useState } from 'react'
import './App.css'
import UserForm from './UserForm';
import Map from './Map';
import taylor from "./assets/taylorSwift.png";
import chris from "./assets/chrisMartin.png";
import emilia from "./assets/emiliaClarke.png";
import idris from "./assets/idrisElba.png";
import emma from "./assets/emmaWatson.png";

function App() {
  const [didSubmit, setDidSubmit] = useState(false);
  const [matches, setMatches] = useState(null);

  const handleClick = () => {
    setDidSubmit(!didSubmit);
  }

  return (
    <div className="App">
      <h1>Find Your Favorite Stars!</h1>
			<img
			className="taylor"
			src={taylor}
			alt="Taylor Swift wearing sparkly gold halter dress in dancing pose glancing to the side"/>
		<img
			className="chris"
			src={chris}
			width="250"
			alt="Chris Martin wearing beige beanie and black sweater with moon and stars speaking into standing microphone holding paper in hand"/>
		<img
			className="emilia"
			src={emilia}
			width="400"
			alt="Emilia Clarke wearing gold crocheted vest with animated facial expression and gesturing with both hands in the air"/>
		<img
			className="idris"
			src={idris}
			width="400"
			alt="Idris Elba wearing gray polo shirt buttoned up leaning back with hand behind head, elbows pointing out glancing to the side with relaxed expression"/>
		<img
			className="emma"
			src={emma}
			width="200"
			alt="Emma Watson wearing white blouse and dark jacket with laughing expression"/>
      <p>🤔 Does this mean you're a stalker? Maybe a little...</p>
      <div className="card">
        {!didSubmit ?
        <div>
          <UserForm setDidSubmit={setDidSubmit} setMatches={setMatches}></UserForm>
        </div>
        :
        <div>
          <button onClick={handleClick}>Search again</button>
          <Map matches={matches} setMatches={setMatches}></Map>
        </div>
        }
      </div>
    </div>
  )
}

export default App
