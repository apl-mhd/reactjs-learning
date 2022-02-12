import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export default function TempratureInput({
  temprature,
  scale,
  onTemperatureChange,
}) {
  return (
    <fieldset>
      <legend>Enter Temprature in {scaleNames[scale]}: </legend>

      <input
        type='text'
        value={temprature}
        onChange={(e) => onTemperatureChange(e, scale)}
      ></input>
    </fieldset>
  );
}
