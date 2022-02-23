import React from "react";
import { Home } from "./components/Home";
import logo from "./logo.svg";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
      </header>
    </div>
  );
};
