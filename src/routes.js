import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout'
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Layout />
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route path='*' render={ ({match, location}) => {
            return (
              <NotFound />
            );
          }} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
