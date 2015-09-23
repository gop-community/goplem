import React from 'react';

class FormGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var avatar = this.props.avatar;
    var icon = this.props.icon;
    var textField = this.props.textField;

    if (avatar) {
      avatar.props.style = styles.avatar;
    }
    else if (icon) {
      icon.props.style = styles.avatar;
    }
    if (textField) {
      textField.props.style = styles.textField;
    }

    return (
      <div>
        {avatar || icon}
        {textField}
      </div>
    );
  }
}

var styles = {
  avatar: {
    top: '7px',
    marginRight: '10px'
  },
  textField: {
    width: '200px'
  }
};

export default FormGroup;