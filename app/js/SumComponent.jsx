import React from 'react';
import Reflux from 'reflux';

import {SumStore} from './SumStore.js';

export const SumComponent = React.createClass({
    mixins: [Reflux.listenTo(SumStore, "onSumUpdate")],

    getInitialState() {
      return {
        sum: 0
      };
    },

    onSumUpdate(newSum) {
      this.setState({
        sum: newSum
      });
    },

    render() {
      return (
        <p>
          Sum: {this.state.sum}
        </p>
      );
    }

});

