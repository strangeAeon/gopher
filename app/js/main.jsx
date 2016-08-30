import React from 'react';
import ReactDOM from 'react-dom';
import {PageHeader} from 'react-bootstrap';

import {ListComponent} from './ListComponent.jsx';
import {SumComponent} from './SumComponent.jsx';
import {FormComponent} from './FormComponent.jsx';

class Main extends React.Component{

  render() {
    return (
      <div>
        <PageHeader>
          React + Reflux Demo
        </PageHeader>
        <ListComponent/>
        <SumComponent/>
        <FormComponent/>
      </div>
    );
  }

}

ReactDOM.render(<Main />, document.getElementById('main'));
