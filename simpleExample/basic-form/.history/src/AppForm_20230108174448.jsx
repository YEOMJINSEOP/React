import React, { useState } from 'react';


export default function AppForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // 현재 변경되고 있는 key인 email에 전달받은 value를 할당
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>이메일:</label>
      <input
        type='text'
        id='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor='password'>비밀번호:</label>
      <input
        type='password'
        id='password'
        name='password'
        value={form.password}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
