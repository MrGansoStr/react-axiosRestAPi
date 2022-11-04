import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

export const Register = () => {
	const [lnames, setlnames] = useState("")
	const [fnames, setfnames] = useState("")
	const [username, setusr] = useState("")
	const [password, setpass] = useState("")
	const [dni, setdni] = useState("")
	const [aceptTerms, setAceptTerms] = useState(true);

	const handleterms = () => {
		setAceptTerms(!aceptTerms)
		console.log(aceptTerms)
	}

	const handleSubmitAll = (e) => {
		e.preventDefault();
		/*
		let arrnames = lnames.split(' ', 2)
		console.log(arrnames[0])
		console.log(arrnames[1])
		*/
		let [lnamep, lnamem] = lnames.split(' ', 2)
		console.log(username)
		console.log(password)
		console.log(fnames)
		console.log(lnamep)
		console.log(lnamem)
		console.log(dni)
		console.log(aceptTerms)
	}

	const fetchRegister = async (e) => {
		e.preventDefault()
		let email = "test@gmail.com"
		try {
			const { data } = await axios.post('http://localhost:3010/oregister', {
				username,
				password,
				email
			})
			console.log(data)
			alert("Register successfully")
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		console.log("Register Rendered")
	}, [])

	return (
		<div className="container">
			<div className="row align-items-center justify-content-center center-all">
				<div className="col-md-6 nav-container center-all">
					<h3>Register Celen - Pays</h3>
					<form onSubmit={fetchRegister} method="POST">
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input type="text" id="username" placeholder="Username" className="form-control mb-3" onChange={e => setusr(e.target.value)} />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input type="password" id="password" placeholder="Password" className="form-control mb-3" onChange={e => setpass(e.target.value)} />
						</div>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input type="text" id="name" placeholder="Jose Armando" className="form-control mb-3" onChange={(e) => setfnames(e.target.value)} />
							<label htmlFor="lname">Last Name</label>
							<input type="text" id="lname" placeholder="Aguilar Alcachofa" className="form-control mb-3" onChange={(e) => setlnames(e.target.value)} />
						</div>
						<div className="form-group">
							<label htmlFor="dni">DNI</label>
							<input type="text" id="dni" placeholder="DNI" maxLength="8" className="form-control mb-3" onChange={e => setdni(e.target.value)} />
						</div>
						<div className="form-check">
							<input id="checkx" type="checkbox" className="form-check-input" value={aceptTerms} onChange={handleterms} />
							<label className="form-check-label" htmlFor="checkx">Acepto los <a href="/">Terminos y condiciones</a> y la <a href="/">Politica de privacidad</a></label>
							<button type="submit" className="btn btn-success mb-3" >Go Register</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}