import React from 'react';

export default class EventHandle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      changedValue: e.target.value,
    });

    console.log(e.target.value);
  };
  render() {
    const { changedValue } = this.state;
    return (
      <div>
        <input onChange={this.handleChange} type='text' />
        <h1>typed: {changedValue}</h1>
      </div>
    );
  }
}
