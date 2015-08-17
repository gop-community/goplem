var React = require('react');
var App = require('./components/App');
var Alt = require('alt');
var alt = new Alt();

React.render(
  <App />,
  document.getElementById('content')
);

module.exports = alt;
