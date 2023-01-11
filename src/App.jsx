import "./App.css";
import React from "react";
import CheckList from "./components/CheckList/CheckList";
import NewItem from "./components/NewItem/NewItem";

const App = () => {
  return (
    <div>
      <div>
        <h1> CheckList </h1>
        <NewItem />
      </div>
      <CheckList />
    </div>
  );
};

export default App;
