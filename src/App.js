import React from "react";
import ReactDOM from "react-dom";

//import "bootstrap/dist/css/bootstrap.css";

import Weather from "./Weather";
import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Berlin" />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
