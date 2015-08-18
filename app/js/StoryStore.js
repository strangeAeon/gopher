var Reflux = require('reflux');
var Immutable = require('immutable');
var Firebase = require('firebase');

var StoryActions = require('./StoryActions');

var _stories = Immutable.List();

var StoryStore = Reflux.createStore({

  init: function() {
    this.listenToMany(StoryActions);
    this.setupFirebase();
  },

  storeUrl: function() {
    return 'https://gopher.firebaseIO.com/stories';
  },

  setupFirebase: function() {
    var url = this.storeUrl();
    this.firebaseRef = new Firebase(url);

    this.firebaseRef.on("child_added", this.onStoryAdded);
  },

  onStoryAdded: function(snapshot){
    var story = snapshot.val();
    _stories = _stories.push(story);
    this.trigger(_stories);
  },

  stories: function(){
    return _stories;
  },

  onAddStory: function(storyText, effort){
    var entry = {
      story: storyText,
      effort: effort
    };
    this.firebaseRef.push(entry);
  }
});

module.exports = StoryStore;
