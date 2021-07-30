import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import routes from './routes';
import App from './App/App.index';
// import { route } from '../actions/user';
import NotFound from 'components/NotFoundPage/NotFoundPage';

// renders the routes from the configuration object
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes} />
  )} />
);


class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  render() {
    return (
      <App>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    );
  }
}

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired,
//   route: PropTypes.func
// };
export default connect(null)(Root);