import React from 'react';
import Login from './Login';
import {RouteHandler, Link} from 'react-router';
import {AppBar, LeftNav, Styles, FlatButton} from 'material-ui';
var ThemeManager = new Styles.ThemeManager();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._handleClick = this._handleClick.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
  }

  componentWillMount() {
    ThemeManager.setTheme(ThemeManager.types.DARK);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _handleClick(e) {
    e.preventDefault();
    this.refs.leftNav.toggle();
  }

  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.router.transitionTo(payload.route);
  }

  render() {
    var menuItems = [
      { route: '/', text: 'Home' },
      { route: '/map', text: 'Map' }
    ];

    return (
      <div className="main-wrapper">
        <AppBar
          title="Goplem"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this._handleClick}/>
        <LeftNav ref="leftNav"
                 docked={false}
                 menuItems={menuItems}
                 onChange={this._onLeftNavChange}/>
        <RouteHandler/>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

App.contextTypes = {
  router: React.PropTypes.func
};

export default App;