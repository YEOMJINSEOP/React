import React, { useState } from 'react';

function Todo(props) {
  const [active, setActive] = useState(true);
  const [content, setContent] = useState('');
  return (
    <div>
      <input type="checkbox" />
    </div>
  );
}

export default Todo;