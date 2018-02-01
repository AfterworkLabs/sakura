import React, { PureComponent } from 'react';
import {  BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../components/Home';
import Haha from '../../components/Haha';
import Hehe from '../../components/Hehe';
import Randomizer from "../../components/Randomizer";
import Hoho from "../../components/Hoho";

class App extends PureComponent {

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/haha" component={Haha} />
            <Route path="/hehe" component={Hehe} />
            <Route path="/randomizer" component={Randomizer} />
            <Route path="/hoho" component={Hoho} />
            <Route component={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
