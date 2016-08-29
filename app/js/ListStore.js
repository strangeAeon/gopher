var Reflux = require('reflux');
var Immutable = require('immutable');
var _ = require('lodash')

var ListActions = require('./ListActions');

var ListStore = Reflux.createStore({

  init: function() {
    this.state = {
      list: Immutable.List()
    };
    this.listenTo(ListActions.addItem, this.onAddItem);
  },

  onAddItem: function(value) {
    var numValue = parseInt(value);
    if (!_.isNaN(numValue)){
      var list = this.state.list;
      this.state = {
        list: this.state.list.push(numValue)
      };
      this.trigger(this.state);
    }
  },

  currentState: function(){
    return this.state;
  }

});

module.exports = ListStore;
