import React from 'react';
import {
  RaisedButton
} from 'material-ui';

class RaisedButtonIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.props.children.props.style = styles.icon;
    return (
      <RaisedButton {...this.props}>
        {this.props.children}
      </RaisedButton>
    );
  }
}

var styles = {
  icon: {
    float: 'left',
    verticalAlign: 'middle',
    paddingLeft: '10px',
    lineHeight: '36px',
    color: 'white'
  }
};

export default RaisedButtonIcon;