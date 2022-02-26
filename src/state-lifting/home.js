import React, { useState } from 'react';
import Todos from './todos';
import NewTodo from './newtodo';

const dummyTodos = ['todos 1', 'todos 2'];

const Home = () => {
  const [todos, setTodos] = useState(dummyTodos);

  const handleNewTodo = (NewTodo) => {
    console.log(NewTodo);
  };

  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />

      <Todos todos={todos} />
    </div>
  );
};

export default Home;
