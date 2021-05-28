import {Switch, Route} from 'react-router-dom';
import {Layout} from '../Layout';
import React from 'react';
import Dashboard from '../Dashboard';

export const AppRoutes = () => {
  return (
  <Layout>
    <Switch>
      <Route path="/">
        <Dashboard/>
      </Route>
    </Switch>
  </Layout>
  )
}
