import React from 'react'


const FormTask = () =>{
	return(
		<div className="formulario">
			<form>
				<div className="contenedor-input">
					<input
						type="text"
						className="input-text"
						placeholder="Task"
						name="name"
					/>
				</div>

				<div className="contenedor-input">
					<input
						type="submit"
						className="btn btn-primario btn-block"
						value="Add Task"
					/>
				</div>
			</form>
		</div>
	);
}


export default FormTask