import React from 'react';
import request from 'superagent';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  componentDidMount() {
    var self = this;
    //request.get('/api')
    //  .end((err, res) => {
    //    if (!err) {
    //      self.setState({
    //        message: res.body.message
    //      });
    //    }
    //  });
  }

  render() {
    return (
      <div>
        <p>This is home</p>
        <p>Message from the api: {this.state.message}</p>
      </div>
    );
  }
}

export default Home;