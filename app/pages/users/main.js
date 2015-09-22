import React from 'react';
import UsersStore from '../../stores/users';
import RaisedButtonIcon from '../../components/raised-button-icon';
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
        <RaisedButtonIcon className="button-primary"
                          linkButton={true}
                          href="#/users/create"
                          primary={true}
                          label="Create a new user">
          <FontIcon className="material-icons">person_add</FontIcon>
        </RaisedButtonIcon>
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