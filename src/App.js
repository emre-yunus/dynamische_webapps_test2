import './App.css';
import {NUMBER_DATA} from "./data/data";
import {Numbers} from "./components/Numbers";

function App() {
  return (
    <Numbers title="Nummers" numbers={NUMBER_DATA} />
  );
}

export default App;
