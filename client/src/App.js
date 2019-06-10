import React, { memo } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MealForm from "./components/MealForm";

const App = memo(props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Layout>
          <Route path="/" exact />
          <Route path="/meals/create" exact component={MealForm} />
        </Layout>
      </Router>
    </React.Fragment>
  );
});

export default App;
