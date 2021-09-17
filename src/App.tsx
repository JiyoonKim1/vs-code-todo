import * as React from 'react';
import TrackingBar from './components/TrackingBar';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Habit</h1>
          <TrackingBar numberOfBoxes={31}/>
        </header>
      </div>
    );
  }
}

export default App;
