import React from 'react'
import Task from './Task'


const TaskList = () =>{
	
	const projectTaks = [
		{name: "Elegir Plataforma", estado: true},
		{name: "Elegir colores", estado: false},
		{name: "Elegir Plataforma de pago", estado: false},
		{name: "Elegir hosting", estado: true}
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

			<button
				type="button"
				className="btn btn-eliminar"
			>
				Delete Project &times;
			</button>


		</>
	);
}


export default TaskList