import { useState } from 'react'
import Map from './components/map'
import Chart from './components/Chart'
import Live from './components/Live'
import './App.css'

function App() {

  return (
    <>
      <Chart />
      <hr />
      <Map />
      <Live />
    </>
  )
}

export default App
