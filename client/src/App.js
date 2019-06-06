import React, { memo } from "react";
import Layout from "./components/Layout";
import MealForm from "./components/MealForm";

const App = memo(props => {
  return (
    <Layout>
      <MealForm />
    </Layout>
  );
});

export default App;
