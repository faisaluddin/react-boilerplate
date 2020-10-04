import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "screens/Home";
import Layout from "components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Layout>
            <Route path="/" component={Home} />
          </Layout>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
