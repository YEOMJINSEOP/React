import React, { useState } from 'react';


// input 태그는 react 내부적으로 상태 변경이 되지 않아도, 바로 UI 상으로 입력이 가능하다.
// 이것을 uncontrolled component 라고 한다.
// 그래서 리액트 컴포넌트에서 갖고 있는 상태와 UI 상에서 보여지는 것이 똑같이 매칭이 되게 만들어주는 것이 중요하다.
// 그래서 상태를 만들어주고, input 태그의 value = 컴포넌트의 state, onChange = set함수를 통해 UI 상에서 변경된 것이 컴포넌트의 상태에도 업데이트 되도록 해준다.
// 그러면 이제 리액트에서 컨트롤하는 controlled component가 된다.

export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // 현재 변경되고 있는 key인 name에 전달받은 value를 할당
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>이메일:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
