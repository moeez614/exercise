import { useState } from 'react'
import Map from './components/map'
import Chart from './components/Chart'
import Live from './components/Live'
import Set from './components/Set'
import Get from './components/Get'
import './App.css'

function App() {

  return (
    <>
      <Chart />
      <hr />
      <Map />
      <Live />
      <hr />
      <Set /> 
      <Get />
    </>
  )
}

export default App
