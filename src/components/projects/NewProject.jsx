import React, {useState, useContext} from 'react'
import projectContext from '../../context/projects/projectContext'


const NewProject = () =>{

	const projectsContext = useContext(projectContext);
	const {form, showForm} = projectsContext;

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
				onClick={showForm}
			>
				New Project	
			</button>

			{ 
				form ? 
				(
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
				)
				: null
			}
		</>
	);
}


export default NewProject