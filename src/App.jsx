import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [joke, setJoke] = useState({});

useEffect(() => {
  axios.get("https://api.emojisworld.fr/v1/random?limit=1")
  .then(res => setJoke(res.data.results[0]))
}, []);

const btnFunction = () => {
  axios.get("https://api.emojisworld.fr/v1/random?limit=1")
  .then(res => setJoke(res.data.results[0]))
}

  return (
    <section>
      <div className='container'>
        <div>
          <i>{joke?.emoji}</i>
        </div>
        <p>{joke?.name}</p>
        <button onClick={btnFunction} className='btn'><i className="fa-solid fa-shuffle size"></i></button>
      </div>
    </section>
  )
}

export default App
