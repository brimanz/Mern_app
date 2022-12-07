import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login'
import NewCount from './components/auth/NewCount'
import Projects from './components/projects/Projects'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/new-count" component={NewCount}/>
        <Route exact path="/projects" component={Projects}/>
      </Switch>
    </BrowserRouter>
  )
}


export default App