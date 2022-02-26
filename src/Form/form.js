import React, { useState } from 'react';
import style from './form.module.css';

export default function Form() {
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');

  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = user;

  // const handleNameChange = (e) => {
  //   setUser({ name: e.target.value, email, password });
  // };
  // const handleEmailChange = (e) => {
  //   setUser({ name, email: e.target.value, password });
  // };
  // const handlePassChange = (e) => {
  //   setUser({ name, email, password: e.target.value });
  // };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // const fieldName = e.target.name;

    // if (fieldName === 'name') {
    //   setUser({ name: e.target.value, email, password });
    // }

    // if (fieldName === 'email') {
    //   setUser({ name, email: e.target.value, password });
    // }
    // if (fieldName === 'password') {
    //   setUser({ name, email, password: e.target.value });
    // }
  };
  const handleSubmit = (e) => {
    console.log('form submited');

    console.log(name, email, password);
    console.log(user);
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
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor='email'>Email: </label>
          <input
            onChange={handleChange}
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
            onChange={handleChange}
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
