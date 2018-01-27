import React, { PureComponent } from 'react';
import {  BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../components/Home';
import Haha from '../../components/Haha';

class App extends PureComponent {

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/haha" component={Haha} />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
