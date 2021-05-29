import {Redirect, Route} from 'react-router';
import React from 'react';

export const UnauthenticatedRoute = ({children, isAuthenticated, ...rest}) => (
<Route {...rest} render={() => {
  return isAuthenticated
  ? <Redirect to={{
    pathname: '/'
  }} />
  : children
}} />
)
