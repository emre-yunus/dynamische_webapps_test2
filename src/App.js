import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {CARS_DATA, NUMBER_DATA, PERSON_DATA} from "./data/data";
import {Numbers} from "./components/Numbers";
import {Cars} from "./components/Cars";
import {Persons} from "./components/Person";
import {Cities} from "./components/City";
import {citiesFromPersons} from "./utilities/citiesFromPersons";
import {EventDemo} from "./components/EventDemo";
import {StateDemo} from "./components/StateDemo";

function App() {
  return (
      <div>
        <Numbers title="Nummers" numbers={NUMBER_DATA} />
        <Numbers title="Nummers groter dan 6" numbers={NUMBER_DATA.filter(n => n > 6)} />
        <Numbers title="Nummers x 2" numbers={NUMBER_DATA.map(n => n * 2)} />
        <Cars title="Auto's" cars={CARS_DATA} />
        <Persons title="Personen" persons={PERSON_DATA} />
        <Persons title="Personen volgens leeftijd" persons={[...PERSON_DATA].sort((p1, p2) => p1.age - p2.age)} />
        <Numbers title="Leeftijden van de personen" numbers={PERSON_DATA.map(p => p.age)} />
        <Numbers title="Leeftijden van de personen gesorteerd" numbers={[...new Set(PERSON_DATA.map(p => p.age))].sort((a1, a2) => a1 - a2)} />
        <Cities title="Steden test" cities={[{name: "Antwerpen", numberOfPersons: 125}, {name: "Brussel", numberOfPersons: 32}]} />
        <Cities title="Steden waar personen wonen" cities={citiesFromPersons(PERSON_DATA)} />
        <EventDemo />
        <StateDemo />
      </div>
  );
}

export default App;
