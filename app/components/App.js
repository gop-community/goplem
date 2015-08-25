import React from 'react';
import Login from './Login';
import {RouteHandler, Link} from 'react-router';
import {AppBar, Styles, FlatButton} from 'material-ui';
var ThemeManager = new Styles.ThemeManager();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    ThemeManager.setTheme(ThemeManager.types.DARK);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div className="main-wrapper">
        <AppBar
          title="Goplem"
          iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <FlatButton label="Default" />
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