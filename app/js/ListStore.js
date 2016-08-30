var Reflux = require('reflux');
var Immutable = require('immutable');
var _ = require('lodash');

var ListActions = require('./ListActions');

var ListStore = Reflux.createStore({
  // listenables: ListActions,

  init: function() {
    this.list = Immutable.List();
    this.listenTo(ListActions.addItem, this.onAddItem);
  },

  onAddItem: function(value) {
    var numValue = parseInt(value);
    if (!_.isNaN(numValue)){
      this.list = this.list.push(numValue);
      this.trigger(this.list);
    }
  },

  currentList: function(){
    return this.list;
  }

});

module.exports = ListStore;
