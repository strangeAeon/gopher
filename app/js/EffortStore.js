var Reflux = require('reflux');
var Immutable = require('immutable');
var _ = require('lodash');
var Firebase = require('firebase');

var _effort = 0;

var EffortStore = Reflux.createStore({

  init: function() {
    this.setupFirebase();
  },

  storeUrl: function() {
    return 'https://gopher.firebaseIO.com/effort';
  },

  setupFirebase: function() {
    var url = this.storeUrl();
    this.firebaseRef = new Firebase(url);

    this.firebaseRef.on("value", this.onValue);
  },

  onValue: function(snapshot){
    var effort = snapshot.val();
    _effort = _.isNull(effort) ? 0 : effort;
    this.trigger(_effort);
  },

  effort: function(){
    return _effort;
  }

});

module.exports = EffortStore;
