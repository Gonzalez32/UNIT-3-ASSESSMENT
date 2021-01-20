import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles'
import CircleSelector from './components/CircleSelector/CircleSelector'


const CircleNo = ['0', '1', '2', '3']

class App extends Component {
  state = {
    selectedCircleIdx: 0
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 3 FINAL ASSESSMENT</header>
        <main>
          {/* YOUR TWO COMPONENTS WILL GO HERE */}
          <CircleSelector 
            selectedCircleIdx={this.state.selectedCircleIdx}
          />
          <Circles
             selectedCircleIdx={this.state.selectedCircleIdx}
          />
        </main>
      </div>
    );
  }
}

export default App;