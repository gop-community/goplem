import React from 'react';
import Login from './Login';
import {RouteHandler, Link} from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Link to="/">Return to home</Link>
        <Link to="map">Go to Map</Link>
        <RouteHandler/>
      </div>
    );
  }
}

export default App;