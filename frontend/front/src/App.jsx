import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data , setData] = useState([])

  useEffect(()=>{
    axios.get('https://fictional-winner-976xv7q699jx2xgvj-5000.app.github.dev/list')
    .then((response) => {setData(response.data)})
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
    <h1>Welcome</h1>
    <h2>Number of entries : {data.length}</h2>
    {
      data.map((entry) => {
           <div key={entry.id}>
               <p>Name : {entry.name} and Branch : {entry.branch}</p>
           </div>
      })
    }
    </>
  )
}

export default App
