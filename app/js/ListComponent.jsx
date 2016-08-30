var React = require('react');
var Reflux = require('reflux');

var ReactBootstrap = require('react-bootstrap');
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;

var ListStore = require('./ListStore');

var ListComponent = React.createClass({
    // mixins: [Reflux.listenTo(ListStore, "onListUpdate")],
    // mixins: [Reflux.connect(ListStore,"list")], >> this.state.list

    getInitialState: function() {
      return {
        list: ListStore.currentList()
      };
    },

    onListUpdate: function(newList) {
      this.setState({
        list: newList
      });
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
