import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./pages/Index";
import Newsletter from "./pages/Newsletter";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/newsletter/subscribe" exact>
          <Newsletter />
        </Route>
        <Route path="/" exact>
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}
