import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [entries , setEntries] = useState([])

  useEffect(()=>{
    axios.get('/api/list')
    .then((response) => {setEntries(response.data)})
    .catch((error) => {
      console.log(error)
    })
  })
  // console.log(entries)

  return (
    <>
    <h1>Welcome</h1>
    <h2>Number of entries : {entries.length}</h2>
    {/* {
      data.map((entry) => {
           <div key={entry.id}>
               <p>Name : {entry.name} and Branch : {entry.branch}</p>
           </div>
      })
    } */}
    </>
  )
}

export default App
