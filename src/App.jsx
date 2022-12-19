import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login'
import NewCount from './components/auth/NewCount'
import Projects from './components/projects/Projects'

import ProjectState from './context/projects/projectState'



function App() {
  return (
    <ProjectState>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/new-count" component={NewCount}/>
          <Route exact path="/projects" component={Projects}/>
        </Switch>
      </BrowserRouter>
    </ProjectState>
  )
}


export default App