import React, {Component} from 'react';
import User from './Components/User';
import ReduxExamples from './Components/ReduxExamples';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'Handsome Squidward'
    }
  }

  nameChange = (newName) => {
    this.setState({username: newName})
  }

  

  render(){
    return (
      <div className="App">
        {/* <User username={this.state.username} hometown='Bikini Bottom' nameFn={this.nameChange}/> */}
        <ReduxExamples />
      </div>
    );
  }
}

export default App;
