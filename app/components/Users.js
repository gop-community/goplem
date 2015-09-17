import React from 'react';
import UsersStore from '../stores/UsersStore';
import {
  List,
  ListItem,
  FontIcon,
  Avatar,
  RaisedButton
} from 'material-ui';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = UsersStore.getState();
    this.onChange = this.onChange.bind(this);
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

  render() {
    return (
      <div class="users">
        <h1>Users</h1>
        <RaisedButton className="button-primary"
                      linkButton={true}
                      href="#/users/create"
                      primary={true}
                      label="Create a new user">
          <FontIcon className="material-icons">person_add</FontIcon>
        </RaisedButton>
        <List>
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