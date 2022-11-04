import { useEffect, useState } from "react"
import axios from 'axios'

/*
const tareas = [
  {
    id: 1,
    nombre: "cosa1"
  },
  {
    id: 2,
    nombre: "cosa2",
  }
]*/
export const ListStudents = () => {
  const [task, settask] = useState([])

  const fetchStudents = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.get('https://restapinormal.vercel.app/users')
      settask(data)
      console.log(data)
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }

  }

  useEffect((e) => {
    console.log(e)
    console.log("Table rendered")
  }, [])
  //tareas.forEach(e => console.log(e))

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {task.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-success mb-3" onClick={fetchStudents}>Get students</button>
    </div>
  )
}
