import React from 'react';
import { Router, Switch, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import App from './components/App';
import NotFound from './components/NotFound';

const history = createBrowserHistory()

class Routes extends React.Component {
  render() {
    return (
      <Router history={history} >
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
