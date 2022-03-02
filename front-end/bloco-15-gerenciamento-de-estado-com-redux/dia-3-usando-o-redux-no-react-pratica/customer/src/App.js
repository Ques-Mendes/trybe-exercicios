import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Clients from './component/Clients';

class App extends React.Component {
  render() {
    return (      
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/login' component={ Login }/>
            <Route path='/register' component={ Register } />
            <Route path='/clients' component={ Clients } />
          </Switch>
        </BrowserRouter>      
    )
  }
}

export default App;
