import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ]
  };

  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit}`)
  }

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit}`)
  }

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit}`)
  }

  render() {
    return (
      <ul>
        {
          this.state.habits.map(habit => (
            <Habit key={habit.id} habit={habit}></Habit>
          ))
        }
      </ul>
    );
  }
}

export default Habits;