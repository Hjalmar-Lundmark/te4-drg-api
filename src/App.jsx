import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [salutes, setSalutes] = useState([])
  const [trivia, setTrivia] = useState([])
  const [deepdives, setDeepdives] = useState([])

  async function fetchAll() {
    await fetch(`https://drgapi.com/v1/salutes/`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setSalutes(result)
      }).catch(err => {
        console.log(err)
      });

    await fetch(`https://drgapi.com/v1/trivia/`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setTrivia(result)
      }).catch(err => {
        console.log(err)
      });

    await fetch(`https://drgapi.com/v1/deepdives/`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setDeepdives(result)
      }).catch(err => {
        console.log(err)
      });
  }

  useEffect(() => {
    fetchAll()
  }, [])

  function getRandom(obj) {
    return Math.floor(Math.random() * obj.length)
  }

  return (
    <>
      {salutes.salutes && trivia.trivia && deepdives.variants ? (
        <>
          <h1 id='salute'>{salutes.salutes[getRandom(salutes.salutes)]}</h1>
          <button onClick={() => { document.getElementById('salute').innerHTML = salutes.salutes[getRandom(salutes.salutes)] }}>Rock and Stone</button>


          <h2>Trivia: </h2>
          <h2 id='trivia'>{trivia.trivia[getRandom(trivia.trivia)]}</h2>
          <button onClick={() => { document.getElementById('trivia').innerHTML = trivia.trivia[getRandom(trivia.trivia)] }}>Get Trivia</button>

          <h2>Deep Dives: </h2>
          <h2>{deepdives.variants[0].name} in {deepdives.variants[0].biome}</h2>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default App
