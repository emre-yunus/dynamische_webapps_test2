import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {Houses} from "./components/Houses";
import {HOUSE_DATA} from "./data/data";

function App() {
  return (
      <>
          <Houses title={"Luxury houses for sale"} houses={HOUSE_DATA}/>
      </>
  );
}

export default App;
