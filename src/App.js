import React from 'react';

import Child from './state-lifting/child';
// import Home from './state-lifting/home';
import Lchild from './lifting/l-child';
import Lhome from './lifting/l-home';

export default function App() {
  const data = 'I am from parent';

  const handleChildData = (childData) => {
    console.log(childData);
  };
  return (
    <div>
      <Lhome />
    </div>
  );
}
