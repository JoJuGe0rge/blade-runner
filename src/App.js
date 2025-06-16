import React,{Component, createContext} from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {id: 'val0', name: 'Joju', years: 10},
      {id: 'val1', name: 'Binu', years: 20},
      {id: 'val2', name: 'Mathew', years: 22}
    ]
  }
  
  switchNameHandler = (newName) => {
    console.log('Was Clicked');
    this.setState({ 
      persons: [
        {name: newName, years: Math.round(Math.random()*20)},
        {name: 'Mathew', years: 18}
      ],
      showPersons: false
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, years: Math.round(Math.random()*20)},
        {name: 'Mathew', years: 18}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    console.log('deletePersonHandler was Clicked');
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    console.log('togglePersonHandler was Clicked');
    this.setState({showPersons: !this.state.showPersons});
  };



  render ()
  {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      boxShadow: '0 2px 2px #ccc'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => (
            <Person 
              name={person.name}
              years={person.years} 
              key={person.id}
              changed={this.nameChangedHandler}
              rewinder={() => this.deletePersonHandler(index)}
            >
              And this is children of Components
            </Person>
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>BLADE RUNNER</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Show Persons
        </button>
      {persons}

          {/* <UserInput onNameChange={this.fullNameHandler} oldVal={this.state.persons[0].fullName}>
          </UserInput>
          <UserOutput userName={this.state.persons[0].fullName}>
          </UserOutput>
          <UserOutput userName="Alen">
          </UserOutput> */}
      </div>
    );}
}

export default App;
