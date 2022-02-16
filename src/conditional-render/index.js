import React from 'react';
import Homepage from './Homepage';
import Loginpage from './Loginpage';

export default class ConditionalRendering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    let element;

    // element =

    return isLoggedIn ? <Homepage /> : <Loginpage />;
  }
}
