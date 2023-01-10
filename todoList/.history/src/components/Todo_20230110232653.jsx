import React, { useState } from 'react';
import {FaTrash} from 'react-icons/fa';
function Todo(props) {
  const [active, setActive] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [content, setContent] = useState('공부하기');
  return (
    <div>
      <input type="checkbox" onClick={() => {
        setIsChecked((prev) => !prev)
        console.log({isChecked});
      }} />
      {content}
      <button><FaTrash/></button>
    </div>
  );
}

export default Todo;