var React = require('react');
var Reflux = require('reflux');

var ReactBootstrap = require('react-bootstrap');
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;

var ListStore = require('./ListStore');

var ListComponent = React.createClass({

    getInitialState: function() {
      return ListStore.currentState()
    },

    onListUpdate: function(newState) {
      this.setState(newState);
    },

    componentDidMount: function() {
      this.unsubscribe = ListStore.listen(this.onListUpdate);
    },

    componentWillUnmount: function() {
      this.unsubscribe();
    },

    render: function(){
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

module.exports = ListComponent;
