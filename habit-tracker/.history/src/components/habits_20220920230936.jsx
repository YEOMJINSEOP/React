import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';
class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  }

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  }

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  }

  render() {
    return (
      <>
        <HabbitAddForm  />
        <div className="habits">
          <ul>
            {
              this.props.habits.map(habit => (
                <Habit 
                  key={habit.id} 
                  habit={habit}
                  onIncrement={this.props.onIncrement}
                  onDecrement={this.props.onDecrement}
                  onDelete={this.props.onDelete}
                 ></Habit>
              ))
            }
          </ul>
      </div>
      </>
    );
  }
}

export default Habits;