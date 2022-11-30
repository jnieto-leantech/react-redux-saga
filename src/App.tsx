import "./App.css";
import { createStore } from "redux/store";
import { Provider } from "react-redux";
import { Home } from "pages/Home";

function App() {
  const reduxStore = createStore();

  return (
    <Provider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </Provider>
  );
}

export default App;
