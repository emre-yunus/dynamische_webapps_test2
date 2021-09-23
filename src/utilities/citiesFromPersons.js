export function citiesFromPersons(persons) {
    const cities = [...new Set(persons.map(p => p.city))];
    return cities.map(c => ({name: c, numberOfPersons: persons.reduce((counter, p) => (p.city===c ? ++counter : counter), 0)}));
}