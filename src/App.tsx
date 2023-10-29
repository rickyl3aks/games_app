import { Games } from "./games/games";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Games />
      </div>
    </Provider>
  );
};

export default App;
