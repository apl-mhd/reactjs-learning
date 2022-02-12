import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TempratureInput from './TempratureInput';
import { convert, toCelsius, toFahrenheit } from '../lib/converter';

export default class Calculator extends React.Component {
  state = { temperature: '', scale: 'c' };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TempratureInput
          scale='c'
          temprature={celsius}
          
          onTemperatureChange={this.handleChange}
        />
        <TempratureInput
          scale='f'
          temprature={fahrenheit}
          
          onTemperatureChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
      </div>
    );
  }
}
