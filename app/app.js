import React from 'react';
import Alt from 'alt';
import App from './components/App';
import Home from './components/Home';
import Map from './components/Map';
import Router from 'react-router';
import FlexBoxGrid from 'flexboxgrid/dist/flexboxgrid.min.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

var {Route, DefaultRoute} = Router;

injectTapEventPlugin();

var alt = new Alt();

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route name="map" path="/map" handler={Map} />
  </Route>
);

Router.run(routes, function (Root) {
  // whenever the url changes, this callback is called again
  React.render(<Root/>, document.getElementById('content'));
});

module.exports = alt;
