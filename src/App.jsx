import "./App.css";
import React from "react";
import CheckList from "./components/CheckList/CheckList";
import NewItem from "./components/NewItem/NewItem";

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-heading"> What needs to get done.. </h1>
        <NewItem />
      </div>
      <CheckList />
    </div>
  );
};

export default App;
