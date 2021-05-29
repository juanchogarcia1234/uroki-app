import React from 'react';
import {Redirect, Route} from 'react-router';

export const AuthenticatedRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
  <Route {...rest} render={({ location }) => {
    return isAuthenticated
    ? children
    : <Redirect to={{
      pathname: '/login',
      state: { from: location.pathname }
    }} />
  }} />
  )
}
