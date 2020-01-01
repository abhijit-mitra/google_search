import React from "react";

import ListView from "../components/ListView/ListView";
import MapView from "../components/MapView/MapView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="col-md-12">
          <ListView />
      </div>
      <MapView />
    </div>
  );
}

export default App;
