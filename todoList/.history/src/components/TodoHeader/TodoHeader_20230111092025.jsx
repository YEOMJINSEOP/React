import React from 'react';

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