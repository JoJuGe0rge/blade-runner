import React,{Component, createContext} from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {name: 'Joju', years: 10},
      {name: 'Binu', years: 20},
    ]
  }
  
  switchNameHandler = (newName) => {
    console.log('Was Clicked');
    this.setState({ 
      persons: [
        {name: newName, years: Math.round(Math.random()*20)},
        {name: 'Mathew', years: 18}
      ]
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

fullNameHandler = (event) => {
  this.setState({
    persons: [
      {name: "Joju", years: 18,fullName: event.target.value},
      {name: 'Mathew', years: 18,fullName: event.target.value}
    ]
  });
};

togglePersonHandler = () => {
  console.log('togglePersonHandler was Clicked');
  if (1!=1) {
    this.setState({
      persons: [
        {name: 'Joju', years: 10},
        {name: 'Binu', years: 20}
      ]
    });
    
  }
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

    return (
      <div className="App">
        <h1>BLADE RUNNER</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Show Persons
        </button>
        <div>
          <Person 
            name={this.state.persons[1].name} 
            years={this.state.persons[1].years}/>
          <Person 
            name={this.state.persons[0].name} 
            years={this.state.persons[0].years} 
            rewinder={this.switchNameHandler.bind(this,'Joel Shajan')}
            changed={this.nameChangedHandler}>
            And this is children of Components</Person>
        </div>
          
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
