import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] constructor (Usually for set the initial state)");
  }

  state = {
    persons: [
      { id: 'afsa1', name: "Carlos", age: 24 },
      { id: 'asde2', name: "Max", age: 28 }
    ],
    otherState: 'Some other Value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state)  {
    console.log("[Apa.js] getDerivedStateFromProps (Normaly never used)", props);
    return state;
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount (Good for Http request and APIs)")
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    console.log("[App.js] render");

    // const style = {
    //   backgroudColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
      />
    }

    return (
      <div className="App">
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;                   