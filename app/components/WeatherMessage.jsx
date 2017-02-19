var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h2>It is {temp}°F in {location}</h2>
  )
};

module.exports = WeatherMessage;
