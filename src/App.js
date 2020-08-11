import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pagefolio from "./pages/Pagefolio/Pagefolio";
import Loading from "./common/Loading/Loading";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // window.addEventListener("load", setIsLoading(false));
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Pagefolio} />
      </Switch>
    </div>
  );
};

export default App;
