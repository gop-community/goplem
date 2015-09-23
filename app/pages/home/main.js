import React from 'react';
import request from 'superagent';
import FormGroup from '../../components/form-group';
import {
  TextField,
  FontIcon,
  Avatar
} from 'material-ui';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  componentDidMount() {
    var self = this;
    request.get('/api')
      .end((err, res) => {
        if (!err) {
          self.setState({
            message: res.body.message
          });
        }
      });
  }

  render() {
    return (
      <div>
        <FormGroup
          avatar={
            <Avatar
              icon={
                <FontIcon className="material-icons">search</FontIcon>
              }
              className="home-search-icon"/>
          }
          textField={
            <TextField
              hintText="Search something"/>
          }>
        </FormGroup>
        <p>Message from the API: {this.state.message}</p>
      </div>
    );
  }
}

export default Home;