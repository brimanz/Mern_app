import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const Login = () =>{
	
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const {email, password} = user;


	const onChange = e =>{
		setUser({
			...user,
			[e.target.name] : e.target.value
		})
	}

	const onSubmit = e =>{
		e.preventDefault();


		//validate zone


		//send to action
	}


	return(
		<div className="form-usuario">
			<div className="contenedor-form sombra-dark">
				<h1>Iniciar Sesión</h1>

				<form
					onSubmit={onSubmit}
				>
					<div className="campo-form">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Ingresa tu Email"
							onChange={onChange}
							value={email}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Ingresa tu Password"
							onChange={onChange}
							value={password}
						/>
					</div>

					<div className="campo-form">
						<input 
							type="submit"
							className="btn btn-primario btn-block"
							value="Iniciar Sesión"
						/>
					</div>
				</form>

				<Link to={'/new-count'} className="enlace-cuenta">
					Create count
				</Link>
			</div>
		</div>
	);
}


export default Login