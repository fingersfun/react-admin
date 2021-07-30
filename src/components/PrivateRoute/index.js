import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { setExistingUserOnLogRocket } from '../../actions/user';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    if (localStorage.getItem('user')) {
      // setExistingUserOnLogRocket();
      return <Component {...props} />;
    }
    return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  }
  }
  />
);
PrivateRoute.propTypes = {
  location: PropTypes.object,
  component: PropTypes.any
}
