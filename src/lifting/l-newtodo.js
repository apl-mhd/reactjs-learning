import React, { useState } from 'react';

const LnewTodo = (props) => {
  const [todo, setTodo] = useState('');

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmti = (event) => {
    event.preventDefault();
    props.onTodo(todo);
  };
  return (
    <form onSubmit={handleSubmti}>
      <label htmlFor='todo'>New Todo: </label>
      <input
        type='text'
        id='todo'
        name='todo'
        value={todo}
        onChange={handleInputChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default LnewTodo;
