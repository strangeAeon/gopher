var React = require('react');
var Reflux = require('reflux');

var SumStore = require('./SumStore');

var SumComponent = React.createClass({
    mixins: [Reflux.listenTo(SumStore, "onSumUpdate")],

    getInitialState: function() {
      return {
        sum: 0
      };
    },

    onSumUpdate: function(newSum) {
      this.setState({
        sum: newSum
      });
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
