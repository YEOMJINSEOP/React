import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {numbers: [1,2,3,4,5]}
  }

  doubleNum(){
    this.setState(prevState => {
      console.log(prevState);
    })
  }

  
  render() {
    return (
      <>
        {this.doubleNum}
      </>
    );
  }
}

export default List;