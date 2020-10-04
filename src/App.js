//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Monsters from './components/monsters';


class App extends Component {

  state = {
    monsters: []
  }

  render() { 
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">P2E Monster Maker</h5>
            <p className="card-text">Encounters, Monsters, Tools</p>
          </div>
        </div>
        
        <Monsters monsters = { this.state.monsters } />
    </div>
    )
  }

  componentDidMount() {
    fetch('http://localhost:5000/monster')
    .then(res => res.json())
    .then((data) => {
      this.setState({monsters: data})
    })
    .catch(console.log)
  }

}



export default App;
