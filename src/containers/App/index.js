import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../../components/Home'
import Randomizer from '../../components/Randomizer'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/randomizer" component={Randomizer} />
      <Route component={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
)

export default App
