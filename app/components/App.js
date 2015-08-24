import React from 'react';
import Login from './Login';
import {RouteHandler, Link} from 'react-router';
import {AppBar, Styles} from 'material-ui';
var ThemeManager = Styles.ThemeManager();

class App extends React.Component {

  componentDidMount() {
    ThemeManager.setTheme(ThemeManager.types.DARK);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div class="main-wrapper">
        <AppBar title="Goplem" />
        <Link to="/">Return to home</Link>
        <Link to="map">Go to Map</Link>
        <RouteHandler/>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default App;