import React from 'react';
import FormGroup from '../../components/form-group';
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
      <div>
        <h1>Create a new user</h1>
        <form no-validate>
          <FormGroup>
            <FontIcon className="material-icons">person</FontIcon>
            <TextField
              hintText="Name"/>
          </FormGroup>
          <FormGroup>
            <FontIcon className="material-icons">business</FontIcon>
            <TextField
              hintText="Business Unit"/>
          </FormGroup>
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