import React from 'react';

const Child = (props) => {
  const data = 'I am from child component';

  props.onChildData(data);
  return (
    <div>
      <h1> I am child component</h1>
      <p>{props.data}</p>
    </div>
  );
};

export default Child;
