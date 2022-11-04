import { useEffect, useState } from "react"

function newdiv(){
  return (
    <div>Nuevo divs</div>
  )
}

export const FormIn = () => {
  useEffect(() => {
    console.log("new div renderd")
  }, [])
  const [ddiv, setddiv] = useState()
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center center-all">
        <h2>Matricula</h2>
      </div>
      <button type="button" onClick={newdiv}>Generate new one</button>
    </div>
  )
}