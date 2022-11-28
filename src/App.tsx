import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux/store";
import { Provider } from "react-redux";

function App() {
  const reduxStore = createStore();

  return (
    <Provider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          <div>great!</div>
        </header>
      </div>
    </Provider>
  );
}

export default App;
