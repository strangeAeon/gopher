var Reflux = require('reflux');
var Immutable = require('immutable');

var Store = Reflux.Store;

var ListStore = require('./ListStore');

var SumStore = Reflux.createStore({

  init: function() {
    this.state = {
      sum: 0
    };
    this.listenTo(ListStore, this.onListUpdate);
  },

  onListUpdate: function(newState) {
    this.state = {
      sum: newState.list.reduce((a, b) => a + b, 0)
    };
    this.trigger(this.state);
  },

  currentState: function(){
    return this.state;
  }

});

module.exports = SumStore;
