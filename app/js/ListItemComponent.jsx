import React from 'react';
import Reflux from 'reflux';
import {ListGroupItem} from 'react-bootstrap';

export const ListItemComponent = React.createClass({

    propTypes: {
      value: React.PropTypes.number.isRequired
    },

    render() {
      return (
        <ListGroupItem>
          {this.props.value}
        </ListGroupItem>
      )
    }

});
