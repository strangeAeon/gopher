var Reflux = require('reflux');
var Immutable = require('immutable');

var Store = Reflux.Store;

var ListStore = require('./ListStore');

var SumStore = Reflux.createStore({

  init: function() {
    this.sum = 0;
    this.listenTo(ListStore, this.onListUpdate);
  },

  onListUpdate: function(newList) {
    this.sum = newList.reduce((a, b) => a + b, 0);
    this.trigger(this.sum);
  }

});

module.exports = SumStore;
