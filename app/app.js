import React from 'react';
import MainLayout from './layouts/main/main';
import Home from 'pages/home/main';
import Users from 'pages/users/main';
import UsersCreate from 'pages/users/create';
import Router from 'react-router';
import FlexBoxGrid from 'flexboxgrid/dist/flexboxgrid.min.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainStyle from './assets/styles/main.scss';
import alt from './libs/alt'

var {Route, DefaultRoute} = Router;

injectTapEventPlugin();

var routes = (
  <Route handler={MainLayout} path="/">
    <DefaultRoute handler={Home} />
    <Route name="users" path="/users" handler={Users} />
    <Route name="users-create" path="/users/create" handler={UsersCreate} />
  </Route>
);

Router.run(routes, function (Root) {
  // whenever the url changes, this callback is called again
  React.render(<Root/>, document.getElementById('content'));
});
