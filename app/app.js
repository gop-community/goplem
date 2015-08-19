import React from 'react';
import Alt from 'alt';
import App from './components/App';
import Home from './components/Home';
import Map from './components/Map';
import Router from 'react-router';
var {Route, DefaultRoute} = Router;

var alt = new Alt();

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route name="map" path="/map" handler={Map} />
  </Route>
);

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { handler: null };
  }
  componentDidMount() {
    Router.run(routes, this.handleNavigation.bind(this));
  }
  handleNavigation(Handler) {
    this.setState({
      handler: Handler
    });
  }
  render() {
    if(!this.state.handler) return null;

    var Handler = this.state.handler;
    return <Handler/>;
  }
}

React.render(
  <Wrapper />,
  document.getElementById('content')
);

module.exports = alt;
