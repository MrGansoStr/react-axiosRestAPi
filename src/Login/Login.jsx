import { useEffect, useState } from "react"
import axios from 'axios'



export const Login = () => {
	const [username, setusr] = useState("")
	const [password, setpass] = useState("")

	const fetchData = async (e) => {
		e.preventDefault()
		try {
			const { data, status } = await axios.post("http://localhost:3010/oauth", {
				username,
				password
			})
			console.log(data)
			alert("Loggin Successfully")
		} catch (err) {
			alert("Incorrect Username or Password")
			console.log(err)
		}
	}

	useEffect(() => {
		console.log("Login Rendered")
	}, [])

	return (
		<div className="container">
			<div className="row align-items-center justify-content-center center-all">
				<div className="col-md-7">
					<h3>Login Celen - Pays</h3>
					<form  onSubmit={ fetchData } method="post">
						<div className="form-group first">
							<label htmlFor="username">Username</label>
							<input type="text" className="form-control" placeholder="User" id="username" required onChange={e => setusr(e.target.value)}/>
						</div>
						<div className="form-group last mb-3">
							<label htmlFor="password">Password</label>
							<input type="password" className="form-control" placeholder="Password" id="password" required onChange={e => setpass(e.target.value)} />
						</div>

						<div className="d-flex mb-5 align-items-center form-check">
							<input type="checkbox" className="form-check-input" />
							<label className="control control--checkbox mb-0 ">Remember me	
							</label>
							<span className="ml-auto"><a href="/" className="forgot-pass">Forgot Password</a></span>
						<button type="submit" className="btn btn-success" >Log In</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}