import React from 'react';

class FormGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children.map(function(child) {
          if (child.type.displayName === 'Avatar' || child.type.displayName === 'FontIcon') {
            child.props.style = styles.avatar;
          }
          else if (child.type.displayName === 'TextField') {
            child.props.style = styles.field;
          }
          return {child};
        })}
      </div>
    );
  }
}

var styles = {
  avatar: {
    top: '7px',
    marginRight: '10px'
  },
  field: {
    width: '246px'
  }
};

export default FormGroup;