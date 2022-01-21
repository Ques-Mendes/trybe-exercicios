import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const activities = ['Gym', 'Work', 'Trybe'];

class App extends React.Component {
  render() {
    return (
      <ol>{ activities.map((activity) => Task(activity)) }</ol>
    );
  }
}

export default App;
