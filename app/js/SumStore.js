import Reflux from 'reflux';

import {ListStore} from './ListStore.js';

export const SumStore = Reflux.createStore({

  init() {
    this.sum = 0;
    this.listenTo(ListStore, this.onListUpdate);
  },

  onListUpdate(newList) {
    this.sum = newList.reduce((a, b) => a + b, 0);
    this.trigger(this.sum);
  }

});

