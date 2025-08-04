import React from 'react'
import './App.css'
import DeshBordCard from './Components/DeshBordCard.jsx'
import DeshBoard from './Pages/DeshBoard.jsx'

const App = () => {
  return (
    <div>
      <DeshBoard />
      <DeshBordCard />
    </div>
  )
}

export default App;
