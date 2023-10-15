import * as React from "react";
import { Games } from "./games/games";
import "./App.css";
import Footer from "./footer/footer";

const App = () => {
  return (
    <div className="App">
      <Games />
      <Footer />
    </div>
  );
};

export default App;
