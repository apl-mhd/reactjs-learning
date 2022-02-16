import React, { useState } from 'react';
import style from './form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log('form submited');

    let userInfo = {
      name,
      email,
      password,
    };
    console.log(name, email, password);
    console.log(userInfo);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Regostration</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor='email'>Email: </label>
          <input
            onChange={handleEmailChange}
            type='email'
            name='email'
            id='email'
            value={email}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor='password'>Password: </label>
          <input
            onChange={handlePassChange}
            type='password'
            name='password'
            id='password'
            value={password}
            required
          />
        </div>

        <div className={style.formGroup}>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  );
}
