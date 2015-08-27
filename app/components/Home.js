import React from 'react';
import request from 'superagent';
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardTitle,
  CardActions,
  CardText,
  FlatButton
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
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <Card>
                <CardHeader
                  title="Title"
                  subtitle="Subtitle"
                  avatar={<Avatar>A</Avatar>}/>
                <CardHeader
                  title="Demo Url Based Avatar"
                  subtitle="Subtitle"
                  avatar="http://lorempixel.com/100/100/nature/"/>
                <CardTitle title="Title" subtitle="Subtitle"/>
                <CardActions>
                  <FlatButton label="Action1"/>
                  <FlatButton label="Action2"/>
                </CardActions>
                <CardText>
                  <p>This is home</p>
                  <p>Message from the api: {this.state.message}</p>
                </CardText>
              </Card>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <Card>
                <CardHeader
                  title="Test"
                  subtitle="Retest"
                  avatar={<Avatar>A</Avatar>}/>
                <CardHeader
                  title="Demo Url Based Avatar"
                  subtitle="Subtitle"
                  avatar="http://lorempixel.com/100/100/nature/"/>
                <CardTitle title="Title" subtitle="Subtitle"/>
                <CardActions>
                  <FlatButton label="Action1"/>
                  <FlatButton label="Action2"/>
                </CardActions>
                <CardText>
                  <p>This is home</p>
                  <p>Message from the api: {this.state.message}</p>
                </CardText>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;