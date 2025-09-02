import React , { useState } from 'react'

const Get = () => {
    const [value, setvalue] = useState(null)
    const getdata = async()=>{
        const res = await fetch('http://localhost:5000/get')
        const result = await res.json()
        console.log(result);
        setvalue(result.value)
    }
  return (
    <div>
        <button onClick={getdata}>Get</button>
        <h3>
        value is : {value}
        </h3>
    </div>
  )
}

export default Get
