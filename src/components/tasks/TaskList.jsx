import React from 'react'
import Task from './Task'


const TaskList = () =>{
	
	const projectTaks = [
		{nombre: "Elegir Plataforma", estado: true},
		{nombre: "Elegir colores", estado: false},
		{nombre: "Elegir Plataforma de pago", estado: false},
		{nombre: "Elegir hosting", estado: true}
	];

	return(
		<>
			<h2>Proyect: Ecommerce</h2>

			<ul className="listado-tareas">
				{projectTaks.length === 0
					
					? 
						(
							<li className="tarea">
								<p>You don't tasks</p>
							</li>
						)

					: projectTaks.map(task => (
						<Task
							task={task}	
						/>
					))
				}
			</ul>
		</>
	);
}


export default TaskList