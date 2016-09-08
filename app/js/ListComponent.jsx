import React from 'react';
import Reflux from 'reflux';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import {ListStore} from './ListStore.js';

export const ListComponent = React.createClass({

    // mixins: [Reflux.listenTo(ListStore, "onListUpdate")],
    // mixins: [Reflux.connect(ListStore,"list")], >> this.state.list

    getInitialState() {
      return {
        list: ListStore.currentList()
      };
    },

    onListUpdate: function(newList) {
      this.setState({
        list: newList
      });
    },

    componentDidMount() {
      this.unsubscribe = ListStore.listen(this.onListUpdate);
    },

    componentWillUnmount() {
      this.unsubscribe();
    },

    render() {
      return (
        <ListGroup fill>
          {this.state.list.map((value, index) =>
            <ListGroupItem key={index}>
              {value}
            </ListGroupItem>
          )}
        </ListGroup>
      )
    }

});
