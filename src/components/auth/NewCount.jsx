import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const NewCount = () =>{
	
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		confirm: ''
	});

	const {name, email, password, confirm} = user;


	const onChange = e =>{
		setUser({
			...user,
			[e.target.name] : e.target.value
		})
	}

	const onSubmit = e =>{
		e.preventDefault();


		//validate zone


		//password min length 6 characters 


		//password should be same


		//send to action
	}


	return(
		<div className="form-usuario">
			<div className="contenedor-form sombra-dark">
				<h1>Crear Cuenta</h1>

				<form
					onSubmit={onSubmit}
				>

					<div className="campo-form">
						<label htmlFor="name">Nombre</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Ingresa tu nombre"
							onChange={onChange}
							value={name}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Ingresa tu email"
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
							placeholder="Ingresa tu password"
							onChange={onChange}
							value={password}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="confirm">Confirmar Password</label>
						<input
							type="password"
							id="confirm"
							name="confirm"
							placeholder="Confirma tu password"
							onChange={onChange}
							value={confirm}
						/>
					</div>

					<div className="campo-form">
						<input 
							type="submit"
							className="btn btn-primario btn-block"
							value="Crear Cuenta"
						/>
					</div>
				</form>

				<Link to={'/'} className="enlace-cuenta">
					Volver
				</Link>
			</div>
		</div>
	);
}


export default NewCount