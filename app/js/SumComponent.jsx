var React = require('react');
var Reflux = require('reflux');

var SumStore = require('./SumStore');

var SumComponent = React.createClass({

    getInitialState: function() {
      return SumStore.currentState()
    },

    onSumUpdate: function(newState) {
      this.setState(newState);
    },

    componentDidMount: function() {
      this.unsubscribe = SumStore.listen(this.onSumUpdate);
    },

    componentWillUnmount: function() {
      this.unsubscribe();
    },

    render: function() {
      return (
        <p>
          Sum: {this.state.sum}
        </p>
      )
    }

});

module.exports = SumComponent;
