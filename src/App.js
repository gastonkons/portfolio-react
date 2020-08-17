import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Loading from "./common/Loading/Loading";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="App">
      <Switch>
        <Route exact path="/portfolio-react/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
