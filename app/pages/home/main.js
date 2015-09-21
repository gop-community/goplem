import React from 'react';
import request from 'superagent';
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
      <div className="home-search">
        <Avatar
          icon={
            <FontIcon className="material-icons">search</FontIcon>
          }
          className="home-search-icon"/>
        <TextField
          hintText="Search something"
          className="home-search-field"/>
        <p>Message from the API: {this.state.message}</p>
      </div>
    );
  }
}

export default Home;