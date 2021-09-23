import './App.css';
import {NUMBER_DATA} from "./data/data";
import {Numbers} from "./components/Numbers";

function App() {
  return (
      <div>
        <Numbers title="Nummers" numbers={NUMBER_DATA} />
        <Numbers title="Nummers groter dan 6" numbers={NUMBER_DATA.filter(n => n > 6)} />
        <Numbers title="Nummers x 2" numbers={NUMBER_DATA.map(n => n * 2)} />
      </div>
  );
}

export default App;
