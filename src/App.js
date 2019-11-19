import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      person: [
        {name: "Michael", age: 90},
        {name: "Michael", age: 900},
        {name: "Michaela", age: 9003}
      ],
      showPerson: false
    }
  }
  

  // changedHandler = (e) =>{
  //   this.setState({
  //     person:[
  //       {name: "Thas", age:100},
  //       {name: e.target.value, age: 900}
  //     ]
  //   })
  // }
  deletepersonHandler = (personIndex) => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({person: persons});
  }
  toggleHandler = (e) =>{
    const show = this.state.showPerson;
    this.setState({showPerson: !show})
  }

  render(){
    const style = {
      backgroundColor: "green",
      color: "white"
      
      }
    // const p = [
    //   {name: "yaa", age:"30"},
    //   {name: "akua", age:"300"}
    // ]

    let persons = null;
    if (this.state.showPerson) {
      persons = (
          <div>
            {this.state.person.map((person, index) =>{
              return <Person
                        click={() => this.deletepersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={index}
                      />
              // return <Person {...this.state.person} /> //easy way to show all lists
            })}
          </div>
      )

      style.backgroundColor = "red" //dynamically add background
    }

    const classes = [];
    if (this.state.person.length <= 2) {
      classes.push("red")
    }
    if (this.state.person.length <= 1) {
      classes.push("bold")
    }
    return (
      <div className="App">
        <p className={classes.join(' ')}>Yaay! it worked!!</p>
        <button style={style} onClick={this.toggleHandler}>toggle name</button>
        {persons}
      </div>
    );
  }
}

export default App;
