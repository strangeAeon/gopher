import React from 'react';
import Reflux from 'reflux';
import {Panel, Button, Input, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import {ListActions} from './ListActions.js';

export const FormComponent = React.createClass({

    getInitialState() {
      return {
        value: 0
      }
    },

    onSubmit() {
      const newValue = this.state.value

      this.setState({
        value: 0
      });

      ListActions.addItem(newValue);
    },

    onInputChange(e) {
      this.setState({
        value: e.target.value
      });
    },

    render() {
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

