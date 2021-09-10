import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Components/About"
import Home from "./Components/Home"

function App() {
  return (
    <>
      <BrowserRouter>
  <Switch>
    <Route path="/" exact>
      <Home/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
  </Switch>
      </BrowserRouter>
    </>
  );
}


export default App;
