import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {numbers: [1,2,3,4,5]}
    this.doubleNum = this.doubleNumthis(this);
  }

  
  render() {
    return (
      <>
        {console.log(this.state.numbers)}
      </>
    );
  }
}

export default List;