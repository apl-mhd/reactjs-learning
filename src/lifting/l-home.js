import React, { useState } from 'react';
import Ltodos from './l-todos';
import LnewTodo from './l-newtodo';

const dummyTodos = ['todo1', 'todo2'];

const Lhome = () => {
  const [todos, setTodos] = useState(dummyTodos);

  const handleNewTodo = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <LnewTodo onTodo={handleNewTodo} />
      <Ltodos todos={todos} />
    </div>
  );
};

export default Lhome;
