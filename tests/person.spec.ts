import { Person } from '../app/person';

describe('Person', () => {
  it('has name', () => {
    let person: Person = <Person>{id: 1, name: 'Super Cat', age: 23};
    expect(person.name).toEqual('Super Cat');
  });
  it('has id', () => {
    let person: Person = <Person>{id: 1, name: 'Super Cat', age: 12};
    expect(person.id).toEqual(1);
  });
  it('has age', () => {
    let person: Person = <Person>{id: 1, name: 'Super Cat', age: 17};
    expect(person.age).toEqual(17);
  });
  it('getName returns name', () => {
    let persona = new Person();
    persona.name = 'Super Cat';
    let asd = persona.getName();
    expect(asd).toMatch('Super Cat');

  });
});
