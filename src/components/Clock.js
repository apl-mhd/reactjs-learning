

import React from "react";

class Clock extends React.Component {
  
  state = { date: new Date() };

    
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
}

componentWillUnmount() {
  clearInterval(this.clockTimer);
}

tick() {
  this.setState({
      date: new Date(),
  });
}

handleClick(){

  console.log('the button was clicked');
}
  render() {
    const { date } = this.state;
    const { locale } = this.props;
    return (

      <div>
         <h1 className="heading">
          <span className="text">{date.toLocaleTimeString('bn-BD')}</span>
         </h1>
         <button type="button" onClick={this.handleClick}>Click here</button>
      </div>
     
  );
}
}

export default Clock;


