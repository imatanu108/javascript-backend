import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => setJokes(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <h1>DevJokes😂</h1>
      <h3>Jokes Count: {jokes.length}</h3>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h4>{joke.title}:</h4>
            <div>{joke.content}</div>
          </div>
        ))
      }
    </>
  )
}

export default App
