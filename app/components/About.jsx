var React = require('react');

var About = (props) => {
  return (
    <div>
      <h2 className="text-center">About</h2>
      <p>This is a React web application that helps get the weather information.</p>
      <p>The following are resrouces that I used in creating this application:
        <ul>
          <li>
            <a href="https://facebook.github.io/react" target="_blank">React</a> &mdash; This was the JavaScript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> &mdash; I used this API to search for weather data by city name.
          </li>
          <li>
            <a href="http://techiedodo.com" target="_blank">Techie Dodo</a> &mdash; This is my web page. Feel free to browse and learn a bit more about me.
          </li>
        </ul>
      </p>
    </div>
  )
};

module.exports = About;
