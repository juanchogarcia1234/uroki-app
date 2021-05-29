import { Switch, Route } from "react-router-dom";
import { Layout } from "../Layout";
import React from "react";
import Dashboard from "../Dashboard";
import Moved from "../Dashboard/Moved";
import Cancelled from "../Dashboard/Cancelled";

export const AppRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/movidas" exact>
          <Moved />
        </Route>
        <Route path="/cancelled" exact>
          <Cancelled />
        </Route>
      </Switch>
    </Layout>
  );
};
