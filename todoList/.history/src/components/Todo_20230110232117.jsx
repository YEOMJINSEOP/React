import React, { useState } from 'react';
import {FaTrash} from 'react-icons/fa';
function Todo(props) {
  const [active, setActive] = useState(true);
  const [content, setContent] = useState('');
  return (
    <div>
      <input type="checkbox" />
      {content}
      <button><FaTrash/></button>
    </div>
  );
}

export default Todo;