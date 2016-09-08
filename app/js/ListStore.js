import Reflux from 'reflux';
import {List} from 'immutable;'
import {_} from 'lodash';

import {ListActions} from './ListActions.js';

export const ListStore = Reflux.createStore({

  // listenables: ListActions,

  init() {
    this.list = new List();
    this.listenTo(ListActions.addItem, this.onAddItem);
  },

  onAddItem() {
    const numValue = parseInt(value);
    if (!_.isNaN(numValue)){
      this.list = this.list.push(numValue);
      this.trigger(this.list);
    }
  },

  currentList() {
    return this.list;
  }

});
