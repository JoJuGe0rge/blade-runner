import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component 
{
  state = {
    persons: [
      {name: 'Joju', years: 10},
      {name: 'Binu', years: 20}
    ]
  }
  
  switchNameHandler = () => {
    console.log('Was Clicked');
    this.setState({
      persons: [
        {name: 'Alen', years: Math.round(Math.random()*20)},
        {name: 'Mathew', years: 18}
      ]
    })
}

  render ()
  {
    return (
      <div className="App">
        <h1>BLADE RUNNER</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} years={this.state.persons[0].years} rewinder={this.switchNameHandler}>And this is children of Components</Person>
        <Person name={this.state.persons[1].name} years={this.state.persons[1].years}/>
      </div>
    );}
}

export default App;
