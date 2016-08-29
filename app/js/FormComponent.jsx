var React = require('react');
var Reflux = require('reflux');

var ReactBootstrap = require('react-bootstrap');
var Panel = ReactBootstrap.Panel;
var Button = ReactBootstrap.Button;
var Input = ReactBootstrap.Input;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;

var ListActions = require('./ListActions');

var FormComponent = React.createClass({

    getInitialState: function() {
      return {
        value: 0
      }
    },

    onSubmit: function(){
      var newValue = this.state.value

      this.setState({
        value: 0
      });

      ListActions.addItem(newValue);
    },

    onInputChange: function(e){
      this.setState({
        value: e.target.value
      });
    },

    render: function() {
      return (
        <Panel>
          <FormGroup>
            <ControlLabel>Create new item</ControlLabel>
            <FormControl
              type="number"
              value={this.state.value}
              onChange={this.onInputChange}
              placeholder={"Enter value"}
            />
          </FormGroup>
          <Button
            bsStyle="primary"
            onClick={this.onSubmit}>
              Add item
          </Button>
        </Panel>
      )
    }
});

module.exports = FormComponent;
