import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {numbers: [1,2,3,4,5]}
  }

  componentDidMount(){
    this.doubleNum = this.doubleNum.bind(this);
  }

  doubleNum(){
    this.setState(prevState => {
      prevState.numbers.map((num) => {
        num = num * 2;
      }) 
    })
  }

  
  render() {
    return (
      <div>{this.doubleNum()}</div>
        );
  }
}

export default List;