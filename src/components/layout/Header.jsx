import React from 'react'


const Header = () =>{
	return(
		<header className="app-header">
			<p className="nombre-usuario">
				Hello
				<span> Nombre</span>
			</p>

			<nav className="nav-principal">
				<a href="#!">
					Cerrar Sesion
				</a>
			</nav>
		</header>
	);
}


export default Header