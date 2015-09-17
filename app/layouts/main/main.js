import React from 'react';
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
    ThemeManager.setTheme(ThemeManager.types.LIGHT);
    ThemeManager.setComponentThemes({
      textField: {
        hintColor: 'rgba(0, 0, 0, 0.87)'
      }
    });
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
      { route: '/users', text: 'Users' }
    ];

    return (
      <div className="main-wrapper">
        <header>
          <AppBar
            title="Goplem"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this._handleClick}
            zDepth="0"/>
          <LeftNav ref="leftNav"
                   docked={false}
                   menuItems={menuItems}
                   onChange={this._onLeftNavChange}/>
        </header>
        <div className="container-fluid">
          <RouteHandler/>
        </div>
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