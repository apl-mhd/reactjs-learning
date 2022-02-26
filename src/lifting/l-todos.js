import React from 'react';
import Ltodo from './l-todo';
    
const Ltodos = (props) => {
  console.log(props.todos);
  return (
    <div>
      {' '}
      {props.todos.map((todo, index) => (
        <Ltodo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default Ltodos;
