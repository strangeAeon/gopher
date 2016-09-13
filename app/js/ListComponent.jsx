import React from 'react';
import Reflux from 'reflux';
import {ListGroup} from 'react-bootstrap';

import {ListItemComponent} from './ListItemComponent.jsx'

import {ListStore} from './ListStore.js';

export const ListComponent = React.createClass({

    // mixins: [Reflux.listenTo(ListStore, "onListUpdate")],
    // mixins: [Reflux.connect(ListStore,"list")], >> this.state.list

    getInitialState() {
      return {
        list: ListStore.currentList()
      };
    },

    componentDidMount() {
      this.unsubscribe = ListStore.listen(this.onListUpdate);
    },

    componentWillUnmount() {
      this.unsubscribe();
    },

    onListUpdate: function(newList) {
      this.setState({
        list: newList
      });
    },

    render() {
      return (
        <ListGroup fill>
          {this.state.list.map((value, index) =>
            <ListItemComponent key={index} value={value} index={index}/>
          )}
        </ListGroup>
      )
    }

});
