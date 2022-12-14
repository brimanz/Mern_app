import React, {useContext, useEffect} from 'react'
import Project from './Project'
import projectContext from '../../context/projects/projectContext'


const ProjectList = () =>{

	const projectsContext = useContext(projectContext);
	const {projects, getProjects} = projectsContext;

	useEffect(() =>{
		getProjects();
	}, []);

	//cheking projects data
	if(projects.length === 0) return null;


	return(
		<ul className="listado-proyectos">
			{projects.map(project =>(
				<Project
					key={project.id}
					project={project}
				/>
			))}
		</ul>
	);
}


export default ProjectList