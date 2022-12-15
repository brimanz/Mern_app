import React, {useState} from 'react'


const NewProject = () =>{

	const [project, setProject] = useState({
		name: ''
	});

	const onChangeProject = e =>{
		setProject({
			...project,
			[e.target.name] : e.target.value
		})
	}

	const {name} = project	

	const onSubmitProject = e =>{
		e.preventDefault(); 


		//validate zone


		//form reset
	}


	return(
		<>
			<button
				type="button"
				className="btn btn-block btn-primario"
			>
				Nuevo Proyecto	
			</button>

			<form
				className="formulario-nuevo-proyecto"
				onSubmit={onSubmitProject}
			>
				<input
					type="text"
					className="input-text"
					placeholder="New Project"
					name="name"
					value={name}
					onChange={onChangeProject}
				/>

				<input
					type="submit"
					className="btn btn-primario btn-block"
					value="Add Project"
				/>
			</form>
		</>

	);
}


export default NewProject