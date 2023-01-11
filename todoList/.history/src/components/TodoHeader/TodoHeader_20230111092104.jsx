import React from 'react';
import {FaSun} from 'react-icons/fa';

function TodoHeader(props) {
  return (
      <header>
        <FaSun/>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </header>
  );
}

export default TodoHeader;