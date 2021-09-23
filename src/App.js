import './App.css';
import {CARS_DATA, NUMBER_DATA} from "./data/data";
import {Numbers} from "./components/Numbers";
import {Cars} from "./components/Cars";

function App() {
  return (
      <div>
        <Numbers title="Nummers" numbers={NUMBER_DATA} />
        <Numbers title="Nummers groter dan 6" numbers={NUMBER_DATA.filter(n => n > 6)} />
        <Numbers title="Nummers x 2" numbers={NUMBER_DATA.map(n => n * 2)} />
        <Cars title="Auto's" cars={CARS_DATA} />
      </div>
  );
}

export default App;
