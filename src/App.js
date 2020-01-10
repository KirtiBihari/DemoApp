import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/main/main.controller';

const App = () => {
  return (
    <div className="container">
      <MainComponent />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
