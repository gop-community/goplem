import React from 'react';
import {
  TextField,
  FontIcon,
  RaisedButton
} from 'material-ui';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="users-create">
        <h1>Create a new user</h1>
        <form no-validate>
          <div className="form-group">
            <FontIcon className="material-icons">person</FontIcon>
            <TextField
              hintText="Name"/>
          </div>
          <div className="form-group">
            <FontIcon className="material-icons">business</FontIcon>
            <TextField
              hintText="Business Unit"/>
          </div>
          <div className="button-bar">
            <RaisedButton linkButton="true" href="#/users" label="Cancel">
            </RaisedButton>
            <RaisedButton primary={true} label="Submit">
            </RaisedButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Users;