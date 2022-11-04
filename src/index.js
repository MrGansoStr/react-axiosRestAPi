import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Header/Header'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Login } from './Login/Login'
import { Register } from './Register/Register'
import { Home } from './Home/Home'
import { FormIn } from './FormIn/FormIn'
import { ListStudents } from './students/Students'


const root = ReactDOM.createRoot(document.getElementById('root'))
/*
function Holas( props ) {
	let nombre = 'Juanito Alcachofa'
	let band = true
	return (<h1 className='cosa'>{band ? 'Mi nombre es: ' + nombre : 'Sin alcachofa'} con edad de: { props.edad }</h1>)
}
*/

root.render(
	<Router>
		<Header />
		<Routes>
			<Route index element={<Home/>}/>
			<Route path='/' element={<Home/>}/>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register/>} />
			<Route path='/addnew' element={ <FormIn/> }/>
			<Route path='/students' element={ <ListStudents/> }/>
		</Routes>
	</Router>
)
