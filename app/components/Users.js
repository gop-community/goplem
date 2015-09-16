import React from 'react';
import UsersStore from '../stores/UsersStore';
import UsersActions from '../actions/UsersActions';
import {
  List,
  ListItem,
  FontIcon,
  Avatar
} from 'material-ui';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = UsersStore.getState();
    this.onChange = this.onChange.bind(this);
    this._createUser = this._createUser.bind(this);
  }

  componentDidMount() {
    UsersStore.listen(this.onChange);
  }

  componentWillUnmount() {
    UsersStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  _createUser() {
    UsersActions.createUser({name: 'test'});
  }


  render() {
    return (
      <div class="users">
        <h1>Users</h1>
        <List>
          <ListItem primaryText="Create a new user"
                    leftAvatar={
                      <Avatar icon={
                        <FontIcon className="material-icons">person_add</FontIcon>
                      }></Avatar>
                    }
                    onClick={this._createUser}>
          </ListItem>
          {
            this.state.users.map((user) => {
              return (
                <ListItem primaryText={user.name}></ListItem>
              );
            })
          }
        </List>
      </div>
    );
  }
}

export default Users;