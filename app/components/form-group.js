import React from 'react';
import {
  FontIcon
} from 'material-ui';

var styles = {
  avatar: {
    top: '7px',
    marginRight: '10px'
  },
  icon: {
    top: '7px',
    marginRight: '10px'
  },
  input: {
    width: '200px'
  }
};

class FormGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var avatar = this.props.avatar;
    var icon = this.props.icon;
    var input = this.props.children;

    if (avatar) {
      avatar.props.style = styles.avatar;
    }
    if (input) {
      input.props.style = styles.input;
    }

    return (
      <div>
        {!icon && avatar}
        {!avatar && icon && <FontIcon className="material-icons" style={styles.avatar}>{this.props.icon}</FontIcon>}
        {this.props.children}
      </div>
    );
  }
}

export default FormGroup;