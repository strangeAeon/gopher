import React from 'react';
import Reflux from 'reflux';
import {ListGroupItem, Button} from 'react-bootstrap';

import {ListActions} from './ListActions.js';

export const ListItemComponent = React.createClass({

  propTypes: {
    value: React.PropTypes.number.isRequired,
    index: React.PropTypes.number.isRequired
  },

  onSubmit() {
    ListActions.removeItem(this.props.index)
  },

  render() {
    const buttonStyle = {
      float: "right"
    }
    return (
    <ListGroupItem className="asdsd">
      {this.props.value}
      <Button
        bsStyle="danger"
        bsSize="xsmall"
        style={buttonStyle}
        onClick={this.onSubmit}>
          X
      </Button>
    </ListGroupItem>
  )
  }
})
