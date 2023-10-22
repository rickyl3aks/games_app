import { Games } from "./games/games";
import "./App.css";
import Footer from "./footer/footer";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Games />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
