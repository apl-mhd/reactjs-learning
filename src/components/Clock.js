

import React from "react";
import Button from  './Button'

class Clock extends React.Component {

  state = { date: new Date(), locale:'bn-BD' };

  
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

handleClick = (locale) => {

  this.setState({locale});
  
}
  render() {
    const { date, locale } = this.state;

    let button;
    
    if(locale === 'bn-BD'){
      button = (
        <Button change={this.handleClick} locale="en-US">Click For English Watch</Button>
      );

    }
    else{
      button = (
        <Button change={this.handleClick} locale="bn-BD">Click For Bangla Watch</Button>
      );
    }
    return (

      <div>
         <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
         </h1>

         { locale === 'bn-BD' ? ( <Button change={this.handleClick} locale="en-US" show={false} enable /> ) :
            ( <Button change={this.handleClick} locale="bn-BD" show enable />)
          }
         {/* {button} */}
         {/* <Button change={this.handleClick} locale="en-US"> Click here</Button> */}
      </div>
     
  );
}
}

export default Clock;


