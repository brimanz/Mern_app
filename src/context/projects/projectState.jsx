import React, {useReducer} from 'react'
import projectContext from './projectContext'
import projectReducer from './projectReducer'
import {PROJECT_FORM} from '../../types'


const ProjectState = props =>{

	const initialState = {
		projects: [
			{id: 1, name: "Ecommerce"},
			{id: 2, name: "Intranet"},
			{id: 3, name: "Website"},
			{id: 4, name: "Machine-learning"} 
		],
		form: false
	}

	//actions dispatch
	const [state, dispatch] = useReducer(projectReducer, initialState)	

	//crud functions
	const showForm = () =>{
		dispatch({
			type: PROJECT_FORM
		})
	}


	return(
		<projectContext.Provider
			value={{
				projects: state.projects,
				form: state.form,
				showForm
			}}
		>
			{props.children}
		</projectContext.Provider>
	)
}


export default ProjectState