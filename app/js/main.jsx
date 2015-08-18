/**
 * @jsx React.DOM
 */
var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Input = ReactBootstrap.Input;
var Panel = ReactBootstrap.Panel;
var Badge = ReactBootstrap.Badge;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;

var StoryStore = require('./StoryStore');
var EffortStore = require('./EffortStore');

var StoryActions = require('./StoryActions');

var StoryList = React.createClass({
  mixins: [Reflux.listenTo(StoryStore,"onStoryChange")],

  getInitialState: function() {
    return {
      stories: StoryStore.stories()
    }
  },

  onStoryChange: function(stories) {
    this.setState({
      stories: stories
    });
  },

  render: function() {
    var header = <h3>User stories</h3>
    return (
      <Panel header={header}>
        <ListGroup fill>
          {this.state.stories.map(function(story, index){
             return (
              <ListGroupItem key={index}>
                {story.story}
                <Badge>{story.effort}</Badge>
              </ListGroupItem>
            )
          }).toArray()}
        </ListGroup>
      </Panel>
    );
  }

});

var EffortSum = React.createClass({
  mixins: [Reflux.listenTo(EffortStore,"onEffortChange")],

  getInitialState: function() {
    return {
      effort: EffortStore.effort()
    }
  },

  onEffortChange: function(effort){
    this.setState({
      effort: effort
    });
  },

  render: function() {
    return (
        <Panel>
          {'Effort sum: '}
          <Badge className="effort-badge">{this.state.effort}</Badge>
        </Panel>
    );
  }

});

var StoryCreationForm = React.createClass({

  getInitialState: function() {
    return {
      text: '',
      effort: 0
    }
  },

  onTextChange: function(){
    this.setState({
      text: this.refs.text.getValue()
    });
  },

  onEffortChange: function(){
    var value = this.refs.effort.getValue();
    var effort = _.isEmpty(value) ? 0 : parseInt(this.refs.effort.getValue());
    if (!_.isNaN(effort)){
      this.setState({
        effort: effort
      });
    }
  },

  onSubmit: function(){
    var storyText = this.state.text;
    var effort = this.state.effort;

    this.setState({
      text: '',
      effort: 0
    });

    StoryActions.addStory(storyText, effort);
  },

  render: function() {
    return (
      <Panel>
        <Input type='text' label='User story' ref="text" placeholder='As a user I want to ...' value={this.state.text} onChange={this.onTextChange}/>
        <Input type='number' label='Effort' ref="effort" value={this.state.effort} onChange={this.onEffortChange}/>
        <Button bsStyle='primary' onClick={this.onSubmit}>Add user story</Button>
      </Panel>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <StoryList/>
        <EffortSum/>
        <StoryCreationForm />
      </div>
    );
  }
});

React.render(<Main />, document.getElementById('main'));
