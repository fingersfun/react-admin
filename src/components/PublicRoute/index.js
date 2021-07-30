import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { setExistingUserOnLogRocket } from '../../actions/user';

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    if (localStorage.getItem('user')) {
      // setExistingUserOnLogRocket();
      return <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />;
    }
    return <Component {...props} />;
  }
  }
  />
);
PublicRoute.propTypes = {
  location: PropTypes.object,
  component: PropTypes.any
}
